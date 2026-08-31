/** Central site content that isn't section-specific. */
export const site = {
  name: "Matthew Steuerman",
  positioning:
    "Incoming Investment Banking Analyst at Deutsche Bank · Photographer · Washington & Lee ’27",

  email: "mjs25514@gmail.com",

  links: {
    linkedin: "https://www.linkedin.com/in/matthew-steuerman-05bb99217/",
    x: "https://x.com/mattsteuerman",
    instagram: "https://www.instagram.com/matthewsteuerman/",
    linktree: "https://linktr.ee/matthewsteuerman",
    photoArchive: "https://matthewsteuerman.wixsite.com/matthewsteuerman",
  },

  // No résumé PDF hosted — Matthew opted out (home address / cell in the file).
  // Contact is email + LinkedIn + Instagram.
} as const;

export type NavLink = { label: string; href: string };

/**
 * Primary nav — the résumé sections only. Section links resolve on the home
 * page; using "/#id" (not "#id") so they also work when clicked from a
 * /work/[slug] detail page. Photography is deliberately not here: it's a
 * quiet secondary page linked from the footer, not a competing pillar.
 */
export const navLinks: NavLink[] = [
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];
