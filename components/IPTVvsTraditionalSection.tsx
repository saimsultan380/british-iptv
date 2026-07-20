"use client";

import React from "react";
import {
  CheckCircle2,
  MinusCircle,
  XCircle,
  ArrowRight,
  FileText,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

type TraditionalValue =
  | { type: "yes" }
  | { type: "limited"; label: string }
  | { type: "depends"; label: string }
  | { type: "no"; label: string };

type CompareRow = {
  feature: string;
  traditional: TraditionalValue;
};

const rows: CompareRow[] = [
  { feature: "Live TV Channels", traditional: { type: "yes" } },
  { feature: "Sports Coverage", traditional: { type: "limited", label: "Limited" } },
  { feature: "Movies & TV Series", traditional: { type: "limited", label: "Limited" } },
  { feature: "Device Compatibility", traditional: { type: "limited", label: "Limited" } },
  { feature: "Watch While Traveling", traditional: { type: "no", label: "No" } },
  { feature: "Video On Demand", traditional: { type: "limited", label: "Limited" } },
  { feature: "Flexible Viewing", traditional: { type: "no", label: "No" } },
  { feature: "Smart TV Support", traditional: { type: "depends", label: "Depends" } },
  { feature: "Firestick Compatibility", traditional: { type: "no", label: "No" } },
  { feature: "Streaming Convenience", traditional: { type: "limited", label: "Limited" } },
];

function TraditionalCell({ value }: { value: TraditionalValue }) {
  if (value.type === "yes") {
    return <CheckCircle2 className="h-5 w-5" style={{ color: NAVY }} />;
  }
  if (value.type === "limited") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-medium text-[#343341]">
        <MinusCircle className="h-4 w-4 text-zinc-400" />
        {value.label}
      </span>
    );
  }
  if (value.type === "depends") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-medium text-[#343341]">
        <CheckCircle2 className="h-4 w-4 text-zinc-300" />
        {value.label}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-medium text-zinc-400">
      <XCircle className="h-4 w-4 text-zinc-300" />
      {value.label}
    </span>
  );
}

export default function IPTVvsTraditionalSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">

        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col"
        >
          <span
            className="text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: RED }}
          >
            IPTV UK COMPARISON
          </span>
          <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.12]">
            <span style={{ color: NAVY }}>IPTV Subscription UK vs </span>
            <br className="hidden sm:block" />
            <span style={{ color: NAVY }}>Traditional TV &ndash; </span>
            <br className="hidden sm:block" />
            <span style={{ color: RED }}>Which Is Better for Modern Viewers?</span>
          </h2>

          <div className="mt-5 space-y-4 text-[#343341] text-[13.5px] sm:text-[15px] leading-relaxed">
            <p>
              The way people consume entertainment has changed dramatically. Traditional television services once dominated the market, but many viewers now prefer IPTV subscriptions because they provide greater flexibility and more viewing options.
            </p>
            <p>
              Instead of being restricted to a television connected through cable or satellite equipment, IPTV allows viewers to access entertainment through internet-connected devices.
            </p>
            <p className="font-semibold" style={{ color: NAVY }}>
              For many modern viewers, IPTV offers a more flexible and convenient entertainment experience compared to traditional television services.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact/"
              className="inline-flex h-12 items-center gap-2 rounded-[6px] px-6 text-[13px] sm:text-sm font-bold text-white shadow-lg shadow-red-500/20 transition-colors"
              style={{ backgroundColor: RED }}
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#comparison"
              className="inline-flex h-12 items-center gap-2 rounded-[6px] border bg-white px-6 text-[13px] sm:text-sm font-bold transition-colors hover:bg-red-50"
              style={{ borderColor: RED, color: RED }}
            >
              <FileText className="h-4 w-4" />
              <span>View Plans</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/installation-guide/"
              className="inline-flex h-12 items-center gap-2 rounded-[6px] border bg-white px-6 text-[13px] sm:text-sm font-bold transition-colors hover:bg-zinc-50"
              style={{ borderColor: "#cbd5e1", color: NAVY }}
            >
              <Wrench className="h-4 w-4" />
              <span>How IPTV Works</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column — Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr] items-center border-b border-zinc-200 bg-zinc-50/60">
              <div className="px-4 py-4 sm:px-6 text-[12px] sm:text-[14px] font-bold text-zinc-700">
                Feature
              </div>
              <div className="px-3 py-4 text-center">
                <span
                  className="inline-block text-[12px] sm:text-[14px] font-extrabold pb-1 border-b-2"
                  style={{ color: RED, borderColor: RED }}
                >
                  IPTV Subscription UK
                </span>
              </div>
              <div className="px-3 py-4 text-center text-[12px] sm:text-[14px] font-bold text-[#343341]">
                Traditional TV
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1.4fr_1fr_1fr] items-center border-b border-zinc-100 last:border-0"
              >
                <div className="px-4 py-3.5 sm:px-6 text-[12px] sm:text-[14px] font-bold" style={{ color: NAVY }}>
                  {row.feature}
                </div>
                <div className="flex justify-center px-3 py-3.5">
                  <CheckCircle2 className="h-5 w-5" style={{ color: RED }} />
                </div>
                <div className="flex justify-center px-3 py-3.5">
                  <TraditionalCell value={row.traditional} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
