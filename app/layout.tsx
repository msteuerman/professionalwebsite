import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

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
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
