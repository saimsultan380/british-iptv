import { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/subscription-plans/",
    "/installation-guide/",
    "/reseller-panel/",
    "/contact/",
  ] as const;

  return routes.map((path, index) => ({
    url: canonicalUrl(path),
    lastModified: new Date(),
    changeFrequency: index === 0 ? ("weekly" as const) : ("monthly" as const),
    priority: index === 0 ? 1.0 : 0.8,
  }));
}
