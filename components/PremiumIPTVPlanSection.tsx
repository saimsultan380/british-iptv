"use client";

import React from "react";
import Image from "next/image";
import {
  Star,
  Trophy,
  Film,
  LayoutList,
  MonitorSmartphone,
  Zap,
  Sliders,
  Headphones,
  Check,
  ArrowRight,
  Crown,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const planFeatures = [
  { icon: Star,              label: "Premium Entertainment Access" },
  { icon: Trophy,            label: "Live Sports Coverage" },
  { icon: Film,              label: "Movies & TV Series" },
  { icon: LayoutList,        label: "IPTV EPG Support" },
  { icon: MonitorSmartphone, label: "Multi-Device Compatibility" },
  { icon: Zap,               label: "Fast Activation" },
  { icon: Sliders,           label: "Flexible Viewing Options" },
  { icon: Headphones,        label: "Customer Assistance" },
];

export default function PremiumIPTVPlanSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── LEFT COLUMN: Plan details & features checklist ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col order-2 lg:order-1"
          >
            {/* Tag/Badge */}
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[10px] font-extrabold tracking-widest uppercase mb-4 w-fit text-white"
              style={{ backgroundColor: RED }}
            >
              <Crown className="h-3.5 w-3.5" />
              Premium Plan
            </span>

            {/* Title */}
            <h2
              className="text-[28px] sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.12] mb-4"
              style={{ color: NAVY }}
            >
              Premium IPTV Subscription
            </h2>

            {/* Red accent line */}
            <div
              className="mb-6 h-[3px] w-12 rounded-full"
              style={{ backgroundColor: RED }}
            />

            {/* Description */}
            <p className="text-[#343341] text-[14px] sm:text-[15.5px] leading-relaxed mb-6 max-w-2xl">
              Designed for viewers who want an enhanced entertainment experience with broader content access and premium viewing options.
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {planFeatures.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.label}
                    className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 hover:border-red-200 transition-all duration-200 shadow-sm"
                  >
                    <span
                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${RED}12` }}
                    >
                      <Check className="h-3.5 w-3.5" style={{ color: RED }} strokeWidth={3} />
                    </span>
                    <div className="flex items-center gap-2 min-w-0">
                      <Icon className="h-4.5 w-4.5 flex-shrink-0" style={{ color: NAVY }} strokeWidth={1.8} />
                      <span className="text-[13px] sm:text-[13.5px] font-bold truncate text-zinc-800">
                        {feat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="w-full">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl px-8 py-4 text-[13.5px] sm:text-[14.5px] font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:opacity-95"
                style={{ backgroundColor: RED }}
              >
                <span>Choose Premium IPTV Subscription</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </motion.a>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Simple image display (no blue background box) ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 flex justify-center w-full order-1 lg:order-2"
          >
            <div className="relative w-full aspect-square max-w-[460px]">
              <Image
                src="/IPTV UK - Premium IPTV Subscription UK for Live TV, Sports, Movies & Series.PNG"
                alt="Premium IPTV Subscription UK"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
