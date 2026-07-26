import type { Metadata } from "next";
import {
  SITE_LOGO_HEIGHT,
  SITE_LOGO_PATH,
  SITE_LOGO_WIDTH,
  SITE_NAME,
  canonicalUrl,
} from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  /** Path with or without trailing slash, e.g. `/contact/` or `/` */
  path: string;
};

/**
 * Full per-page metadata so child routes do not inherit homepage
 * openGraph.url / twitter title from the root layout.
 */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const url = canonicalUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: SITE_LOGO_PATH,
          width: SITE_LOGO_WIDTH,
          height: SITE_LOGO_HEIGHT,
          alt: `${SITE_NAME} Logo`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [SITE_LOGO_PATH],
    },
  };
}

export type BreadcrumbItem = {
  name: string;
  /** Path with or without trailing slash */
  path: string;
};

/** schema.org/BreadcrumbList JSON-LD for Google breadcrumb sitelinks. */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}
