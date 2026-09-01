import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

// Next.js already emits <meta name="robots" content="noindex"> for the
// not-found route automatically — only the title needs setting here.
export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col justify-center py-24">
      <p className="text-eyebrow font-sans uppercase text-muted">404</p>
      <h1 className="mt-4 font-serif text-h1">Page not found</h1>
      <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-foreground/80">
        That page doesn&rsquo;t exist, or has moved.
      </p>
      <p className="mt-8 font-sans text-base">
        <Link
          href="/"
          className="text-foreground underline decoration-rule underline-offset-4 transition-colors hover:decoration-accent"
        >
          Back home
        </Link>
      </p>
    </Container>
  );
}
