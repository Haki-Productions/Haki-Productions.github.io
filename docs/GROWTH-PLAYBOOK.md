# GROWTH PLAYBOOK — SEO, SEA, GEO, targeting

_Last updated: 16 November 2026_

**Who this is for:** every agent. M0rph owns this document and teaches it. Any agent doing marketing, content or site work reads it first.

**The one idea behind all four channels:** when someone with money and a deadline is looking, does Haki show up, and does Haki look like the safe choice?

| Channel | Job | Cost |
|---|---|---|
| **SEO** | Show up when they search | Time |
| **SEA** | Buy the moment they search | Money |
| **GEO** | Show up when they ask an AI | Time |
| **Targeting** | Make sure it is the right someone | Discipline |

Haki has almost no money and a lot of time. So the order is SEO and GEO first, SEA last.

---

## 1. SEO — being found without paying

### What actually ranks for a business like Haki

A Rotterdam creative agency does not rank with blog posts. It ranks with **specific, local, intent-matched pages** and a **strong local entity**.

Three query types matter:

| Type | Example | What wins |
|---|---|---|
| Service + city | "videograaf Rotterdam", "brand identity Rotterdam" | A dedicated service page with real work on it |
| Problem | "streetwear lookbook laten maken" | A case study that answers the problem |
| Brand | "Haki Productions" | Anything, as long as it exists and is indexed |

Blog posts are the slowest path. Local intent pages and proof pages are the fastest.

### The five technical gates

Nothing else matters until these pass.

1. **Crawlable** — `robots.txt` exists and does not block anything important.
2. **Indexable** — a `sitemap.xml` exists, is submitted, and every page returns 200.
3. **Canonical** — one URL per page, self-referencing canonicals, no duplicate hostnames.
4. **Fast** — LCP under 2.5s, CLS under 0.1, INP under 200ms. Images are the usual culprit.
5. **Mobile** — responsive, tap targets 44px, no horizontal scroll.

### Haki's current state, honestly

| Gate | Status |
|---|---|
| Crawlable | No `robots.txt` |
| Indexable | No `sitemap.xml`, no Search Console, not deployed |
| Canonical | No canonical tags |
| Fast | 5.75 MB dead PNG in the deploy, images not all capped |
| Mobile | Responsive, needs a tap-target pass |

**SEO is currently at zero, and not because of content. Because the site is not live.**

### Priority order for Haki

1. **Deploy and index.** Nothing above this line matters.
2. **Local entity.** Google Business Profile, consistent name, address, phone across the site, Instagram and every directory. This is the single highest-leverage SEO action for a Rotterdam agency.
3. **Service pages.** One page per offer, each targeting its own query, each with real work.
4. **Proof pages.** Case studies rank because they are specific. "Soul Terror 2024 lookbook, Rotterdam" beats "our work".
5. **Editorial.** GATEKEEPERS MAG as topical authority, not as a blog.

### Keyword map

Assign one primary query per page. Never let two pages chase the same one.

| Query | Intent | Page | Status |
|---|---|---|---|
| creative agency Rotterdam | commercial | `index.html` | needs title/H1 alignment |
| videograaf Rotterdam | commercial | `services.html#launch` | not targeted |
| content creator Rotterdam | commercial | `services.html#engine` | not targeted |
| huisstijl laten maken Rotterdam | commercial | `services.html#identity` | not targeted |
| event fotograaf Rotterdam | commercial | `services.html#recap` | not targeted |
| perskit artiest laten maken | commercial | `services.html#press-kit` | not targeted |
| streetwear lookbook Rotterdam | problem | `work.html#soul-terror` | not targeted |

Dutch queries first. The buyers are Dutch. English is for international artists only.

### On-page rules

- One `<h1>` per page, primary query inside it, natural language.
- Title 50–60 characters, query near the front.
- Meta description 150–160 characters, a reason to click, not a keyword list.
- Alt text describes the image. Not "image1".
- Internal links use descriptive anchors, never "click here".
- Schema: `Organization`, `LocalBusiness`, `Service`, `FAQPage`. See the `schema` skill.

---

## 2. SEA — paying for the moment

### The rule

**No ads until the site converts organically.** Paid traffic on a page that does not convert is a donation to Google.

Start at €0. This is not caution, it is arithmetic.

### When to start

Start SEA when one of these is true:

- 10 or more organic enquiries have arrived, so conversion is proven.
- You know the close rate.
- You know what a client is worth.

Until then, SEA is a guess with a bill attached.

### What a client is worth, and therefore what a click may cost

| Offer | Value | 3-month value |
|---|---|---|
| The Engine | €1,950/mo | €5,850 |
| The Launch | from €2,500 | €2,500 |
| The Identity | from €2,400 | €2,400 |
| The Recap | from €1,800 | €1,800 |

If 1 in 20 clicks becomes an enquiry, and 1 in 3 enquiries closes, one client costs about 60 clicks. At €2 per click that is €120 to win a €2,400 project. That works.

At €8 per click it is €480, still fine for The Launch, painful for The Press Kit at €750.

**Never run SEA on The Press Kit.** The margin is too thin to pay for acquisition.

### Structure, in order

1. **Brand defence.** "Haki Productions". Cheap, protects the name. €1–2/day.
2. **Service intent.** "videograaf Rotterdam", "huisstijl laten maken". €5–10/day per ad group.
3. **Competitor.** Later, if ever. Expensive and rarely worth it for a small agency.

### Rules

- Every ad lands on the matching page, never the homepage.
- One ad group per service. No mixed intent.
- Negative keywords from day one: `gratis`, `free`, `stage`, `stage lopen`, `vacature`, `tutorial`, `how to`, `zelf doen`, `goedkoop`.
- Track the enquiry, not the click.
- Kill any ad group below 1% click-through after 500 impressions.

### Platform reality in the Netherlands

- **Google Ads** is the only serious search channel. Bing is marginal here.
- **Meta** is for artists and streetwear, not for B2B services. Different intent.
- **TikTok ads** are for reach, not for bookings. Do not expect leads.

---

## 3. GEO — being cited by AI

The newest channel and the cheapest. When someone asks ChatGPT, Perplexity or Google's AI Overview "who makes good content for streetwear brands in Rotterdam", the answer comes from sources those engines trust.

### How engines choose what to cite

| Signal | What it means in practice |
|---|---|
| Crawlable | The page must be indexable. AI crawlers read what Google can read. |
| Structured | Clear headings, schema, a factual sentence per claim |
| Quotable | One self-contained sentence that answers a question completely |
| Entity-consistent | The same name, city and service everywhere |
| Corroborated | Other sites mention the same entity with the same facts |

### What works

- **Answer-shaped sentences.** "Haki Productions is a creative agency in Rotterdam that produces campaign films, brand identities and event recaps." One sentence, no hedging, states the entity, the city and the service.
- **Schema markup.** `Organization` with `name`, `url`, `address`, `areaServed`, `sameAs`. This is how an engine confirms the entity.
- **Consistent entity.** The same description on the site, Google Business Profile, Instagram bio, LinkedIn, and every directory. Inconsistency makes the entity unverifiable.
- **Being mentioned elsewhere.** A local news mention, a supplier page, a client credit, an event listing. Corroboration beats content volume.
- **A visible FAQ.** Real questions with direct answers. This is what gets lifted into AI Overviews.
- **`llms.txt`.** Cheap to add, no downside.

### What does not work

- Keyword stuffing.
- Hidden text or cloaking.
- AI-generated filler at scale. It reads as low-value and drags the whole site.
- Fake reviews or invented clients. Instant trust loss with humans and engines.

### Measurement

Manual, monthly, five minutes. Run the same prompts and record whether Haki appears.

| Prompt | Engine | Appears? |
|---|---|---|
| creative agency Rotterdam | ChatGPT | |
| videograaf voor streetwear merk Rotterdam | Perplexity | |
| wie maakt lookbooks in Rotterdam | Google AI Overview | |
| event recap video Rotterdam | ChatGPT | |
| brand identity for a starting clothing label Netherlands | Perplexity | |

Track the trend, not the absolute number. Five prompts, once a month, in a sheet.

---

## 4. Targeting — the right someone

### Who buys

Not "brands". This:

| Segment | Trigger | Budget | Where |
|---|---|---|---|
| Starting streetwear labels | First drop, first lookbook | €750–€2,500 | Instagram, markets, supplier networks |
| Artists and DJs | Release, tour, label signing | €750–€2,500 | IG, SoundCloud, label circles |
| Gyms and fight schools | New location, event, fight night | €1,800–€2,500 | Local network, word of mouth |
| Event organisers | Event date on the calendar | €1,800+ | Venues, city agenda, promoters |
| Small brands rebranding | New website, new market | €2,400+ | LinkedIn, referrals |

### Target the trigger, not the demographic

A 24-year-old label owner with a drop in six weeks is a better prospect than a 40-year-old brand manager with no deadline. Age and job title are noise. **Deadline and budget are signal.**

### Qualify fast, three questions

1. What are you launching, and when?
2. What is the budget range?
3. Who decides?

No deadline, no budget, or no decision-maker means no proposal.

### Exclude

- Free advice seekers.
- Exposure-only offers.
- "We will pay you from the revenue."
- Anyone whose budget is below €750. Point them to the Toolbox and move on.

### Paid targeting, if it ever happens

- Meta: interest + lookalike from actual clients, never broad.
- Radius 40 km around Rotterdam for local services.
- Retarget site visitors before cold audiences.
- Never run cold traffic to a page with no proof on it.

---

## 5. Measurement

**One primary metric: qualified conversations per week.** Not followers, not impressions, not likes.

Weekly scorecard:

| Metric | Target |
|---|---|
| Conversations started | 5 |
| Replies | 2 |
| Calls booked | 1 |
| Proposals sent | 1 |
| Deposits paid | 0.5 |

Everything else is context, not success.

---

## 6. The rules

- No black hat. No cloaking, no link schemes, no bought reviews, no bought followers.
- No fake reviews, invented clients or invented metrics. Ever.
- No AI-generated content at scale. It is detectable and it costs trust.
- Every claim needs evidence. If it cannot be proven, it does not go on the page.
- Ads need explicit approval and a stated budget.
- AI stays invisible in client-facing creative work.

---

## 7. How M0rph teaches this

Each agent gets the part it needs, not the whole document.

| Agent | Teaches | Why |
|---|---|---|
| Audience | Targeting, GEO, content that earns citations | It runs channels |
| Juggernaut | Technical SEO gates, indexability, schema, speed | It audits the machine |
| Build | On-page rules, schema, Core Web Vitals | It ships pages |
| Sales | SEA economics, cost per client, qualification | It prices the ask |

Teaching order, one topic per week:

1. **Week 1 — SEO foundations.** The five gates, the keyword map, on-page rules.
2. **Week 2 — GEO.** Entity consistency, answer-shaped copy, schema, the prompt tracker.
3. **Week 3 — SEA.** Client value, click economics, why Press Kit never gets ads.
4. **Week 4 — Targeting.** Triggers over demographics, the three qualification questions.

Test comprehension by asking the agent to apply it to a real page, not to repeat it back.
