import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_HOST } from "@/lib/site";

/**
 * Edge proxy (Next.js 16+; formerly middleware).
 * Enforces non-www host + trailing slash for non-static deploys.
 * Static Hostinger hosting relies on public/.htaccess for the same rules.
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostHeader = request.headers.get("host") || "";
  const hostname = hostHeader.split(":")[0].toLowerCase();
  let shouldRedirect = false;

  // 1. WWW → non-WWW (always HTTPS canonical host)
  if (hostname === `www.${SITE_HOST}` || hostname.startsWith("www.")) {
    url.hostname = hostname.replace(/^www\./, "");
    url.protocol = "https:";
    shouldRedirect = true;
  }

  // 2. Trailing slash on path routes (skip assets / files with extensions)
  const { pathname } = url;
  const isFileLike = /\.[a-zA-Z0-9]{2,8}$/.test(pathname);
  if (pathname.length > 1 && !pathname.endsWith("/") && !isFileLike) {
    url.pathname = `${pathname}/`;
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - Next.js internals / static assets
     * - common static files
     */
    "/((?!api|_next/static|_next/image|favicon\\.ico|.*\\..*).*)",
  ],
};
