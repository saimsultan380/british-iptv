import { pageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import SubscriptionPlansClient from "./SubscriptionPlansClient";

export const metadata = pageMetadata({
  title: "IPTV UK Subscription Plans – Premium Streaming at Discounted Pricing",
  description:
    "Explore IPTV UK subscription plans with instant activation, HD/4K streaming, and flexible 1 to 12 month options. Get discounted pricing and start streaming on all your devices today.",
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
