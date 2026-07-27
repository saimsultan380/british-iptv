import { pageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import InstallationGuideClient from "./InstallationGuideClient";

export const metadata = pageMetadata({
  title: "IPTV Installation Guide UK – Firestick, Smart TV & More",
  description:
    "Follow our IPTV Installation Guide for Firestick, Android, Smart TVs, Apple devices, Windows and Mac, with clear steps and setup assistance.",
  path: "/installation-guide/",
});

export default function InstallationGuide() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Installation Guide", path: "/installation-guide/" },
        ]}
      />
      <InstallationGuideClient />
    </>
  );
}
