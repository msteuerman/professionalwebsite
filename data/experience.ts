export type ExperienceEntry = {
  company: string;
  detail?: string; // one-line context on what the company is
  role: string;
  location: string;
  dates: string;
  /** 2–3 sentences of prose. Scope and skills only — no deal names, clients, or figures. */
  body: string;
  outcome?: string;
  /** Company wordmark, recolored to the site's muted tone. See public/img/logos/. */
  logo?: string;
  /** Logo's intrinsic pixel size, so the <img> can reserve space and avoid layout shift. */
  logoWidth?: number;
  logoHeight?: number;
};

/**
 * DRAFT — Matthew to review. Written from the LIVE résumé (Aug 2025).
 * Deutsche Bank and Harri: deliberately generic. No transaction names, client
 * identifiers, dates of live processes, or deal economics.
 */
export const experience: ExperienceEntry[] = [
  {
    company: "Deutsche Bank",
    role: "Investment Banking Summer Analyst — Consumer, Retail & Business Services",
    location: "New York, NY",
    dates: "Summer 2026",
    logo: "/img/logos/deutsche-bank.webp",
    logoWidth: 737,
    logoHeight: 110,
    body: "Worked across restaurant, consumer-products, and food & beverage coverage, spanning live sell-side and new-business situations. Built operating and transaction models, store-level P&Ls, and information memoranda, reconciling management financials to audited results. For the summer capstone, I evaluated an acquisition target against a client's growth priorities end to end — building a ground-up revenue model, LBO and DCF with layered synergies, comparables and precedents, and a football-field valuation — and presented the analysis to senior bankers and the client's corporate development team.",
    outcome: "Return offer received.",
  },
  {
    company: "Harri",
    detail: "Human-capital-management SaaS for shift-based industries",
    role: "Corporate & Capital-Raising Finance Intern",
    location: "New York, NY",
    dates: "Summer 2025",
    logo: "/img/logos/harri.webp",
    logoWidth: 397,
    logoHeight: 160,
    body: "Built a projection model for a planned equity raise, working with the finance team and prospective investors to assemble the financial materials and SaaS metrics a new investor would expect. Separately, mapped customer prospects inside private-equity portfolios and public companies to surface upsell targets, using AI tooling and Power Query to keep the underlying models dynamic and reusable.",
  },
  {
    company: "Davis Polk & Wardwell",
    detail: "Corporate finance department — leveraged finance and M&A",
    role: "Corporate Finance Intern",
    location: "New York, NY",
    dates: "Summer 2024",
    logo: "/img/logos/davis-polk.svg",
    logoWidth: 1200,
    logoHeight: 202,
    body: "Followed deal teams through the lifecycle of LBO financing, including private credit, and completed the firm's training on credit-facility structuring. Also supported business development toward private-equity clients — identifying capital-markets contacts, building client personas for large-cap firms, and codifying the approach into a reference manual for the group.",
  },
  {
    company: "Data Intensity",
    detail: "Managed services provider",
    role: "Sales Enablement Analyst; Inside Sales Intern to the Chief Revenue Officer",
    location: "Covington, KY",
    dates: "Summers 2021–2022",
    logo: "/img/logos/data-intensity.webp",
    logoWidth: 1064,
    logoHeight: 160,
    body: "Two summers at a managed-services provider, the first reporting to the Chief Revenue Officer. Built sector sales roadmaps across healthcare, technology, industrial, and food & beverage that cut research time by more than half, plus pitch-deck templates and a searchable prospect database that sped up outreach.",
  },
];
