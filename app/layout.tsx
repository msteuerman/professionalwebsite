import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

// Serif for headings — editorial, high-contrast, optical sizing on.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

// Clean sans for body copy and UI.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://matthewsteuerman.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Matthew Steuerman",
    template: "%s · Matthew Steuerman",
  },
  description:
    "Incoming Investment Banking Analyst at Deutsche Bank · Photographer · Washington & Lee '27",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Matthew Steuerman",
    description:
      "Incoming Investment Banking Analyst at Deutsche Bank · Photographer · Washington & Lee '27",
    siteName: "Matthew Steuerman",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Steuerman",
    description:
      "Incoming Investment Banking Analyst at Deutsche Bank · Photographer · Washington & Lee '27",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-background focus:px-3 focus:py-2 focus:font-sans focus:text-sm"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
