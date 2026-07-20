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
  "IPTV UK – Premium IPTV Subscription | 4K Streaming & Free Trial";

export const DEFAULT_DESCRIPTION =
  "Stream 20,000+ live channels, movies, and series with IPTV UK. Instant activation, buffer-free HD/4K quality, multi-device support, and a free 24-hour trial.";

/** Square brand mark — same as public/logo.PNG (white background). */
export const SITE_LOGO_PATH = "/logo.PNG";
export const SITE_LOGO_WIDTH = 1254;
export const SITE_LOGO_HEIGHT = 1254;
export const SITE_FAVICON_PATH = "/favicon-48.png";

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
