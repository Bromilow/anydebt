# ANY DEBT COLLECTIONS — Definitive Website Plan
### Synthesised from two competing Opus design proposals

---

## SYNTHESIS VERDICT

| Category | Agent A Strength | Agent B Strength | Decision |
|---|---|---|---|
| Headlines | Bolder, more commanding ("WE RECOVER WHAT'S YOURS") | More considered, empathetic | **A wins** — this brand needs authority |
| Heading Font | Oswald — bold, condensed | DM Serif Display — refined, trust-building | **B wins** — serif communicates gravitas |
| Backgrounds | Clean white/off-white | Warm Ivory `#FAF8F5` — avoids clinical feel | **B wins** — warmer, more inviting |
| Colour Palette | Core brand + basic neutrals | Core brand + warm gray extended palette | **B wins** — warmer shadows, richer depth |
| Industry Sections | Standard card grid | Alternating image+content on deep navy | **B wins** — far more visually impressive |
| Problem Section | Explicit pain agitation (powerful conversion) | Less direct | **A wins** — crucial for B2B conversion |
| Process Section | Dark navy with gold step numbers | Elegant timeline draw | **Merge** — take A's dark bg, B's draw animation |
| Mobile Strategy | Floating phone FAB | Sticky bottom CTA bar + WhatsApp button | **B wins** — WhatsApp is essential in SA market |
| Stats/Numbers | Barlow Condensed | JetBrains Mono — signals precision/data accuracy | **B wins** |
| Animation Style | Dramatic, high-energy | Calm confidence, purposeful | **B wins** — suits financial services |
| Contact Bar | Top crimson strip above nav (excellent) | Not present | **A wins** |
| Content/SEO | Standard coverage | Full blog plan with specific article ideas | **B wins** |
| Tech Stack | Astro + Tailwind | Astro + Vanilla CSS custom properties | **A wins** — Tailwind makes token management cleaner |

---

## 1. DESIGN SYSTEM

### 1.1 Color Palette

**Brand Core (from logo)**

| Token | Hex | Usage |
|---|---|---|
| `--color-navy` | `#1E3A5F` | Primary brand, headings, header bg, nav |
| `--color-navy-dark` | `#0F2440` | Hero bg, dark sections, overlays |
| `--color-navy-light` | `#2A4F7A` | Button hover states, link hover |
| `--color-navy-tint` | `#E8EEF5` | Light section backgrounds, image containers |
| `--color-crimson` | `#C0392B` | CTAs, accents, highlights, urgency |
| `--color-crimson-dark` | `#A93226` | CTA hover state |
| `--color-espresso` | `#3D1F12` | Icon fills, dark accents, decorative |
| `--color-white` | `#FFFFFF` | Backgrounds, text on dark |

**Extended Warm Neutral Palette (B's contribution — eliminates clinical coldness)**

| Token | Hex | Usage |
|---|---|---|
| `--color-ivory` | `#FAF8F5` | Primary page background |
| `--color-warm-50` | `#F5F2EE` | Card backgrounds, alternating sections |
| `--color-warm-100` | `#E8E3DC` | Borders, dividers |
| `--color-warm-200` | `#D1C9BE` | Disabled states, placeholder tints |
| `--color-warm-400` | `#9B9083` | Secondary text, meta information |
| `--color-warm-600` | `#6B5F52` | Body text on light backgrounds |
| `--color-charcoal` | `#2D2A26` | Primary body text (softer than pure black) |
| `--color-success` | `#27856A` | Success states, secure badges |

**Psychological note:** The warm ivory/warm-gray spectrum avoids the sterile feel of blue-grays. Visitors subconsciously associate warmth with trustworthiness — like sitting in a trusted advisor's well-appointed office.

**Shadow base uses `--color-espresso`** (not black) for warmer, more organic shadows:
```css
--shadow-sm:  0 1px 3px rgba(61,31,18,0.06);
--shadow-md:  0 4px 12px rgba(61,31,18,0.08);
--shadow-lg:  0 8px 30px rgba(61,31,18,0.12);
--shadow-xl:  0 16px 48px rgba(61,31,18,0.16);
--shadow-crimson: 0 4px 20px rgba(192,57,43,0.3);
```

---

### 1.2 Typography

**H1/H2 — `DM Serif Display`** (Google Fonts)
- Rationale: Serif headings communicate tradition, authority, and gravitas. DM Serif Display reads as "established, trusted institution." Against the bold brand palette, it delivers power without aggression.
- Weight: 400 (the weight alone provides authority)

**H3/H4/UI — `Inter`** (Google Fonts)
- Weights: 300, 400, 500, 600, 700
- Usage: Subheadings, card titles, body, buttons, labels, nav, everything except display headings

**Stats/Data — `JetBrains Mono`** (Google Fonts)
- Usage: Large statistics, phone numbers displayed prominently, registration number
- Rationale: Monospace numerals signal precision, accuracy, and professionalism

| Element | Font | Size (desktop) | Size (mobile) | Weight | Line Height |
|---|---|---|---|---|---|
| Display XL (hero H1) | DM Serif Display | 64px | 42px | 400 | 1.1 |
| H1 (page titles) | DM Serif Display | 48px | 34px | 400 | 1.15 |
| H2 (section headers) | DM Serif Display | 36px | 28px | 400 | 1.2 |
| H3 (subsections) | Inter | 22px | 20px | 600 | 1.3 |
| H4 (card titles) | Inter | 18px | 17px | 600 | 1.4 |
| Body Large | Inter | 18px | 18px | 400 | 1.7 |
| Body | Inter | 16px | 16px | 400 | 1.7 |
| Body Small | Inter | 14px | 14px | 400 | 1.6 |
| Caption/Label | Inter | 12px | 12px | 500 | 1.5 |
| Eyebrow | Inter | 12px | 12px | 600 | 1.5 |
| Stat Number | JetBrains Mono | 52px | 40px | 700 | 1.1 |
| Button | Inter | 16px | 16px | 600 | 1 |
| Nav Link | Inter | 15px | 16px | 500 | 1 |

**Eyebrow text style:** `caption`, Inter 600, `--color-crimson`, uppercase, letter-spacing `0.15em` — used above every section heading.

---

### 1.3 Spacing System (8px base grid)

```css
--space-1:  4px;    /* Tight gaps (badge padding, icon-to-text) */
--space-2:  8px;    /* Small gaps */
--space-3:  12px;   /* Small component padding */
--space-4:  16px;   /* Standard padding */
--space-5:  24px;   /* Card padding, between related elements */
--space-6:  32px;   /* Between components within a section */
--space-7:  48px;   /* Between sections on mobile */
--space-8:  64px;   /* Section padding (mobile) */
--space-9:  80px;   /* Section padding (tablet) */
--space-10: 96px;   /* Section padding (desktop) */
--space-11: 120px;  /* Hero section vertical padding */
```

**Container widths:**
- Max content: `1200px`
- Wide (full-bleed inner): `1400px`
- Narrow (text-heavy): `720px`

---

### 1.4 Border Radius

```css
--radius-sm:   4px;    /* Badges, tags */
--radius-md:   8px;    /* Buttons, inputs, small cards */
--radius-lg:   12px;   /* Cards, content blocks */
--radius-xl:   16px;   /* Large cards, image containers */
--radius-full: 9999px; /* Pills, avatars */
```

---

### 1.5 Button System

**Primary (Crimson — Highest Priority CTA):**
```
Background: --color-crimson
Color: white
Padding: 14px 32px (large: 18px 40px)
Border-radius: --radius-md
Font: Inter 600, 16px
Hover: background --color-crimson-dark, translateY(-2px), shadow-md
Shadow on hover: --shadow-crimson
Transition: all 0.2s ease
```

**Secondary (Navy — Standard Action):**
```
Background: --color-navy
Color: white
Padding: 14px 32px
Border-radius: --radius-md
Hover: background --color-navy-light, translateY(-1px)
```

**Outline (Ghost — Secondary CTA on light backgrounds):**
```
Background: transparent
Border: 2px solid --color-navy
Color: --color-navy
Padding: 12px 30px
Hover: Background --color-navy, Color white
Transition: all 0.25s ease
```

**White Ghost (on dark backgrounds):**
```
Background: transparent
Border: 2px solid white
Color: white
Hover: Background white, Color --color-navy
```

**Text Link:**
```
Color: --color-navy
Text-decoration: none
Hover: Color --color-crimson, underline (offset 4px)
Duration: 0.15s
```

---

## 2. PAGE STRUCTURE

| # | Page | URL | Purpose |
|---|---|---|---|
| 1 | **Home** | `/` | Primary conversion. Full emotional journey: problem → trust → action. |
| 2 | **About** | `/about` | Company story, Angelique's profile, registration credentials, values. |
| 3 | **Services** | `/services` | Full service breakdown with deep descriptions and process detail. |
| 4 | **Industries** | `/industries` | Hub page linking to three sector-specific pages. |
| 5 | **Schools** | `/industries/schools` | Tailored pitch for school administrators. School fee recovery. |
| 6 | **Medical** | `/industries/medical` | Tailored pitch for doctors and dentists. HPCSA-sensitive language. |
| 7 | **Business** | `/industries/business` | Tailored pitch for SMEs and corporates. Cash flow and B2B language. |
| 8 | **How It Works** | `/how-it-works` | Full process transparency page. Converts skeptics. |
| 9 | **FAQ** | `/faq` | Full objection-handling page. Schema-marked for Google rich snippets. |
| 10 | **Contact** | `/contact` | Multi-channel contact: form, phone, email, WhatsApp, map. |
| 11 | **Resources/Blog** | `/resources` | SEO content hub. Establishes expertise. Drives organic traffic. |
| 12 | **Privacy Policy** | `/privacy-policy` | POPIA compliance. Required. |
| 13 | **Terms** | `/terms` | Service engagement terms. Legal. |

---

## 3. NAVIGATION DESIGN

### 3.1 Top Contact Bar (A's contribution — persistent trust signal)

```
+------------------------------------------------------------------------+
| [phone] 062 116 5638  |  [phone] 081 415 8260  |  [email] anycollections@outlook.com |
|                                    Nationwide Debt Recovery — Howick, KZN |
+------------------------------------------------------------------------+
```
- Height: 36px
- Background: `--color-crimson`
- Text: white, Inter 400, 13px
- Phone numbers are `<a href="tel:+27621165638">` links
- On mobile: collapses to phone number only + email icon

### 3.2 Main Header (Sticky)

```
+------------------------------------------------------------------------+
| [LOGO]     Home  About  Services  Industries ▾  FAQ     [FREE CONSULT] |
+------------------------------------------------------------------------+
```

- **Initial state:** Transparent background, `height: 80px`
- **On scroll (>50px):** Background `--color-white`, `--shadow-sm`, height stays 80px — transition 0.3s
- **Sticky:** `position: fixed; top: 36px` (below the contact bar — bar scrolls away, header remains)
- Logo: Left-aligned, 44px height, links to `/`
- Nav links: Center/right aligned, Inter 500, 15px, `--color-charcoal`
- Hover: `--color-crimson`, 0.2s transition
- Active page: `--color-navy` with 2px `--color-crimson` underline sliding in from left
- Industries link: Has dropdown panel
- Industries dropdown: slides down on hover (`translateY 8px → 0, opacity 0 → 1`). White bg, shadow-lg, radius-md. Links: Schools, Medical, Business.
- CTA button: Crimson, small variant, right-aligned: `"Free Consultation"`

### 3.3 Mobile Navigation

- Hamburger icon (three lines → X animation on open, 0.3s)
- Full-screen overlay: background `--color-navy-dark`
- Links: Centered vertically, DM Serif Display, 28px, white, staggered fade-in (0.1s per link)
- At bottom: phone number + email as tappable links, full-width crimson CTA button
- Top bar collapses fully on mobile

### 3.4 Footer

```
+------------------------------------------------------------------------+
|  [LOGO — light version]                                                |
|  Safe. Secure. Risk-Free Debt Recovery.                                |
|                                                                        |
|  SERVICES          COMPANY           INDUSTRIES      GET IN TOUCH      |
|  Debt Collection   About Us          Schools         062 116 5638      |
|  Credit Bureau     How It Works      Medical         081 415 8260      |
|  Tracing           FAQ               Business        anycollections@   |
|  Follow-Ups        Privacy Policy                    outlook.com       |
|  Reporting         Terms                             Howick, KZN       |
|                                                                        |
|  Reg No: 2025/184330/07  |  Howick, KwaZulu-Natal, South Africa       |
+------------------------------------------------------------------------+
|  © 2025 Any Collections Pty Ltd. All Rights Reserved.                  |
|  Privacy Policy  |  Terms of Service                                   |
+------------------------------------------------------------------------+
```

- Background: `--color-espresso` (`#3D1F12`) — distinct from the navy of the rest of the site, grounds the footer
- Column headings: Inter 600, 13px, uppercase, letter-spacing 0.1em, `--color-crimson`
- Links: Inter 400, 14px, `rgba(255,255,255,0.6)`, hover white
- Bottom bar: slightly darker, separated by 1px `rgba(255,255,255,0.1)` rule

---

## 4. HOME PAGE — SECTION-BY-SECTION BREAKDOWN

### SECTION 1: HERO — "The Command"

**Purpose:** Establish authority immediately. The visitor must feel in the first 3 seconds that they have found the right people.

**Layout:** Full-viewport (`100vh`). Two-column on desktop: 55% content (left), 45% visual (right). Background: `--color-ivory` (`#FAF8F5`).

**Left Column Content:**

- **Eyebrow:** Inter 600, 12px, `--color-crimson`, uppercase, letter-spacing 0.15em:
  `SAFE. SECURE. RISK-FREE.`

- **H1 (Display XL):** DM Serif Display, 64px, `--color-navy`:
  `We Recover What's Yours.`

- **Sub-headline:** Inter 400, 20px, `--color-warm-600`, max-width 520px:
  `South Africa's trusted debt collection partner for schools, medical practices, and businesses. No upfront fees. No risk. Just results — and your money back, monthly.`

- **CTA Group:**
  - Primary (large crimson): `Book a Free Consultation`
  - Secondary (navy outline, large): `See How It Works`

- **Trust micro-bar** (below CTAs, Inter 400, 13px, `--color-warm-400`):
  - `[shield] Registered & Compliant` | `[map-pin] Nationwide Coverage` | `[lock] No Upfront Fees`

**Right Column Visual:**
- Softly rounded container (`radius-xl`, `shadow-lg`), background `--color-navy-tint` (`#E8EEF5`).
- Inside: High-quality South African business photography — a confident, professional woman in a well-lit office environment. Warm, aspirational, diverse.
- The shield/hand/coin logo mark (icon only, not wordmark) rendered as a large subtle watermark at 7% opacity behind the image — brand reinforcement without clutter.
- **Crimson diagonal accent:** A thin CSS `clip-path` diagonal stripe in `--color-crimson` at 5% opacity cut across the image's bottom-right corner — ties the visual to the brand.

**Entrance Animations (on load):**
1. Eyebrow: `fade-in`, 0.3s delay
2. H1: `slide-up` (translateY 20px → 0, opacity 0 → 1), 0.5s, 0.4s delay
3. Sub-headline: `fade-in`, 0.6s delay
4. CTA group: `slide-up`, 0.7s delay
5. Trust bar: `fade-in`, 0.9s delay
6. Right image: `scale-in` (0.97 → 1.0) + fade-in, 0.3s delay
7. Primary CTA: A single box-shadow pulse (`rgba(192,57,43,0.4)` expands to transparent) plays once at 1.5s after load — draws the eye without being obnoxious

---

### SECTION 2: AUTHORITY BAR — "The Numbers"

**Purpose:** Immediately cut through skepticism with hard facts. Intercepts the "can I trust them?" thought before it forms.

**Layout:** Full-width band. Background: `--color-crimson`. Padding: 48px top/bottom. Content centered in a 4-column row.

**Content (4 stat tiles):**

| Icon | Stat | Sub-label |
|---|---|---|
| Shield-check | `REGISTERED` | `Reg. No: 2025/184330/07` |
| Rand symbol | `R0` | `Upfront Fees — Zero Risk` |
| Map outline (SA) | `NATIONWIDE` | `All 9 Provinces Covered` |
| Calendar-check | `MONTHLY` | `Direct Payments to You` |

- Stat values: JetBrains Mono 700, 40px, white
- Sub-labels: Inter 400, 13px, `rgba(255,255,255,0.75)`
- Icons: 36px white SVG outlines
- Dividers: 1px `rgba(255,255,255,0.15)` vertical lines between stats

**Animations:** Each stat animates in with a 0.15s stagger (slide-up) as the section enters the viewport. "R0" and "MONTHLY" just appear; "NATIONWIDE" types in letter by letter; "REGISTERED" and numerical values count up.

---

### SECTION 3: THE PROBLEM — "We Understand Your Pain"

**Purpose:** Agitate the pain before presenting the solution. When visitors see their exact frustration described, they form emotional trust immediately. This is the most important conversion section on the page.

**Layout:** Two-column (50/50). Left: large text content. Right: three stacked pain point cards. Background: `--color-ivory`. Padding: `space-10` top/bottom.

**Left Column:**

- Eyebrow: `THE CHALLENGE`
- H2 (DM Serif Display, 36px, `--color-navy`):
  `"Outstanding Debt Doesn't Just Affect Your Balance Sheet — It Affects Everything"`
- Body (Inter 400, 16px, `--color-charcoal`, max-width 460px):
  *"When clients or parents don't pay, the impact ripples through your entire operation. Cash flow tightens. Staff costs become stressful. Growth plans stall. And chasing the money yourself risks damaging the very relationships your business depends on."*

  *"You didn't build your school, practice, or business to become a debt collector. That's our job."*

- CTA: Navy outline button: `Let Us Collect for You`

**Right Column (3 Pain Point Cards):**

Card structure: white bg, 1px `--color-warm-100` border, `radius-lg`, padding `space-5`, `shadow-sm`. Left-side icon (48px, `--color-espresso` at 60% opacity) + right-side text (H4 + body-sm).

| Icon | Title | Description |
|---|---|---|
| Clock | `Hours Lost Chasing Payments` | Every call to a debtor is time stolen from your core work. |
| Handshake | `Relationships at Risk` | Chasing debt directly can damage long-standing client bonds. |
| Trending-down | `Cash Flow Under Pressure` | Unpaid invoices create a domino effect across your entire business. |

**Animations:** Cards stagger in from the right (translateX 30px → 0) as section scrolls into view. On hover: `translateY(-4px)`, shadow-md transition.

---

### SECTION 4: SERVICES OVERVIEW — "The Full Arsenal"

**Purpose:** Establish breadth and depth. Position Any Debt Collections as a complete, end-to-end debt recovery operation — not just a phone-call service.

**Layout:** Background: `--color-white`. Full-width, content max-width 1200px. Section heading centered. 3-column card grid (6 cards, + 1 seventh card full-width or centred on last row). Padding: `space-10` top/bottom.

**Section Heading:**
- Eyebrow: `OUR SERVICES`
- H2: `"A Complete System — From First Contact to Final Payment"`
- Sub-heading: Inter 400, 18px, `--color-warm-600`, max-width 600px, centered:
  `"We handle every step so you can focus on running your business."`

**Service Cards (7):**

Card structure: Background `--color-warm-50`, `radius-lg`, `shadow-sm`, padding `space-6`. Top-border 4px alternating `--color-navy` and `--color-crimson`. 48px line-style icon (matching top-border colour). H3 card title. Body-sm description. Text-link "Learn more →".

| # | Title | Description |
|---|---|---|
| 1 | Debt Collection | Professional, persistent recovery using proven, ethical methods. We do the hard work so you don't have to. |
| 2 | Credit Bureau Listings | Non-paying debtors are listed on credit bureaus — real consequences that motivate payment. |
| 3 | Tracing Services | Debtor relocated? Gone quiet? Our nationwide tracing capabilities find them. |
| 4 | Regular Follow-Ups | Structured, consistent contact schedules. No case ever goes cold. |
| 5 | Monthly Reporting | Full transparency. A detailed account of every case status, every month. |
| 6 | Monthly Payments to Clients | Recovered funds paid directly into your account each month. No delays, no complications. |
| 7 | Client Relationship Management | A dedicated point of contact. We treat your business as our own. |

**Animations:** Cards stagger in with fade-up on scroll. On hover: `translateY(-6px)`, shadow elevates to `shadow-lg`, top border thickens to 6px, icon colour transitions. "Learn more →" arrow slides 6px right on hover.

---

### SECTION 5: INDUSTRIES — "Built for Your World"

**Purpose (B's insight):** Specificity is the most powerful trust builder. Showing you understand a school principal's problems — not just "businesses in general" — creates an instant "these people understand my world" moment.

**Layout:** Background: `--color-navy-dark`. Full-width. Three large horizontal alternating-image cards, stacked. Padding: `space-10` top/bottom.

**Section Heading (centred, white):**
- Eyebrow (crimson): `INDUSTRIES WE SERVE`
- H2 (DM Serif Display, white): `"Tailored Recovery for Your Sector"`

**Card 1 — Schools (Image Left, Content Right):**
```
+--[School image]--+--[Content]--------------------+
|                  | Label: SCHOOLS & EDUCATION     |
|                  | H2: "Protecting School         |
|                  |  Finances — From Pre-School    |
|                  |  to High School"               |
|                  | Body: ...                      |
|                  | [Learn More →] (outline white) |
+------------------+--------------------------------+
```
- Body: *"Unpaid school fees affect every child's education. We recover outstanding fees ethically and respectfully, preserving your school's reputation and parent relationships."*

**Card 2 — Medical (Content Left, Image Right):**
- Label: `DOCTORS & DENTISTS`
- H2: `"Recover Patient Fees Without Compromising Care"`
- Body: *"Medical professionals face a unique challenge: patients are also people in vulnerable moments. We collect outstanding medical and dental fees with the empathy your patients deserve — and the firmness your practice needs."*

**Card 3 — Business (Image Left, Content Right):**
- Label: `BUSINESSES OF ALL SIZES`
- H2: `"From Startups to Corporates — Get Paid What You're Owed"`
- Body: *"Whether you're a sole proprietor waiting on one critical invoice or an enterprise managing hundreds of accounts, our approach scales to your needs. No debt is too big or too small."*

**Card styling:** Background `rgba(255,255,255,0.05)`, border `1px rgba(255,255,255,0.1)`, `radius-lg`, overflow hidden. Image container height 100%, object-fit cover.

**Animations:** Each card slides in from its image side on scroll. Image subtly zooms (`scale 1.0 → 1.03`) within its overflow-hidden container on card hover. Label gets a crimson underline that expands from 0% to 100% width on hover.

---

### SECTION 6: HOW IT WORKS — "Clarity Creates Confidence"

**Purpose (B's insight — most important trust builder):** When a potential client can see exactly what will happen, anxiety drops dramatically. The unknown becomes known. This converts skeptics into believers.

**Layout:** Background: `--color-navy-dark`. Centred content, max-width 900px. A 4-step visual timeline. Padding: `space-11` top/bottom.

**Section Heading (white):**
- Eyebrow (crimson): `THE PROCESS`
- H2 (DM Serif Display, white): `"From Your First Call to Cash in Your Account — in Four Steps"`
- Sub: `rgba(255,255,255,0.7)`, 18px: *"No complexity. No hidden steps. Here's exactly what happens when you partner with us."*

**Timeline Design:**
- Vertical connecting line: 2px `rgba(255,255,255,0.15)`, with `--color-crimson` animated fill (SVG stroke-dashoffset draw animation triggered by scroll position)
- Step marker: `--color-crimson` circle dot (12px) with a subtle pulse ring

**Steps:**

| Step | Icon | Title | Body |
|---|---|---|---|
| `01` | Phone | `We Listen and Assess` | Contact us for a free, no-obligation consultation. We review your outstanding debts, understand your industry, and explain our approach honestly. |
| `02` | Folder | `You Hand Over, We Take Over` | Provide your debtor information. We handle everything from here — clear service agreement, transparent terms, no upfront costs. |
| `03` | Activity | `Structured, Ethical Recovery Begins` | Our team initiates compliant contact, tracing, credit bureau action, and consistent follow-ups. You receive monthly reports throughout. |
| `04` | Banknote | `Recovered Funds to Your Account` | As debts are recovered, payments go directly into your account every month. No waiting, no complicated settlements. |

- Step numbers: JetBrains Mono 700, 28px, `--color-crimson` at 30% opacity (large background watermark behind each step)
- Icons: 44px white SVG line-style
- Titles: Inter 600, 20px, white
- Body: Inter 400, 15px, `rgba(255,255,255,0.75)`

**Inline CTA (below steps):** Crimson card, radius-lg, padding space-6, centred:
- H3 (white): `"Ready to Start? Your First Consultation Is Free."`
- Large white button: `Book Free Consultation`

**Animations:** Timeline line draws downward with scroll. Each step fades in as the line reaches it. Step numbers pulse very slowly between 20% and 35% opacity.

---

### SECTION 7: TRUST SIGNALS — "The Evidence"

**Purpose:** Rational trust. Satisfy the analytical mind that needs hard facts before committing.

**Layout:** Background: `--color-white`. 3x2 card grid (6 cards). Centred heading, max-width 1200px. Padding: `space-10` top/bottom.

**Section Heading:**
- Eyebrow: `WHY CHOOSE US`
- H2: `"Built on Transparency, Trust, and Results"`

**Trust Cards (6):**

Card styling: `--color-warm-50` bg, `radius-lg`, `shadow-sm`, padding `space-6`, text-align center. Icon: 40px, `--color-navy`. H4 title: `--color-navy`. Body-sm description: `--color-warm-600`. Left accent border on hover: 4px `--color-crimson`.

| Icon | Title | Description |
|---|---|---|
| Shield-check | Registered & Compliant | Reg. No. 2025/184330/07. We operate fully within South African debt collection legislation. |
| Lock | No Upfront Fees | You pay nothing until we recover. Zero financial risk to your business. |
| Map | Nationwide Coverage | All 9 provinces. From Johannesburg to Cape Town, Durban to Howick. |
| Eye | Full Transparency | Monthly reports detail every action, every rand recovered, every case status. |
| Heart-handshake | Ethical Recovery | Firm but fair — always compliant, always respectful. Your reputation is protected. |
| Clock | Consistent Follow-Ups | No case falls through the cracks. Structured schedules, relentless persistence. |

**Animations:** Staggered grid fade-in on scroll. Icon colour-shifts to `--color-crimson` on card hover.

---

### SECTION 8: TESTIMONIALS — "Don't Take Our Word for It"

**Purpose:** Third-party validation. More powerful than any self-claim.

**Layout:** Background: `--color-navy-tint` (`#E8EEF5`). Single featured testimonial with carousel dots. Centred, max-width 760px. Padding: `space-10` top/bottom.

**Section Heading:**
- Eyebrow: `CLIENT FEEDBACK`
- H2: `"Trusted by Schools, Practices, and Businesses Across South Africa"`

**Testimonial Card:**
- Large decorative `"` mark: DM Serif Display, 120px, `--color-navy` at 10% opacity
- Quote: Inter 400, 20px, `--color-charcoal`, italic, centred:
  *"We were drowning in outstanding school fees. Any Debt Collections took the burden off our shoulders entirely. Their monthly reports are impeccable and the recoveries have been steady. We wish we'd started sooner."*
- Attribution: Inter 600, 16px, `--color-navy`: `"— School Administrator, KwaZulu-Natal"`
- Industry badge: Pill shape, `--color-navy` bg, white text, `caption`: `Education Sector`

**Carousel:** Auto-advances every 6 seconds. Dot navigation. Crossfade 0.5s transition. Data stored as JSON array for easy updates.

---

### SECTION 9: FAQ PREVIEW — "Questions Answered"

**Purpose:** Objection handling. Every unanswered question is a reason not to convert. Neutralise the four most common objections here.

**Layout:** Background: `--color-ivory`. Two-column: left heading + CTA, right 4 accordion items. Padding: `space-10` top/bottom.

**Left Column:**
- Eyebrow: `COMMON QUESTIONS`
- H2: `"Everything You Need to Know — Before You Even Ask"`
- Body: *"We believe in full transparency. Here are the questions we hear most often."*
- CTA: Outline button: `View All FAQs`

**Right Column — Accordion:**

**Q1:** `"What are your fees?"`
**A1:** *"We work on a commission basis — you only pay when we successfully recover your debt. No upfront costs, no retainers, no hidden fees. We'll explain everything clearly during your free consultation."*

**Q2:** `"Will you damage my relationship with clients or parents?"`
**A2:** *"Absolutely not. Debtors are often your ongoing clients, patients, or parents. Our approach is firm but respectful — we protect your reputation while recovering what you're owed."*

**Q3:** `"How long does recovery take?"`
**A3:** *"Every case is different. Some debts recover within weeks; others take longer. We provide monthly progress reports so you're never left guessing. The important thing: we never give up."*

**Q4:** `"Do you cover my area?"`
**A4:** *"Yes. We operate nationwide across all 9 provinces of South Africa. Wherever you are, wherever your debtors are — we've got you covered."*

**Accordion styling:** Border-bottom 1px `--color-warm-100`. Question row: flex, space-between, align-center, padding `space-5` vertical, cursor pointer. Question: Inter 600, 17px, `--color-navy`. Chevron: 20px, rotates 180° on open, 0.3s. Answer: Inter 400, 15px, `--color-charcoal`, smooth height transition.

**Schema:** Each Q&A pair marked up with `FAQPage` JSON-LD schema for Google rich snippets.

---

### SECTION 10: FINAL CTA — "The Moment of Decision"

**Purpose:** Every preceding section has built the case. Now make the action completely effortless.

**Layout:** Full-width. Background: `--color-navy` (`#1E3A5F`). Centred content. Padding: `space-11` top/bottom.

**Content:**
- H2 (DM Serif Display, 48px, white): `"Stop Losing Money. Start Recovering It."`
- Sub (Inter 400, 18px, `rgba(255,255,255,0.8)`, centred, max-width 560px):
  *"Book a free, no-obligation consultation today. Tell us about your outstanding debts — we'll show you exactly how we can help, with zero risk and zero upfront cost."*

**CTA Group:**
- Primary (large crimson): `Book Your Free Consultation`
- Secondary (white outline, large): `Call Us: 062 116 5638`

**Trust line** (below buttons, `caption`, `rgba(255,255,255,0.45)`):
`No contracts until you're ready. No fees until we deliver. Reg. No. 2025/184330/07`

**Background:** Very subtle `rgba(255,255,255,0.03)` shield watermark at centre. Slow gradient shift animation (navy → slightly lighter navy, 20s loop) — living, breathing feel.

**Animations:** Content fades in on scroll. Crimson button single-pulse on scroll entry.

---

### SECTION 11: CONTACT FORM

**Purpose:** Capture leads from visitors who prefer forms over calls.

**Layout:** Background: `--color-ivory`. White form card, `shadow-lg`, `radius-lg`, max-width 800px, centred. Padding: `space-10` top/bottom.

**Fields:**
- Full Name (text), Business Name (text)
- Email (email), Phone (tel)
- Industry (select: School / Medical / Enterprise / Other)
- Estimated Outstanding Debt (select: Under R10,000 / R10k–R50k / R50k–R200k / R200k+ / Prefer not to say)
- Message (textarea, 5 rows)

**CTA:** Full-width crimson: `Send Message`
**Trust note:** `caption`, `--color-warm-400`: *"We'll respond within 24 hours. Your information is kept strictly confidential and complies with POPIA."*

**Submission:** Dual delivery to `anycollections@outlook.com` AND `anycollectionsptyltd@gmail.com` via Formspree/Netlify Forms. Success state: form fades to a check-circle icon success message.

---

### SECTION 12: MAP & LOCATION

**Layout:** 60/40 split. Left: Google Maps embed (Howick, KZN, custom navy/crimson marker). Right: `--color-navy-dark` bg, white text.

**Right Content:**
- Eyebrow (crimson): `FIND US`
- H3 (white): `"Howick, KwaZulu-Natal"`
- Body (rgba white 0.75): `"South Africa"`
- Separator line
- Body: `"We serve clients nationwide across all 9 provinces."`
- Small SVG SA map silhouette with all provinces shown

---

## 5. COMPONENT LIBRARY

### 5.1 Section Header Pattern
```
[Eyebrow text] — Inter 600, 12px, --color-crimson, uppercase, letter-spacing 0.15em
[Heading]      — DM Serif Display, variable size, --color-navy (or white on dark)
[Sub-heading]  — Inter 400, 18px, --color-warm-600 (or rgba white)
[Crimson underline accent — 60px wide, 3px thick, centered, below heading]
```

### 5.2 Service Card
```
+---[4px top border: navy or crimson]---+
| [48px line icon — matching border]    |
| [H3 title — Inter 600, --color-navy]  |
| [Body-sm description]                 |
| [Learn more →  text-link]             |
+---------------------------------------+
```
Background: `--color-warm-50`. Hover: bg `--color-white`, shadow-lg, top border grows to 6px, icon colour shifts, arrow slides right.

### 5.3 Trust Badge
- Centred layout: icon (top), title (H4), description (body-sm)
- Background: `--color-warm-50`, radius-lg, shadow-sm, padding space-6
- Hover: icon → crimson, left border 4px crimson appears, shadow-md

### 5.4 Industry Card (Dark Variant)
- Horizontal split (50/50): image | content
- Image: `object-fit: cover`, height 100%, overflow hidden (zoom on hover)
- Content: Navy dark bg section, padding space-6
- Eyebrow in crimson, H2 in DM Serif Display white, body in rgba-white, outline-white CTA button

### 5.5 Accordion Item
- Border-bottom: 1px `--color-warm-100`
- Question: Inter 600, 17px, `--color-navy`. Chevron rotates 180° on open.
- Answer: Inter 400, 15px, `--color-charcoal`. Height transition 0.3s ease.
- Open state: question `--color-crimson`

### 5.6 Stat Counter
- Value: JetBrains Mono 700, large, white (on dark backgrounds)
- Label: Inter 400, 13px, `rgba(255,255,255,0.7)`
- Vertical dividers between counters

### 5.7 Contact Card (on dark backgrounds)
- Background: `rgba(255,255,255,0.08)`, border `1px rgba(255,255,255,0.15)`, radius-lg, padding space-5
- Icon: 36px white
- Label: Inter 600, 14px, white
- Value: Inter 400, 16px, rgba-white

### 5.8 Form Input
```
[Label: Inter 600, 13px, --color-charcoal]
[____________________________________ ]  ← 48px height, 1px --color-warm-100 border
```
- Focus: `--color-navy` border, 3px rgba-navy shadow ring
- Error: `--color-crimson` border, 3px rgba-crimson ring, error text below (caption, crimson)
- Success: `--color-success` border, check icon right-aligned
- Transitions: 0.2s ease

### 5.9 Floating WhatsApp Button (Mobile)
- Position: fixed, bottom-right, z-index 1000 (below any modals)
- 56px circle, background `#25D366` (WhatsApp green — do NOT use brand crimson, this must be recognisable)
- WhatsApp icon (white, 28px)
- On tap: opens `https://wa.me/27621165638?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20debt%20collection%20services.`
- Gentle pulse animation every 5s. Tooltip on hover (desktop): "Chat on WhatsApp"
- Rationale: WhatsApp is the #1 business communication channel in South Africa. This button alone could double the contact rate.

### 5.10 Sticky Mobile CTA Bar
- Position: fixed, bottom 0, full width, z-index 999
- Height: 56px. Background: `--color-crimson`.
- Full-width text: `Book Free Consultation — No Upfront Fees`
- Font: Inter 600, 15px, white, centred
- Only shown on mobile (hidden above 768px breakpoint)
- Appears after user scrolls past the hero (IntersectionObserver on hero bottom edge)
- Sits above the WhatsApp floating button

### 5.11 Scroll-to-Top Button
- Appears after 800px scroll. Fade-in, 48px circle, `--color-navy`, white up-arrow icon.
- Hover: `--color-navy-light`. Bottom-right, above WhatsApp button.

---

## 6. MOBILE STRATEGY

### Breakpoints
```css
/* Mobile first */
/* Base: 0px+ */
@media (min-width: 640px)  { /* Tablet small */ }
@media (min-width: 768px)  { /* Tablet */       }
@media (min-width: 1024px) { /* Desktop */      }
@media (min-width: 1400px) { /* Wide */         }
```

### Key Mobile Adaptations

| Component | Desktop | Mobile |
|---|---|---|
| Top bar | Crimson, full details | Single phone number + email icon only |
| Header | Full nav | Hamburger → full-screen overlay |
| Hero | Two-column split | Single column, text first, image below |
| Hero H1 | 64px DM Serif | 42px |
| Authority Bar | 4 horizontal stats | 2×2 grid |
| Problem section | Two-column | Stack: text first, pain cards below |
| Services | 3-column grid | Single column cards |
| Industries | Alternating split | Image top, content below (stacked) |
| How It Works | Horizontal timeline | Vertical numbered card stack |
| Trust signals | 3×2 grid | 2×3 grid |
| FAQ | Two-column | Full-width accordion, single column |
| Final CTA | Centred two-button row | Stacked buttons, full-width |
| Contact Form | 2-column field layout | Single column |
| Map | 60/40 split | Full-width map on top, text below |
| All CTAs | Standard sizing | Full-width on mobile (min height 48px) |

### Touch & Accessibility
- All interactive elements minimum 44×44px touch target
- Hover effects replaced by immediate tap-state styling (`@media (hover: none)`)
- Phone numbers: all `<a href="tel:+27...">` links
- WhatsApp button and sticky bar are mobile-only (`display: none` on desktop)
- `prefers-reduced-motion`: disables all scroll animations, transitions shortened to 0.01ms

---

## 7. CONVERSION STRATEGY

### 7.1 CTA Placement (5 Touch-points)

| # | Location | Text | When Reached |
|---|---|---|---|
| 1 | Header (persistent) | `Free Consultation` (small crimson) | Always visible |
| 2 | Hero | `Book a Free Consultation` (large crimson) | Immediate — for ready visitors |
| 3 | How It Works — inline banner | `Book Free Consultation` | After understanding the process |
| 4 | Final CTA section | `Book Your Free Consultation` (large) | Full trust built |
| 5 | Mobile sticky bar | `Book Free Consultation — No Upfront Fees` | Persistent for mobile scrollers |

### 7.2 Trust Signals Distribution

| Signal | Locations |
|---|---|
| `Reg. No. 2025/184330/07` | Authority bar, final CTA, footer, About page |
| `No Upfront Fees` | Hero trust bar, authority bar, trust section, FAQ, final CTA, sticky bar |
| `Free Consultation` | Every CTA, header |
| Process transparency | How It Works section (dedicated) |
| Industry specificity | Industries section — most powerful implicit trust builder |
| Monthly reporting commitment | Services, How It Works, Value Props |
| POPIA compliance | Contact form, footer, Privacy Policy link |

### 7.3 Natural Urgency (not manipulative — important for SA professional market)

Avoid countdown timers or fake scarcity. Use real, factual urgency:
- *"Every month without action is another month of lost revenue"*
- *"The sooner we start, the higher the average recovery rate"*
- *"Free consultation — no obligation, no cost, no risk"* (removes every barrier)

### 7.4 Form Optimisation

- Industry dropdown allows immediate segmentation for personalised follow-up
- Debt value dropdown: low commitment (range, not exact) — reduces anxiety
- "We'll respond within 24 hours" — sets expectations, reduces anxiety
- POPIA note — addresses privacy concern directly

---

## 8. SEO & CONTENT STRATEGY

### 8.1 Meta Structure

**Home:**
```html
<title>Any Debt Collections | Safe, Secure Debt Recovery — South Africa</title>
<meta name="description" content="Any Collections Pty Ltd (Reg. 2025/184330/07) is a nationwide South African debt collection agency. No upfront fees. Schools, medical practices, and businesses. Free consultation. Howick, KZN.">
```

**About:** `"About Any Debt Collections | Registered SA Debt Recovery Agency"`

**Services:** `"Debt Collection Services | Credit Bureau, Tracing & Recovery — South Africa"`

**Schools:** `"School Fee Collection | Debt Recovery for Schools South Africa"`

**Medical:** `"Medical Debt Collection | Recovery for Doctors & Dentists South Africa"`

**Business:** `"Business Debt Collection | SME & Corporate Recovery South Africa"`

### 8.2 Schema Markup (JSON-LD)

**Home page — LocalBusiness:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Any Collections Pty Ltd",
  "alternateName": "Any Debt Collections",
  "legalName": "Any Collections Pty Ltd",
  "url": "https://anydebtcollections.co.za",
  "telephone": ["+27621165638", "+27814158260"],
  "email": "anycollections@outlook.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Howick",
    "addressRegion": "KwaZulu-Natal",
    "addressCountry": "ZA"
  },
  "areaServed": { "@type": "Country", "name": "South Africa" },
  "description": "Nationwide South African debt collection agency. Safe, secure, risk-free. No upfront fees. Schools, medical, businesses.",
  "priceRange": "Commission-based — no upfront fees",
  "image": "/assets/logo.png"
}
```

Additional: `FAQPage` schema on home FAQ + `/faq`, `BreadcrumbList` on inner pages, `Service` schema on `/services`.

### 8.3 Target Keywords

**Primary (high purchase intent):**
- debt collection south africa
- debt recovery agency south africa
- credit bureau listing service south africa
- school fee collection south africa
- medical debt collection south africa

**Long-tail:**
- debt collection no upfront fees south africa
- ethical debt collection south africa
- trace debtors south africa
- school fee debt recovery kwazulu-natal
- debt collection for doctors south africa
- small business debt recovery south africa

**Local:**
- debt collection howick
- debt recovery kwazulu-natal
- debt collection kzn

### 8.4 Blog Content Plan (launch with 3, publish monthly thereafter)

**Foundational articles (at launch):**
1. *"What to Do When Clients Won't Pay: A South African Business Owner's Guide"*
2. *"Understanding Credit Bureau Listings: What Every South African Business Should Know"*
3. *"School Fee Debt: How Schools Can Recover Ethically and Legally"*

**Ongoing (monthly):**
4. *"Why Medical Practices Need Professional Debt Recovery"*
5. *"The Debt Collection Act: Your Rights as a Creditor in South Africa"*
6. *"Cash Flow Management for Small Businesses: Preventing Bad Debt"*
7. *"How Tracing Services Work in South Africa"*
8. *"Commission vs. Retainer: Understanding Debt Collection Fee Structures"*

---

## 9. PERFORMANCE & TECH STACK

### 9.1 Recommended Stack: Astro + Tailwind CSS

| Concern | Solution | Rationale |
|---|---|---|
| **Framework** | **Astro 4.x** | Zero-JS by default. Pre-renders to static HTML. Perfect for a brochure/conversion site. Island architecture for the few interactive components. |
| **Styling** | **Tailwind CSS v4** | Design tokens map directly to Tailwind config. Tiny CSS output. No class name conflicts. Consistent naming across team. |
| **Icons** | **Lucide Icons** (SVG) | Clean, consistent line-style. Tree-shakeable. Inline SVGs avoid icon-font FOIT. |
| **Animations** | **CSS + IntersectionObserver** (vanilla JS) | No GSAP needed. Native, performant. ~3KB of JS total for all animations. |
| **Forms** | **Formspree** (or Netlify Forms) | No backend. Sends to both email addresses. Built-in spam protection. |
| **Images** | **Astro `<Image>` component** | Auto WebP conversion, responsive srcset, lazy loading, prevents CLS. |
| **Fonts** | **Self-hosted WOFF2** (downloaded from Google Fonts) | Eliminates render-blocking external request. Full control over cache headers. |
| **Analytics** | **Google Analytics 4** (deferred) | Free, standard. Non-blocking. |
| **Hosting** | **Netlify** | Free tier sufficient. Global CDN. Auto SSL. Built-in form handling. Auto-deploy from Git. |
| **Domain** | `anydebtcollections.co.za` | `.co.za` for South African SEO trust signal. |
| **CMS (future)** | **Decap CMS** (formerly Netlify CMS) | If Angelique needs to update content directly — Git-based, visual editor, integrates with Astro. |

**Why not Next.js?** This is a 13-page static brochure site with one contact form. Next.js would add unnecessary JS bundle weight, complexity, and cost. Astro ships near-zero JavaScript.

### 9.2 Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 100 |
| Lighthouse SEO | 100 |
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.0s |
| Cumulative Layout Shift | < 0.05 |
| Total JS Bundle | < 20KB |
| Total Page Weight (home) | < 500KB |

### 9.3 Project File Structure

```
/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro        ← HTML shell, meta, fonts, GA4
│   ├── pages/
│   │   ├── index.astro             ← Home
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── how-it-works.astro
│   │   ├── faq.astro
│   │   ├── contact.astro
│   │   ├── resources/
│   │   │   └── index.astro
│   │   ├── industries/
│   │   │   ├── index.astro
│   │   │   ├── schools.astro
│   │   │   ├── medical.astro
│   │   │   └── business.astro
│   │   ├── privacy-policy.astro
│   │   └── terms.astro
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBar.astro
│   │   │   ├── Header.astro
│   │   │   └── Footer.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── AuthorityBar.astro
│   │   │   ├── ProblemSection.astro
│   │   │   ├── ServicesGrid.astro
│   │   │   ├── IndustriesSection.astro
│   │   │   ├── HowItWorks.astro
│   │   │   ├── TrustSignals.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── FAQPreview.astro
│   │   │   ├── FinalCTA.astro
│   │   │   ├── ContactForm.astro
│   │   │   └── MapSection.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── ServiceCard.astro
│   │       ├── TrustBadge.astro
│   │       ├── IndustryCard.astro
│   │       ├── TestimonialCard.astro
│   │       ├── AccordionItem.astro
│   │       ├── StatCounter.astro
│   │       ├── SectionHeader.astro
│   │       ├── ContactCard.astro
│   │       ├── FormInput.astro
│   │       ├── WhatsAppFAB.astro
│   │       ├── MobileCTABar.astro
│   │       └── ScrollToTop.astro
│   └── scripts/
│       ├── scroll-animations.js    ← IntersectionObserver animations
│       ├── counter.js              ← Stat count-up
│       ├── accordion.js            ← FAQ accordion
│       ├── mobile-menu.js          ← Hamburger menu
│       └── testimonial-carousel.js
├── public/
│   ├── assets/
│   │   ├── logo.png                ← Source logo (existing)
│   │   ├── logo-light.png          ← White/light version (to create)
│   │   └── favicon/                ← Existing favicons
│   ├── fonts/
│   │   ├── dm-serif-display.woff2
│   │   ├── inter-*.woff2
│   │   └── jetbrains-mono-*.woff2
│   └── images/                     ← Optimised photography
├── tailwind.config.mjs             ← All design tokens
└── astro.config.mjs
```

---

## 10. ANIMATIONS & INTERACTIONS

### 10.1 Philosophy: Calm Confidence

Every animation must be **deliberate, restrained, and purposeful.** No animation should feel playful or flashy. This is a professional financial services site. The mood: *calm, assured authority.*

A motion should either:
- Guide attention to something important
- Provide clear action feedback
- Signal quality and care
- Smooth a jarring transition

### 10.2 Scroll Animations (IntersectionObserver, threshold: 0.15)

| Animation | CSS | Used by |
|---|---|---|
| `fade-up` | `opacity:0, translateY(20px) → opacity:1, translateY(0)` | Default for all section content |
| `fade-left` | `opacity:0, translateX(-30px) → ...` | Left-side content |
| `fade-right` | `opacity:0, translateX(30px) → ...` | Right-side content |
| `scale-in` | `opacity:0, scale(0.97) → opacity:1, scale(1)` | Image containers, hero visual |
| `stagger` | `fade-up` with `animation-delay: calc(var(--i) * 0.1s)` per child | Card grids, badges |
| `draw-line` | `stroke-dashoffset: totalLength → 0` | How It Works timeline |
| `count-up` | JS: `0 → finalValue`, ease-out, 1.5s | Stats counters |
| `type-in` | JS: characters appear one by one | "NATIONWIDE" stat |

Default duration: 0.6s. Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`.

### 10.3 Hover Effects

| Element | Effect | Duration |
|---|---|---|
| Nav links | Colour → `--color-crimson` | 0.2s |
| Active nav link | Crimson underline slides from left (`scaleX: 0→1`, origin: left) | 0.2s |
| Primary button | `translateY(-2px)` + shadow-crimson intensifies | 0.2s |
| Outline button | Background fills, text becomes white | 0.25s |
| Service cards | `translateY(-6px)`, shadow-lg, top border thickens, icon → crimson | 0.25s |
| Trust badges | Icon → crimson, left crimson border appears, shadow-md | 0.2s |
| Industry cards | Image zooms to scale(1.03) within overflow hidden | 0.4s |
| Industry card label | Crimson underline expands width: 0% → 100% | 0.3s |
| Text links | Colour → crimson, underline appears | 0.15s |
| Footer links | Colour → white | 0.15s |
| Accordion question | Colour → crimson on open | 0.2s |
| Form inputs | Navy border, 3px rgba glow ring | 0.2s |

### 10.4 Form Interaction States

- **Focus:** `--color-navy` border, soft glow ring `0 0 0 3px rgba(30,58,95,0.1)`
- **Validation error:** Crimson border + ring, error message fades down below input. On failed submit: shake (`translateX: 0 -6 6 -4 4 0`, 0.4s).
- **Validation success:** `--color-success` border, check icon appears inside right edge.
- **Submit in progress:** Button text → "Sending…" + small inline spinner, button disabled.
- **Submit success:** Form crossfades (0.5s) to success message: check-circle icon + *"Thank you! We'll be in touch within 24 hours."* (Inter 500, `--color-success`)

### 10.5 Mobile Hamburger

Three lines: top rotates +45°, middle fades out (`opacity:0, scaleX:0`), bottom rotates -45°. All over 0.3s ease. Creates an X mark. Reverses on close.

### 10.6 Reduced Motion Compliance

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 11. IMPLEMENTATION SEQUENCE

| Phase | Work | Duration |
|---|---|---|
| **Phase 1 — Foundation** | Astro setup, Tailwind config (all design tokens), BaseLayout, TopBar, Header, Footer, favicon/meta, self-hosted fonts | Week 1 |
| **Phase 2 — Home Page** | All 12 home sections, desktop-first, full content + styling | Week 2 |
| **Phase 3 — Inner Pages** | About, Services, Industries (3 pages), How It Works, FAQ, Contact, Privacy, Terms | Week 3 |
| **Phase 4 — Interactions** | Scroll animations, hover effects, form validation + submission, WhatsApp FAB, mobile sticky bar, carousel, accordion | Week 4 |
| **Phase 5 — Polish & Launch** | Responsive testing, Lighthouse audit, SEO/schema audit, form integration testing, cross-browser testing, Netlify deploy, custom domain | Week 5 |
| **Phase 6 — Post-Launch** | GA4 + Search Console setup, blog article #1 published, Google Business Profile, testimonial collection, monthly review | Ongoing |

---

## 12. PRE-BUILD CHECKLIST

Before writing the first line of code, complete these:

- [ ] Export logo in formats: SVG wordmark, SVG icon-only (shield+hand+coin), light/white versions of each (for dark backgrounds and footer)
- [ ] Source or license 3 high-quality photos: SA school environment, medical practice professional, modern SA office/business setting
- [ ] Download and subset Google Fonts (DM Serif Display — Latin only, Inter — Latin, JetBrains Mono — Latin)
- [ ] Register domain `anydebtcollections.co.za` (or preferred .co.za)
- [ ] Create Netlify/Formspree account and configure form endpoints for both email addresses
- [ ] Create Google Analytics 4 property and Measurement ID
- [ ] Update `site.webmanifest` with: `name: "Any Debt Collections"`, `theme_color: "#1E3A5F"`, `background_color: "#FAF8F5"`
- [ ] Create Google Business Profile for Any Collections Pty Ltd (Howick, KZN)
- [ ] Confirm: are there any existing testimonials Angelique can provide? Real quotes are far more powerful than placeholders.

---

*Synthesised from two competing Opus agent proposals. Plan A (Authority-First) contributed: bold command headline strategy, top contact bar, explicit problem agitation section, dark process section, exit intent logic. Plan B (Trust-Driven Elegance) contributed: DM Serif Display typography, warm ivory/neutral palette, warm shadow system, alternating industry card layout, WhatsApp integration, calm animation philosophy, natural urgency strategy, blog content plan, JetBrains Mono for stats, sticky mobile CTA bar.*
