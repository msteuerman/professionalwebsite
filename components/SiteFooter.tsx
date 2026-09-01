import Link from "next/link";
import { navLinks, site } from "@/data/site";

// All external — Photography is a primary nav item now (data/site.ts), so it
// shows up in the "Navigate" column below instead of duplicating here.
const elsewhere = [
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "X", href: site.links.x },
  { label: "Instagram", href: site.links.instagram },
  { label: "Linktree", href: site.links.linktree },
  { label: "Full photo archive", href: site.links.photoArchive },
];

// Not a heading: each <nav> below already carries its own aria-label, so a
// real <h2> here would just add a same-level, same-text duplicate of the
// page's actual "Contact" section to the document outline.
function ColumnHeading({ children }: { children: string }) {
  return (
    <p className="text-eyebrow font-sans uppercase text-muted">{children}</p>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-rule">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-10">
        <div>
          <p className="font-serif text-xl tracking-tight">{site.name}</p>
          <p className="mt-2 max-w-xs font-sans text-sm leading-relaxed text-muted">
            {site.positioning}
          </p>
        </div>

        <nav aria-label="Sections">
          <ColumnHeading>Navigate</ColumnHeading>
          <ul className="mt-4 space-y-2 font-sans text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Elsewhere">
          <ColumnHeading>Elsewhere</ColumnHeading>
          <ul className="mt-4 space-y-2 font-sans text-sm">
            {elsewhere.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Contact">
          <ColumnHeading>Contact</ColumnHeading>
          <ul className="mt-4 space-y-2 font-sans text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-muted transition-colors hover:text-foreground"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-rule/60">
        <div className="mx-auto w-full max-w-5xl px-6 py-6 md:px-10">
          <p className="font-sans text-xs text-muted">
            © {year} {site.name}. All photographs on this site were taken by Matthew.
          </p>
        </div>
      </div>
    </footer>
  );
}
