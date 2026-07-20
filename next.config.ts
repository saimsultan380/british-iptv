import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT === "true" ? { output: "export" as const } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Keep fewer compiled pages in memory during `next dev` so a low-RAM
  // machine doesn't get exhausted while editing.
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  experimental: {
    // Don't eagerly load every route's modules on server start.
    preloadEntriesOnStart: false,
    // Lower peak memory of the Webpack dev/build path.
    webpackMemoryOptimizations: true,
  },
};

export default nextConfig;
