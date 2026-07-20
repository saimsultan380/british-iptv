import { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";
import { canonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact IPTV UK – Free Trial, Setup Guidance & Support",
  description:
    "Contact IPTV UK on WhatsApp for a free 24-hour trial, setup guidance, account activation, device installation help, and subscription support. Real human responses within minutes.",
  alternates: {
    canonical: canonicalUrl("/contact/"),
  },
};

export default function ContactUs() {
  return <ContactUsClient />;
}
