# Personal Professional Website — Build Spec

## Owner
Matthew Steuerman — Washington & Lee '27, Business Administration + Finance/Accounting, Philosophy minor.
Incoming investment banking analyst, Deutsche Bank NYC (Consumer, Retail & Business Services).
Also a working photographer (drone + stills).

## Goal
A professional-grade personal site good enough to send to an investor, MD, or recruiter.
Finance-first in content hierarchy; photography-forward in visual design.
Built for a Global Strategy / AI course assignment — must be genuinely impressive, not a template.

## Stack
- Next.js (App Router) with static export
- Tailwind CSS
- Deployed on Vercel, custom domain `matthewsteuerman.com`
- No CMS, no database. Content lives in typed TS/JSON data files.
- Images served from `/public/photos` and `/public/img`, pre-compressed to WebP

## Non-negotiables
- Lighthouse performance >= 90 on mobile
- Fully responsive; test at 375px, 768px, 1440px
- No images over 400KB
- Accessible: real alt text on every photo, semantic headings, visible focus states
- Open Graph image + favicon configured
- No lorem ipsum anywhere at deploy time

## Design direction
Resume-first, not portfolio-first. (Revised Aug 2026 — see below.) The site is a single
professional identity, in the vein of nav.al, lew.vc, and migna.no: name + one-line
positioning, career told in flowing prose rather than bulleted LinkedIn copy, a plain
list of outbound links, no gloating, no empty sections, restraint as the whole point.
Photography is the one thing those sites don't have — it's used as *texture* (hero,
full-bleed breaks between sections) to make the resume-style site look better, not as a
second competing identity next to the resume.

- Typography: one serif for headings (e.g. Instrument Serif, Fraunces, or Newsreader),
  one clean sans for body (Inter, Geist). Large type scale. Tight tracking on headings.
- Palette: near-black background OR warm off-white — pick one and commit. One accent color
  only, pulled from a hero photograph.
- Photography as structure only: full-bleed hero, 1–2 full-width image breaks between
  sections. No dedicated "Photography" section competing with Experience/About in the
  main scroll or nav — see Structure §4.
- Generous whitespace. Long scroll. Restraint over animation.
- Subtle scroll-reveal at most. No parallax, no particle effects, no gradient mesh blobs.

### Reference sites (Matthew's picks, Aug 2026)
- **nav.al** — Naval Ravikant. No photos at all; pure text, links to podcast/X/Instagram.
- **lew.vc** — Jeremy Liew. Sleek but minimal; a starting point, not a portfolio.
- **migna.no** — Michael Mignano. Name + tagline → flowing bio paragraph → interests →
  "Writing" list → "Elsewhere" (social links) list. No imagery, neutral palette. This is
  the closest structural model for Matthew's Experience/About sections.

Common thread: senior finance/VC people let accomplishments speak for themselves and
treat the personal site as a link hub, not a showcase.

## Structure

Nav (`data/site.ts` → `navLinks`) is exactly, left to right: **About · Experience ·
Contact.** Section order on the homepage matches nav order. Photography is not a nav
item — see §4. "Selected Work" was cut entirely (Aug 2026, Matthew: "redundant and
dumb") — it doubled up with Experience without adding anything a resume-first site needs.

### 1. Hero
- Full-bleed photograph (Matthew's own work)
- Name, then one positioning line:
  "Senior at Washington & Lee University, Class of 2027 · Incoming Investment Banking
  Analyst at Deutsche Bank · Photographer"
- Quiet scroll cue. No CTA button stack.

### 2. About
First section after the hero (moved up from last, Aug 2026, to lead with who Matthew is
before the resume detail). Includes his LinkedIn headshot (`public/img/headshot.webp`,
cropped 4:5 from the original) alongside flowing first-person prose — W&L, majors, GPA
3.85, philosophy minor, expected May 2027, Campus Kitchen (Finance & Fundraising
Co-Chair), Connolly Entrepreneurship Society, private markets/entrepreneurship, and a
line connecting to the photography. Written in first person, human voice — this is the
one place the site should sound like a person rather than a resume.

### 3. Experience
Rendered from `data/experience.ts`. Each entry: company, role, location, dates,
2–3 sentences of prose (NOT bulleted LinkedIn copy), and outcome where one exists.

- Deutsche Bank — 2026 Summer Analyst, Consumer/Retail/Business Services, NYC. Return offer received.
- Harri — HCM SaaS; corporate finance and capital-raising work (Summer 2025)
- Davis Polk & Wardwell — corporate finance department (Summer 2024)
- Data Intensity — sales enablement (Summers 2021–22)

Rule: nothing confidential from Deutsche Bank or Harri. Describe scope and skills, not deal specifics.

### Selected Work — cut (Aug 2026)
Was going to be its own page-per-case-study section (Country Archer, Sprouts, lifetime-
sports TAM, BUS 394 Qatar Airways/General Mills). Matthew killed it as redundant next to
Experience. Case-study writeups may resurface later as plain linked PDFs rather than a
dedicated site section, if at all — no `/work/[slug]` routes exist.

### 4. Photography — secondary page, not a main-nav section
Not in the top nav and not in the homepage's numbered scroll (About/Experience/Contact
only). Lives at `/photography`, linked quietly from the footer next to Linktree.
Homepage instead gets 1–2 full-bleed `PhotoBreak` images between sections (no caption,
no link — just texture; the footer's blanket photo credit covers them).

The `/photography` page itself:
- Grid gallery (masonry via CSS columns, 1/2/3-col responsive)
- Source: `data/photos.json` (generated) + `data/photos.ts` (typed re-export) — array of
  `{ src, thumb, alt, title, location, year, orientation, width, height, blurDataURL }`
- Lightbox on click: keyboard nav (arrows, Esc), swipe on touch, preloaded neighbors,
  focus moves in on open / returns to the trigger thumb on close
- 15–20 images. Curate hard — the edit is the portfolio.
- Link out to the Wix archive and Instagram at the bottom, not at the top.

Status (Aug 2026): may be cut entirely later — kept for now as a quiet secondary page.

### 5. Contact
On-page: email + LinkedIn + X as plain underlined links (real `mailto:`/`https:` hrefs,
not styled buttons). Footer additionally carries Instagram and Linktree (one-stop link
hub). No résumé PDF (Matthew's LIVE résumé has a home address and personal cell in the
header — decided Aug 2026 not to host it; revisit if he sends a redacted copy). No
contact form (spam, and it needs a backend).

## Social links (`data/site.ts` → `site.links`)
- LinkedIn: https://www.linkedin.com/in/matthew-steuerman-05bb99217/
- X: https://x.com/mattsteuerman
- Instagram: https://www.instagram.com/matthewsteuerman/
- Linktree: https://linktr.ee/matthewsteuerman
- Photo archive (full Wix site): https://matthewsteuerman.wixsite.com/matthewsteuerman

## Data files to create
- `data/experience.ts`
- `data/photos.json` (generated by `scripts/optimize-photos.mjs`)

(`data/work.ts` is no longer needed — Selected Work was cut. `public/img/headshot.webp`
is Matthew's LinkedIn headshot, cropped 4:5 for the About section.)

## Build order
1. ✅ Scaffold + Tailwind + fonts + deploy an empty site to Vercel. Verify the pipeline first.
2. ✅ Layout shell, nav, footer, type scale
3. ✅ Hero + Experience
4. ✅ Photo pipeline (compress to WebP, generate manifest, gallery + lightbox) — then
   revised (Aug 2026) to move off the main nav/scroll onto `/photography`; homepage
   keeps full-bleed `PhotoBreak` images instead. See Design direction above.
5. ~~Case study template + pages~~ — cut (Aug 2026). See "Selected Work — cut" above.
6. ✅ About + Contact — About moved to lead position with headshot (Aug 2026); Contact
   is real email/LinkedIn/X links, verified working.
7. Performance pass, meta tags, mobile QA — next up.
8. Final content proofread — no placeholder text, no broken links

## Image pipeline
Compress before committing. Target: max 2000px on the long edge, WebP, quality ~82.
Use `sharp` in a small `scripts/optimize-photos.mjs` that reads `photos-raw/` and writes
`public/photos/`, generating the manifest as it goes.
