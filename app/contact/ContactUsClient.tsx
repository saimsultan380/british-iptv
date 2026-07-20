"use client";

import Image from "next/image";
import {
  MessageCircle,
  ShieldCheck,
  Headphones,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhyRequestFreeTrial from "@/components/WhyRequestFreeTrial";
import ContactSupportTeamSection from "@/components/ContactSupportTeamSection";
import WhatHappensAfterSection from "@/components/WhatHappensAfterSection";
import ContactFAQSection from "@/components/ContactFAQSection";
import ContactCTASection from "@/components/ContactCTASection";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const UK_MAP_SRC =
  "/Contact Us – Request Your IPTV Free Trial Today.PNG";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

const trustBadges = [
  {
    icon: <ShieldCheck className="h-6 w-6" strokeWidth={1.6} />,
    title: "Trusted & Secure",
    desc: "Your information is safe with us.",
  },
  {
    icon: <Headphones className="h-6 w-6" strokeWidth={1.6} />,
    title: "Expert Support",
    desc: "Friendly experts ready to assist you anytime.",
  },
  {
    icon: <Zap className="h-6 w-6" strokeWidth={1.6} />,
    title: "Instant Response",
    desc: "Quick replies so you can get started faster.",
  },
];

export default function ContactUsClient() {
  const phoneNumber = "447482794475";
  const trialHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I want to get my 24h free trial for IPTV UK",
  )}`;

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* ── HERO SECTION ─────────────────────────────────────────── */}
        <section className="relative bg-white overflow-hidden pt-28 pb-10 sm:pt-40 sm:pb-14 lg:pt-48 lg:pb-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">

            {/* ── 2-COLUMN GRID: text | composite image ── */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* LEFT — headline + body + CTA */}
              <div className="lg:col-span-6 flex flex-col text-left order-1">
                <motion.h1
                  {...fadeUp(0)}
                  className="text-[26px] sm:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-[1.15] mb-5"
                  style={{ color: NAVY }}
                >
                  Contact Us &ndash;{" "}
                  <span style={{ color: RED }}>Request Your IPTV</span>
                  {" "}Free Trial Today
                </motion.h1>

                <motion.div
                  {...fadeUp(0.12)}
                  className="space-y-3 text-[#343341] text-[13px] sm:text-[14px] leading-relaxed mb-7"
                >
                  <p>
                    Looking for a reliable{" "}
                    <strong className="text-zinc-800 font-semibold">IPTV Free Trial</strong>{" "}
                    before choosing an IPTV service? You've come to the right
                    place. Whether you have questions about our{" "}
                    <strong className="text-zinc-800 font-semibold">IPTV UK</strong>{" "}
                    service, need help selecting the right{" "}
                    <strong className="text-zinc-800 font-semibold">IPTV Subscription UK</strong>,
                    or want to test our streaming quality before subscribing,
                    our support team is here to help.
                  </p>
                  <p>
                    We believe every customer should feel confident before
                    making a decision. That is why we offer a{" "}
                    <strong className="text-zinc-800 font-semibold">
                      24-hour IPTV Free Trial
                    </strong>
                    , giving you the opportunity to experience our service,
                    explore compatible devices, and evaluate the overall
                    streaming experience.
                  </p>
                  <p>
                    Our team is available to answer your questions, assist with
                    installation, explain subscription options, and guide you
                    through the activation process. Whether you are a
                    first-time IPTV user or an experienced streamer, we aim to
                    make every step simple and hassle-free.
                  </p>
                </motion.div>

                <div className="flex">
                  <motion.a
                    {...fadeUp(0.24)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={trialHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-[14px] font-bold text-white shadow-lg shadow-red-500/30 transition-all"
                    style={{ backgroundColor: RED }}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Request Your IPTV Free Trial Now
                  </motion.a>
                </div>
              </div>

              {/* RIGHT — composite image containing map & cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                className="lg:col-span-6 relative flex justify-center lg:justify-end order-2 mt-6 lg:mt-0"
              >
                <div className="relative w-full max-w-[640px] aspect-[5/3]">
                  <Image
                    src={UK_MAP_SRC}
                    alt="Contact IPTV UK – Request your IPTV free trial today"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 640px"
                  />
                </div>
              </motion.div>
            </div>

            {/* ── TRUST BADGES ROW (SMART DIVIDERS & ONE ROW ON MOBILE) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="mt-16 border-t border-zinc-200 pt-8 grid grid-cols-3 divide-x divide-zinc-200"
            >
              {trustBadges.map((badge) => (
                <div key={badge.title} className="flex flex-col items-center text-center px-2 sm:px-6">
                  <div
                    className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-zinc-200 shrink-0 mb-3"
                    style={{ color: NAVY }}
                  >
                    {badge.icon}
                  </div>
                  <div className="leading-tight">
                    <p
                      className="text-[10px] xs:text-[11px] sm:text-[14px] font-bold mb-1"
                      style={{ color: NAVY }}
                    >
                      {badge.title}
                    </p>
                    <p className="text-[8px] xs:text-[9px] sm:text-[12px] text-[#343341] max-w-[180px] mx-auto leading-relaxed">
                      {badge.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── WHY REQUEST A FREE TRIAL SECTION ── */}
        <WhyRequestFreeTrial />

        {/* ── CONTACT SUPPORT TEAM SECTION ── */}
        <ContactSupportTeamSection />

        {/* ── WHAT HAPPENS AFTER SECTION ── */}
        <WhatHappensAfterSection />

        {/* ── FAQ SECTION ── */}
        <ContactFAQSection />

        {/* ── CTA SECTION ── */}
        <ContactCTASection />
      </main>

      <Footer />
    </div>
  );
}
