import { Metadata } from "next";
import InstallationGuideClient from "./InstallationGuideClient";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV UK Installation Guide – Easy Setup for All Compatible Devices",
  description:
    "Step-by-step IPTV UK installation for Firestick, Smart TV, Android, iPhone, MAG Box, PC, Mac, Enigma2, and Roku. Get set up in under 5 minutes with our complete setup guide.",
  alternates: {
    canonical: `${SITE_URL}/installation-guide/`,
  },
};

export default function InstallationGuide() {
  return <InstallationGuideClient />;
}
