"use client";

import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileText,
  Wrench,
  User,
  List,
  Lock,
  Tv,
  Headphones,
  Users,
  Star,
  Check
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

// 10 features for the left card, matched with user's content list
const features = [
  "24-Hour Free Trial",
  "Customer Support",
  "Easy Setup Process",
  "HD, Full HD & 4K Streaming",
  "Compatible with Popular Devices",
  "Flexible Subscription Options",
  "IPTV EPG & TV Guide Support",
  "Instant Activation",
  "Movies, TV Series & Sports Coverage",
  "User-Friendly Experience",
];

// 5 support items for the right timeline
const supportItems = [
  {
    icon: User,
    title: "IPTV Activation Assistance",
    desc: "Receive help activating your account and connecting supported devices with ease.",
  },
  {
    icon: List,
    title: "Playlist Setup Support",
    desc: "Get guidance on adding playlist URLs and supported login methods inside our IPTV service.",
  },
  {
    icon: Lock,
    title: "Login & Access Assistance",
    desc: "Need help with portal URL, configuration, username setup, or password access? Our team can assist.",
  },
  {
    icon: Tv,
    title: "Device Setup Help",
    desc: "We provide support for compatible devices and IPTV configuration for smooth streaming.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    desc: "If you face setup issues, activation problems, or general questions, our support team is here to help.",
  },
];

export default function WhyTrustSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-5 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* ── LEFT COLUMN ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col order-1"
        >
          <h2
            className="text-[28px] sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.12]"
            style={{ color: NAVY }}
          >
            Why <span style={{ color: RED }}>Viewers</span> Trust Our IPTV Subscription <span style={{ color: RED }}>UK Service</span>
          </h2>

          {/* Red underline accent */}
          <div
            className="mt-4 mb-6 h-[3px] w-12 rounded-full"
            style={{ backgroundColor: RED }}
          />

          <div className="space-y-4 text-[#343341] text-[13.5px] sm:text-[15px] leading-relaxed">
            <p>
              Trust plays a significant role when choosing an IPTV provider. Viewers want confidence that they are selecting a service focused on reliability, convenience, and user satisfaction.
            </p>
            <p>
              Our IPTV Subscription UK service is built around the features viewers value most.
            </p>
          </div>

          {/* Card: Why Users Choose Our IPTV Service */}
          <div className="mt-7 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-[0_2px_16px_rgba(11,30,92,0.04)]">
            <div className="flex items-center gap-2.5 pb-4 border-b border-zinc-100">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: RED }}
              >
                <Star className="h-4.5 w-4.5 fill-current" />
              </div>
              <h3 className="text-[15px] sm:text-[16px] font-extrabold" style={{ color: NAVY }}>
                Why Users Choose Our IPTV Service
              </h3>
            </div>
            
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.04 }}
                  className="flex items-center gap-2.5 text-[12.5px] sm:text-[13px] font-semibold text-zinc-700"
                >
                  <CheckCircle2
                    className="h-4.5 w-4.5 flex-shrink-0"
                    style={{ color: RED }}
                  />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom small description */}
          <p className="mt-6 text-[#343341] text-[13.5px] sm:text-[15px] leading-relaxed">
            Whether you are new to IPTV or already familiar with streaming services, our goal is to provide a dependable entertainment experience designed around modern viewing habits.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-[13px] sm:text-sm font-bold text-white shadow-lg shadow-red-500/20 transition-all"
              style={{ backgroundColor: RED }}
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#comparison"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 text-[13px] sm:text-sm font-bold transition-all hover:bg-zinc-50"
              style={{ color: NAVY }}
            >
              <FileText className="h-4 w-4" />
              <span>View Plans</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/installation-guide/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 text-[13px] sm:text-sm font-bold transition-all hover:bg-zinc-50"
              style={{ color: NAVY }}
            >
              <Wrench className="h-4 w-4" />
              <span>Installation Guide</span>
            </motion.a>
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN: Interactive Support Timeline Diagram ── */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="lg:col-span-7 order-2 w-full mt-8 lg:mt-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center w-full">
            
            {/* Timeline Cards Stack */}
            <div className="lg:col-span-8 relative pl-7 border-l-2 border-zinc-200 space-y-4 py-1">
              {supportItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                    className="relative flex items-start gap-4 p-4 bg-white rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Left dot on the vertical line */}
                    <span
                      className="absolute -left-[36px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-white"
                      style={{ backgroundColor: RED }}
                    />
                    
                    {/* Icon circle */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-50 border border-zinc-100 text-[#0B1E5C]">
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h4 className="text-[13.5px] sm:text-[14.5px] font-extrabold text-[#0B1E5C] mb-1 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[12px] sm:text-[12.5px] text-[#343341] leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Desktop Bracket Connector Line */}
            <div className="hidden lg:block lg:col-span-1 h-full min-h-[300px] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-[90%] max-h-[380px]" viewBox="0 0 40 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 20 H 20 V 280 H 0 M 20 150 H 40" stroke={RED} strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="0" cy="20" r="3.5" fill={RED} />
                  <circle cx="0" cy="280" r="3.5" fill={RED} />
                  <circle cx="20" cy="150" r="3.5" fill={RED} />
                </svg>
              </div>
            </div>

            {/* Floating Support Card */}
            <div className="col-span-1 lg:col-span-3 flex justify-center lg:justify-start lg:pl-1 mt-4 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
                className="flex flex-col items-center gap-3.5 p-5 rounded-2xl border border-zinc-200 bg-white shadow-md text-center max-w-[200px] w-full"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: RED }}
                >
                  <Users className="h-5 w-5" />
                </div>
                <p className="text-[12px] text-zinc-700 font-extrabold leading-relaxed">
                  Our support team is available to help new and existing users.
                </p>
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
