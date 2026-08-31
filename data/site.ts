// The hero renders these as two deliberate lines (see components/Hero.tsx).
// Everywhere else (meta description, OG/Twitter, footer tagline) just wants
// running text, so `positioning` below joins them with a middot.
const positioningLine1 = "Senior at Washington & Lee University, Class of 2027";
const positioningLine2 =
  "Incoming Investment Banking Analyst at Deutsche Bank · Photographer";

/** Central site content that isn't section-specific. */
export const site = {
  name: "Matthew Steuerman",
  positioningLine1,
  positioningLine2,
  positioning: `${positioningLine1} · ${positioningLine2}`,

  email: "mjs25514@gmail.com",

  links: {
    linkedin: "https://www.linkedin.com/in/matthew-steuerman-05bb99217/",
    x: "https://x.com/mattsteuerman",
    instagram: "https://www.instagram.com/matthewsteuerman/",
    linktree: "https://linktr.ee/matthewsteuerman",
    photoArchive: "https://matthewsteuerman.wixsite.com/matthewsteuerman",
  },

  // No résumé PDF hosted — Matthew opted out (home address / cell in the file).
} as const;

export type NavLink = { label: string; href: string };

/**
 * Primary nav, left to right — matches the homepage's scroll order.
 * "Selected Work" was cut (Aug 2026, Matthew: "redundant and dumb").
 * Photography is deliberately not here: it's a quiet secondary page linked
 * from the footer, not a competing pillar.
 */
export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];
