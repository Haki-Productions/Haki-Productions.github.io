# HAKI PRODUCTIONS — Project Folder

**Mission:** build Haki Productions into a €4,000/month creative services business, then scale. €1,000/month is the emergency floor.
**First focus:** the agency website — a client-facing proof engine that sells the core services.
**Operator:** M0rpheus (house AI), working with the Haki crew.

---

## Structure

```
haki/
├── README.md               ← you are here
├── AGENTS.md               ← rules for AI agents working in this folder
├── docs/
│   ├── PLAN.md             ← strategy, revenue math, 30-day launch plan
│   ├── PRICING.md          ← price architecture, market evidence, margin model
│   ├── RESEARCH.md         ← public research on labels, domains, assets
│   ├── BRAND.md            ← colors, type, tone, logo usage
│   ├── DECISIONS.md        ← open questions + confirmed decisions
│   ├── ASSETS.md           ← where every source asset lives
│   ├── SKILLS.md           ← installed skill inventory and routing
│   └── DECK-TEXT.txt       ← full text extracted from the pitch deck
├── brand/
│   ├── deck/               ← source pitch deck PDF
│   └── logos/              ← master logo files
└── site/                   ← deploy this folder as the static root
    ├── index.html          ← home
    ├── work.html           ← five case studies + filters
    ├── services.html       ← five offers + pricing + FAQ
    ├── magazine.html       ← GATEKEEPERS MAG Issue 01
    ├── about.html          ← story, values, ownership boundaries
    ├── toolbox.html        ← 16-resource filterable library
    ├── contact.html        ← brief form (mailto handoff) + details
    ├── links.html          ← Instagram link hub
    ├── DESIGN.md           ← design system, tokens, component rules
    ├── .impeccable/        ← machine-readable design sidecar
    └── assets/
        ├── css/styles.css
        ├── js/main.js
        ├── fonts/          ← self-hosted WOFF2 + OFL license
        └── img/            ← optimized site imagery
```

The reference clones listed below are also in this folder. They are learning
material, not part of the static site build.

## Pages and offers

- **Home** — hero, selected work, services accordion, magazine band, process, friends, CTA.
- **Work** — Soul Terror, Dynamic Fight Gear (in development), Selected Commissions, GATEKEEPERS MAG, SLTR Radio.
- **Services** — The Engine €1,950/mo, The Launch from €2,500, The Identity from €2,400, The Press Kit €750, The Recap from €1,800. Minimum project €750. Retainers from €1,950/mo. 50% deposit. Evidence and rules in `PRICING.md`.
- **Magazine** — GATEKEEPERS MAG Issue 01, the Soul Terror 2024 lookbook. A Haki-owned publishing front.
- **About** — story, four rules, and an explicit split between Haki-owned, client, and external work.
- **Toolbox** — 16 tools and templates across four categories, filterable and searchable.
- **Contact** — brief form that opens the visitor's mail client with a structured message.
- **Links** — standalone link hub for the Instagram bio.

Availability reads **Booking Q1 2027** across the site.

## Repo center and M0rph skills

This folder also holds the source repos M0rph learns from.

| Source | Local folder | What M0rph uses |
| --- | --- | --- |
| `obra/superpowers` | `superpowers/` | 15 process skills, installed as the global Superpowers plugin |
| `JuliusBrussee/caveman` | `caveman/` | `caveman` |
| `blader/humanizer` | `humanizer/` | `humanizer` |
| `DietrichGebert/ponytail` | `ponytail/` | `ponytail`, `ponytail-review`, `ponytail-audit` |
| `ayghri/i-have-adhd` | `i-have-adhd/` | `i-have-adhd` (manual mode) |
| `mattpocock/skills` | `mattpocock-skills/` | `codebase-design`, `domain-modeling`, `writing-for-agents`, `handoff`, `wait-what` |
| `coreyhaines31/marketingskills` | `marketingskills/` | 17 marketing skills |
| `vercel-labs/agent-skills` | `agent-skills/` | `web-design-guidelines`, `writing-guidelines` |
| `mukul975/Anthropic-Cybersecurity-Skills` | `cybersecurity-skills/` | 10 curated security skills |
| `hugohe3/ppt-master` | `ppt-master/` | `ppt-master` and its Python runtime |
| `Graphify-Labs/graphify` | `graphify/` | `graphify` and the `graphify` CLI |
| `yt-dlp/yt-dlp` | `yt-dlp/` | `yt-dlp` wrapper skill and CLI |
| `calcom/cal.diy` | `cal-diy/` | `vercel-react-best-practices`, `calcom-api` |
| `microsoft/playwright-mcp` | `playwright-mcp/` | reference only |
| `thedotmack/claude-mem` | `claude-mem/` | reference only |
| `paperclipai/paperclip` | `paperclip/` | reference only |

The active skill library is
`C:\Users\dngin\Documents\Default Project\.opencode\skills` (66 skills).
Superpowers adds 15 more through its plugin. See
[`docs/SKILLS.md`](docs/SKILLS.md) for the full inventory, routing table,
runtime prerequisites, and the reasons some tools were skipped.

## Run the site locally

The site is static HTML/CSS/JS — no build step.

- Open `site/index.html` directly in a browser, **or**
- From the `site` folder, run a local server:

```powershell
# If Python is installed:
python -m http.server 8080

# Then open http://localhost:8080
```

## Deploy (when ready)

1. Register `hakiproductions.com` (also consider `hakiproductions.nl`).
2. Push this folder to GitHub.
3. Connect the repo to Vercel or Cloudflare Pages.
4. Set the build output / root directory to `site`.
5. Point DNS to the host.
6. Replace `hello@hakiproductions.com` and the Instagram links with the final accounts.

## Current status

- [x] Project folder created
- [x] Pitch deck archived + text extracted
- [x] Brand assets copied and optimized
- [x] Strategy + research documented
- [x] Static site v2 built: eight pages plus link hub
- [x] Design system documented in `site/DESIGN.md`
- [x] Repo center + M0rph skill library installed and documented
- [x] Responsive + accessibility QA at 1440px and 390px
- [x] Image pass: WebP/JPEG, 1600px cap, 14 MB → 6 MB on referenced assets
- [ ] Domain registered / DNS moved
- [ ] Client approvals, final contact details, KvK/VAT
- [ ] Deployed and indexed

> **Rule:** AI stays invisible in client-facing creative work. Haki's promise is human-made. M0rpheus works behind the curtain.
