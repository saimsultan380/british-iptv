"use client";

import {
  MonitorPlay,
  ClipboardList,
  ChartColumnIncreasing,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const features: {
  icon: LucideIcon;
  title: string;
  desc: string;
}[] = [
  {
    icon: MonitorPlay,
    title: "Stable Streaming Experience",
    desc: "Reliable streaming contributes to a better viewing experience for your customers across supported devices.",
  },
  {
    icon: ClipboardList,
    title: "Business-Focused Platform",
    desc: "Our reseller environment is designed to help you organize customer accounts, monitor subscriptions, and manage your IPTV business more efficiently.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Built to Grow with Your Business",
    desc: "Whether you serve a handful of customers or a much larger audience, the reseller platform is designed to support your business as it expands.",
  },
];

export default function ResellerInfrastructureSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold tracking-tight leading-[1.15]"
            style={{ color: NAVY }}
          >
            Reliable Infrastructure That Supports Your IPTV Business
          </motion.h2>

          <div
            className="mt-4 h-1 w-14 rounded-full"
            style={{ backgroundColor: RED }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="mt-5 sm:mt-6 space-y-4 text-[#343341] text-[13px] sm:text-[15px] leading-relaxed"
          >
            <p>
              A reseller business depends on customer satisfaction. Reliable
              service helps encourage renewals, positive recommendations, and
              long-term business growth.
            </p>
            <p>
              Our IPTV infrastructure is designed to support consistent streaming
              performance while giving resellers confidence in the service they
              provide.
            </p>
          </motion.div>
        </div>

        {/* Right — feature cards */}
        <div className="space-y-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="flex items-stretch gap-0 rounded-2xl border border-zinc-200 bg-white shadow-[0_2px_16px_rgba(11,30,92,0.04)] overflow-hidden"
              >
                <div className="flex w-[88px] sm:w-[100px] flex-shrink-0 items-center justify-center px-3 py-5">
                  <Icon
                    className="h-9 w-9 sm:h-10 sm:w-10"
                    style={{ color: NAVY }}
                    strokeWidth={1.5}
                  />
                </div>

                <span
                  className="w-0.5 flex-shrink-0 self-stretch my-4 rounded-full"
                  style={{ backgroundColor: RED }}
                />

                <div className="flex flex-col justify-center py-5 pr-5 pl-4 sm:py-6 sm:pr-6 sm:pl-5">
                  <h3
                    className="text-[15px] sm:text-[17px] font-bold leading-tight"
                    style={{ color: NAVY }}
                  >
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] sm:text-[13.5px] text-[#343341] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
