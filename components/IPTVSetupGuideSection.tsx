"use client";

import React from "react";
import {
  Compass,
  MonitorSmartphone,
  Smile,
  Zap,
  Sliders,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const steps = [
  {
    step: "01",
    title: "Step 1 – Choose Your IPTV Subscription",
    desc: "Select the subscription plan that best matches your entertainment needs and viewing preferences.",
  },
  {
    step: "02",
    title: "Step 2 – Receive Access Information",
    desc: "Once your subscription is activated, setup information is provided to help you get started quickly.",
  },
  {
    step: "03",
    title: "Step 3 – Install Your Preferred IPTV Application",
    desc: "Use a compatible IPTV application on your preferred device and follow the setup instructions.",
  },
  {
    step: "04",
    title: "Step 4 – Start Watching",
    desc: "After setup is complete, you can begin exploring live channels, sports coverage, movies, TV series, and entertainment content.",
  },
];

const appreciationReasons = [
  { icon: Smile, label: "Beginner-friendly process" },
  { icon: Zap, label: "Quick activation" },
  { icon: Sliders, label: "Flexible viewing options" },
  { icon: MonitorSmartphone, label: "Device compatibility" },
  { icon: Compass, label: "Easy navigation" },
];

export default function IPTVSetupGuideSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-5 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* ── LEFT SIDE: Title & Steps Timeline ── */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Tag */}
          <span
            className="text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: RED }}
          >
            IPTV SETUP PROCESS
          </span>

          {/* Heading */}
          <h2
            className="text-[28px] sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.12] mb-5"
            style={{ color: NAVY }}
          >
            IPTV Setup Guide – <span style={{ color: RED }}>Start Streaming in Minutes</span>
          </h2>

          {/* Red line */}
          <div
            className="mb-6 h-[3px] w-12 rounded-full"
            style={{ backgroundColor: RED }}
          />

          <div className="space-y-4 text-[#343341] text-[13.5px] sm:text-[15px] leading-relaxed mb-10 max-w-2xl">
            <p>
              Many people assume IPTV requires technical knowledge. In reality, modern IPTV services are designed to be accessible for both beginners and experienced users.
            </p>
            <p>
              The setup process is straightforward and can often be completed within minutes.
            </p>
          </div>

          {/* Timeline stack */}
          <div className="relative pl-7 border-l-2 border-zinc-200 space-y-6">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="relative flex flex-col sm:flex-row items-start gap-4 p-5 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all"
              >
                {/* Dot connector */}
                <span
                  className="absolute -left-[36px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-white"
                  style={{ backgroundColor: RED }}
                />

                {/* Number block */}
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white font-extrabold text-[15px] shadow-sm"
                  style={{ backgroundColor: RED }}
                >
                  {item.step}
                </div>

                {/* Text details */}
                <div className="min-w-0">
                  <h3
                    className="text-[14.5px] sm:text-[15.5px] font-extrabold mb-1"
                    style={{ color: NAVY }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#343341] text-[12px] sm:text-[13px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── RIGHT SIDE: Why Users Appreciate IPTV Setup Panel ── */}
        <div className="lg:col-span-5 flex flex-col w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8 shadow-[0_2px_24px_rgba(11,30,92,0.03)]"
          >
            <h3
              className="text-[18px] sm:text-[20px] font-extrabold mb-6 tracking-tight"
              style={{ color: NAVY }}
            >
              Why Users Appreciate IPTV Setup
            </h3>

            {/* List reasons */}
            <ul className="space-y-4 mb-8">
              {appreciationReasons.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={index}
                    className="flex items-center gap-3.5 text-[13.5px] sm:text-[14.5px] font-semibold text-zinc-700"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-zinc-200 text-[#0B1E5C] shadow-sm">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>

            {/* CTA Button wrapper */}
            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl px-6 py-4 text-[13.5px] sm:text-[14.5px] font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:opacity-95"
                style={{ backgroundColor: RED }}
              >
                <span>Start Your IPTV Subscription Today</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
