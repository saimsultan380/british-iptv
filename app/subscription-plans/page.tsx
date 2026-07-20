import { Metadata } from "next";
import SubscriptionPlansClient from "./SubscriptionPlansClient";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV UK Subscription Plans – Premium Streaming at Discounted Pricing",
  description: "Explore IPTV UK subscription plans with instant activation, HD/4K streaming, and flexible 1 to 12 month options. Get discounted pricing and start streaming on all your devices today.",
  alternates: {
    canonical: `${SITE_URL}/subscription-plans/`,
  },
};

export default function SubscriptionPlans() {
  return <SubscriptionPlansClient />;
}
