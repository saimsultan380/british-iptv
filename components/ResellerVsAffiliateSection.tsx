"use client";

import {
  Tag,
  Users,
  UserPlus,
  TrendingUp,
  Briefcase,
  Check,
  Minus,
  UserCog,
  User,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";
const PHONE_NUMBER = "447482794475";

const comparisonRows: {
  feature: string;
  icon: LucideIcon;
  reseller: string;
  affiliate: string;
}[] = [
  {
    feature: "Pricing Control",
    icon: Tag,
    reseller: "Control your own pricing",
    affiliate: "Fixed commission",
  },
  {
    feature: "Customer Management",
    icon: Users,
    reseller: "Manage customer subscriptions",
    affiliate: "No customer management",
  },
  {
    feature: "Customer Base",
    icon: UserPlus,
    reseller: "Build your own customer base",
    affiliate: "Refer customers only",
  },
  {
    feature: "Business Growth",
    icon: TrendingUp,
    reseller: "Flexible business growth",
    affiliate: "Limited earning model",
  },
  {
    feature: "Business Opportunity",
    icon: Briefcase,
    reseller: "Long-term business opportunity",
    affiliate: "Campaign-based income",
  },
];

export default function ResellerVsAffiliateSection() {
  const whatsappHref = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    "Hi, I want to start my IPTV reseller journey",
  )}`;

  return (
    <section className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-start">
        {/* Left column */}
        <div className="lg:col-span-5 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span
              className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 block"
              style={{ color: RED }}
            >
              Business Comparison
            </span>
            <h2
              className="text-[24px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight leading-[1.15] mb-5 sm:mb-6"
            >
              <span style={{ color: NAVY }}>
                IPTV Reseller vs Affiliate Program &ndash;{" "}
              </span>
              <span style={{ color: RED }}>
                Which Business Model Is Right for You?
              </span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-[#343341] text-[13px] sm:text-[14px] leading-relaxed mb-6">
              <p>
                People often confuse an IPTV reseller program with an affiliate
                program, but they are two very different business models.
              </p>
              <p>
                With an affiliate program, you simply refer customers and earn a
                commission after a successful sale. You have no control over
                pricing, subscriptions, customer management, or business growth.
              </p>
              <p>
                An IPTV Reseller UK program gives you complete control over your
                business. You purchase reseller credits, create customer
                subscriptions, manage accounts through your reseller panel, and
                set your own selling prices. This flexibility allows you to build
                long-term customer relationships while growing your own brand.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.06 }}
            className="rounded-2xl border bg-zinc-50/80 p-5 sm:p-6 mb-6 sm:mb-8"
            style={{ borderColor: `${RED}40` }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: RED }}
              >
                <TrendingUp className="h-5 w-5 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3
                  className="text-[14px] sm:text-[15px] font-extrabold mb-2"
                  style={{ color: RED }}
                >
                  The Bottom Line
                </h3>
                <p className="text-[#343341] text-[12.5px] sm:text-[13.5px] leading-relaxed">
                  For entrepreneurs looking to build a scalable digital business,
                  becoming an IPTV reseller offers greater flexibility and
                  control.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-fit items-center justify-center gap-2 rounded-xl px-5 sm:px-7 py-3.5 text-[12.5px] sm:text-[14px] font-bold text-white shadow-lg shadow-red-500/25 transition-colors"
            style={{ backgroundColor: RED }}
          >
            Start Your IPTV Reseller Journey Today
            <ArrowRight className="h-4 w-4 shrink-0" />
          </motion.a>
        </div>

        {/* Right column — comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="lg:col-span-7"
        >
          <div className="rounded-2xl border border-zinc-200 overflow-hidden shadow-[0_4px_24px_rgba(11,30,92,0.06)]">
            <div className="grid grid-cols-[1.15fr_1fr_1fr] items-center border-b border-zinc-200 bg-zinc-50/70">
              <div
                className="px-4 py-4 sm:px-5 text-[12px] sm:text-[13px] font-bold"
                style={{ color: NAVY }}
              >
                Feature
              </div>
              <div className="px-3 py-4 text-center border-l border-zinc-200">
                <div className="flex flex-col items-center gap-1.5">
                  <UserCog className="h-4 w-4" style={{ color: RED }} />
                  <span
                    className="text-[12px] sm:text-[13px] font-extrabold"
                    style={{ color: RED }}
                  >
                    IPTV Reseller
                  </span>
                </div>
              </div>
              <div className="px-3 py-4 text-center border-l border-zinc-200">
                <div className="flex flex-col items-center gap-1.5">
                  <User className="h-4 w-4 text-zinc-400" />
                  <span className="text-[12px] sm:text-[13px] font-bold text-[#343341]">
                    Affiliate Program
                  </span>
                </div>
              </div>
            </div>

            {comparisonRows.map((row, index) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[1.15fr_1fr_1fr] items-center ${
                    index < comparisonRows.length - 1
                      ? "border-b border-zinc-100"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2.5 px-4 py-3.5 sm:px-5 sm:py-4">
                    <Icon
                      className="h-4 w-4 shrink-0 text-zinc-400"
                      strokeWidth={1.75}
                    />
                    <span
                      className="text-[11.5px] sm:text-[13px] font-semibold leading-snug"
                      style={{ color: NAVY }}
                    >
                      {row.feature}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 px-3 py-3.5 sm:py-4 border-l border-zinc-100 min-h-full">
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5"
                      style={{ backgroundColor: RED }}
                    >
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[10.5px] sm:text-[12px] text-[#343341] leading-snug">
                      {row.reseller}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 px-3 py-3.5 sm:py-4 border-l border-zinc-100 min-h-full">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-300 mt-0.5">
                      <Minus className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[10.5px] sm:text-[12px] text-[#343341] leading-snug">
                      {row.affiliate}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
