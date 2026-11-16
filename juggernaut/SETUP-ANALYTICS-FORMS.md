# Setup: Analytics and Form Endpoint

**Status:** ✅ Both accounts created. Snippets configured. Republished.
**Owner:** Juggernaut (prepared) + M0rph (account creation — DONE)
**Gaps:** JUG-003 (analytics — CLOSED), JUG-004 (form endpoint — CLOSED)

## 1. Analytics — GoatCounter

**Status:** ✅ Done. Account: https://hakiproductions.goatcounter.com/

**What was done:** GoatCounter tracking snippet added to the `<head>` of all 9 HTML pages. Account code: `hakiproductions`. No placeholder — already live.

**Verification:** Open https://hakiproductions.goatcounter.com/ to see the dashboard. Traffic will appear after the next visitor.

## 2. Form endpoint — Formspree

**Status:** ✅ Done. Form ID: `mnpdprgg`. Endpoint: https://formspree.io/f/mnpdprgg

**What was done:** Contact form converted from mailto to Formspree POST. Form ID `mnpdprgg` configured. Mailto fallback preserved below the form. Hidden fields: `_subject` and `_next`.

**Verification:** Submit the form at https://haki-productions.github.io/contact.html and confirm email arrives at producedbyhaki@gmail.com.

## 3. Toolbox capture (JUG-011)

**Status:** ⏳ Pending. Mailto still used. Can be upgraded to Formspree in a follow-up.

Options:
- Option A: Add a Formspree form to `toolbox.html` that collects email + template name, then sends the template link.
- Option B: Use Tally (https://tally.so) to embed a form that collects email and auto-sends the template.
- Option C: Keep mailto (works now that the email address is fixed) and accept lower capture rates.

Recommended: Option A, same Formspree account as the contact form.

## 4. After setup

- Update `juggernaut/LEDGER.md`: JUG-003 and JUG-004 closed. ✅ Done.
- Analytics dashboard: https://hakiproductions.goatcounter.com/
- Formspree dashboard: https://formspree.io/forms/mnpdprgg
- Set a monthly reminder to check GoatCounter stats.
