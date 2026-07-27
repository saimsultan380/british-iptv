import { pageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ResellerPanelClient from "./ResellerPanelClient";

export const metadata = pageMetadata({
  title: "IPTV Reseller UK – Panel, Credits & Wholesale Packages",
  description:
    "Join our IPTV Reseller UK programme and manage customers, subscriptions and credits through one panel with flexible wholesale packages and support.",
  path: "/reseller-panel/",
});

export default function ResellerPanel() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Reseller Panel", path: "/reseller-panel/" },
        ]}
      />
      <ResellerPanelClient />
    </>
  );
}
