import { Metadata } from "next";
import ResellerPanelClient from "./ResellerPanelClient";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV UK Reseller Panel & Plans | Become an IPTV Reseller",
  description:
    "Start your own IPTV business with the IPTV UK reseller panel. Create accounts, manage subscriptions, issue free trials, and keep 100% of your profits with non-expiring credits.",
  alternates: {
    canonical: `${SITE_URL}/reseller-panel/`,
  },
};

export default function ResellerPanel() {
  return <ResellerPanelClient />;
}
