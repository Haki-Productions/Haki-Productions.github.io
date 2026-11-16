# JUG-P002 — The site sends agency traffic to the streetwear label

**Priority:** P1
**Gap IDs:** JUG-010, JUG-006, JUG-003, JUG-011
**Raised:** 16 November 2026
**Status:** proposed

## What is broken

Four trust leaks, all cheap to fix, all currently live in the markup.

**1. Instagram goes to `@soulterror00` on 7 of 8 pages.** That is the streetwear label. A client who just read a services page and wants to see more work lands on a hoodie brand. `links.html:82` even captions it "daily work and drops", which is the label's voice, not the agency's.

**2. "Booking Q1 2027" is on the home page and the link hub.** It reads as fully booked while the operating target is the first paid client. It gives a warm lead a reason to leave.

**3. No analytics.** When the site goes live there will be no way to tell whether nobody visited or nobody converted. Those need opposite fixes.

**4. The Toolbox captures nothing.** All 16 resources are `mailto:` requests. The plan calls the Toolbox the lead magnet. A lead magnet that requires the visitor to compose an email captures almost no one.

## Evidence

```
about.html:269     contact.html:144    contact.html:218   index.html:527
links.html:78      links.html:82       magazine.html:343  services.html:393
toolbox.html:409   work.html:361
→ 10 occurrences of instagram.com/soulterror00 across 7 pages

index.html:73   <span>Booking Q1 2027</span>
links.html:29   <span class="links-availability">Booking Q1 2027</span>

grep 'plausible|umami|gtag|googletagmanager' site/*.html
→ one hit, inside the Toolbox as a recommended tool. No install.

grep 'mailto' site/toolbox.html
→ every tool link is a mailto request
```

## What it costs to leave

- A client ready to book clicks Instagram and hesitates. That is the exact moment the site is supposed to convert.
- "Q1 2027" filters out anyone who wants work done this quarter.
- Without analytics, the first month of traffic teaches nothing. The budget for learning is spent and nothing is learned.
- The Toolbox produces goodwill with no contact detail attached, so the goodwill cannot be followed up.

## The change

| # | File | Change | Needs |
|---|---|---|---|
| 1 | 10 occurrences across 7 pages | Point at the agency Instagram. If no agency account exists yet, remove the row until it does. Never leave the label's handle labelled as the agency. | Decision: create `@hakiproductions`, or remove |
| 2 | `index.html:73`, `links.html:29` | Replace with a true availability line, e.g. "Taking 2 projects for December" or "Open for December". If unknown, remove the line rather than guess. | Decision: what is true |
| 3 | `site/*.html` head | Add one privacy-light analytics script (Plausible or Umami). One line per page, or one include. | Decision: which tool |
| 4 | `toolbox.html` | Replace `mailto:` requests with a single email-capture form that delivers the file, or gate all 16 behind one form. | Decision: Formspree, Tally or self-hosted |

**Do not guess the Instagram handle.** Pointing at the wrong account is worse than pointing at none. If the agency account does not exist, the honest fix is to delete the row and add it when the account is live.

## Risk

- **A new Instagram account with no posts is worse than no link.** If the account would be empty, remove the row instead.
- **Analytics and a capture form both collect personal data.** A privacy note is required. Already an open decision in `DECISIONS.md`.
- **Changing the availability line is a sales statement.** Only M0rph should decide the wording.

## If accepted

```
grep -c 'soulterror00' site/*.html        → 0 outside work/magazine case copy
grep 'Q1 2027' site/*.html                → 0
grep 'plausible\|umami' site/index.html   → 1
Submit the Toolbox form with a test email → file delivered, address captured
```

Note: `@soulterror00` stays legitimate inside Soul Terror case study copy on `work.html` and `magazine.html`, where it is the subject, not the agency's contact.
