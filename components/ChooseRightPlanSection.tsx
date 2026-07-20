"use client";

import React from "react";
import {
  Tv,
  Trophy,
  Film,
  LayoutList,
  MonitorSmartphone,
  Settings2,
  Headphones,
  Zap,
  Check,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const planFeatures = [
  { icon: Tv,               label: "Live TV Streaming" },
  { icon: Trophy,           label: "Sports Channels" },
  { icon: Film,             label: "Movies & TV Series" },
  { icon: LayoutList,       label: "IPTV TV Guide" },
  { icon: MonitorSmartphone,label: "Device Compatibility" },
  { icon: Settings2,        label: "Easy Setup" },
  { icon: Headphones,       label: "Customer Support" },
  { icon: Zap,              label: "Instant Activation" },
];

export default function ChooseRightPlanSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-24">

        {/* ── Section heading (centered) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2
            className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold tracking-tight leading-[1.15] mb-3"
            style={{ color: NAVY }}
          >
            Choose the Right{" "}
            <span style={{ color: RED }}>IPTV Subscription</span> Plan
          </h2>
          {/* Red accent line */}
          <div
            className="mx-auto mt-3 mb-5 h-[3px] w-10 rounded-full"
            style={{ backgroundColor: RED }}
          />
          <p className="text-[#343341] text-[13.5px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto">
            Every viewer has different entertainment needs. Some prefer
            short-term flexibility, while others want long-term access to their
            favorite content. Our IPTV Subscription UK plans are designed to
            accommodate a variety of viewing preferences while providing the
            same commitment to quality and reliability.
          </p>
        </motion.div>

        {/* ── Plan card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto max-w-5xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-zinc-200 shadow-[0_8px_40px_rgba(11,30,92,0.09)]">

            {/* ── LEFT: plan identity panel ── */}
            <div
              className="lg:col-span-5 relative flex flex-col justify-between p-7 sm:p-9 overflow-hidden"
              style={{ backgroundColor: NAVY }}
            >
              {/* Decorative circles */}
              <div
                className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full opacity-10"
                style={{ backgroundColor: RED }}
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-12 h-64 w-64 rounded-full opacity-[0.07]"
                style={{ backgroundColor: "#fff" }}
              />

              <div className="relative z-10">
                {/* Badge */}
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase mb-5"
                  style={{ backgroundColor: `${RED}`, color: "#fff" }}
                >
                  <ShieldCheck className="h-3 w-3" />
                  Standard Plan
                </span>

                <h3 className="text-[22px] sm:text-[26px] font-extrabold leading-tight text-white mb-3">
                  Standard IPTV<br />Subscription
                </h3>

                <div
                  className="mb-5 h-[3px] w-8 rounded-full"
                  style={{ backgroundColor: RED }}
                />

                <p className="text-white/70 text-[13px] sm:text-[14px] leading-relaxed">
                  Ideal for viewers who want reliable access to live television,
                  sports, movies, and TV series through a simple and flexible
                  streaming solution.
                </p>
              </div>

              {/* CTA button */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/contact/"
                className="relative z-10 mt-8 inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-[13px] sm:text-[14px] font-bold text-white shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: RED }}
              >
                Choose Standard IPTV Subscription
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>

            {/* ── RIGHT: features grid ── */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-9 flex flex-col justify-center">
              <p
                className="text-[11px] font-bold tracking-widest uppercase mb-5"
                style={{ color: RED }}
              >
                ✦ What&apos;s Included
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {planFeatures.map((feat, index) => {
                  const Icon = feat.icon;
                  return (
                    <motion.div
                      key={feat.label}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.15 + index * 0.06,
                        ease: "easeOut",
                      }}
                      className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50/60 px-4 py-3 hover:border-zinc-200 hover:bg-white hover:shadow-[0_2px_12px_rgba(11,30,92,0.07)] transition-all duration-200"
                    >
                      {/* Check circle */}
                      <span
                        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${RED}12` }}
                      >
                        <Check
                          className="h-3.5 w-3.5"
                          style={{ color: RED }}
                          strokeWidth={2.5}
                        />
                      </span>

                      {/* Icon + label */}
                      <div className="flex items-center gap-2 min-w-0">
                        <Icon
                          className="h-4 w-4 flex-shrink-0"
                          style={{ color: NAVY }}
                          strokeWidth={1.7}
                        />
                        <span
                          className="text-[13px] font-semibold leading-tight truncate"
                          style={{ color: NAVY }}
                        >
                          {feat.label}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
