# JUGGERNAUT — Gap Ledger

**Owner:** Juggernaut
**Opened:** 15 November 2026
**Last audit:** 16 November 2026
**Rule:** Every gap gets an ID. IDs are never reused. Closed gaps stay in the table with a date and evidence.

Priority: `P0` blocks revenue · `P1` losing money or trust now · `P2` costs within 30 days · `P3` hygiene
Status: `OPEN` · `BLOCKED` (needs a human) · `CLOSED` · `FALSE` (finding did not hold)

| ID | Pri | Class | Gap | Where | Cost of leaving it | Status |
|---|---|---|---|---|---|---|
| JUG-014 | P0 | Unopened | `hakiproductions.com` has no DNS record. Every canonical, `og:image` and mailto points at a domain that does not exist. | all pages | Email bounces. Canonicals point nowhere. Nothing can be indexed. | OPEN |
| JUG-002 | — | Unopened | Site is not deployed. | `site/` | — | CLOSED 16 Nov |
| JUG-004 | P0 | Leaking | Inquiry form is `mailto:` only, to an address on a dead domain. | `contact.html:69` | There is currently **no working contact path at all** | OPEN |
| JUG-010 | — | Broken | Footer Instagram pointed at `@soulterror00`. | see evidence | — | CLOSED 16 Nov |
| JUG-001 | — | Unopened | No git repository. | project root | — | CLOSED 16 Nov |
| JUG-003 | P1 | Unopened | No analytics. | all pages | Cannot tell a traffic problem from an offer problem | OPEN |
| JUG-006 | — | Stale | "Booking Q1 2027" availability line. | `index.html:73`, `links.html:29` | — | CLOSED 16 Nov |
| JUG-011 | P1 | Leaking | Toolbox templates are mailto requests. | `toolbox.html` | Work is created, no email is captured | OPEN |
| JUG-005 | — | Leaking | No booking link on the site. | `contact.html` | — | CLOSED 16 Nov |
| JUG-015 | P2 | Unopened | No `robots.txt`, `sitemap.xml`, 404 page or `llms.txt`. | `site/` | Search engines have no map, no crawl instruction | OPEN |
| JUG-016 | P2 | Unverified | Schema markup only on `index.html`. Seven pages have none. | `site/*.html` | Weaker entity signals for search and AI answers | OPEN |
| JUG-017 | P3 | Stale | Titles run 25–49 characters against a 50–60 target. `index.html` description is 188 characters and truncates. | all pages | Lower click-through in results | OPEN |
| JUG-009 | — | Fragile | 20 dead images, 13.5 MB. | `site/assets/img/` | — | CLOSED 16 Nov |
| JUG-012 | — | Unopened | KvK and BTW setup unconfirmed. | `docs/DECISIONS.md` | Blocks taking deposits without guessing | BLOCKED |
| JUG-013 | — | Unopened | No case study from a paying client. | `site/work.html` | In-house proves taste, not that Haki can be hired | BLOCKED |
| JUG-007 | — | Stale | Audience agent quoted v1 prices. | `.opencode/agents/audience.md` | — | CLOSED 16 Nov |
| JUG-008 | — | Unverified | Claimed the pitch deck carried stale v2 prices. | `brand/deck/*.pdf` | — | FALSE 16 Nov |

**Totals:** 1 P0 · 4 P1 · 2 P2 · 1 P3 · 2 blocked · 8 closed · 1 false

---

## Evidence

Recorded 16 November 2026. Re-run before acting on any row.

### JUG-014 — domain does not resolve

```
Resolve-DnsName hakiproductions.com
→ DNS name does not exist
Resolve-DnsName hakiproductions.nl
→ no record
```

Canonical on every page: `<link rel="canonical" href="https://hakiproductions.com/">`
`og:image` on every page: `https://hakiproductions.com/assets/img/og-haki.jpg`
Form target: `data-mailto="hello@hakiproductions.com"`

The site names a domain in four places that resolves to nothing.

### JUG-002 — not deployed

No `CNAME`, `vercel.json`, `netlify.toml`, `_headers`, `_redirects`, `robots.txt`, `sitemap.xml` or `404.html` in `site/`.

### JUG-004 — mailto only

One `<form>` in the whole site. `contact.html:69`, `data-mailto=`. No endpoint, no capture, no fallback beyond the mail client.

### JUG-010 — Instagram is the streetwear label on 7 pages

```
about.html:269      contact.html:144     contact.html:218    index.html:527
links.html:78       links.html:82        magazine.html:343   services.html:393
toolbox.html:409    work.html:361
```

Ten occurrences across 7 of 8 pages. `links.html:82` even labels it "daily work and drops", which is the label's voice, not the agency's.

### JUG-001 — no git

`Test-Path .git` → `False`

### JUG-003 — no analytics

`grep 'plausible|umami|gtag|googletagmanager'` across `site/*.html` → only a Toolbox recommendation, no install.

### JUG-006 — availability line

`index.html:73`, `links.html:29`. Also confirmed as a decision in `docs/DECISIONS.md:16`.

### JUG-011 — toolbox capture

Every tool link is `mailto:hello@hakiproductions.com?subject=Toolbox%20request...`. No form, no email list.

### JUG-005 — no booking

`grep 'cal.com'` → one hit, inside the Toolbox as a recommended tool. No booking link on `contact.html`.

### JUG-015 — no crawl files

File search for `robots|sitemap|404|llms` in `site/` → none.

### JUG-016 — schema coverage

```
index.html    schema=Y
about.html    schema=-
contact.html  schema=-
links.html    schema=-
magazine.html schema=-
services.html schema=-
toolbox.html  schema=-
work.html     schema=-
```

### JUG-017 — title and description lengths

```
about.html      title=26  desc=126
contact.html    title=28  desc=154
index.html      title=46  desc=188
links.html      title=26  desc=126
magazine.html   title=49  desc=154
services.html   title=29  desc=145
toolbox.html    title=32  desc=135
work.html       title=25  desc=169
```

### JUG-009 — dead images

```
IMG total: 49 files, 20.7 MB
Unreferenced: 20 files, 13.5 MB
Largest: work-compleye.png 5.75 MB, work-rashguard.png 0.76 MB,
         dynamic-front-green.png 1.10 MB, dynamic-back-pink.png 1.06 MB
```

`og-haki.jpg` excluded: it is referenced by absolute URL in `og:image`. No CSS `url()` points at any image, only fonts.

### JUG-008 — false

`docs/DECK-TEXT.txt` contains no prices and no `€`, `EUR`, `price` or `investment` strings. The deck does not carry v2 numbers, so it cannot carry stale ones.

### Checked and clean

- All local links and assets resolve. No 404s, no missing files.
- One `<h1>` per page on all 8 pages.
- `alt` text present on all 66 images.
- `lang="en"` on all pages.
- Canonical tags present on all 8 pages.
- No broken internal anchors.

---

## Closed

| ID | Closed | What changed | Evidence |
|---|---|---|---|
| JUG-007 | 16 Nov 2026 | `audience.md` now quotes v2 prices (€1,950 / €2,500 / €2,400 / €750 / €1,800), minimum €750, retainers from €1,950, prices exclude VAT. Budget segment raised to €750–€3,000. | `grep 'The Engine' .opencode/agents/audience.md` |
| JUG-008 | 16 Nov 2026 | Finding did not hold. Deck carries no prices. | `grep '€\|EUR\|price' docs/DECK-TEXT.txt` → no matches |
| JUG-001 | 16 Nov 2026 | `git init -b main`, `.gitignore` excludes the 16 reference clones, first commit `ef87502`. 103 files, 30.4 MB. | `git log --oneline` · `git status --porcelain` → 0 changes |
