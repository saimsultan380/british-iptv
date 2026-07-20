"use client";

import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const features = [
  {
    num: "01",
    title: "Easy Customer Management",
    description:
      "Create, activate, suspend, renew, or remove customer subscriptions from a single dashboard. The interface is designed to make account management simple, even for first-time resellers.",
  },
  {
    num: "02",
    title: "Flexible IPTV Credit System",
    description:
      "The reseller panel uses a straightforward credit system that allows you to activate subscriptions based on the selected duration. This approach makes it easier to manage inventory while planning future business growth.",
  },
  {
    num: "03",
    title: "Professional IPTV Dashboard",
    description:
      "Monitor customer accounts, manage subscription durations, review account activity, and organize your reseller operations through a clean and user-friendly dashboard.",
  },
  {
    num: "04",
    title: "Built for Business Growth",
    description:
      "Whether you manage a few customers or hundreds of active subscriptions, the reseller panel is designed to grow alongside your business while maintaining a simple management experience.",
  },
  {
    num: "05",
    title: "Dedicated Reseller Support",
    description:
      "Questions and technical issues can arise at any stage of your reseller journey. Our dedicated support team is available to assist with panel setup, activation, account management, and reseller guidance whenever you need help.",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      className="flex rounded-xl border border-zinc-200 bg-white shadow-[0_2px_16px_rgba(11,30,92,0.05)] overflow-hidden"
    >
      {/* Left — number + red line */}
      <div className="flex flex-col items-center justify-center shrink-0 w-[72px] sm:w-[88px] py-5 sm:py-6 px-3 sm:px-4">
        <span
          className="text-[28px] sm:text-[32px] font-extrabold leading-none"
          style={{ color: NAVY }}
        >
          {feature.num}
        </span>
        <div
          className="mt-2.5 h-[3px] w-8 rounded-full"
          style={{ backgroundColor: RED }}
        />
      </div>

      {/* Vertical divider */}
      <div className="w-px bg-zinc-200 shrink-0 self-stretch my-4" />

      {/* Right — title + description */}
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

export default function WhyChooseResellerPanelSection() {
  const phoneNumber = "447482794475";
  const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I want to get my IPTV Reseller Panel",
  )}`;

  const topRow = features.slice(0, 3);
  const bottomRow = features.slice(3);

  return (
    <section className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        <h2
          className="text-[26px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight leading-[1.15]"
          style={{ color: NAVY }}
        >
          Why Choose Our IPTV Reseller Panel?
        </h2>

        <div
          className="mx-auto mt-3 mb-5 h-[3px] w-10 rounded-full"
          style={{ backgroundColor: RED }}
        />

        <div className="space-y-4 text-[#343341] text-[13px] sm:text-[14px] leading-relaxed">
          <p>
            A reseller panel is more than a place to create subscriptions. It is
            the foundation of your IPTV business. Choosing the right platform
            helps you manage customers more efficiently while providing a better
            overall experience for the people you serve.
          </p>
          <p>
            Our IPTV Reseller Panel has been designed to simplify everyday
            reseller tasks while giving you greater control over your business.
          </p>
        </div>
      </motion.div>

      {/* Cards — 3 + 2 centered grid */}
      <div className="flex flex-col gap-4 sm:gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {topRow.map((feature, index) => (
            <FeatureCard key={feature.num} feature={feature} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto w-full">
          {bottomRow.map((feature, index) => (
            <FeatureCard
              key={feature.num}
              feature={feature}
              index={index + 3}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
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
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 sm:h-[52px] items-center justify-center rounded-lg px-8 sm:px-10 text-[13px] sm:text-[14px] font-bold text-white shadow-[0_8px_24px_rgba(11,30,92,0.2)] transition-shadow hover:shadow-[0_12px_32px_rgba(11,30,92,0.28)]"
          style={{ backgroundColor: NAVY }}
        >
          Get Your IPTV Reseller Panel
        </motion.a>
      </motion.div>
    </section>
  );
}
