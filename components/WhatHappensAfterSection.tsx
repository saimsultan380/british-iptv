"use client";

import { MessageSquare, Mail, Play, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const steps = [
  {
    num: 1,
    title: "Contact Our Team",
    desc: "Send us your inquiry using our contact form, WhatsApp, or your preferred communication method.",
    icon: (
      <MessageSquare className="h-9 w-9" strokeWidth={1.5} style={{ color: NAVY }} />
    ),
  },
  {
    num: 2,
    title: "Receive a Response",
    desc: "Our support team will review your request and provide the information required to proceed.",
    icon: (
      <Mail className="h-9 w-9" strokeWidth={1.5} style={{ color: NAVY }} />
    ),
  },
  {
    num: 3,
    title: "Receive Your IPTV Free Trial",
    desc: "If you request a free trial, we will provide the activation details needed to begin testing the service.",
    icon: (
      <div className="relative">
        <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 12v10H4V12" />
          <path d="M2 7h20v5H2z" />
          <path d="M12 22V7" />
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          <path d="m9 14 2 2 4-4" stroke={RED} strokeWidth="2" />
        </svg>
      </div>
    ),
  },
  {
    num: 4,
    title: "Install IPTV",
    desc: "Follow our Installation Guide to configure IPTV on your preferred compatible device.",
    icon: (
      <div className="relative">
        <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <circle cx="12" cy="10" r="2" fill="none" />
          <path d="M12 7v1M12 12v1M9 10h1M14 10h1" />
        </svg>
      </div>
    ),
  },
  {
    num: 5,
    title: "Start Streaming",
    desc: "Once setup is complete, you can begin exploring the IPTV platform and decide whether it meets your expectations.",
    icon: (
      <div className="relative">
        <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      </div>
    ),
  },
];

export default function WhatHappensAfterSection() {
  const phoneNumber = "447482794475";
  const trialHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I want to get my 24h free trial for IPTV UK",
  )}`;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-4"
        >
          <h2
            className="text-[26px] sm:text-[36px] lg:text-[42px] font-extrabold tracking-tight leading-tight"
            style={{ color: NAVY }}
          >
            What Happens After You Contact Us?
          </h2>
        </motion.div>

        {/* ── SUBTITLE ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#343341] text-[13px] sm:text-[14px] leading-relaxed">
            Getting started is simple. We have designed our process to make requesting an IPTV Free Trial or IPTV Subscription UK as straightforward as possible.
          </p>
        </motion.div>

        {/* ── STEPS DISPLAY (DESKTOP) ── */}
        <div className="hidden lg:block relative max-w-5xl mx-auto mb-16">
          {/* Loop Connector Line behind cards */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg className="w-full h-full" fill="none" stroke={RED} strokeWidth="2">
              {/* Line between Step 1 and 2 */}
              <line x1="28%" y1="110px" x2="38%" y2="110px" />
              <circle cx="33%" cy="110px" r="4" fill="white" stroke={RED} strokeWidth="2" />

              {/* Line between Step 2 and 3 */}
              <line x1="62%" y1="110px" x2="72%" y2="110px" />
              <circle cx="67%" cy="110px" r="4" fill="white" stroke={RED} strokeWidth="2" />

              {/* Loop line going down and left from Step 3 to Step 4 */}
              {/* Path: starts at center bottom of row 1, goes down, runs left above row 2, goes down into Step 4 */}
              <path d="M 83% 210 L 83% 230 L 30% 230 L 30% 290" />
              {/* Circle indicator on top of Step 4 */}
              <circle cx="30%" cy="230px" r="4" fill="white" stroke={RED} strokeWidth="2" />

              {/* Line between Step 4 and 5 */}
              <line x1="43%" y1="390px" x2="57%" y2="390px" />
              <circle cx="50%" cy="390px" r="4" fill="white" stroke={RED} strokeWidth="2" />
            </svg>
          </div>

          {/* Row 1 (Steps 1, 2, 3) */}
          <div className="grid grid-cols-3 gap-8 mb-20 relative z-10">
            {steps.slice(0, 3).map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className="relative bg-white border border-zinc-200 rounded-2xl p-6 text-center shadow-[0_2px_16px_rgba(11,30,92,0.06)] hover:shadow-[0_4px_24px_rgba(11,30,92,0.1)] transition-shadow min-h-[220px] flex flex-col items-center justify-center"
              >
                {/* Number Badge */}
                <div
                  className="absolute top-4 left-4 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: RED }}
                >
                  {step.num}
                </div>
                {/* Icon */}
                <div className="mb-4">
                  {step.icon}
                </div>
                {/* Title */}
                <h3 className="text-[15px] font-bold mb-2" style={{ color: NAVY }}>
                  {step.title}
                </h3>
                {/* Description */}
                <p className="text-[12px] text-[#343341] leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Row 2 (Steps 4, 5) */}
          <div className="flex justify-center gap-16 relative z-10 max-w-3xl mx-auto">
            {steps.slice(3).map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.3 + i * 0.1 }}
                className="w-full max-w-[280px] relative bg-white border border-zinc-200 rounded-2xl p-6 text-center shadow-[0_2px_16px_rgba(11,30,92,0.06)] hover:shadow-[0_4px_24px_rgba(11,30,92,0.1)] transition-shadow min-h-[220px] flex flex-col items-center justify-center"
              >
                {/* Number Badge */}
                <div
                  className="absolute top-4 left-4 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: RED }}
                >
                  {step.num}
                </div>
                {/* Icon */}
                <div className="mb-4">
                  {step.icon}
                </div>
                {/* Title */}
                <h3 className="text-[15px] font-bold mb-2" style={{ color: NAVY }}>
                  {step.title}
                </h3>
                {/* Description */}
                <p className="text-[12px] text-[#343341] leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── STEPS DISPLAY (MOBILE) ── */}
        <div className="lg:hidden flex flex-col gap-6 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-white border border-zinc-200 rounded-2xl p-5 text-center shadow-[0_2px_12px_rgba(11,30,92,0.05)] flex flex-col items-center"
            >
              {/* Number Badge */}
              <div
                className="absolute top-4 left-4 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: RED }}
              >
                {step.num}
              </div>
              {/* Icon */}
              <div className="mb-3 mt-2">
                {step.icon}
              </div>
              {/* Title */}
              <h3 className="text-[14px] font-bold mb-1.5" style={{ color: NAVY }}>
                {step.title}
              </h3>
              {/* Description */}
              <p className="text-[12px] text-[#343341] leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

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
            Contact Us and Start Streaming Today
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
