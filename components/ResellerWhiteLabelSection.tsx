"use client";

import {
  Star,
  Check,
  Tag,
  Users,
  BarChart3,
  Megaphone,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const benefits = [
  "Professional business identity",
  "Stronger customer trust",
  "Improved brand recognition",
  "Scalable reseller operations",
  "Long-term business development",
];

const features = [
  {
    icon: Tag,
    title: "Build Your Own Brand",
    description:
      "Develop a unique business identity while managing customer subscriptions through a professional reseller platform.",
  },
  {
    icon: Users,
    title: "Grow Customer Confidence",
    description:
      "Consistent branding helps strengthen customer relationships and encourages long-term loyalty.",
  },
  {
    icon: BarChart3,
    title: "Expand Your Business",
    description:
      "Whether you serve local customers or international markets, a structured reseller business creates opportunities for future growth.",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="flex rounded-xl border border-zinc-200 bg-white shadow-[0_2px_16px_rgba(11,30,92,0.05)] overflow-hidden"
    >
      <div className="flex items-center justify-center shrink-0 w-[72px] sm:w-[80px] py-5 sm:py-6">
        <div
          className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full"
          style={{ backgroundColor: `${RED}12` }}
        >
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: RED }} strokeWidth={1.5} />
        </div>
      </div>

      <div className="w-px bg-zinc-200 shrink-0 self-stretch my-4" />

      <div className="flex-1 min-w-0 py-5 sm:py-6 pr-5 sm:pr-6 pl-4 sm:pl-5">
        <h3
          className="text-[14px] sm:text-[15px] font-bold leading-snug mb-2"
          style={{ color: NAVY }}
        >
          {feature.title}
        </h3>
        <p className="text-[12px] sm:text-[13px] text-[#343341] leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ResellerWhiteLabelSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white">
      {/* Top — heading + benefits card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-8 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6"
        >
          <h2
            className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold tracking-tight leading-[1.15]"
            style={{ color: NAVY }}
          >
            White Label IPTV Reseller Opportunities
          </h2>

          <div
            className="mt-3 mb-5 h-[3px] w-10 rounded-full"
            style={{ backgroundColor: RED }}
          />

          <div className="space-y-4 text-[#343341] text-[13px] sm:text-[14px] leading-relaxed">
            <p>
              As your reseller business grows, creating a professional brand
              becomes increasingly important. A White Label IPTV Reseller solution
              allows you to build stronger recognition while delivering services
              under your own business identity.
            </p>
            <p>
              Instead of focusing only on selling subscriptions, white label
              opportunities help you establish a professional presence that
              customers can recognize and trust.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-6"
        >
          <div className="rounded-xl border border-zinc-200 bg-white shadow-[0_4px_24px_rgba(11,30,92,0.07)] p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: RED }}
              >
                <Star className="h-5 w-5 text-white" fill="white" strokeWidth={0} />
              </span>
              <h3
                className="text-[15px] sm:text-[16px] font-bold"
                style={{ color: NAVY }}
              >
                White Label Benefits
              </h3>
            </div>

            <ul>
              {benefits.map((item, i) => (
                <li key={item}>
                  <div className="flex items-center gap-3 py-3">
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: RED }}
                    >
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[12.5px] sm:text-[13px] text-[#343341] leading-snug">
                      {item}
                    </span>
                  </div>
                  {i < benefits.length - 1 && (
                    <div className="h-px bg-zinc-100" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>

      {/* Bottom callout bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="flex items-center gap-4 sm:gap-5 rounded-xl border border-zinc-200 bg-white shadow-[0_2px_16px_rgba(11,30,92,0.05)] p-5 sm:p-6"
      >
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: RED }}
        >
          <Megaphone className="h-5 w-5 text-white" strokeWidth={1.75} />
        </span>

        <div className="w-px h-10 bg-zinc-200 shrink-0" />

        <p className="text-[12.5px] sm:text-[14px] text-[#343341] leading-relaxed">
          Instead of focusing only on selling subscriptions, white label
          opportunities help you establish a professional presence that customers
          can recognize and trust.
        </p>
      </motion.div>
    </section>
  );
}
