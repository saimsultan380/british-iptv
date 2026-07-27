import { pageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import SubscriptionPlansClient from "./SubscriptionPlansClient";

export const metadata = pageMetadata({
  title: "IPTV Subscription UK – Flexible Plans, Sports & Movies",
  description:
    "Compare IPTV Subscription UK plans for live TV, sports, movies and series. Choose your duration, check connection options and request a 24-hour trial.",
  path: "/subscription-plans/",
});

export default function SubscriptionPlans() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Subscription Plans", path: "/subscription-plans/" },
        ]}
      />
      <SubscriptionPlansClient />
    </>
  );
}
