import { pageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ContactUsClient from "./ContactUsClient";

export const metadata = pageMetadata({
  title: "IPTV Free Trial UK – Contact Support & Start Today",
  description:
    "Request an IPTV free trial in the UK or contact our team for subscription advice, installation help, renewals and technical support on popular devices.",
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
