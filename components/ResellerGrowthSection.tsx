"use client";

import {
  User,
  Headphones,
  Users,
  Megaphone,
  TrendingUp,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const steps: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: User,
    title: "Understand Your Customers",
    desc: "Take time to understand what your customers value most. Many users look for reliable streaming, simple setup, responsive support, and a smooth viewing experience. Meeting these expectations helps create satisfied customers who are more likely to renew their subscriptions.",
  },
  {
    icon: Headphones,
    title: "Deliver Professional Customer Support",
    desc: "Good support builds trust. Respond to customer questions quickly, provide clear setup guidance, and assist with activation or account-related issues whenever possible.",
  },
  {
    icon: Users,
    title: "Build Long-Term Customer Relationships",
    desc: "Returning customers are an important part of business growth. Focus on providing a positive experience that encourages renewals and recommendations.",
  },
  {
    icon: Megaphone,
    title: "Promote Your Business Consistently",
    desc: "Grow your reseller business through your website, social media, referrals, online communities, and digital marketing strategies. Consistent promotion helps you reach new audiences while strengthening your brand.",
  },
  {
    icon: TrendingUp,
    title: "Scale Your Business Gradually",
    desc: "Many successful IPTV resellers begin with a small customer base and expand over time. As demand grows, additional reseller credits and business tools make it easier to manage larger numbers of subscriptions efficiently.",
  },
];

export default function ResellerGrowthSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="h-1 w-8 rounded-full"
              style={{ backgroundColor: RED }}
            />
            <span
              className="text-[11px] font-bold tracking-[0.18em] uppercase"
              style={{ color: RED }}
            >
              Business Growth Guide
            </span>
          </div>

          <h2
            className="text-[26px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight leading-[1.15]"
            style={{ color: NAVY }}
          >
            How to Grow Your{" "}
            <span style={{ color: RED }}>IPTV Reseller</span> Business
            Successfully
          </h2>

          <p className="mt-5 text-[#343341] text-[13px] sm:text-[15px] leading-relaxed">
            Starting an IPTV reseller business is only the first step. Long-term
            success comes from providing excellent customer service, building
            trust, and creating lasting relationships with your clients.
          </p>

          {/* Success tip */}
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 sm:p-5 flex gap-4">
            <div
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2"
              style={{ borderColor: RED, color: RED }}
            >
              <TrendingUp className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
              <p
                className="text-[14px] font-bold mb-1"
                style={{ color: RED }}
              >
                Success Tip
              </p>
              <p className="text-[12.5px] sm:text-[13px] text-[#343341] leading-relaxed">
                Start small and expand as your IPTV business grows while
                maintaining quality customer service.
              </p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/contact/"
            className="group mt-7 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[13px] sm:text-sm font-bold text-white shadow-[0_10px_28px_rgba(215,44,44,0.28)] transition-shadow hover:shadow-[0_14px_36px_rgba(215,44,44,0.38)]"
            style={{ backgroundColor: RED }}
          >
            Build Your IPTV Business with Confidence
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Right — timeline */}
        <div className="lg:col-span-7 relative">
          <div
            className="absolute left-[15px] sm:left-[17px] top-6 bottom-6 w-px border-l border-dashed border-zinc-300"
            aria-hidden
          />

          <div className="space-y-4 sm:space-y-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="relative flex gap-4 sm:gap-5"
                >
                  <span
                    className="relative z-10 flex h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white shadow-sm"
                    style={{ backgroundColor: RED }}
                  >
                    {i + 1}
                  </span>

                  <div className="flex-1 flex gap-4 rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5 shadow-[0_2px_16px_rgba(11,30,92,0.04)]">
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${RED}12`, color: RED }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <h3
                        className="text-[15px] sm:text-[16px] font-bold leading-tight"
                        style={{ color: NAVY }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-[12.5px] sm:text-[13px] text-[#343341] leading-relaxed">
                        {step.desc}
                      </p>
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
