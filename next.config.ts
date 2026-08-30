import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` on `next build`.
  // No Node server at runtime — just HTML/CSS/JS that any host (Vercel) serves directly.
  output: "export",

  // The static export has no image-optimization server, so serve images as-is.
  // We pre-compress photos to WebP ourselves in scripts/optimize-photos.mjs.
  images: {
    unoptimized: true,
  },

  // Emit `/about/index.html` instead of `/about.html` so routes work on any static host.
  trailingSlash: true,
};

export default nextConfig;
