# Skill Library

M0rph's active personal skill library lives at:

```text
C:\Users\dngin\Documents\Default Project\.opencode\skills
```

OpenCode discovers skills from that parent directory for every project below
`Default Project`, including `haki`. Superpowers is installed separately as a
global plugin, so its skills are not duplicated in this folder.

Last verified: 2026-11-13. Library: 66 skill directories, all with `SKILL.md`.
Superpowers plugin: `22f0b46`.

## What is active

### Superpowers (global plugin, 15 skills)

Installed from `obra/superpowers` with OpenCode's plugin manager:

```powershell
opencode plugin add "superpowers@git+https://github.com/obra/superpowers.git"
```

Active skills: `brainstorming`, `diagnosing-superpowers`,
`dispatching-parallel-agents`, `executing-plans`,
`finishing-a-development-branch`, `receiving-code-review`,
`requesting-code-review`, `subagent-driven-development`,
`systematic-debugging`, `test-driven-development`, `using-git-worktrees`,
`using-superpowers`, `verification-before-completion`, `writing-plans`,
`writing-skills`.

The plugin injects the Superpowers bootstrap at session start. That is what
makes `brainstorming` fire before creative work instead of leaving the skills
as unused files.

### Copied skill directories (66)

| Source repo | Installed skills |
| --- | --- |
| `JuliusBrussee/caveman` | `caveman` |
| `blader/humanizer` | `humanizer` |
| `DietrichGebert/ponytail` | `ponytail`, `ponytail-review`, `ponytail-audit` |
| `ayghri/i-have-adhd` | `i-have-adhd` (hidden from auto-selection by its own `disable-model-invocation`) |
| `mattpocock/skills` | `codebase-design`, `domain-modeling`, `writing-for-agents`, `handoff`, `wait-what` |
| `coreyhaines31/marketingskills` | `analytics`, `content-strategy`, `copy-editing`, `copywriting`, `cro`, `customer-research`, `launch`, `lead-magnets`, `marketing-plan`, `offers`, `pricing`, `prospecting`, `public-relations`, `sales-enablement`, `schema`, `seo-audit`, `social` |
| `vercel-labs/agent-skills` | `web-design-guidelines`, `writing-guidelines` |
| `mukul975/Anthropic-Cybersecurity-Skills` | 10 curated skills, listed below |
| `hugohe3/ppt-master` | `ppt-master` |
| `Graphify-Labs/graphify` | `graphify` |
| `calcom/cal.diy` | `vercel-react-best-practices`, `calcom-api` |
| `yt-dlp/yt-dlp` | `yt-dlp` (wrapper written for M0rph, not copied from the repo) |
| Existing Haki library | `antislop`, `antislop-code`, `antislop-copywriting`, `antislop-human`, `antislop-layoutmobile`, `antislop-ui`, `attention-kind`, nine `eye-*` skills, `impeccable`, `rundown`, `spartan`, `taste-skill`, `tldr` |

Cybersecurity set:

- `testing-api-security-with-owasp-top-10`
- `testing-for-broken-access-control`
- `implementing-secrets-scanning-in-ci-cd`
- `performing-web-application-vulnerability-triage`
- `building-incident-response-playbook`
- `deploying-cloudflare-access-for-zero-trust`
- `configuring-tls-1-3-for-secure-communications`
- `performing-threat-modeling-with-owasp-threat-dragon`
- `implementing-ddos-mitigation-with-cloudflare`
- `analyzing-web-server-logs-for-intrusion`

The source repo contains 818 skills. The ten above are the ones relevant to
web, API, cloud, incident, and CI/CD work. Installing all 818 would flood skill
discovery and make the right skill harder to find.

## Routing

Use this table before reaching for a generic answer.

| Task | Skill or tool |
| --- | --- |
| New feature, campaign, identity, or plan | `brainstorming` first, then the domain skill |
| Multi-step implementation | `writing-plans`, then `executing-plans` or `subagent-driven-development` |
| Bug or failing test | `systematic-debugging` before proposing a fix |
| New or changed behaviour | `test-driven-development` |
| About to claim done | `verification-before-completion` |
| Code review | `requesting-code-review` / `receiving-code-review`, plus `ponytail-review` for a plain-English quality pass |
| Whole-repo audit | `ponytail-audit` |
| Codebase or architecture questions | `graphify`; use `graphify-out/` first when it exists |
| React or Next.js performance | `vercel-react-best-practices` |
| Module boundaries or domain language | `codebase-design`, `domain-modeling` |
| UI review or design system | `impeccable`, `web-design-guidelines`, `eye-design-system`, `antislop-ui` |
| Marketing page, offer, pricing, launch | matching `marketingskills` skill; load `copywriting` for page copy, `copy-editing` for an existing draft |
| Presentation, PPTX, slide deck | `ppt-master` |
| Booking or scheduling integration | `calcom-api` |
| Video, audio, subtitles, metadata | `yt-dlp` |
| Prose that sounds like AI | `humanizer`, then `copy-editing` or `writing-guidelines` |
| Terse mode or deliberately small change | `caveman`, `ponytail`, or `ponytail lite/full/ultra` |
| Authorized security testing | the matching cybersecurity skill; never test a system without written permission |

## Runtime prerequisites

Installed on 2026-11-13:

- Python 3.12.10 at `C:\Users\dngin\AppData\Local\Programs\Python\Python312`
- Python `Scripts` on the user PATH, so `yt-dlp` and `graphify` resolve
- yt-dlp 2026.10.26
- graphifyy 0.9.108
- FFmpeg 9.0.2 full build
- Python packages for `ppt-master` from its `requirements.txt`

If a new shell cannot find a command, open a fresh terminal so the updated
PATH is loaded. If the OpenCode desktop app was already running when Python and
FFmpeg were installed, restart it once: child shells inherit the environment
from the server process, and the server does not refresh PATH on its own.

## Deliberately not installed

| Repo | Why |
| --- | --- |
| `microsoft/playwright-mcp` | Needs Node 18+ and `npx`; OpenCode already has browser tooling. Cloned as reference only. |
| `thedotmack/claude-mem` | Needs Node 20+, Bun, uv, and a provider account. It is a memory service, not a skill pack. Cloned as reference only. |
| `paperclipai/paperclip` | A Node/React agent-management app, not an agent skill package. Cloned as reference only. |
| `calcom/cal.diy` app | The app is a self-hosted scheduling product, not a skill. Only its two reusable skills were copied. Its own README recommends personal, non-production use. |
| `yt-dlp/yt-dlp` repo | The repo is a Python program, not a skill. The wrapper skill documents safe use; the package is installed with pip. |

## Rights, safety, and licensing

- Skill files keep their upstream licences. The source repos remain in the
  Haki folder with their `LICENSE` files.
- Do not copy client data, private URLs, API keys, or personal data into a
  skill file.
- Cybersecurity skills are for authorized testing only. Require scope and
  written permission before running them.
- `yt-dlp` must not be used to bypass DRM, paywalls, login walls, or
  geo-restrictions. Ask when rights are unclear.
- Do not present in-house work as client work. Do not invent proof, metrics,
  case studies, or testimonials.

## Updating

1. Pull the source repo with `git -C <repo> pull --ff-only`.
2. Copy the changed skill directory into the library, or update the wrapper.
3. Check that `SKILL.md` exists and the YAML `name` matches the directory.
4. Run `opencode reload`, or restart OpenCode if the watcher misses it.
5. Ask M0rph which skills are available, or check the skill list in a new
   session.

Keep a skill only if its description tells the model when to use it. A skill
that duplicates another one, or that needs an account the user does not have,
makes routing worse.
