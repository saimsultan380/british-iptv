"use client";

import { Check, User, BarChart2, Tv, Trophy, Home, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const trialItems = [
  "Explore the streaming platform",
  "Test compatible devices",
  "Evaluate streaming quality",
  "Experience the user interface",
  "Check installation compatibility",
  "Ask questions directly to our support team",
];

const idealFor = [
  {
    icon: <User className="h-6 w-6" strokeWidth={1.5} />,
    label: "First-time\nIPTV users",
  },
  {
    icon: <BarChart2 className="h-6 w-6" strokeWidth={1.5} />,
    label: "Customers comparing\nIPTV providers",
  },
  {
    icon: <Tv className="h-6 w-6" strokeWidth={1.5} />,
    label: "Users upgrading from\ntraditional television",
  },
  {
    icon: <Trophy className="h-6 w-6" strokeWidth={1.5} />,
    label: "Sports and\nentertainment enthusiasts",
  },
  {
    icon: <Home className="h-6 w-6" strokeWidth={1.5} />,
    label: "Families looking for\na flexible streaming solution",
  },
];

function SectionDotHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-2 w-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: RED }}
      />
      <span
        className="text-[15px] sm:text-[17px] font-bold tracking-wide"
        style={{ color: NAVY }}
      >
        {children}
      </span>
      <span
        className="h-2 w-2 rounded-full flex-shrink-0"
        style={{ backgroundColor: RED }}
      />
    </div>
  );
}

export default function WhyRequestFreeTrial() {
  const phoneNumber = "447482794475";
  const trialHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I want to get my 24h free trial for IPTV UK",
  )}`;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">

        {/* ── SECTION HEADING ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-5"
        >
          <h2
            className="text-[24px] sm:text-[32px] lg:text-[36px] font-extrabold tracking-tight leading-tight"
            style={{ color: NAVY }}
          >
            Why Request an{" "}
            <span style={{ color: RED }}>IPTV Free Trial?</span>
          </h2>
        </motion.div>

        {/* ── INTRO PARAGRAPHS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-center space-y-3 mb-10"
        >
          <p className="text-[#343341] text-[13px] sm:text-[14px] leading-relaxed max-w-2xl mx-auto">
            Choosing an IPTV service is easier when you can test it yourself. A
            free trial allows you to experience the platform before committing to
            a subscription, helping you decide whether it meets your entertainment
            needs.
          </p>
          <p className="text-[#343341] text-[13px] sm:text-[14px] leading-relaxed max-w-2xl mx-auto">
            Our IPTV Free Trial gives you the opportunity to explore the service,
            check device compatibility, and experience the user interface before
            purchasing an IPTV Subscription UK.
          </p>
        </motion.div>

        {/* ── "DURING YOUR TRIAL" CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
          className="rounded-2xl border border-zinc-200 bg-white shadow-[0_2px_20px_rgba(11,30,92,0.06)] px-6 py-7 sm:px-10 sm:py-8 mb-8"
        >
          {/* card header */}
          <div className="mb-6">
            <SectionDotHeader>During your trial you can:</SectionDotHeader>
          </div>

          {/* 3×2 checkmark grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
            {trialItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.18 + i * 0.06 }}
                className="flex items-start gap-3"
              >
                <span
                  className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${RED}15` }}
                >
                  <Check className="h-3 w-3 font-bold" style={{ color: RED }} strokeWidth={3} />
                </span>
                <span className="text-[13px] sm:text-[14px] text-zinc-700 leading-snug">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── TRANSITION PARAGRAPH ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-center text-[#343341] text-[13px] sm:text-[14px] leading-relaxed max-w-2xl mx-auto mb-10"
        >
          A trial also helps first-time IPTV users become familiar with the setup
          process, making the transition to a full subscription much easier.
        </motion.p>

        {/* ── WHO SHOULD REQUEST ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mb-10"
        >
          {/* H3 with dot decorators */}
          <div className="text-center mb-2">
            <SectionDotHeader>Who Should Request a Free Trial?</SectionDotHeader>
          </div>
          <p className="text-center text-[#343341] text-[13px] sm:text-[14px] mb-7">
            Our IPTV Free Trial is ideal for:
          </p>

          {/* 5 icon cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {idealFor.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
                className="flex flex-col items-center text-center gap-3 rounded-2xl border border-zinc-200 bg-white px-3 py-5 shadow-[0_2px_12px_rgba(11,30,92,0.05)] hover:shadow-[0_4px_20px_rgba(11,30,92,0.1)] transition-shadow"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2"
                  style={{ borderColor: NAVY, color: NAVY }}
                >
                  {item.icon}
                </div>
                <p
                  className="text-[12px] sm:text-[13px] font-semibold leading-snug whitespace-pre-line"
                  style={{ color: NAVY }}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── CTA BUTTON ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={trialHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl px-10 py-4 text-[15px] font-bold text-white shadow-lg shadow-red-500/30 transition-all"
            style={{ backgroundColor: RED }}
          >
            Start Your IPTV Free Trial Today
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
