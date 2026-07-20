"use client";

import {
  Lightbulb,
  Target,
  Award,
  Headphones,
  ClipboardList,
  TrendingUp,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const mistakes: {
  num: number;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    num: 1,
    icon: Award,
    title: "Choosing Price Over Quality",
    description:
      "Low prices may attract initial attention, but customers are more likely to stay with a reseller who provides reliable service, responsive support, and a professional experience.",
  },
  {
    num: 2,
    icon: Headphones,
    title: "Ignoring Customer Support",
    description:
      "Quick and helpful communication builds confidence and encourages repeat business. Customers appreciate resellers who are available when assistance is needed.",
  },
  {
    num: 3,
    icon: ClipboardList,
    title: "Poor Subscription Management",
    description:
      "Keeping customer subscriptions organized helps prevent confusion during renewals and account management.",
  },
  {
    num: 4,
    icon: TrendingUp,
    title: "Growing Too Quickly",
    description:
      "Expanding steadily allows you to maintain service quality while developing efficient business processes.",
  },
  {
    num: 5,
    icon: LayoutDashboard,
    title: "Not Learning Your Reseller Panel",
    description:
      "Understanding all of the available reseller panel features helps improve efficiency and allows you to manage your IPTV business more effectively.",
  },
];

export default function ResellerMistakesSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-start">
        {/* Left column */}
        <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="h-4 w-4" style={{ color: RED }} />
              <span
                className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: RED }}
              >
                New Reseller Advice
              </span>
            </div>

            <h2
              className="text-[26px] sm:text-[34px] lg:text-[36px] font-extrabold tracking-tight leading-[1.15] mb-4"
              style={{ color: NAVY }}
            >
              Common Mistakes New IPTV Resellers Should Avoid
            </h2>

            <div
              className="mb-5 h-[3px] w-10 rounded-full"
              style={{ backgroundColor: RED }}
            />

            <p className="text-[#343341] text-[13px] sm:text-[14px] leading-relaxed mb-6">
              Every new reseller learns through experience, but avoiding common
              mistakes can help you build a stronger business from the
              beginning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.06 }}
            className="rounded-2xl border p-5 sm:p-6"
            style={{
              borderColor: `${RED}35`,
              backgroundColor: `${RED}08`,
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: RED }}
              >
                <Target className="h-5 w-5 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3
                  className="text-[14px] sm:text-[15px] font-extrabold mb-2"
                  style={{ color: RED }}
                >
                  Key Takeaway
                </h3>
                <p className="text-[#343341] text-[12.5px] sm:text-[13.5px] leading-relaxed">
                  A stronger reseller business starts with better decisions,
                  consistent service, and steady growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right column — timeline */}
        <div className="lg:col-span-7 relative">
          <div
            className="absolute left-[15px] sm:left-[17px] top-6 bottom-6 w-px hidden sm:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, #d4d4d8 0px, #d4d4d8 4px, transparent 4px, transparent 10px)",
            }}
            aria-hidden
          />

          <div className="flex flex-col gap-4 sm:gap-5">
            {mistakes.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  className="relative flex items-stretch gap-4 sm:gap-5"
                >
                  <div className="relative z-10 shrink-0 pt-5 sm:pt-6">
                    <div
                      className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full text-[12px] sm:text-[13px] font-extrabold text-white shadow-sm"
                      style={{ backgroundColor: RED }}
                    >
                      {item.num}
                    </div>
                  </div>

                  <div className="flex-1 rounded-xl border border-zinc-200 bg-white p-4 sm:p-5 shadow-[0_2px_12px_rgba(11,30,92,0.04)]">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${NAVY}08` }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{ color: NAVY }}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="min-w-0">
                        <h3
                          className="text-[13px] sm:text-[14px] font-extrabold leading-snug mb-1.5"
                          style={{ color: NAVY }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-[#343341] text-[11.5px] sm:text-[12.5px] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
