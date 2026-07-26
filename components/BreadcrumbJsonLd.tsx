import JsonLd from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  type BreadcrumbItem,
} from "@/lib/seo";

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[];
};

/** Injects BreadcrumbList structured data for the current page hierarchy. */
export default function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  return <JsonLd data={breadcrumbJsonLd(items)} />;
}
