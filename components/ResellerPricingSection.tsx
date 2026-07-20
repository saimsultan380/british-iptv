"use client";

import { Rocket, Award, Building2, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const plans = [
  {
    icon: Rocket,
    title: "Starter Reseller Package",
    description:
      "Ideal for beginners who want to learn how the IPTV reseller business works while building their first customer base.",
    listLabel: "Perfect for:",
    items: [
      "First-time IPTV resellers",
      "Freelancers",
      "Small online businesses",
      "Side-income projects",
    ],
    recommended: false,
    cta: "Get Starter Package",
    whatsappMessage: "Hi, I want the Starter Reseller Package",
  },
  {
    icon: Award,
    title: "Professional Reseller Package",
    description:
      "Designed for resellers with an established customer base who require additional credits and greater flexibility to manage business growth.",
    listLabel: "Suitable for:",
    items: [
      "Growing IPTV businesses",
      "Digital agencies",
      "Online entrepreneurs",
      "Existing IPTV sellers",
    ],
    recommended: true,
    cta: "Get Professional Package",
    whatsappMessage: "Hi, I want the Professional Reseller Package",
  },
  {
    icon: Building2,
    title: "Enterprise Reseller Package",
    description:
      "Built for businesses managing large customer volumes and planning long-term expansion through advanced reseller management.",
    listLabel: "Recommended for:",
    items: [
      "High-volume resellers",
      "IPTV distributors",
      "Agencies",
      "Large streaming businesses",
    ],
    recommended: false,
    cta: "Get Enterprise Package",
    whatsappMessage: "Hi, I want the Enterprise Reseller Package",
  },
];

export default function ResellerPricingSection() {
  const phoneNumber = "447482794475";
  const mainCtaHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I want to choose an IPTV Reseller plan that fits my business",
  )}`;

  return (
    <section
      id="pricing"
      className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        <span
          className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
          style={{ color: NAVY }}
        >
          <span
            className="h-2 w-2 rounded-full shrink-0"
            style={{ backgroundColor: RED }}
          />
          IPTV Reseller UK
        </span>

        <h2
          className="text-[26px] sm:text-[32px] lg:text-[38px] font-extrabold tracking-tight leading-[1.15] mb-5"
          style={{ color: NAVY }}
        >
          IPTV Reseller UK Plans Designed for Every Business Stage
        </h2>

        <div className="space-y-4 text-[#343341] text-[13px] sm:text-[14px] leading-relaxed">
          <p>
            Every reseller has different business goals. Some are just starting
            their first IPTV business, while others already manage a growing
            customer base and need additional credits to support expansion.
          </p>
          <p>
            Our IPTV Reseller UK plans are designed to provide flexibility for
            businesses of every size. Whether you are creating your first
            customer account or managing hundreds of active subscriptions, you
            can choose a reseller package that matches your current requirements
            and upgrade whenever your business grows.
          </p>
          <p>
            Each reseller package includes access to a professional IPTV
            Reseller Panel, allowing you to create subscriptions, manage
            customer accounts, monitor activity, and organize your business from
            one dashboard.
          </p>
        </div>
      </motion.div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          const cardHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(plan.whatsappMessage)}`;

          return (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className={`relative flex flex-col rounded-xl bg-white p-6 sm:p-7 ${
                plan.recommended
                  ? "border-2 shadow-[0_12px_40px_rgba(215,44,44,0.12)]"
                  : "border border-zinc-200 shadow-[0_2px_16px_rgba(11,30,92,0.05)]"
              }`}
              style={plan.recommended ? { borderColor: RED } : undefined}
            >
              {plan.recommended && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded text-[9px] sm:text-[10px] font-extrabold tracking-widest uppercase text-white whitespace-nowrap z-10"
                  style={{ backgroundColor: RED }}
                >
                  Recommended
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-5 mt-1">
                <Icon
                  className="h-9 w-9 sm:h-10 sm:w-10"
                  style={{ color: RED }}
                  strokeWidth={1.5}
                />
              </div>

              {/* Title + description */}
              <h3
                className="text-center text-[15px] sm:text-[16px] font-bold leading-snug mb-3"
                style={{ color: NAVY }}
              >
                {plan.title}
              </h3>
              <p className="text-center text-[12px] sm:text-[13px] text-[#343341] leading-relaxed mb-5">
                {plan.description}
              </p>

              {/* List */}
              <div className="flex-1 mb-6">
                <p
                  className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mb-3"
                  style={{ color: NAVY }}
                >
                  {plan.listLabel}
                </p>
                <ul>
                  {plan.items.map((item, i) => (
                    <li key={item}>
                      <div className="flex items-center gap-2.5 py-2.5">
                        <Check
                          className="h-4 w-4 shrink-0"
                          style={{ color: RED }}
                          strokeWidth={2.5}
                        />
                        <span className="text-[12px] sm:text-[13px] text-[#343341] leading-snug">
                          {item}
                        </span>
                      </div>
                      {i < plan.items.length - 1 && (
                        <div className="h-px bg-zinc-100" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card CTA */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={cardHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg text-[12px] sm:text-[13px] font-bold transition-colors ${
                  plan.recommended
                    ? "text-white shadow-sm hover:opacity-90"
                    : "border bg-white hover:bg-red-50/40"
                }`}
                style={
                  plan.recommended
                    ? { backgroundColor: RED }
                    : { borderColor: RED, color: RED }
                }
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="mt-10 sm:mt-12 flex justify-center"
      >
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={mainCtaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 sm:h-[52px] items-center justify-center gap-2.5 rounded-lg px-8 sm:px-10 text-[13px] sm:text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(215,44,44,0.28)] transition-shadow hover:shadow-[0_12px_32px_rgba(215,44,44,0.38)]"
          style={{ backgroundColor: RED }}
        >
          Choose the IPTV Reseller Plan That Fits Your Business
          <ArrowRight className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
