"use client";

import React from "react";
import Image from "next/image";
import {
  Play,
  MonitorSmartphone,
  Zap,
  ArrowRight,
  Clock,
  Rocket,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import WhyTrustSection from "@/components/WhyTrustSection";
import CompatibleDevicesSection from "@/components/CompatibleDevicesSection";
import IPTVSetupGuideSection from "@/components/IPTVSetupGuideSection";
import SubscriptionFAQ from "@/components/SubscriptionFAQ";
import SubscriptionCTASection from "@/components/SubscriptionCTASection";
import WhatMakesDifferentSection from "@/components/WhatMakesDifferentSection";
import BestIPTVFeaturesSection from "@/components/BestIPTVFeaturesSection";
import WhyIPTVGrowsSection from "@/components/WhyIPTVGrowsSection";
import ChooseRightPlanSection from "@/components/ChooseRightPlanSection";
import PremiumIPTVPlanSection from "@/components/PremiumIPTVPlanSection";
import PricingSection from "@/components/PricingSection";
import WatchLiveSportsSection from "@/components/WatchLiveSportsSection";
import StreamingPerformanceSection from "@/components/StreamingPerformanceSection";
import IPTVvsTraditionalSection from "@/components/IPTVvsTraditionalSection";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const MAP_SRC =
  "/IPTV Subscription UK – Premium Streaming for Live TV, Sports, Movies & Series.PNG";

export default function SubscriptionPlansClient() {
  const phoneNumber = "447482794475";

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 pt-24 pb-8 sm:pt-36 sm:pb-12 lg:pt-44 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* LEFT: text content */}
            <div className="lg:col-span-7 order-1">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[30px] sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.12]"
                style={{ color: NAVY }}
              >
                IPTV Subscription{" "}
                <span style={{ color: RED }}>UK</span> &ndash; Premium Streaming
                for Live TV, Sports, Movies &amp; Series
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-[#343341] text-[13px] sm:text-[15px] leading-relaxed max-w-2xl"
              >
                <p>
                  Looking for the best IPTV Subscription UK service for live
                  television, sports, movies, and premium entertainment? Our IPTV
                  platform is designed for viewers who want a reliable, flexible,
                  and modern streaming experience without the limitations of
                  traditional television.
                </p>
                <p>
                  With access to live channels, sports coverage, on-demand
                  movies, TV series, and entertainment content, our IPTV
                  Subscription UK service provides everything you need in one
                  place. Whether you enjoy football, motorsports, combat sports,
                  documentaries, family entertainment, or international channels,
                  you can access your favorite content from compatible devices at
                  home or while traveling.
                </p>
                <p>
                  Unlike conventional television services, IPTV allows viewers to
                  stream content through internet-connected devices, providing
                  greater flexibility and a more convenient viewing experience.
                  From Smart TVs and Fire TV Stick devices to Android TV, Apple
                  TV, smartphones, tablets, Windows PCs, and Mac computers, IPTV
                  makes entertainment more accessible than ever.
                </p>
              </motion.div>

              {/* DESKTOP CTA cards (three) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="hidden lg:flex flex-wrap items-center gap-4 mt-8"
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-[0_4px_20px_rgba(11,30,92,0.06)] hover:shadow-[0_8px_28px_rgba(11,30,92,0.12)] transition-shadow"
                >
                  <span
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: NAVY }}
                  >
                    <Play className="h-4 w-4 text-white" fill="currentColor" />
                  </span>
                  <span
                    className="text-left text-[13px] font-bold leading-tight"
                    style={{ color: NAVY }}
                  >
                    Start Your IPTV
                    <br />
                    Subscription Free Trial
                  </span>
                  <ArrowRight
                    className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                    style={{ color: RED }}
                  />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#comparison"
                  className="group inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-[0_4px_20px_rgba(11,30,92,0.06)] hover:shadow-[0_8px_28px_rgba(11,30,92,0.12)] transition-shadow"
                >
                  <span
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: NAVY }}
                  >
                    <MonitorSmartphone className="h-4 w-4 text-white" />
                  </span>
                  <span
                    className="text-left text-[13px] font-bold leading-tight"
                    style={{ color: NAVY }}
                  >
                    Start Your IPTV
                    <br />
                    Subscription Today
                  </span>
                  <ArrowRight
                    className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                    style={{ color: RED }}
                  />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I want to subscribe to IPTV Subscription UK now")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-[0_4px_20px_rgba(11,30,92,0.06)] hover:shadow-[0_8px_28px_rgba(11,30,92,0.12)] transition-shadow"
                >
                  <span
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: NAVY }}
                  >
                    <Zap className="h-4 w-4 text-white" fill="currentColor" />
                  </span>
                  <span
                    className="text-left text-[13px] font-bold leading-tight"
                    style={{ color: NAVY }}
                  >
                    Get Instant
                    <br />
                    Access Now
                  </span>
                  <ArrowRight
                    className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                    style={{ color: RED }}
                  />
                </motion.a>
              </motion.div>
            </div>

            {/* RIGHT: UK flag map (desktop only) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="hidden lg:flex lg:col-span-5 order-2 justify-end"
            >
              <div className="relative w-full max-w-[470px] aspect-square">
                <Image
                  src={MAP_SRC}
                  alt="IPTV Subscription UK – Premium Streaming for Live TV, Sports, Movies & Series map"
                  fill
                  priority
                  className="object-contain"
                  sizes="470px"
                />
              </div>
            </motion.div>
          </div>

          {/* MOBILE CTA cards (three) + map beside them */}
          <div className="lg:hidden relative mt-7">
            <div className="relative z-10 w-[57%] space-y-3">
              <motion.a
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-3 py-2.5 shadow-[0_4px_18px_rgba(11,30,92,0.07)]"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-zinc-50 border border-zinc-100">
                  <Play className="h-4 w-4" style={{ color: NAVY }} fill="currentColor" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[13px] font-bold" style={{ color: NAVY }}>
                    Free Trial
                  </span>
                  <span className="block text-[11px] text-[#343341]">
                    Start your free trial today
                  </span>
                </span>
                <ArrowRight
                  className="h-4 w-4 ml-auto flex-shrink-0"
                  style={{ color: RED }}
                />
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.98 }}
                href="#comparison"
                className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-3 py-2.5 shadow-[0_4px_18px_rgba(11,30,92,0.07)]"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-zinc-50 border border-zinc-100">
                  <MonitorSmartphone className="h-4 w-4" style={{ color: NAVY }} />
                </span>
                <span className="leading-tight">
                  <span className="block text-[13px] font-bold" style={{ color: NAVY }}>
                    Subscribe Today
                  </span>
                  <span className="block text-[11px] text-[#343341]">
                    Choose your IPTV plan
                  </span>
                </span>
                <ArrowRight
                  className="h-4 w-4 ml-auto flex-shrink-0"
                  style={{ color: RED }}
                />
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I want to subscribe to IPTV Subscription UK now")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-3 py-2.5 shadow-[0_4px_18px_rgba(11,30,92,0.07)]"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-zinc-50 border border-zinc-100">
                  <Zap className="h-4 w-4" style={{ color: NAVY }} fill="currentColor" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[13px] font-bold" style={{ color: NAVY }}>
                    Instant Access
                  </span>
                  <span className="block text-[11px] text-[#343341]">
                    Get instant access now
                  </span>
                </span>
                <ArrowRight
                  className="h-4 w-4 ml-auto flex-shrink-0"
                  style={{ color: RED }}
                />
              </motion.a>
            </div>

            <div className="absolute bottom-0 right-0 w-[48%] aspect-square z-0 pointer-events-none">
              <Image
                src={MAP_SRC}
                alt="IPTV Subscription UK – Premium Streaming for Live TV, Sports, Movies & Series map"
                fill
                priority
                className="object-contain object-bottom"
                sizes="48vw"
              />
            </div>
          </div>

          {/* DESKTOP stats row */}
          <div className="hidden lg:grid grid-cols-3 gap-6 mt-14 border border-zinc-200 rounded-2xl bg-white px-8 py-5 shadow-[0_4px_20px_rgba(11,30,92,0.04)] divide-x divide-zinc-200">
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-6 w-6 text-[#D72C2C]" />
              <span className="font-extrabold text-base text-[#0B1E5C]">
                24-Hour Free Trial
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 pl-6">
              <Rocket className="h-6 w-6 text-[#D72C2C]" />
              <span className="font-extrabold text-base text-[#0B1E5C]">
                Instant Activation
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 pl-6">
              <Headphones className="h-6 w-6 text-[#D72C2C]" />
              <span className="font-extrabold text-base text-[#0B1E5C]">
                Customer Support
              </span>
            </div>
          </div>

          {/* MOBILE stats row */}
          <div className="lg:hidden mt-7 grid grid-cols-3 gap-2 rounded-2xl border border-zinc-200 px-2 py-4 bg-white shadow-sm">
            <div className="flex flex-col items-center justify-center text-center gap-1">
              <Clock className="h-5 w-5 text-[#D72C2C]" />
              <span className="font-extrabold text-[11px] text-[#0B1E5C] leading-tight">
                24-Hour Free Trial
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-1 border-l border-zinc-200 px-1">
              <Rocket className="h-5 w-5 text-[#D72C2C]" />
              <span className="font-extrabold text-[11px] text-[#0B1E5C] leading-tight">
                Instant Activation
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-1 border-l border-zinc-200">
              <Headphones className="h-5 w-5 text-[#D72C2C]" />
              <span className="font-extrabold text-[11px] text-[#0B1E5C] leading-tight">
                Customer Support
              </span>
            </div>
          </div>

        </div>
      </section>

      <ScrollReveal>
        <WhatMakesDifferentSection />
      </ScrollReveal>

      <ScrollReveal>
        <BestIPTVFeaturesSection />
      </ScrollReveal>

      <ScrollReveal>
        <PricingSection />
      </ScrollReveal>

      <ScrollReveal>
        <ChooseRightPlanSection />
      </ScrollReveal>

      <ScrollReveal>
        <PremiumIPTVPlanSection />
      </ScrollReveal>

      <ScrollReveal>
        <WatchLiveSportsSection />
      </ScrollReveal>

      <ScrollReveal>
        <CompatibleDevicesSection />
      </ScrollReveal>

      <ScrollReveal>
        <StreamingPerformanceSection />
      </ScrollReveal>

      <ScrollReveal>
        <IPTVvsTraditionalSection />
      </ScrollReveal>

      <ScrollReveal>
        <IPTVSetupGuideSection />
      </ScrollReveal>

      <ScrollReveal>
        <WhyIPTVGrowsSection />
      </ScrollReveal>

      <ScrollReveal>
        <WhyTrustSection />
      </ScrollReveal>


      <ScrollReveal>
        <SubscriptionFAQ />
      </ScrollReveal>

      <ScrollReveal>
        <SubscriptionCTASection />
      </ScrollReveal>

      <Footer />
    </div>
  );
}
