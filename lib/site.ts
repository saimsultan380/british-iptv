/** Canonical site origin — always HTTPS, non-www, no trailing slash on the origin. */
export const SITE_URL = "https://brit-iptv.co";
export const SITE_HOST = "brit-iptv.co";
export const SITE_NAME = "IPTV UK";
export const SITE_EMAIL = "support@brit-iptv.co";

/** Alternate names Google may use for the SERP site name. */
export const SITE_ALTERNATE_NAMES = [
  "Brit IPTV",
  "British IPTV",
  "brit-iptv.co",
] as const;

export const DEFAULT_TITLE =
  "IPTV UK – Premium IPTV Subscription for Live TV & Sports";

export const DEFAULT_DESCRIPTION =
  "Explore a premium IPTV UK service for live TV, sports, movies and popular series. Compare flexible plans, request a 24-hour trial and get setup support.";

/** Site logo in header/footer (transparent). Google schema uses white-bg version. */
export const SITE_LOGO_PATH = "/logo-schema.png";
export const SITE_LOGO_WIDTH = 1024;
export const SITE_LOGO_HEIGHT = 1024;
export const SITE_FAVICON_PATH = "/favicon-48.png";
export const SITE_HEADER_LOGO_PATH = "/logo.PNG";

/**
 * Build a canonical absolute URL with a trailing slash.
 * Pass "" or "/" for the homepage.
 */
export function canonicalUrl(path: string = "/"): string {
  const trimmed = path.trim();
  if (!trimmed || trimmed === "/") {
    return `${SITE_URL}/`;
  }
  const withLeading = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  const withTrailing = withLeading.endsWith("/")
    ? withLeading
    : `${withLeading}/`;
  return `${SITE_URL}${withTrailing}`;
}

/** Absolute URL for a public asset (no trailing slash). */
export function assetUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
