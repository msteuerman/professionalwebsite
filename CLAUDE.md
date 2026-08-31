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
  sections. No dedicated "Photography" section competing with Experience/Work in the
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

Nav (`data/site.ts` → `navLinks`) is exactly: **Experience · Work · About · Contact.**
Photography is not a nav item — see §4.

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

### 4. Photography — secondary page, not a main-nav section
Not in the top nav and not in the homepage's numbered scroll (Experience/Work/About/
Contact only). Lives at `/photography`, linked quietly from the footer next to Linktree.
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

### 5. About
W&L, majors, GPA 3.85, philosophy minor, expected May 2027.
Campus Kitchen (Finance & Fundraising Co-Chair), Connolly Entrepreneurship Society.
Interests: private markets, entrepreneurship. Written in first person, human voice —
this is the one place the site should sound like a person rather than a resume.

### 6. Contact
Email, LinkedIn, X, Instagram, Linktree (one-stop link hub). No résumé PDF (Matthew's
LIVE résumé has a home address and personal cell in the header — decided Aug 2026 not
to host it; revisit if he sends a redacted copy). No contact form (spam, and it needs a
backend).

## Social links (`data/site.ts` → `site.links`)
- LinkedIn: https://www.linkedin.com/in/matthew-steuerman-05bb99217/
- X: https://x.com/mattsteuerman
- Instagram: https://www.instagram.com/matthewsteuerman/
- Linktree: https://linktr.ee/matthewsteuerman
- Photo archive (full Wix site): https://matthewsteuerman.wixsite.com/matthewsteuerman

## Data files to create
- `data/experience.ts`
- `data/work.ts` (case study metadata + MDX or component bodies)
- `data/photos.json` (generated by `scripts/optimize-photos.mjs`)

## Build order
1. ✅ Scaffold + Tailwind + fonts + deploy an empty site to Vercel. Verify the pipeline first.
2. ✅ Layout shell, nav, footer, type scale
3. ✅ Hero + Experience
4. ✅ Photo pipeline (compress to WebP, generate manifest, gallery + lightbox) — then
   revised (Aug 2026) to move off the main nav/scroll onto `/photography`; homepage
   keeps 1–2 full-bleed `PhotoBreak` images instead. See Design direction above.
5. Case study template + pages — next up. Needs Matthew: which candidates are cleared
   to publish, and the source files (decks/models/PDFs/charts) for each.
6. About + Contact — write About in first-person flowing prose per the reference sites;
   Contact per §6 above (no résumé PDF).
7. Performance pass, meta tags, mobile QA
8. Final content proofread — no placeholder text, no broken links

## Image pipeline
Compress before committing. Target: max 2000px on the long edge, WebP, quality ~82.
Use `sharp` in a small `scripts/optimize-photos.mjs` that reads `photos-raw/` and writes
`public/photos/`, generating the manifest as it goes.
