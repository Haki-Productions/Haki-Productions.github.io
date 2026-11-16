# AGENT OPS — running on limited resources

_Last updated: 16 November 2026_

**The constraint:** free-tier models, one laptop with 4 GB of VRAM, one human, no budget. Every token and every minute is spent from a small account.

This document is how all agents work inside that. It is not advice, it is the operating standard.

---

## 1. Context is the budget

Every turn resends the entire conversation. A 60-turn session with file reads is not 60 messages, it is 60 times the whole history. This is the single largest cost and the single largest cause of hitting limits.

**Rules:**

- **Search before reading.** Use `grep` to find the line, then read a narrow range. Never read a 500-line file to answer a question about one line.
- **Read ranges, not files.** `offset` and `limit` exist. Use them.
- **Never dump a folder** unless the task is literally "map this folder".
- **Never re-read a file you already read** in the same session. It is in context.
- **Cap tool output.** If a command returns 200 lines, filter it before it enters context.
- **One targeted check per question.** Do not batch every possible guess.

**Test:** if a tool call does not change the answer, it was waste.

---

## 2. Session hygiene

- **One task per session.** A session is a work order, not a workspace.
- **Start fresh when the topic changes.** Carrying a site audit into a pricing question costs you the pricing question.
- **Do not resume a long session for a small job.** The context tax is paid on every turn.
- **If a session passes ~40 turns, summarise and restart** for the next task.

This is the cheapest optimisation available and it costs nothing.

---

## 3. Model routing

Match the model to the job. Do not use a heavy model for a light task.

| Job | Tier | Why |
|---|---|---|
| Pricing, architecture, audits, strategy | Strongest available | Wrong answers here are expensive |
| Routine edits, renames, formatting | Fastest available | The task is mechanical |
| File scans, greps, inventories | Fastest available, or a subagent | Read-heavy, low reasoning |
| Copy and creative | Strong model, then a human pass | Taste does not survive a weak model |

**Local models:** `qwen3.8:27b` on this machine spills to CPU because the GPU has 4 GB. That is 2–6 tokens per second. Do not put a 27B local model in an agent loop. Use 7B–8B locally, or use it only for one-shot questions.

**Reasoning variants:** if a model offers `low`, `high` and `max`, use `low` for routine work. `max` on "rename this variable" burns the quota you need for the actual problem.

---

## 4. Delegation

Subagents start with fresh context. That is their whole value.

- **Delegate read-heavy work.** "Scan this folder and report what is broken" belongs in a subagent. The main session gets a short summary instead of 50 KB of file contents.
- **Do not delegate** what you can answer in one grep. Spawning an agent to find a string is slower than finding it.
- **Give the subagent everything it needs.** It cannot see this conversation. Paths, constraints, expected output format, all of it.
- **One subagent per independent job.** Run independent ones in parallel.

---

## 5. Tool budget

- Set a ceiling before starting. A small task is 3–8 tool calls. If you pass 12 on something small, stop and reconsider the approach.
- **Batch independent calls.** Three greps that do not depend on each other go in one block, not three turns.
- **Verify once, at the end.** Not after every step.
- **No retry loops.** Two failures means the approach is wrong. Stop and report.

---

## 6. Output discipline

- **Answer first.** The finding, then the evidence.
- **No restating the request.** The user knows what they asked.
- **No preamble.** "Great question" costs tokens and adds nothing.
- **Tables for lists, prose for reasoning.** Do not write a paragraph where a table works.
- **No summary of what you are about to do.** Do it, then say what you did.
- **Cut the closing paragraph** unless it contains a decision or a next action.

---

## 7. Verification standard

Cheap to do, expensive to skip.

- **Run the check.** Read the output. Then speak.
- **Paste the evidence** for any claim that something is fixed.
- **Say what you could not verify.** "I could not confirm X because Y" is a complete answer. Pretending is not.
- **Never claim a file was written** without the write result. Never claim a command ran without its output.

---

## 8. Escalation

Stop and ask when:

- Two attempts at the same fix have failed.
- The decision belongs to a human: money, publishing, client contact, legal, security scope.
- The task needs information that is not in the workspace and cannot be fetched.
- The instruction conflicts with `AGENTS.md`.

Report what you tried, what happened, and the one question that unblocks it. Do not guess and proceed.

---

## 9. The pre-response checklist

Five questions, five seconds:

1. Did I search before reading?
2. Did I read the narrowest possible range?
3. Is every claim backed by output I actually saw?
4. Did I batch the independent calls?
5. Is this the shortest answer that fully answers it?

If any answer is no, fix it before sending.

---

## 10. Why this matters

The goal is not to be fast. It is to get further before the quota runs out.

A session that does one task well beats three sessions that each do a third of a task badly. Discipline here is the difference between an agent that ships and an agent that runs out of tokens mid-thought.
