import { pageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import InstallationGuideClient from "./InstallationGuideClient";

export const metadata = pageMetadata({
  title: "IPTV UK Installation Guide – Easy Setup for All Compatible Devices",
  description:
    "Step-by-step IPTV UK installation for Firestick, Smart TV, Android, iPhone, MAG Box, PC, Mac, Enigma2, and Roku. Get set up in under 5 minutes with our complete setup guide.",
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
