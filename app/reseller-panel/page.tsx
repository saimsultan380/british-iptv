import { pageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ResellerPanelClient from "./ResellerPanelClient";

export const metadata = pageMetadata({
  title: "IPTV UK Reseller Panel & Plans | Become an IPTV Reseller",
  description:
    "Start your own IPTV business with the IPTV UK reseller panel. Create accounts, manage subscriptions, issue free trials, and keep 100% of your profits with non-expiring credits.",
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
