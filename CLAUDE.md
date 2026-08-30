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
Editorial, not "startup landing page." Think a photography monograph that happens to
contain a resume.

- Typography: one serif for headings (e.g. Instrument Serif, Fraunces, or Newsreader),
  one clean sans for body (Inter, Geist). Large type scale. Tight tracking on headings.
- Palette: near-black background OR warm off-white — pick one and commit. One accent color
  only, pulled from a hero photograph.
- Photography as structure: full-bleed hero, full-width image breaks between sections.
- Generous whitespace. Long scroll. Restraint over animation.
- Subtle scroll-reveal at most. No parallax, no particle effects, no gradient mesh blobs.

## Structure

### 1. Hero
- Full-bleed photograph (Matthew's own work)
- Name, then one positioning line:
  "Incoming Investment Banking Analyst at Deutsche Bank · Photographer · W&L '27"
- Quiet scroll cue. No CTA button stack.

### 2. Experience
Rendered from `data/experience.ts`. Each entry: company, role, location, dates,
2–3 sentences of prose (NOT bulleted LinkedIn copy), and outcome where one exists.

- Deutsche Bank — 2026 Summer Analyst, Consumer/Retail/Business Services, NYC. Return offer received.
- Harri — HCM SaaS; corporate finance and capital-raising work (Summer 2025)
- Davis Polk & Wardwell — corporate finance department (Summer 2024)
- Data Intensity — sales enablement (Summers 2021–22)

Rule: nothing confidential from Deutsche Bank or Harri. Describe scope and skills, not deal specifics.

### 3. Selected Work
The differentiating section. Each item is its own page at `/work/[slug]` with:
thesis → approach → method → what came out of it. Embed one chart or a PDF viewer per page.

Candidates (Matthew to confirm which are publishable):
- Country Archer Provisions — IB case study. Revenue forecast, EBITDA build, DCF reconciling
  perpetuity growth vs. exit multiple, comps (Simply Good Foods), precedents (Krave, Bansk),
  LBO, football field. Framed as a General Mills acquisition.
- Sprouts Farmers Market (SFM) stock pitch — WACC with Blume-adjusted beta and operating lease
  treatment, DCF driven by SSS and store growth, comps vs. NGVC/GO/KR, blended football field.
- Lifetime sports TAM research — hiking, camping, skiing, pickleball, racquet sports across
  apparel, equipment, footwear. Narrow vs. broad TAM framework with sourced ranges.
- Global Strategy (BUS 394) — General Mills / Qatar Airways strategic analysis; CAGE, AAA,
  OLI, Hofstede frameworks applied to cross-border M&A.

### 4. Photography
- Grid gallery (masonry or uniform 3-col, degrading to 1-col on mobile)
- Source: `data/photos.json` — array of `{ src, alt, title, location, year, orientation }`
- Lightbox on click: keyboard nav (arrows, Esc), swipe on touch, preloaded neighbors
- 15–20 images. Curate hard — the edit is the portfolio.
- Link out to the Wix archive and Instagram at the bottom, not at the top.

### 5. About
W&L, majors, GPA 3.85, philosophy minor, expected May 2027.
Campus Kitchen (Finance & Fundraising Co-Chair), Connolly Entrepreneurship Society.
Interests: private markets, entrepreneurship. Written in first person, human voice —
this is the one place the site should sound like a person rather than a resume.

### 6. Contact
Email, LinkedIn, Instagram, resume PDF download. No contact form (spam, and it needs a backend).

## Data files to create
- `data/experience.ts`
- `data/work.ts` (case study metadata + MDX or component bodies)
- `data/photos.json`
- `public/resume.pdf`

## Build order
1. Scaffold + Tailwind + fonts + deploy an empty site to Vercel. Verify the pipeline first.
2. Layout shell, nav, footer, type scale
3. Hero + Experience
4. Photo pipeline (compress to WebP, generate manifest, gallery + lightbox)
5. Case study template + pages
6. About + Contact
7. Performance pass, meta tags, mobile QA
8. Final content proofread — no placeholder text, no broken links

## Image pipeline
Compress before committing. Target: max 2000px on the long edge, WebP, quality ~82.
Use `sharp` in a small `scripts/optimize-photos.mjs` that reads `photos-raw/` and writes
`public/photos/`, generating the manifest as it goes.
