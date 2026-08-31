import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Gallery } from "@/components/Gallery";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Photography",
  description: "A curated selection of aerial and still photography by Matthew Steuerman.",
  alternates: {
    canonical: "/photography",
  },
  openGraph: {
    url: "/photography",
    title: "Photography · Matthew Steuerman",
    description: "A curated selection of aerial and still photography by Matthew Steuerman.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Matthew Steuerman" }],
  },
};

export default function PhotographyPage() {
  return (
    <Container className="py-20 md:py-28">
      <p className="font-sans text-sm text-muted">
        <Link href="/" className="underline decoration-rule underline-offset-4 hover:decoration-accent">
          Matthew Steuerman
        </Link>
      </p>
      <h1 className="mt-4 font-serif text-h1">Photography</h1>
      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-foreground/80">
        Mostly shot from a drone — coastlines, and the golf courses I grew up
        on. A curated selection; the fuller archive is linked below.
      </p>

      <Gallery />

      <p className="mt-12 font-sans text-sm text-muted">
        More on{" "}
        <a
          href={site.links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline decoration-rule underline-offset-4 transition-colors hover:decoration-accent"
        >
          Instagram
        </a>{" "}
        and in{" "}
        <a
          href={site.links.photoArchive}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline decoration-rule underline-offset-4 transition-colors hover:decoration-accent"
        >
          the full archive
        </a>
        .
      </p>
    </Container>
  );
}
