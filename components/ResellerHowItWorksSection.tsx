"use client";

import {
  ShoppingCart,
  Monitor,
  Lock,
  UserPlus,
  BarChart3,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";
const PHONE_NUMBER = "447482794475";

const steps = [
  {
    icon: ShoppingCart,
    title: "Step 1 – Choose Your Reseller Package",
    description:
      "Select the reseller plan that matches your business goals. Whether you are starting with a smaller credit package or planning for larger customer volumes, flexible reseller options help you scale at your own pace.",
  },
  {
    icon: Monitor,
    accent: "lock" as const,
    title: "Step 2 – Receive Your IPTV Reseller Panel",
    description:
      "Once your reseller package is activated, you receive secure access to your IPTV reseller dashboard. From there, you can begin managing customers, creating subscriptions, and monitoring your reseller activity.",
  },
  {
    icon: UserPlus,
    title: "Step 3 – Create Customer Subscriptions",
    description:
      "Use your available credits to generate customer accounts based on the subscription period you choose. The panel helps simplify subscription management while keeping everything organized in one place.",
  },
  {
    icon: BarChart3,
    title: "Step 4 – Grow Your IPTV Business",
    description:
      "As your customer base expands, your reseller panel continues to provide the tools needed to manage subscriptions, monitor accounts, and support long-term business growth.",
  },
];

function StepIcon({
  icon: Icon,
  accent,
}: {
  icon: typeof ShoppingCart;
  accent?: "lock";
}) {
  return (
    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
      <Icon className="h-7 w-7" style={{ color: NAVY }} strokeWidth={1.5} />
      {accent === "lock" && (
        <span
          className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white"
        >
          <Lock className="h-3 w-3" style={{ color: RED }} strokeWidth={2.5} />
        </span>
      )}
    </div>
  );
}

export default function ResellerHowItWorksSection() {
  const whatsappHref = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    "Hi, I want to get my IPTV reseller panel",
  )}`;

  return (
    <section className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-start">
        {/* Left — intro + CTA */}
        <div className="lg:col-span-5 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div
              className="mb-4 sm:mb-5 h-[3px] w-10 rounded-full"
              style={{ backgroundColor: RED }}
            />
            <h2
              className="text-[26px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight leading-[1.15] mb-4 sm:mb-5"
              style={{ color: NAVY }}
            >
              How Our IPTV Reseller Panel Works
            </h2>
            <p className="text-[#343341] text-[13px] sm:text-[14px] leading-relaxed mb-6 sm:mb-8">
              Starting an IPTV reseller business is straightforward when you have
              the right platform and support. Our reseller program follows a
              simple process that allows you to begin selling subscriptions
              without unnecessary complexity.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-fit items-center justify-center gap-2.5 rounded-xl px-5 sm:px-7 py-3.5 text-[12.5px] sm:text-[14px] font-bold text-white shadow-lg shadow-red-500/25 transition-colors"
            style={{ backgroundColor: RED }}
          >
            <Rocket className="h-4 w-4 shrink-0" />
            Get Your IPTV Reseller Panel
          </motion.a>
        </div>

        {/* Right — 2×2 step grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
              className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-[0_2px_16px_rgba(11,30,92,0.05)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <StepIcon icon={step.icon} accent={step.accent} />
                <div
                  className="h-[2px] w-8 rounded-full"
                  style={{ backgroundColor: RED }}
                />
              </div>
              <h3
                className="text-[14px] sm:text-[15px] font-extrabold leading-snug mb-2.5"
                style={{ color: NAVY }}
              >
                {step.title}
              </h3>
              <p className="text-[#343341] text-[12px] sm:text-[13px] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
