"use client";

import React from "react";
import {
  Globe,
  RefreshCw,
  MonitorPlay,
  UserCheck,
  Headphones,
  MessageCircle,
  ArrowRight,
  Check,
  ArrowUp,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";
const PHONE_NUMBER = "447482794475";

type TipCard = {
  num: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: "check" | "up";
};

const tips: TipCard[] = [
  {
    num: "01",
    title: "Use a Reliable Internet Connection",
    description:
      "A stable internet connection helps reduce interruptions and improves overall streaming quality.",
    icon: Globe,
    accent: "check",
  },
  {
    num: "02",
    title: "Keep Your IPTV Application Updated",
    description:
      "Installing the latest version of your IPTV player helps maintain compatibility and performance.",
    icon: RefreshCw,
    accent: "up",
  },
  {
    num: "03",
    title: "Use Supported IPTV Applications",
    description:
      "For the best experience, use the recommended IPTV applications listed in this guide for your specific device.",
    icon: MonitorPlay,
  },
  {
    num: "04",
    title: "Enter Your Account Details Carefully",
    description:
      "Double-check your IPTV login details before completing setup to avoid unnecessary activation issues.",
    icon: UserCheck,
    accent: "check",
  },
  {
    num: "05",
    title: "Contact Support If You Need Assistance",
    description:
      "If you are unsure about any installation step, our technical support team is available to help guide you through the process.",
    icon: Headphones,
  },
];

function TipIcon({
  icon: Icon,
  accent,
  compact = false,
}: {
  icon: LucideIcon;
  accent?: "check" | "up";
  compact?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 ${
        compact
          ? "h-9 w-9"
          : "mx-auto mb-2 sm:mb-4 h-9 w-9 sm:h-[52px] sm:w-[52px]"
      }`}
    >
      <Icon
        className={compact ? "h-5 w-5" : "h-6 w-6 sm:h-9 sm:w-9"}
        style={{ color: NAVY }}
        strokeWidth={1.5}
      />
      {accent === "check" && (
        <span
          className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 sm:h-[18px] sm:w-[18px] items-center justify-center rounded-full"
          style={{ backgroundColor: RED }}
        >
          <Check className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-white" strokeWidth={3} />
        </span>
      )}
      {accent === "up" && (
        <span
          className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 sm:h-[18px] sm:w-[18px] items-center justify-center rounded-full"
          style={{ backgroundColor: RED }}
        >
          <ArrowUp className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-white" strokeWidth={3} />
        </span>
      )}
    </div>
  );
}

function TipCardItem({ tip, index }: { tip: TipCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="flex h-full flex-col sm:items-center rounded-xl sm:rounded-2xl border border-zinc-200 bg-white p-2.5 sm:px-5 sm:py-7 text-left sm:text-center shadow-[0_2px_12px_rgba(11,30,92,0.04)] sm:shadow-[0_4px_24px_rgba(11,30,92,0.05)]"
    >
      {/* Mobile: compact horizontal row */}
      <div className="flex sm:hidden items-start gap-2 min-w-0">
        <div className="relative shrink-0">
          <TipIcon icon={tip.icon} accent={tip.accent} compact />
          <span
            className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-extrabold text-white"
            style={{ backgroundColor: RED }}
          >
            {tip.num.replace("0", "")}
          </span>
        </div>
        <div className="min-w-0 flex-1 pt-0.5">
          <h3
            className="text-[10.5px] font-extrabold leading-snug mb-1"
            style={{ color: NAVY }}
          >
            {tip.title}
          </h3>
          <p className="text-[#343341] text-[9.5px] leading-snug line-clamp-3">
            {tip.description}
          </p>
        </div>
      </div>

      {/* Desktop: centered vertical card */}
      <div className="hidden sm:flex sm:flex-col sm:items-center sm:h-full">
        <TipIcon icon={tip.icon} accent={tip.accent} />
        <div
          className="mb-2 sm:mb-3 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full text-[10px] sm:text-[11px] font-extrabold text-white"
          style={{ backgroundColor: RED }}
        >
          {tip.num}
        </div>
        <h3
          className="text-[13px] sm:text-[14px] font-extrabold leading-snug mb-2 sm:mb-3 sm:min-h-[2.75rem]"
          style={{ color: NAVY }}
        >
          {tip.title}
        </h3>
        <div
          className="mb-2 sm:mb-3 h-[2px] w-8 rounded-full"
          style={{ backgroundColor: RED }}
        />
        <p className="text-[#343341] text-[11.5px] sm:text-[12px] leading-relaxed">
          {tip.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function InstallationTipsSection() {
  const supportHref = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    "Hi, I need help with my IPTV installation",
  )}`;
  const trialHref = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    "Hi, I want to start my 24h free trial for IPTV UK",
  )}`;

  return (
    <section className="mx-auto max-w-7xl w-full px-3 sm:px-8 py-8 sm:py-16 lg:py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-5 sm:mb-12"
      >
        <span
          className="text-[9px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-2 sm:mb-3 block"
          style={{ color: RED }}
        >
          Helpful Guide
        </span>
        <h2
          className="text-[19px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight leading-[1.2] sm:leading-[1.15] mb-2 sm:mb-4"
          style={{ color: NAVY }}
        >
          IPTV Installation Tips for the{" "}
          <span style={{ color: RED }}>Best Streaming</span> Experience
        </h2>
        <p className="text-[#343341] text-[11px] sm:text-[14px] leading-snug sm:leading-relaxed px-1">
          Following a few simple recommendations can help you enjoy a smoother
          IPTV experience from the beginning.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-5 mb-5 sm:mb-10">
        {tips.map((tip, index) => (
          <TipCardItem key={tip.num} tip={tip} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-xl sm:rounded-2xl border border-zinc-200 bg-white p-3.5 sm:p-6 shadow-[0_2px_12px_rgba(11,30,92,0.04)] sm:shadow-[0_4px_24px_rgba(11,30,92,0.05)] flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-5 lg:gap-8"
      >
        <div className="flex items-start sm:items-center gap-2.5 sm:gap-4 flex-1 min-w-0">
          <div
            className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl"
            style={{ backgroundColor: `${NAVY}0D` }}
          >
            <Headphones className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: NAVY }} />
          </div>
          <div className="min-w-0">
            <p
              className="text-[12.5px] sm:text-[15px] font-extrabold mb-0.5 sm:mb-1"
              style={{ color: RED }}
            >
              Need Help?
            </p>
            <p className="text-[#343341] text-[10.5px] sm:text-[13px] leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
              Our technical support team is available 24/7 to assist you with
              any setup or activation issues.
            </p>
          </div>
        </div>

        <div className="hidden lg:block h-12 w-px bg-zinc-200 shrink-0" />

        <div className="grid grid-cols-2 sm:flex sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 shrink-0">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={supportHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 sm:h-11 items-center justify-center gap-1.5 sm:gap-2 rounded-lg border border-zinc-300 bg-white px-2.5 sm:px-5 text-[10px] sm:text-[13px] font-bold text-zinc-800 hover:bg-zinc-50 transition-colors"
          >
            <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" style={{ color: NAVY }} />
            <span className="truncate">Contact Support</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={trialHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 sm:h-11 items-center justify-center gap-1.5 sm:gap-2 rounded-lg px-2.5 sm:px-5 text-[10px] sm:text-[13px] font-bold text-white shadow-md shadow-red-500/20 transition-colors"
            style={{ backgroundColor: RED }}
          >
            <span className="truncate">Start Free Trial</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
