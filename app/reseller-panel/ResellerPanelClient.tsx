"use client";

import React from "react";
import Image from "next/image";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";
import SkewedTextReveal from "@/components/SkewedTextReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ResellerWhyStartSection from "@/components/ResellerWhyStartSection";
import ResellerInfrastructureSection from "@/components/ResellerInfrastructureSection";
import ResellerGrowthSection from "@/components/ResellerGrowthSection";
import ResellerCreditSystemSection from "@/components/ResellerCreditSystemSection";
import ResellerHowItWorksSection from "@/components/ResellerHowItWorksSection";
import ResellerPanelFeaturesSection from "@/components/ResellerPanelFeaturesSection";
import ResellerVsAffiliateSection from "@/components/ResellerVsAffiliateSection";
import ResellerMistakesSection from "@/components/ResellerMistakesSection";
import WhyChooseResellerPanelSection from "@/components/WhyChooseResellerPanelSection";
import ResellerPricingSection from "@/components/ResellerPricingSection";
import ResellerWhiteLabelSection from "@/components/ResellerWhiteLabelSection";
import ResellerCompatibleDevicesSection from "@/components/ResellerCompatibleDevicesSection";
import ResellerFAQSection from "@/components/ResellerFAQSection";
import ResellerFinalCTASection from "@/components/ResellerFinalCTASection";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const HERO_IMAGE =
  "/IPTV Reseller UK – Start Your IPTV Business with the Best IPTV Reseller Panel.PNG";

export default function ResellerPanelClient() {
  const phoneNumber = "447482794475";
  const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I want to start my IPTV reseller business",
  )}`;

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col">
      <Header />

      {/* Hero Section */}
      <main className="pt-32 pb-8 sm:pt-40 sm:pb-12 lg:pt-48 lg:pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col text-left order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="hidden sm:inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 mb-5 shadow-sm"
              >
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full text-[11px]"
                  aria-hidden
                >
                  🇬🇧
                </span>
                <span
                  className="text-[11px] font-bold tracking-wide"
                  style={{ color: NAVY }}
                >
                  #1 IPTV Reseller Panel in the UK
                </span>
              </motion.div>

              <SkewedTextReveal
                delay={0.05}
                className="text-[26px] sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.12] mb-4 sm:mb-5"
                style={{ color: NAVY }}
              >
                IPTV Reseller UK &ndash; Start Your{" "}
                <span style={{ color: RED }}>Business</span> with a Professional
                Reseller Panel
              </SkewedTextReveal>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.12,
                }}
                className="space-y-1.5 sm:space-y-4 text-[#343341] text-[10px] sm:text-[14px] leading-[1.45] sm:leading-relaxed mb-3.5 sm:mb-8"
              >
                <p>
                  Looking for a reliable IPTV Reseller UK program that helps you
                  build a profitable streaming business? Our IPTV Reseller Panel
                  is designed for entrepreneurs, agencies, freelancers, and
                  businesses that want to sell premium IPTV subscriptions while
                  maintaining complete control over their customers, pricing,
                  and growth.
                </p>
                <p>
                  Whether you are completely new to the IPTV industry or already
                  manage an existing customer base, our IPTV UK Reseller
                  platform provides everything you need to start and scale your
                  business. From instant reseller panel activation and a
                  flexible credit system to customer management tools and
                  responsive reseller support, you receive the resources
                  required to operate your IPTV business with confidence.
                </p>
                <p>
                  Unlike many reseller programs that focus only on selling
                  credits, our platform is built around long-term business
                  growth. You can create customer subscriptions, manage
                  accounts, monitor activity, generate M3U playlists where
                  supported, and control your reseller operations through a
                  simple and user-friendly dashboard.
                </p>
                <p>
                  If you are searching for the best IPTV Reseller UK solution
                  with a powerful Reseller IPTV Panel, flexible credit
                  management, and dependable infrastructure, you are in the
                  right place.
                </p>
              </motion.div>

              <motion.a
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.22,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit max-w-full self-start items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[10px] sm:gap-2.5 sm:px-7 sm:py-3.5 sm:text-[14px] font-bold text-white shadow-lg shadow-red-500/25 transition-colors"
                style={{ backgroundColor: RED }}
              >
                <Rocket className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                Start Your IPTV Reseller Business Today
              </motion.a>
            </div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
              className="lg:col-span-6 relative order-2 mt-4 w-full sm:mt-4 lg:mt-0 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[560px]">
                <div className="relative w-full aspect-[4/3] sm:aspect-[1402/1122]">
                  <Image
                    src={HERO_IMAGE}
                    alt="IPTV Reseller UK – Start Your IPTV Business with the Best IPTV Reseller Panel"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 640px) 340px, (max-width: 1024px) 480px, 560px"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <ScrollReveal>
        <ResellerWhyStartSection />
      </ScrollReveal>

      <ScrollReveal>
        <WhyChooseResellerPanelSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerCreditSystemSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerHowItWorksSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerPricingSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerPanelFeaturesSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerWhiteLabelSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerCompatibleDevicesSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerInfrastructureSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerVsAffiliateSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerGrowthSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerMistakesSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerFAQSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResellerFinalCTASection />
      </ScrollReveal>

      <Footer />
    </div>
  );
}
