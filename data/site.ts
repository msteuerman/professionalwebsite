/**
 * Central site content that isn't section-specific.
 * TODO(matthew): confirm the values marked below before deploy.
 */

export const site = {
  name: "Matthew Steuerman",
  positioning:
    "Incoming Investment Banking Analyst at Deutsche Bank · Photographer · Washington & Lee ’27",

  email: "mjs25514@gmail.com",

  links: {
    linkedin: "https://www.linkedin.com/in/matthew-steuerman-05bb99217/",
    // TODO(matthew): add Instagram handle. "#" renders a dead link for now.
    instagram: "#",
    photoArchive: "https://matthewsteuerman.wixsite.com/matthewsteuerman",
  },

  // Drop the file at public/resume.pdf (build order step: data files).
  resume: "/resume.pdf",
} as const;

export type NavLink = { label: string; href: string };

/**
 * Primary nav. Section links resolve on the home page; using "/#id" (not "#id")
 * so they also work when clicked from a /work/[slug] detail page.
 */
export const navLinks: NavLink[] = [
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#work" },
  { label: "Photography", href: "/#photography" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];
