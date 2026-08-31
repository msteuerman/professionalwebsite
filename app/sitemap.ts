import type { MetadataRoute } from "next";

// Required for `output: "export"` — generates sitemap.xml once at build time.
export const dynamic = "force-static";

const siteUrl = "https://matthewsteuerman.com";

// Static export still runs this at build time, emitting a plain sitemap.xml.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/photography`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
