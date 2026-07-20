"use client";

import React from "react";
import {
  ShieldCheck,
  Library,
  MonitorSmartphone,
  Settings2,
  Clock,
  CheckCircle2,
  Play,
  LayoutList,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const entertainmentItems = [
  "Live TV Channels",
  "News Channels",
  "Sports Coverage",
  "Documentary Content",
  "Movies",
  "Family Entertainment",
  "TV Series",
  "International Programming",
];

const topCards = [
  {
    icon: ShieldCheck,
    title: "Reliable Streaming Experience",
    description:
      "A quality viewing experience begins with stability. Fast channel access, smooth navigation, and consistent performance help create a more enjoyable streaming environment.",
  },
  {
    icon: Library,
    title: "Extensive Entertainment Library",
    description:
      "Our IPTV platform provides access to a broad selection of content categories, including:",
    isList: true,
  },
  {
    icon: MonitorSmartphone,
    title: "Flexible Viewing Across Devices",
    description:
      "Watch your favorite content on compatible Smart TVs, Fire TV Stick devices, Android TV, Apple TV, smartphones, tablets, Windows PCs, and Mac devices.",
  },
  {
    icon: Settings2,
    title: "Easy Setup & Quick Access",
    description:
      "Whether you are new to IPTV or already familiar with streaming services, getting started is straightforward and beginner-friendly.",
  },
];

const bottomCard = {
  icon: Clock,
  title: "24-Hour Trial Available",
  description:
    "Explore the service, test device compatibility, and evaluate the viewing experience before choosing a subscription plan.",
};

function RedLine() {
  return (
    <div
      className="mt-2 mb-4 h-[3px] w-8 rounded-full"
      style={{ backgroundColor: RED }}
    />
  );
}

export default function WhatMakesDifferentSection() {
  const phoneNumber = "447482794475";

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col lg:self-start"
          >
            <h2
              className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight leading-[1.15]"
              style={{ color: NAVY }}
            >
              What Makes Our IPTV Subscription{" "}
              <span style={{ color: RED }}>UK</span> Different?
            </h2>

            {/* Red underline accent */}
            <div
              className="mt-3 mb-5 h-[3px] w-10 rounded-full"
              style={{ backgroundColor: RED }}
            />

            <p className="text-[#343341] text-[13px] sm:text-[14.5px] leading-relaxed mb-4">
              Choosing an IPTV subscription is not simply about finding channels.
              The quality of the overall experience plays a significant role in
              long-term satisfaction.
            </p>

            <p className="text-[#343341] text-[13px] sm:text-[14.5px] leading-relaxed mb-8 sm:mb-10">
              Our IPTV Subscription UK service focuses on the features viewers
              value most.
            </p>

            {/* CTA buttons
                Mobile  → all 3 in one row: red pill grows, two outline pills are icon-only with short label
                Desktop → full-width stacked column (unchanged look)
            */}

            {/* ── MOBILE row (hidden on lg+) ── */}
            <div className="flex items-stretch gap-2 lg:hidden">
              {/* Red — Start Free Trial (grows to fill remaining space) */}
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="/contact/"
                className="flex flex-1 flex-col items-center justify-center gap-1.5 rounded-xl px-3 py-3 text-white shadow-sm text-center"
                style={{ backgroundColor: RED }}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                  <Play className="h-3 w-3 text-white" fill="currentColor" />
                </span>
                <span className="text-[10.5px] font-bold leading-tight">Start Free Trial</span>
              </motion.a>

              {/* Outline — View Plans */}
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="#comparison"
                className="flex flex-1 flex-col items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-3 shadow-sm text-center"
                style={{ color: NAVY }}
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${NAVY}12` }}
                >
                  <LayoutList className="h-3 w-3" style={{ color: NAVY }} />
                </span>
                <span className="text-[10.5px] font-bold leading-tight">View Plans</span>
              </motion.a>

              {/* Outline — Installation Guide */}
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="/installation-guide/"
                className="flex flex-1 flex-col items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-3 py-3 shadow-sm text-center"
                style={{ color: NAVY }}
              >
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${NAVY}12` }}
                >
                  <Settings2 className="h-3 w-3" style={{ color: NAVY }} />
                </span>
                <span className="text-[10.5px] font-bold leading-tight">Installation Guide</span>
              </motion.a>
            </div>

            {/* ── DESKTOP column (hidden on mobile) ── */}
            <div className="hidden lg:flex flex-col gap-3">
              {/* Primary red CTA */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/contact/"
                className="inline-flex items-center gap-3 rounded-xl px-5 py-3.5 text-[13px] font-bold text-white shadow-sm transition-colors"
                style={{ backgroundColor: RED }}
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Play className="h-3.5 w-3.5 text-white" fill="currentColor" />
                </span>
                Start Free Trial
                <ArrowRight className="h-4 w-4 ml-auto" />
              </motion.a>

              {/* Outline — View Plans */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#comparison"
                className="inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-3.5 text-[13px] font-bold shadow-[0_2px_12px_rgba(11,30,92,0.06)] hover:shadow-[0_4px_20px_rgba(11,30,92,0.1)] transition-shadow"
                style={{ color: NAVY }}
              >
                <span
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${NAVY}12` }}
                >
                  <LayoutList className="h-3.5 w-3.5" style={{ color: NAVY }} />
                </span>
                View Plans
              </motion.a>

              {/* Outline — Installation Guide */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/installation-guide/"
                className="inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-3.5 text-[13px] font-bold shadow-[0_2px_12px_rgba(11,30,92,0.06)] hover:shadow-[0_4px_20px_rgba(11,30,92,0.1)] transition-shadow"
                style={{ color: NAVY }}
              >
                <span
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${NAVY}12` }}
                >
                  <Settings2 className="h-3.5 w-3.5" style={{ color: NAVY }} />
                </span>
                Installation Guide
              </motion.a>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <div className="lg:col-span-8 flex flex-col gap-4">

            {/* Top 2×2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-[0_2px_16px_rgba(11,30,92,0.05)] hover:shadow-[0_6px_28px_rgba(11,30,92,0.1)] transition-shadow duration-300"
                  >
                    {/* Icon badge */}
                    <div
                      className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border"
                      style={{
                        borderColor: `${RED}30`,
                        backgroundColor: `${RED}0D`,
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: RED }} />
                    </div>

                    <h3
                      className="text-[14px] sm:text-[15px] font-bold leading-snug mb-1"
                      style={{ color: NAVY }}
                    >
                      {card.title}
                    </h3>

                    <RedLine />

                    {card.isList ? (
                      <>
                        <p className="text-[#343341] text-[12.5px] sm:text-[13px] leading-relaxed mb-3">
                          {card.description}
                        </p>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                          {entertainmentItems.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-1.5"
                            >
                              <CheckCircle2
                                className="h-3.5 w-3.5 flex-shrink-0"
                                style={{ color: RED }}
                              />
                              <span className="text-[#343341] text-[11.5px] sm:text-[12.5px] leading-snug">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <p className="text-[#343341] text-[12.5px] sm:text-[13px] leading-relaxed">
                        {card.description}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom full-width card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
              className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-[0_2px_16px_rgba(11,30,92,0.05)] hover:shadow-[0_6px_28px_rgba(11,30,92,0.1)] transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                {/* Icon badge */}
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border"
                  style={{
                    borderColor: `${RED}30`,
                    backgroundColor: `${RED}0D`,
                  }}
                >
                  <Clock className="h-5 w-5" style={{ color: RED }} />
                </div>

                <div>
                  <h3
                    className="text-[14px] sm:text-[15px] font-bold leading-snug mb-1"
                    style={{ color: NAVY }}
                  >
                    {bottomCard.title}
                  </h3>
                  <RedLine />
                  <p className="text-[#343341] text-[12.5px] sm:text-[13px] leading-relaxed">
                    {bottomCard.description}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
