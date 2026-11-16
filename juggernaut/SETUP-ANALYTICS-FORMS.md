# Setup: Analytics and Form Endpoint

**Status:** Snippets installed. Account creation needed (5 minutes).
**Owner:** Juggernaut (prepared) + M0rph (account creation)
**Gaps:** JUG-003 (analytics), JUG-004 (form endpoint)

## 1. Analytics — GoatCounter

**What was done:** A GoatCounter tracking snippet was added to the `<head>` of all 9 HTML pages (8 site pages + 404.html).

**What you need to do (2 minutes):**
1. Go to https://www.goatcounter.com/signup and create a free account.
2. Choose a site code (e.g., `hakiproductions`).
3. Replace `hakiproductions` in the snippet with your actual code:
   ```html
   <script data-goatcounter="https://YOURCODE.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
   ```
4. Find-and-replace `hakiproductions.goatcounter.com` → `YOURCODE.goatcounter.com` across all `site/*.html`.
5. Republish: `powershell -NoProfile -ExecutionPolicy Bypass -File publish-site.ps1`

**Why GoatCounter:** Free for non-commercial use, privacy-friendly (no cookies, no personal data), lightweight (single script), GDPR-compliant. Plausible (€9/mo) and Umami (self-hosted) are alternatives if you want more features later.

## 2. Form endpoint — Formspree

**What was done:** The contact form was converted from mailto to a POST form targeting Formspree. The mailto fallback link is preserved below the form.

**What you need to do (3 minutes):**
1. Go to https://formspree.io and create a free account.
2. Create a new form. You will get a form ID (e.g., `xpwzabcd`).
3. Replace `YOUR_FORM_ID` in `site/contact.html`:
   ```html
   <form class="form-grid" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Republish: `powershell -NoProfile -ExecutionPolicy Bypass -File publish-site.ps1`
5. Test: submit the form and confirm the email arrives at producedbyhaki@gmail.com.

**Free tier:** 50 submissions/month. Enough for a new agency. Upgrade to paid (€10/mo) if you need more.

**Alternative:** Tally (https://tally.so) — free, unlimited submissions, embeddable. Requires replacing the form with a Tally embed instead of Formspree.

## 3. Toolbox capture (JUG-011)

The toolbox still uses mailto for template requests. To capture emails:
- Option A: Add a Formspree form to `toolbox.html` that collects email + template name, then sends the template link.
- Option B: Use Tally to embed a form that collects email and auto-sends the template.
- Option C: Keep mailto (works now that the email address is fixed) and accept lower capture rates.

Recommended: Option A, same Formspree account as the contact form.

## 4. After setup

Once both accounts are created:
- Update `juggernaut/LEDGER.md`: close JUG-003 and JUG-004.
- Add the analytics dashboard URL to `docs/DECISIONS.md`.
- Set a monthly reminder to check GoatCounter stats.
