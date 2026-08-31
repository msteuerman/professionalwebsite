import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { PhotoBreak } from "@/components/PhotoBreak";
import { Section } from "@/components/Section";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <PhotoBreak
        src="/photos/08-twilight-course.webp"
        alt="Aerial of a golf green and bunkers under a deep magenta twilight sky scattered with faint stars."
      />

      <Experience />

      <PhotoBreak
        src="/photos/02-land-and-sea.webp"
        alt="Aerial view of a rocky, scrub-covered headland dropping into clear turquoise shallows."
      />

      <Section id="contact" eyebrow="03" title="Contact">
        <p className="max-w-2xl font-sans text-base leading-relaxed text-muted">
          The fastest way to reach me is email.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-sans text-base">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="text-foreground underline decoration-rule underline-offset-4 transition-colors hover:decoration-accent"
            >
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-rule underline-offset-4 transition-colors hover:decoration-accent"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={site.links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-rule underline-offset-4 transition-colors hover:decoration-accent"
            >
              X
            </a>
          </li>
        </ul>
      </Section>
    </>
  );
}
