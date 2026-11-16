# JUGGERNAUT

The operational fixer. Shield to The Eye's sword.

**Role in the council**

| Role | Owns | Question |
|---|---|---|
| M0rph | Direction, client-facing voice | Where are we going? |
| The Eye | Taste, positioning | Is this any good? |
| Juggernaut | Operations, integrity, gaps | What is quietly failing? |

**Config:** `.opencode/agents/juggernaut.md`
**Invocable:** select Juggernaut in OpenCode, or dispatch it as an agent.

## Files

- `LEDGER.md` — every gap, with priority, class, evidence and status. The audit of 16 Nov 2026 lives here.
- `proposals/` — ranked, waiting on M0rph.
- `reports/` — longer written audits, only when a full report is asked for.

## The six gap classes

`Broken` · `Stale` · `Leaking` · `Unverified` · `Unopened` · `Fragile`

## Current state — audit 16 Nov 2026

| | Count |
|---|---|
| P0 — blocks revenue | 3 |
| P1 — losing money or trust now | 5 |
| P2 — costs within 30 days | 3 |
| P3 — hygiene | 2 |
| Blocked on a human decision | 2 |
| Closed | 1 |
| False findings | 1 |

**The headline:** the site is well built and cannot receive a single enquiry. `hakiproductions.com` has no DNS record, so the canonical, the `og:image` and the only form all point at a domain that does not exist.

## Open proposals

| ID | Priority | Title |
|---|---|---|
| JUG-P001 | P0 | The site has no working contact path and no domain |
| JUG-P002 | P1 | The site sends agency traffic to the streetwear label |

## Checked and clean

All local links and assets resolve. One `<h1>` per page. Alt text on all 66 images. Canonicals on all 8 pages. `lang` set. No broken anchors.

## The rule

Relentless in finding, creative in fixing, never dishonest about the result. An honest "still broken" beats a confident lie.
