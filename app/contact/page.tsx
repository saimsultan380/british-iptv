import { pageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ContactUsClient from "./ContactUsClient";

export const metadata = pageMetadata({
  title: "Contact IPTV UK – Free Trial, Setup Guidance & Support",
  description:
    "Contact IPTV UK on WhatsApp for a free 24-hour trial, setup guidance, account activation, device installation help, and subscription support. Real human responses within minutes.",
  path: "/contact/",
});

export default function ContactUs() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact/" },
        ]}
      />
      <ContactUsClient />
    </>
  );
}
