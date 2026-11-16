# JUG-P001 — The site has no working contact path and no domain

**Priority:** P0
**Gap IDs:** JUG-014, JUG-002, JUG-004
**Raised:** 16 November 2026
**Status:** proposed

## What is broken

`hakiproductions.com` does not exist. Not parked, not misconfigured. There is no DNS record at all.

The site names that domain in four places: the canonical tag on every page, the `og:image` on every page, the `mailto:` on the only form, and the email address printed in the footer and contact page.

So right now:

- A visitor who fills in the brief form opens their mail client addressed to a mailbox on a domain that cannot receive mail. It bounces.
- Every canonical tells Google the real version of the page lives at a domain that returns nothing.
- Every social share renders with a broken image.
- The site is not deployed anyway, so none of this is visible to anyone.

The three gaps are one problem: **the business has no reachable front door.**

## Evidence

```
Resolve-DnsName hakiproductions.com
→ DNS name does not exist

Resolve-DnsName hakiproductions.nl
→ no record

site/index.html:  <link rel="canonical" href="https://hakiproductions.com/">
site/index.html:  <meta property="og:image" content="https://hakiproductions.com/assets/img/og-haki.jpg">
site/contact.html:69  <form ... data-mailto="hello@hakiproductions.com" ...>

site/ deploy files: CNAME, vercel.json, netlify.toml, _headers,
                    _redirects, robots.txt, sitemap.xml, 404.html → none
```

## What it costs to leave

Every euro of the plan depends on one path: someone finds the site, fills the form, Haki replies. That path is broken at both ends. No domain, no deploy, no delivery.

The plan says 20 conversations, 5 proposals, 2 closes. None of it can start while the front door is a mailto to a domain that does not resolve.

## The change

Five steps, in order. Each one is a human decision or a ten-minute task.

**1. Register the domain.** `hakiproductions.com` at Cloudflare Registrar (~€10/yr). `hakiproductions.nl` defensively, same registrar. Decision needed: confirm the registrar.

**2. Create the mailbox.** `hello@hakiproductions.com`. Either a real mailbox (Fastmail, Zoho, Google Workspace) or a forward to an address that is actually read. Decision needed: which.

**3. Pick a host.** Cloudflare Pages or Vercel, root directory `site`, no build step. Decision needed: which.

**4. Wire a real form endpoint.** Formspree, Tally or a Cloudflare Worker. Keep `mailto:` as the visible fallback, but the submit button must post somewhere. Until the endpoint exists, the form is decoration.

**5. Add the crawl files.** `robots.txt`, `sitemap.xml`, a `404.html`. Small, and it stops the site being invisible once it is live.

## Exact edits, once the host and mailbox exist

| File | Change |
|---|---|
| `site/contact.html:69` | Replace `data-mailto` submit with a real `action` + `method="post"`, keep the mailto link as fallback text |
| `site/contact.html:144,218` | Instagram to the agency account, not `@soulterror00` (see JUG-P002) |
| `site/*.html` | Confirm canonical host matches the registered domain, www vs non-www, one choice |
| `site/robots.txt` | New file, allow all, point at the sitemap |
| `site/sitemap.xml` | New file, 8 URLs |
| `site/404.html` | New file, on-brand |

## Risk

- **Registering the domain is irreversible in practice.** Confirm the exact spelling before paying.
- **The mailbox decides the brand voice.** `hello@` is right for an agency. Do not use a personal address.
- **A form endpoint collects personal data.** A short privacy note is required. That is already an open decision in `DECISIONS.md`.
- **The `.nl` is optional.** If budget is tight, `.com` alone is enough to launch.

## If accepted

The check that proves it is fixed:

```
Resolve-DnsName hakiproductions.com        → returns an A record
curl -I https://hakiproductions.com        → 200
curl -I https://hakiproductions.com/robots.txt  → 200
Submit the form with a test address        → arrives in the inbox
```

Until all four pass, JUG-014, JUG-002 and JUG-004 stay open.
