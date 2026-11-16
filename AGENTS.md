# AGENTS.md

This folder is both the Haki Productions project and M0rph's repo-learning
center. Read this before changing anything.

## What belongs here

- `site/`, `brand/`, and `docs/` are the Haki business and website work.
- `superpowers/`, `caveman/`, `humanizer/`, `mattpocock-skills/`,
  `marketingskills/`, `agent-skills/`, `ponytail/`, `i-have-adhd/`,
  `cybersecurity-skills/`, `ppt-master/`, `graphify/`, `yt-dlp/`, `cal-diy/`,
  `claude-mem/`, `playwright-mcp/`, and `paperclip/` are reference clones.
- `docs/SKILLS.md` is the source of truth for what M0rph has installed and
  which source repo each skill came from.

Do not move, rename, or delete the Haki business files or the reference clones
without asking. Do not treat a reference clone as a client project.

## Non-negotiables

- AI stays invisible in client-facing creative work. Haki's promise is
  human-made.
- Never present in-house work, experiments, or reference clones as client
  work.
- Never invent proof, metrics, case studies, testimonials, or results.
- Ask before publishing, deploying, or sending anything to a client.
- Security work is authorized testing only. Require written scope and
  permission.

## Working with the site

The site is static HTML, CSS, and JavaScript. There is no build step.

```powershell
cd site
python -m http.server 8080
```

Then open `http://localhost:8080`. The deploy target is a static host with
`site` as the root.

## Working with skills

Use the skill tool before responding when a skill applies. Start with
`using-superpowers` behaviour: process skills first, then domain skills.

- New feature or campaign: `brainstorming`
- Multi-step work: `writing-plans`, then `executing-plans`
- Bug: `systematic-debugging`
- New behaviour: `test-driven-development`
- Before claiming done: `verification-before-completion`
- Codebase questions: `graphify`
- UI or visual work: `impeccable`, `web-design-guidelines`, or the matching
  `eye-*` skill
- Marketing and copy: the matching `marketingskills` skill
- Presentation: `ppt-master`
- Booking API: `calcom-api`
- Media download: `yt-dlp`

The full inventory, install decisions, and update procedure are in
`docs/SKILLS.md`.

## The council

M0rph is the head. Two agents sit under it.

| Role | Owns | Question |
|---|---|---|
| **M0rph** | Direction, client-facing voice, final call, teaching | Where are we going? |
| **The Eye** (`eye-*`) | Taste, positioning, whether the work is good | Is this any good? |
| **Juggernaut** | Operations, integrity, gaps nobody else checked | What is quietly failing? |

- **The Eye judges the work. Juggernaut judges the machine.** Do not let one
  do the other's job.
- **Juggernaut repairs, then escalates.** It fixes what it can inside
  `juggernaut/` and trivial corrections. Structural work, P0 and P1 gaps, and
  anything touching `site/` or `docs/` go to M0rph as a written proposal.
- **M0rph implements the highest priority first.** The ladder is P0 (blocks
  revenue), P1 (losing money now), P2 (costs money within 30 days), P3
  (hygiene).
- Agent configs live in `.opencode/agents/`. Gap ledger and proposals live in
  `juggernaut/`.

## Growth and operations

Two shared documents every agent reads.

- **`docs/GROWTH-PLAYBOOK.md`** — SEO, SEA, GEO (being cited by AI search) and
  targeting. M0rph owns it and teaches it. Order: SEO and GEO first, SEA last,
  because Haki has time and no ad budget. Never run ads on The Press Kit.
- **`docs/AGENT-OPS.md`** — how to work inside free-tier quotas and a 4 GB
  laptop GPU. Search before reading, read narrow ranges, batch independent
  calls, one task per session, delegate read-heavy work to a subagent, stop
  after two failed attempts.

These are not optional reading. A session that ignores them runs out of quota
mid-task.

## Quality gates

Before saying work is complete:

1. Run the relevant command and read its output.
2. Check the actual page or file, not only the diff.
3. Confirm no client-facing claim lacks evidence.
4. Report what was skipped, what was not tested, and any remaining risk.

If a command needs a runtime that is not installed, say so instead of
pretending it ran.
