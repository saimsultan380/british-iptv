import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const } : {}),
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
  // Host-based redirects are unsupported with `output: "export"`.
  // Hostinger static hosting uses public/.htaccess for www → non-www.
  ...(!isStaticExport
    ? {
        async redirects() {
          return [
            {
              source: "/:path*",
              has: [{ type: "host", value: "www.brit-iptv.co" }],
              destination: "https://brit-iptv.co/:path*",
              permanent: true,
            },
          ];
        },
      }
    : {}),
};

export default nextConfig;
