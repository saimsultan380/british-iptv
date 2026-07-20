"use client";

import Image from "next/image";
import {
  ArrowRight,
  Settings,
  Headphones,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import BeforeYouStartSection from "@/components/BeforeYouStartSection";
import TroubleshootingSection from "@/components/TroubleshootingSection";
import InstallationTipsSection from "@/components/InstallationTipsSection";
import InstallationCTASection from "@/components/InstallationCTASection";
import InstallationFAQ from "@/components/InstallationFAQ";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const stats = [
  { icon: Settings,   label: "Easy device configuration" },
  { icon: Headphones, label: "Dedicated technical support when required" },
  { icon: Zap,        label: "Quick IPTV activation" },
];

export default function InstallationGuideClient() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col">
      <Header />

      {/* ── Hero Section ── */}
      <main className="pt-24 pb-0 sm:pt-36 lg:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

            {/* LEFT: Heading + body + CTA */}
            <div className="flex flex-col order-1">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="text-[28px] sm:text-[36px] lg:text-[38px] font-extrabold tracking-tight leading-[1.1] mb-5"
                style={{ color: NAVY }}
              >
                <span style={{ color: RED }}>IPTV</span> Installation Guide –{" "}
                Easy IPTV Setup for All Compatible Devices
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="space-y-3 text-[#343341] text-[12.5px] sm:text-[13px] leading-relaxed mb-7"
              >
                <p>
                  Setting up your IPTV service should be simple, whether you are
                  using a Smart TV, Fire TV Stick, Android TV, Apple TV,
                  smartphone, tablet, Windows PC, or another compatible device.
                  This IPTV Installation Guide provides clear setup instructions
                  to help you activate your subscription and start streaming as
                  quickly as possible.
                </p>
                <p>
                  Our IPTV UK Setup Guide is designed for both beginners and
                  experienced users. Each installation method follows the
                  recommended process for the specific device, making it easier
                  to configure your IPTV service without unnecessary
                  complications.
                </p>
                <p>
                  Whether you are installing IPTV for the first time or setting
                  up your subscription on a new device, this guide covers the
                  supported platforms and explains how to begin streaming in just
                  a few simple steps.
                </p>
              </motion.div>

              {/* CTA row */}
              <motion.a
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.22 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#installation-tabs"
                className="inline-flex items-center gap-3 w-full sm:w-fit rounded-xl border border-zinc-200 bg-white px-5 py-3.5 text-[12.5px] sm:text-[13.5px] font-bold text-zinc-800 hover:bg-zinc-50 transition-all shadow-sm"
              >
                <Settings className="h-5 w-5 flex-shrink-0" style={{ color: NAVY }} />
                <span>Select Your Device and Start Your IPTV Setup</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0" style={{ color: RED }} />
              </motion.a>
            </div>

            {/* RIGHT: UK map image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
              className="flex justify-center items-center order-2"
            >
              <div className="relative w-full max-w-[420px] lg:max-w-[520px] xl:max-w-[560px] aspect-square">
                <Image
                  src="/IPTV Installation Guide – Easy IPTV Setup for All Compatible Devices.PNG"
                  alt="IPTV Installation Guide – Easy IPTV Setup for All Compatible Devices"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 90vw, 50vw"
                />
              </div>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.38 }}
            className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pb-10"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 rounded-xl border border-zinc-200 bg-white px-4 py-4 sm:px-5 sm:py-5 shadow-[0_2px_12px_rgba(11,30,92,0.04)]"
                >
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-zinc-100"
                    style={{ backgroundColor: `${NAVY}08` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: NAVY }} />
                  </div>
                  <span
                    className="text-[13px] sm:text-[14px] font-semibold leading-snug"
                    style={{ color: NAVY }}
                  >
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </motion.div>

        </div>
      </main>

      <ScrollReveal>
        <BeforeYouStartSection />
      </ScrollReveal>
      <ScrollReveal>
        <TroubleshootingSection />
      </ScrollReveal>
      <ScrollReveal>
        <InstallationTipsSection />
      </ScrollReveal>
      <ScrollReveal>
        <InstallationFAQ />
      </ScrollReveal>
      <ScrollReveal>
        <InstallationCTASection />
      </ScrollReveal>
      <Footer />
    </div>
  );
}
