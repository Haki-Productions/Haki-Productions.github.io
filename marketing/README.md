# MARKETING — Haki Productions growth hub

**Owner:** M0rph coordinates. Three agents operate inside it.

This folder is the shared workspace for growth. It is not one agent's territory. It is where strategy, social execution and taste meet, so that what gets posted is on-brand, on-strategy and on-taste.

## Who owns what

| Layer | Agent | Home | Question it answers |
|---|---|---|---|
| Strategy | Audience | `marketing/` (00–06) | Who are we talking to, where, and why? |
| Social execution | VOX | `vox/` | What do we post, when, and how do we engage? |
| Taste | The Eye | `eye/` (and `eye/social/`) | Is this good enough to post? |

VOX and The Eye work together. VOX drafts. The Eye judges. Neither ships without the other's sign-off, and neither ships without M0rph's approval on anything public.

## Folder map

```
marketing/
  README.md            ← this file, the hub
  00-audience-brief.md  (Audience agent)  segments, positioning, KPIs
  01-channel-plan.md    (Audience agent)  primary/secondary channels, cadence
  02-content-calendar-30d.md (Audience agent) dated posts, hooks, CTAs
  03-outreach.md        (Audience agent)  warm contacts, scripts
  04-lead-magnet.md     (Audience agent)  toolbox / press kit checklist
  05-weekly-scorecard.md (Audience agent)  Friday numbers
  06-experiments.md     (Audience agent)  one hypothesis at a time
  07-pipeline-tracker.md   (The Tiger)  pipeline stages, qualification, ledger
  08-objection-handling.md (The Tiger)   four objection responses
  09-weekly-tiger-scorecard.md (The Tiger) input metrics, The Tiger's math
vox/                    ← VOX social execution (see vox/README.md)
  channels/             instagram (active) + channel-expansion (designed, not active)
  calendar/             dated social calendars
  captions/             hooks, CTAs, caption bank
  shotlists/            carousel outlines, reel shot lists
  engagement/           daily routine, reply templates
  reports/              weekly social report template
  trends/               trend log
eye/                    ← The Eye taste layer (see eye/social/)
  social/               taste rubric for social, critique format, sign-off log
```

Strategy deliverables (00–06) are produced by the Audience agent using its own process (questions first, then assumptions labelled). They are not fabricated by other agents. VOX and The Eye read them; they do not rewrite them.

## Handoff rules

1. **Audience → VOX.** The channel plan and content pillars become VOX's brief. VOX does not invent new pillars; it executes within them.
2. **VOX → The Eye.** Every draft batch goes to The Eye for taste sign-off before anything is scheduled. The Eye uses `eye/social/critique-format.md` and logs approvals in `eye/social/signoff-log.md`.
3. **The Eye → VOX.** Taste feedback is concrete ("cut this line", "this reads as AI"), not vague. VOX revises and re-submits.
4. **VOX → M0rph.** Nothing posts, publishes or sends without M0rph's explicit approval. VOX prepares; M0rph decides.
5. **Juggernaut → all.** The gap ledger (`juggernaut/LEDGER.md`) is read-only context. Social gaps (if any) are logged there by Juggernaut, not by VOX.

## The non-negotiables (all three agents)

- AI stays invisible in client-facing creative work. Haki's promise is human-made.
- Never invent metrics, followers, case studies, testimonials or results.
- Label in-house work (Soul Terror, Dynamic Martial Arts, SLTR Radio) as in-house. FRNTHASIA and VANDALACTISM are independent friends, not Haki-owned.
- Never run ads on The Press Kit. Start at €0 ad spend.
- Organic growth only. No bots, no bought followers, no engagement pods.
- One task per session. Log everything.

## Cross-references

- Brand voice and copy bank: `docs/BRAND.md`
- Growth playbook (SEO/SEA/GEO/targeting): `docs/GROWTH-PLAYBOOK.md`
- Audience agent config: `.opencode/agents/audience.md`
- VOX agent config: `.opencode/agents/vox.md`
- The Eye skills: `eye-core`, `eye-trends`, `eye-inspiration`, `eye-critique`
- VOX agent skills to load: `social`, `content-strategy` (from marketingskills)
