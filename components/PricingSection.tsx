"use client";

import { useState } from "react";
import { Check, CalendarDays, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

type Plan = {
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
};

const plans: Record<"standard" | "premium", Plan[]> = {
  standard: [
    {
      name: "3 Months",
      price: 15,
      features: [
        "Live TV, Sports, Movies & Series",
        "IPTV EPG & Device Compatibility",
        "Instant Activation",
      ],
    },
    {
      name: "6 Months",
      price: 25,
      features: [
        "Live TV, Sports, Movies & Series",
        "Easy Setup Guide & IPTV EPG",
        "Customer Support",
      ],
    },
    {
      name: "12 Months",
      price: 40,
      features: [
        "Wide Entertainment Access",
        "Compatible With Popular Devices",
        "Instant Activation & Support",
      ],
    },
    {
      name: "24 Months",
      price: 70,
      recommended: true,
      features: [
        "Live TV, Sports, Movies & TV Series",
        "IPTV EPG & Easy Device Setup",
        "Customer Support Included",
        "Best Long-Term Value",
      ],
    },
  ],
  premium: [
    {
      name: "3 Months",
      price: 20,
      features: [
        "Premium Entertainment Access",
        "Live Sports, Movies & Series",
        "Fast Activation",
      ],
    },
    {
      name: "6 Months",
      price: 35,
      features: [
        "Premium Live Sports Coverage",
        "IPTV TV Guide & Device Support",
        "Customer Assistance",
      ],
    },
    {
      name: "12 Months",
      price: 55,
      features: [
        "Expanded Movies & Series Library",
        "Flexible Streaming Across Devices",
        "Fast Activation & Support",
      ],
    },
    {
      name: "24 Months",
      price: 90,
      recommended: true,
      features: [
        "Premium Entertainment & Sports Access",
        "IPTV TV Guide & Popular Device Support",
        "Streaming Flexibility & Assistance",
        "Best Premium Value",
      ],
    },
  ],
};

const tabs = [
  { id: "standard" as const, label: "Standard" },
  { id: "premium" as const, label: "Premium" },
];

export default function PricingSection() {
  const phoneNumber = "447482794475";
  const [activeTab, setActiveTab] = useState<"standard" | "premium">("standard");

  const tabLabel = activeTab === "standard" ? "Standard" : "Premium";
  const activePlans = plans[activeTab];

  return (
    <section
      id="comparison"
      className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white overflow-hidden scroll-mt-28"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8 sm:mb-12"
      >
        <span
          className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3"
          style={{ color: RED }}
        >
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: RED }} />
          Pricing Plan
        </span>
        <h2
          className="text-[26px] sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.12] mb-3 sm:mb-4"
          style={{ color: NAVY }}
        >
          IPTV Subscription UK Plans Designed for Every Viewer
        </h2>
        <p className="text-[#343341] text-[12.5px] sm:text-[15px] font-medium max-w-2xl mx-auto leading-relaxed">
          Every viewer has different entertainment needs. Some prefer short-term
          flexibility, while others want long-term value from their IPTV
          Subscription UK service. Our IPTV plans are designed to provide
          flexible options for different viewing preferences.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="relative inline-flex items-center p-1 rounded-full border border-zinc-200 bg-zinc-50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className="relative z-10 px-7 sm:px-10 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-sm font-bold transition-colors duration-200"
              style={{ color: activeTab === tab.id ? NAVY : "#9ca3af" }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="pricing-tab-pill"
                  className="absolute inset-0 rounded-full bg-white shadow-sm"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch"
        >
          {activePlans.map((plan, index) => {
            const message = `I want to subscribe to the ${plan.name} ${tabLabel} IPTV plan (£${plan.price}).`;
            return (
              <div
                key={`${activeTab}-${index}`}
                className={`relative flex flex-col w-full p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                  plan.recommended
                    ? "bg-white border-2 shadow-[0_20px_50px_rgba(215,44,44,0.12)]"
                    : "bg-white border-zinc-200 shadow-sm hover:shadow-md"
                }`}
                style={plan.recommended ? { borderColor: RED } : undefined}
              >
                {plan.recommended && (
                  <div
                    className="absolute top-4 right-4 text-[10px] sm:text-[11px] font-bold"
                    style={{ color: RED }}
                  >
                    Recommended
                  </div>
                )}

                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl mb-5"
                  style={{ backgroundColor: "#D72C2C14", color: RED }}
                >
                  <CalendarDays className="h-5 w-5" />
                </div>

                <h3
                  className="text-[16px] sm:text-[18px] font-bold mb-2"
                  style={{ color: NAVY }}
                >
                  {plan.name}
                </h3>

                <div className="mb-5 flex items-baseline gap-1.5">
                  <span
                    className="text-[34px] sm:text-[38px] font-extrabold leading-none"
                    style={{ color: RED }}
                  >
                    £{plan.price}
                  </span>
                  <span className="text-[12px] sm:text-[13px] text-zinc-400 font-medium">
                    / plan
                  </span>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <div
                        className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full mt-0.5"
                        style={{ backgroundColor: RED, color: "#fff" }}
                      >
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </div>
                      <span className="text-[12px] sm:text-[13px] text-zinc-600 font-medium leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.a
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between h-11 w-full rounded-xl px-4 text-[12.5px] sm:text-[13px] font-bold transition-all"
                  style={
                    plan.recommended
                      ? {
                          backgroundColor: RED,
                          color: "#fff",
                          boxShadow: "0 10px 25px rgba(215,44,44,0.25)",
                        }
                      : {
                          backgroundColor: "#fff",
                          color: NAVY,
                          border: "1px solid #e4e4e7",
                        }
                  }
                >
                  <span>Choose {tabLabel} Plan</span>
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <p className="text-center text-zinc-400 text-[12px] sm:text-[13px] font-medium mt-8 sm:mt-10">
        Free trial availability may apply before choosing a subscription plan.
      </p>
    </section>
  );
}
