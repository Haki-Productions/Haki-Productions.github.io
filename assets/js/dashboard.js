/* ============================================================
   THE TIGER DASHBOARD — data + behaviour
   No dependencies. Data lives in localStorage. CSV in/out.
   Source of truth for the written frameworks remains
   marketing/07–09; this is the working surface.
   ============================================================ */

(() => {
  "use strict";

  const KEY = "tiger.crm.v1";

  const STAGES = [
    "New",
    "Qualified",
    "Contacted",
    "Call booked",
    "Proposal sent",
    "Negotiating",
    "Closed (won)",
    "Closed (lost)",
  ];

  const AXES = ["Budget", "Timeline", "Authority", "Need"];

  const SOURCES = [
    "Instagram DM",
    "LinkedIn inbound",
    "Referral",
    "Cold email",
    "Toolbox request",
    "Press kit request",
    "Event inquiry",
    "Website form",
  ];

  const TARGETS = {
    conversations: 5,
    replies: 2,
    calls: 1,
    proposals: 1,
    deposits: 0.5,
  };

  const empty = () => ({
    leads: [],
    prevention: [],
    view: "board",
    scorecard: { week: "", conversations: 0, replies: 0, calls: 0, proposals: 0, deposits: 0 },
  });

  let state = empty();
  let editingId = null;
  let canStore = true;

  /* ---------- storage ---------- */

  function load() {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        state = {
          leads: Array.isArray(parsed.leads) ? parsed.leads : [],
          prevention: Array.isArray(parsed.prevention) ? parsed.prevention : [],
          view: parsed.view === "table" ? "table" : "board",
          scorecard: Object.assign(empty().scorecard, parsed.scorecard || {}),
        };
      }
    } catch (error) {
      canStore = false;
    }
  }

  function save(message) {
    if (canStore) {
      try {
        window.localStorage.setItem(KEY, JSON.stringify(state));
      } catch (error) {
        canStore = false;
      }
    }
    if (message) setStatus(message, canStore ? "ok" : "error");
    if (!canStore) {
      setStatus("Storage unavailable — data stays in this tab only. Export a CSV.", "error");
    }
    render();
  }

  function setStatus(text, tone) {
    const el = document.getElementById("dashStatus");
    if (!el) return;
    el.textContent = text;
    el.setAttribute("data-tone", tone || "");
  }

  /* ---------- helpers ---------- */

  const $ = (selector) => document.querySelector(selector);

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[char]);
  }

  function uid() {
    return "id-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7);
  }

  function num(value) {
    const n = Number(value);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  }

  function pct(part, whole) {
    return whole > 0 ? Math.round((part / whole) * 100) : 0;
  }

  function todayISO() {
    const d = new Date();
    return [d.getFullYear(), String(d.getMonth() + 1).padStart(2, "0"), String(d.getDate()).padStart(2, "0")].join("-");
  }

  function isOverdue(lead) {
    if (!lead.nextDate || lead.stage.startsWith("Closed")) return false;
    return lead.nextDate < todayISO();
  }

  /* ---------- metrics ---------- */

  function metrics() {
    const counts = {};
    STAGES.forEach((stage) => { counts[stage] = 0; });
    state.leads.forEach((lead) => {
      if (counts[lead.stage] !== undefined) counts[lead.stage] += 1;
    });

    const active = state.leads.filter((lead) => !lead.stage.startsWith("Closed")).length;
    const qualified = state.leads.filter((lead) => lead.stage !== "New" && !lead.stage.startsWith("Closed")).length;
    const overdue = state.leads.filter(isOverdue).length;
    const s = state.scorecard;

    return {
      counts,
      active,
      qualified,
      overdue,
      funnelMax: Math.max(1, ...STAGES.map((stage) => counts[stage])),
      rates: [
        { label: "Conversations → replies", sub: `${s.replies} / ${s.conversations}`, value: pct(s.replies, s.conversations), target: 40 },
        { label: "Replies → calls booked", sub: `${s.calls} / ${s.replies}`, value: pct(s.calls, s.replies), target: 50 },
        { label: "Calls → proposals sent", sub: `${s.proposals} / ${s.calls}`, value: pct(s.proposals, s.calls), target: 100 },
        { label: "Proposals → deposits", sub: `${s.deposits} / ${s.proposals}`, value: pct(s.deposits, s.proposals), target: 20 },
      ],
    };
  }

  /* ---------- render: KPIs, funnel, ladder ---------- */

  function renderMetrics() {
    const m = metrics();

    $("#kpiActive").textContent = m.active;
    $("#kpiQualified").textContent = m.qualified;
    $("#kpiProposals").textContent = m.counts["Proposal sent"] + m.counts.Negotiating;
    $("#kpiOverdue").textContent = m.overdue;
    $("#kpiOverdueNote").textContent = m.overdue
      ? "Leads with a past-due next action. Touch them today."
      : "Every active lead has a next action in date.";
    $("#kpiOverdue").closest(".kpi").classList.toggle("is-alert", m.overdue > 0);

    $("#funnel").innerHTML = STAGES.map((stage) => {
      const count = m.counts[stage];
      const width = Math.round((count / m.funnelMax) * 100);
      return `<li class="funnel-row">
        <span class="funnel-name">${esc(stage)}</span>
        <span class="funnel-track"><span class="funnel-fill" style="width:${width}%"></span></span>
        <span class="funnel-count">${count}</span>
      </li>`;
    }).join("");

    $("#ladder").innerHTML = m.rates.map((rate) => {
      const under = rate.value < rate.target;
      return `<li>
        <span class="ladder-label">${esc(rate.label)}<small>${esc(rate.sub)}</small></span>
        <span class="ladder-rate ${under ? "under" : ""}">${rate.value}%<small>target ${rate.target}%</small></span>
      </li>`;
    }).join("");
  }

  /* ---------- render: leads ---------- */

  function renderLeads() {
    const tbody = $("#leadsBody");
    const emptyState = $("#leadsEmpty");

    if (!state.leads.length) {
      tbody.innerHTML = "";
      emptyState.hidden = false;
      return;
    }
    emptyState.hidden = true;

    tbody.innerHTML = state.leads.map((lead) => {
      const overdue = isOverdue(lead);
      return `<tr>
        <td>
          <span class="lead-name">${esc(lead.name || "Unnamed lead")}</span>
          <span class="lead-sub">${esc(lead.source || "Unsourced")} · ${esc(lead.createdAt || "—")}</span>
        </td>
        <td><span class="stage-pill" data-stage="${esc(lead.stage)}">${esc(lead.stage)}</span></td>
        <td>${esc(lead.budget || "—")}</td>
        <td>${esc(lead.deadline || "—")}</td>
        <td>${esc(lead.nextAction || "—")}${overdue ? `<span class="flag">overdue</span>` : ""}</td>
        <td>${esc(lead.nextDate || "—")}</td>
        <td>
          <div class="row-actions">
            <button type="button" class="link-btn" data-edit="${esc(lead.id)}">Edit</button>
            <button type="button" class="link-btn" data-del="${esc(lead.id)}">Delete</button>
          </div>
        </td>
      </tr>`;
    }).join("");
  }

  /* ---------- render: kanban board ---------- */

  function renderKanban() {
    const board = $("#kanban");
    if (!board) return;

    board.innerHTML = STAGES.map((stage) => {
      const leads = state.leads.filter((lead) => (lead.stage || "New") === stage);
      const cards = leads.map((lead) => {
        const overdue = isOverdue(lead);
        const stageIndex = STAGES.indexOf(stage);
        const prev = stageIndex > 0 ? stageIndex - 1 : null;
        const next = stageIndex < STAGES.length - 1 ? stageIndex + 1 : null;
        const axisTags = [lead.budget, lead.deadline, lead.authority, lead.need]
          .filter(Boolean)
          .map((value) => `<span class="kcard-axis">${esc(value)}</span>`)
          .join("");

        return `<article class="kcard" draggable="true" tabindex="0"
          data-id="${esc(lead.id)}" data-stage="${esc(stage)}"
          aria-label="Lead ${esc(lead.name)}, ${esc(stage)}">
          <h4 class="kcard-name">${esc(lead.name || "Unnamed lead")}</h4>
          <p class="kcard-meta">${esc(lead.source || "Unsourced")} · ${esc(lead.createdAt || "—")}</p>
          ${axisTags ? `<div class="kcard-axes">${axisTags}</div>` : ""}
          <p class="kcard-next">${esc(lead.nextAction || "No next action")}
            <span class="kcard-date">${esc(lead.nextDate || "no date")}${overdue ? ` <span class="flag">overdue</span>` : ""}</span>
          </p>
          <div class="kcard-actions">
            <span class="kcard-move">
              ${prev !== null ? `<button type="button" class="link-btn" data-move="${prev}" aria-label="Move ${esc(lead.name)} to ${esc(STAGES[prev])}">Prev</button>` : ""}
              ${next !== null ? `<button type="button" class="link-btn" data-move="${next}" aria-label="Move ${esc(lead.name)} to ${esc(STAGES[next])}">Next</button>` : ""}
            </span>
            <span class="kcard-tools">
              <button type="button" class="link-btn" data-edit="${esc(lead.id)}">Edit</button>
              <button type="button" class="link-btn" data-del="${esc(lead.id)}">Delete</button>
            </span>
          </div>
        </article>`;
      }).join("");

      return `<section class="kanban-col" data-stage="${esc(stage)}" aria-label="${esc(stage)}, ${leads.length} lead${leads.length === 1 ? "" : "s"}">
        <header class="kanban-col-head">
          <h3>${esc(stage)}</h3>
          <span class="kanban-count">${leads.length}</span>
        </header>
        <div class="kanban-cards">
          ${cards || `<p class="kanban-empty">Drop a lead here</p>`}
        </div>
        <button type="button" class="kanban-add" data-add-stage="${esc(stage)}">Add lead</button>
      </section>`;
    }).join("");
  }

  function applyView() {
    const board = $("#kanban");
    const table = $("#tableView");
    if (!board || !table) return;
    board.hidden = state.view !== "board";
    table.hidden = state.view !== "table";
    $("#viewBoard").setAttribute("aria-pressed", String(state.view === "board"));
    $("#viewTable").setAttribute("aria-pressed", String(state.view === "table"));
  }

  function moveLead(id, stage) {
    const lead = state.leads.find((item) => item.id === id);
    if (!lead || !STAGES.includes(stage) || lead.stage === stage) return;
    lead.stage = stage;
    lead.updatedAt = todayISO();
    save(`Moved "${lead.name}" to ${stage}.`);
  }

  /* ---------- render: prevention ---------- */

  function renderPrevention() {
    const list = $("#preventionList");
    const emptyState = $("#preventionEmpty");

    if (!state.prevention.length) {
      list.innerHTML = "";
      emptyState.hidden = false;
      return;
    }
    emptyState.hidden = true;

    list.innerHTML = state.prevention
      .slice()
      .sort((a, b) => String(b.date).localeCompare(String(a.date)))
      .map((item) => `<li>
        <span class="mini-what">${esc(item.what)}</span>
        <span class="mini-meta">${esc(item.date)} · ${esc(item.axis)} axis · ${esc(item.avoided || "failure class removed")}</span>
      </li>`)
      .join("");
  }

  /* ---------- render: scorecard form ---------- */

  function renderScorecard() {
    ["week", "conversations", "replies", "calls", "proposals", "deposits"].forEach((field) => {
      const el = document.querySelector(`[data-score="${field}"]`);
      if (el) el.value = state.scorecard[field] == null ? "" : state.scorecard[field];
    });
  }

  function render() {
    renderMetrics();
    renderLeads();
    renderKanban();
    applyView();
    renderPrevention();
    renderScorecard();
  }

  /* ---------- lead editor ---------- */

  function openEditor(lead, presetStage) {
    editingId = lead ? lead.id : null;
    const form = $("#leadForm");
    form.reset();

    const values = lead || { stage: presetStage && STAGES.includes(presetStage) ? presetStage : "New", source: "Website form", budget: "", deadline: "", authority: "", need: "", prevention: "", nextAction: "", nextDate: "" };
    document.getElementById("f_name").value = lead ? lead.name : "";
    document.getElementById("f_source").value = values.source;
    document.getElementById("f_stage").value = values.stage;
    document.getElementById("f_budget").value = values.budget;
    document.getElementById("f_deadline").value = values.deadline;
    document.getElementById("f_authority").value = values.authority;
    document.getElementById("f_need").value = values.need;
    document.getElementById("f_prevention").value = values.prevention;
    document.getElementById("f_nextAction").value = values.nextAction;
    document.getElementById("f_nextDate").value = values.nextDate;

    $("#editorTitle").textContent = lead ? "Edit lead" : "New lead";
    $("#leadSubmit").textContent = lead ? "Save changes" : "Add lead";
    $("#editor").classList.add("open");
    $("#f_name").focus();
  }

  function closeEditor() {
    editingId = null;
    $("#editor").classList.remove("open");
  }

  function handleLeadSubmit(event) {
    event.preventDefault();
    const val = (id) => document.getElementById(id).value.trim();
    const name = val("f_name");
    if (!name) {
      setStatus("A lead needs a name.", "error");
      document.getElementById("f_name").focus();
      return;
    }

    const record = {
      id: editingId || uid(),
      name,
      source: val("f_source"),
      stage: val("f_stage"),
      budget: val("f_budget"),
      deadline: val("f_deadline"),
      authority: val("f_authority"),
      need: val("f_need"),
      prevention: val("f_prevention"),
      nextAction: val("f_nextAction"),
      nextDate: val("f_nextDate"),
      createdAt: editingId
        ? (state.leads.find((l) => l.id === editingId) || {}).createdAt || todayISO()
        : todayISO(),
      updatedAt: todayISO(),
    };

    if (editingId) {
      const index = state.leads.findIndex((l) => l.id === editingId);
      if (index !== -1) state.leads[index] = record;
    } else {
      state.leads.unshift(record);
    }

    closeEditor();
    save(editingId ? "Lead updated." : "Lead added to the pipeline.");
  }

  /* ---------- CSV ---------- */

  function csvCell(value) {
    const text = String(value == null ? "" : value);
    return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  }

  function exportCSV() {
    const header = ["id", "name", "source", "stage", "budget", "timeline", "authority", "need", "prevention", "nextAction", "nextDate", "createdAt"];
    const keys = ["id", "name", "source", "stage", "budget", "deadline", "authority", "need", "prevention", "nextAction", "nextDate", "createdAt"];
    const lines = [header.map(csvCell).join(",")];
    state.leads.forEach((lead) => lines.push(keys.map((key) => csvCell(lead[key])).join(",")));

    const blob = new Blob(["\ufeff" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `tiger-leads-${todayISO()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    setStatus(`Exported ${state.leads.length} lead(s).`, "ok");
  }

  function parseCSV(text) {
    const rows = [];
    let row = [];
    let cell = "";
    let quoted = false;

    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];
      if (quoted) {
        if (char === '"' && text[i + 1] === '"') { cell += '"'; i += 1; }
        else if (char === '"') { quoted = false; }
        else { cell += char; }
      } else if (char === '"') {
        quoted = true;
      } else if (char === ",") {
        row.push(cell); cell = "";
      } else if (char === "\n") {
        row.push(cell.replace(/\r$/, "")); rows.push(row); row = []; cell = "";
      } else {
        cell += char;
      }
    }
    if (cell.length || row.length) { row.push(cell.replace(/\r$/, "")); rows.push(row); }
    return rows;
  }

  function importCSV(file) {
    const reader = new FileReader();
    reader.onload = () => {
      const rows = parseCSV(String(reader.result).replace(/^\ufeff/, ""));
      if (rows.length < 2) { setStatus("No lead rows found in that file.", "error"); return; }

      const header = rows[0].map((h) => h.trim().toLowerCase());
      const map = {
        name: header.indexOf("name"), source: header.indexOf("source"), stage: header.indexOf("stage"),
        budget: header.indexOf("budget"), deadline: header.indexOf("timeline") >= 0 ? header.indexOf("timeline") : header.indexOf("deadline"),
        authority: header.indexOf("authority"), need: header.indexOf("need"),
        prevention: header.indexOf("prevention"), nextAction: header.indexOf("nextaction"),
        nextDate: header.indexOf("nextdate"), createdAt: header.indexOf("createdat"),
      };
      if (map.name === -1) { setStatus("CSV needs a 'name' column.", "error"); return; }

      const get = (row, index) => (index >= 0 && row[index] != null ? String(row[index]).trim() : "");
      const incoming = rows.slice(1).filter((row) => get(row, map.name)).map((row) => ({
        id: get(row, header.indexOf("id")) || uid(),
        name: get(row, map.name),
        source: get(row, map.source) || "Website form",
        stage: STAGES.includes(get(row, map.stage)) ? get(row, map.stage) : "New",
        budget: get(row, map.budget),
        deadline: get(row, map.deadline),
        authority: get(row, map.authority),
        need: get(row, map.need),
        prevention: get(row, map.prevention),
        nextAction: get(row, map.nextAction),
        nextDate: get(row, map.nextDate),
        createdAt: get(row, map.createdAt) || todayISO(),
        updatedAt: todayISO(),
      }));

      state.leads = incoming;
      save(`Imported ${incoming.length} lead(s). Existing leads replaced.`);
    };
    reader.onerror = () => setStatus("Could not read that file.", "error");
    reader.readAsText(file);
  }

  /* ---------- bind events ---------- */

  function bind() {
    $("#addLead").addEventListener("click", () => openEditor(null));
    $("#cancelEdit").addEventListener("click", closeEditor);
    $("#leadForm").addEventListener("submit", handleLeadSubmit);

    $("#leadsBody").addEventListener("click", (event) => {
      const edit = event.target.closest("[data-edit]");
      const del = event.target.closest("[data-del]");
      if (edit) {
        const lead = state.leads.find((l) => l.id === edit.getAttribute("data-edit"));
        if (lead) openEditor(lead);
      }
      if (del) {
        const lead = state.leads.find((l) => l.id === del.getAttribute("data-del"));
        if (lead && window.confirm(`Delete "${lead.name}"? This cannot be undone.`)) {
          state.leads = state.leads.filter((l) => l.id !== lead.id);
          save("Lead deleted.");
        }
      }
    });

    $("#emptyAdd").addEventListener("click", () => openEditor(null));

    $("#viewBoard").addEventListener("click", () => { state.view = "board"; save(); });
    $("#viewTable").addEventListener("click", () => { state.view = "table"; save(); });

    $("#kanban").addEventListener("click", (event) => {
      const add = event.target.closest("[data-add-stage]");
      const move = event.target.closest("[data-move]");
      const edit = event.target.closest("[data-edit]");
      const del = event.target.closest("[data-del]");

      if (add) { openEditor(null, add.getAttribute("data-add-stage")); return; }
      if (move) {
        const card = move.closest(".kcard");
        moveLead(card.getAttribute("data-id"), STAGES[Number(move.getAttribute("data-move"))]);
        return;
      }
      if (edit) {
        const lead = state.leads.find((l) => l.id === edit.getAttribute("data-edit"));
        if (lead) openEditor(lead);
        return;
      }
      if (del) {
        const lead = state.leads.find((l) => l.id === del.getAttribute("data-del"));
        if (lead && window.confirm(`Delete "${lead.name}"? This cannot be undone.`)) {
          state.leads = state.leads.filter((l) => l.id !== lead.id);
          save("Lead deleted.");
        }
      }
    });

    $("#kanban").addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      const card = event.target.closest(".kcard");
      if (!card || event.target !== card) return;
      const lead = state.leads.find((l) => l.id === card.getAttribute("data-id"));
      if (lead) openEditor(lead);
    });

    let draggingId = null;

    $("#kanban").addEventListener("dragstart", (event) => {
      const card = event.target.closest(".kcard");
      if (!card) return;
      draggingId = card.getAttribute("data-id");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", draggingId);
      card.classList.add("dragging");
    });

    $("#kanban").addEventListener("dragend", () => {
      draggingId = null;
      document.querySelectorAll(".kcard.dragging").forEach((card) => card.classList.remove("dragging"));
      document.querySelectorAll(".kanban-col.drop-target").forEach((col) => col.classList.remove("drop-target"));
    });

    $("#kanban").addEventListener("dragover", (event) => {
      const col = event.target.closest(".kanban-col");
      if (!col) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      document.querySelectorAll(".kanban-col.drop-target").forEach((other) => {
        if (other !== col) other.classList.remove("drop-target");
      });
      col.classList.add("drop-target");
    });

    $("#kanban").addEventListener("dragleave", (event) => {
      const col = event.target.closest(".kanban-col");
      if (col && !col.contains(event.relatedTarget)) col.classList.remove("drop-target");
    });

    $("#kanban").addEventListener("drop", (event) => {
      const col = event.target.closest(".kanban-col");
      if (!col) return;
      event.preventDefault();
      col.classList.remove("drop-target");
      const id = draggingId || event.dataTransfer.getData("text/plain");
      if (id) moveLead(id, col.getAttribute("data-stage"));
      draggingId = null;
    });

    $("#scoreForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const val = (field) => document.querySelector(`[data-score="${field}"]`).value.trim();
      state.scorecard = {
        week: val("week"),
        conversations: num(val("conversations")),
        replies: num(val("replies")),
        calls: num(val("calls")),
        proposals: num(val("proposals")),
        deposits: num(val("deposits")),
      };
      save("Scorecard saved.");
    });

    $("#preventionForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const what = $("#p_what").value.trim();
      if (!what) { setStatus("Describe what was prevented.", "error"); return; }
      state.prevention.unshift({
        id: uid(),
        date: $("#p_date").value || todayISO(),
        what,
        axis: $("#p_axis").value,
        avoided: $("#p_avoided").value.trim(),
      });
      event.target.reset();
      document.getElementById("p_date").value = todayISO();
      save("Prevention logged — one failure class removed.");
    });

    $("#exportCsv").addEventListener("click", exportCSV);
    $("#importCsv").addEventListener("change", (event) => {
      const file = event.target.files && event.target.files[0];
      if (file) importCSV(file);
      event.target.value = "";
    });

    $("#resetData").addEventListener("click", () => {
      if (!window.confirm("Erase all dashboard data on this device? Export a CSV first if you want a copy.")) return;
      state = empty();
      try { window.localStorage.removeItem(KEY); } catch (error) { /* already unavailable */ }
      save("Dashboard reset.");
    });
  }

  /* ---------- init ---------- */

  function init() {
    load();
    bind();
    document.getElementById("p_date").value = todayISO();
    document.getElementById("s_week").value = state.scorecard.week || "";
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
