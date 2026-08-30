/**
 * Central site content that isn't section-specific.
 * TODO(matthew): confirm the values marked below before deploy.
 */

export const site = {
  name: "Matthew Steuerman",
  positioning:
    "Incoming Investment Banking Analyst at Deutsche Bank · Photographer · Washington & Lee ’27",

  // TODO(matthew): confirm this is the address you want public on the site.
  email: "stew1stewy@gmail.com",

  // TODO(matthew): fill in real URLs. "#" renders a dead link for now.
  links: {
    linkedin: "#",
    instagram: "#",
    photoArchive: "#", // the existing Wix gallery
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
