"use client";

import React from "react";
import {
  Tv,
  Trophy,
  Film,
  LayoutList,
  RotateCcw,
  MonitorSmartphone,
  Monitor,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const features = [
  {
    icon: Tv,
    title: "Live TV Streaming",
    description:
      "Watch live television channels across multiple categories from one platform.",
  },
  {
    icon: Trophy,
    title: "Sports Streaming",
    description:
      "Follow football, motorsports, combat sports, cricket events, and other major sporting competitions throughout the year.",
  },
  {
    icon: Film,
    title: "Movies & TV Series",
    description:
      "Access a growing entertainment library featuring popular movies, television series, and on-demand content.",
  },
  {
    icon: LayoutList,
    title: "IPTV EPG & TV Guide",
    description:
      "Browse channels, schedules, and upcoming programs with a clear electronic program guide.",
  },
  {
    icon: RotateCcw,
    title: "Catch-Up Features",
    description:
      "Stay connected to previously aired content when catch-up options are available.",
  },
  {
    icon: MonitorSmartphone,
    title: "Multi-Device Compatibility",
    description:
      "Enjoy IPTV on Smart TVs, streaming devices, mobile devices, tablets, and computers.",
  },
  {
    icon: Monitor,
    title: "HD, Full HD & 4K Support",
    description:
      "Where available, enjoy high-quality streaming designed for modern displays.",
    badge: "4K",
  },
  {
    icon: Heart,
    title: "Better IPTV Experience",
    description:
      "Enjoy live television, sports, movies, and entertainment from one convenient platform.",
    isCta: true,
  },
];

const bulletItems = [
  "Live TV Streaming",
  "Sports Streaming",
  "Movies & TV Series",
  "IPTV EPG & TV Guide",
  "Catch-Up Features",
  "Multi-Device Compatibility",
  "HD, Full HD & 4K Support",
];

export default function BestIPTVFeaturesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col lg:self-start"
          >
            {/* Heading */}
            <h2
              className="text-[28px] sm:text-[32px] lg:text-[38px] font-extrabold tracking-tight leading-[1.15]"
              style={{ color: NAVY }}
            >
              Best{" "}
              <span style={{ color: RED }}>IPTV Subscription</span>{" "}
              UK Features for Modern Entertainment
            </h2>

            {/* Red underline accent */}
            <div
              className="mt-3 mb-5 h-[3px] w-10 rounded-full"
              style={{ backgroundColor: RED }}
            />

            {/* Body paragraphs */}
            <p className="text-[#343341] text-[13px] sm:text-[14px] leading-relaxed mb-4">
              The best IPTV subscription services focus on delivering more than
              just channels. They provide an entertainment ecosystem designed
              around convenience, accessibility, and viewing quality.
            </p>

            <p className="text-[#343341] text-[13px] sm:text-[14px] leading-relaxed mb-5">
              From live TV and sports to movies, TV series, and advanced viewing
              tools, IPTV helps users enjoy a more flexible entertainment
              experience from one platform.
            </p>

            {/* Bullet list */}
            <p
              className="text-[13px] font-semibold mb-3"
              style={{ color: NAVY }}
            >
              Core features often include:
            </p>
            <ul className="space-y-1.5 mb-8">
              {bulletItems.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span
                    className="h-2 w-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: RED }}
                  />
                  <span className="text-[#343341] text-[13px] sm:text-[13.5px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA text block */}
            <div className="border-t border-zinc-100 pt-5">
              <p
                className="text-[13.5px] font-bold mb-1"
                style={{ color: NAVY }}
              >
                Discover a Better IPTV Experience
              </p>
              <p className="text-[#343341] text-[12.5px] sm:text-[13px] leading-relaxed">
                Enjoy live television, sports, movies, and entertainment from
                one convenient platform.
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN — 2×4 card grid with connector dots ── */}
          <div className="lg:col-span-8 relative">

            {/* Decorative vertical connector dots — left edge */}
            <div className="hidden lg:flex absolute -left-5 top-0 bottom-0 flex-col items-center justify-between py-8 pointer-events-none">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: RED }} />
                  <span className="h-1.5 w-1.5 rounded-full opacity-40" style={{ backgroundColor: RED }} />
                </div>
              ))}
            </div>

            {/* Decorative vertical connector dots — right edge */}
            <div className="hidden lg:flex absolute -right-5 top-0 bottom-0 flex-col items-center justify-between py-8 pointer-events-none">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: RED }} />
                  <span className="h-1.5 w-1.5 rounded-full opacity-40" style={{ backgroundColor: RED }} />
                </div>
              ))}
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-zinc-200 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(11,30,92,0.07)]">
              {features.map((feat, index) => {
                const Icon = feat.icon;
                const isLastRow = index >= features.length - 2;
                const isRightCol = index % 2 === 1;

                return (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                      ease: "easeOut",
                    }}
                    className={[
                      "relative flex flex-col gap-2.5 p-5 sm:p-6 bg-white",
                      // right border between two columns
                      !isRightCol ? "sm:border-r border-zinc-200" : "",
                      // bottom border between rows (not last row)
                      !isLastRow ? "border-b border-zinc-200" : "",
                      // hover
                      "hover:bg-zinc-50/60 transition-colors duration-200",
                      // CTA card subtle tint
                      feat.isCta ? "bg-[#0B1E5C]/[0.02]" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {/* Icon area */}
                    <div className="relative self-start">
                      {/* Badge (4K) */}
                      {feat.badge && (
                        <span
                          className="absolute -top-1 -right-4 text-[9px] font-black tracking-wide px-1 rounded"
                          style={{ color: NAVY, backgroundColor: `${NAVY}14` }}
                        >
                          {feat.badge}
                        </span>
                      )}
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl border"
                        style={{
                          borderColor: feat.isCta ? `${RED}40` : `${NAVY}20`,
                          backgroundColor: feat.isCta
                            ? `${RED}0D`
                            : `${NAVY}08`,
                        }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{
                            color: feat.isCta ? RED : NAVY,
                          }}
                          strokeWidth={1.6}
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div>
                      <h3
                        className="text-[13.5px] sm:text-[14px] font-bold leading-snug mb-1"
                        style={{ color: NAVY }}
                      >
                        {feat.title}
                      </h3>
                      <p className="text-[#343341] text-[12px] sm:text-[12.5px] leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
