"use client";

import {
  Users,
  MonitorPlay,
  ListMusic,
  Coins,
  Activity,
  Compass,
  Headphones,
  Check,
  ChevronDown,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";
const PHONE_NUMBER = "447482794475";

const panelFeatures: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Users,
    title: "Customer Account Management",
    description:
      "Create, activate, renew, suspend, or remove customer subscriptions from a single management panel. Keeping accounts organized helps you save time while providing faster customer support.",
  },
  {
    icon: MonitorPlay,
    title: "IPTV Subscription Management",
    description:
      "Manage subscription durations, monitor active services, and organize customer accounts through a simple reseller dashboard.",
  },
  {
    icon: ListMusic,
    title: "M3U Playlist Creation",
    description:
      "Generate M3U playlists where supported, making it easier for customers to configure compatible IPTV applications and streaming devices.",
  },
  {
    icon: Coins,
    title: "Flexible Credit Management",
    description:
      "Track your available reseller credits, allocate subscriptions efficiently, and monitor your business inventory through one centralized system.",
  },
  {
    icon: Activity,
    title: "Business Activity Monitoring",
    description:
      "Review account activity and manage reseller operations through an organized dashboard that keeps important information accessible whenever you need it.",
  },
  {
    icon: Compass,
    title: "Easy Panel Navigation",
    description:
      "The reseller interface is designed for both new and experienced users, allowing you to complete common tasks quickly without unnecessary complexity.",
  },
  {
    icon: Headphones,
    title: "Reliable Reseller Support",
    description:
      "If you require assistance with panel management, activation, or customer setup, our reseller support team is available to help.",
  },
];

const whyChoose = [
  "User-friendly dashboard",
  "Simple customer management",
  "Flexible subscription creation",
  "Organized reseller workflow",
  "Scalable business tools",
  "Dedicated reseller support",
];

export default function ResellerPanelFeaturesSection() {
  const whatsappHref = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    "Hi, I want to experience the IPTV reseller dashboard",
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
            <h2
              className="text-[26px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight leading-[1.15] mb-3"
              style={{ color: NAVY }}
            >
              Powerful IPTV{" "}
              <span style={{ color: RED }}>Reseller</span> Panel{" "}
              <span style={{ color: RED }}>Features</span>
            </h2>
            <div
              className="mb-5 sm:mb-6 h-[3px] w-10 rounded-full"
              style={{ backgroundColor: RED }}
            />

            <div className="space-y-3 sm:space-y-4 text-[#343341] text-[13px] sm:text-[14px] leading-relaxed mb-6 sm:mb-8">
              <p>
                A successful IPTV reseller business depends on more than credits.
                You need reliable management tools that simplify daily operations
                and help you deliver a better experience to your customers.
              </p>
              <p>
                Our IPTV Reseller Panel combines essential business tools into
                one easy-to-use dashboard.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.06 }}
            className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 mb-6 sm:mb-8 shadow-[0_2px_16px_rgba(11,30,92,0.04)]"
          >
            <div className="flex items-start gap-3 mb-4">
              <div
                className="mt-1 h-8 w-[3px] shrink-0 rounded-full"
                style={{ backgroundColor: RED }}
              />
              <h3
                className="text-[14px] sm:text-[15px] font-extrabold leading-snug"
                style={{ color: NAVY }}
              >
                Why Businesses Choose Our IPTV Reseller Panel
              </h3>
            </div>
            <ul className="space-y-2.5 pl-1">
              {whyChoose.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: RED }}
                  >
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span
                    className="text-[12.5px] sm:text-[13px] font-medium"
                    style={{ color: NAVY }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
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
            className="inline-flex w-fit max-w-full self-start items-center justify-center gap-2 rounded-xl px-5 sm:px-6 py-3.5 text-[12px] sm:text-[13.5px] font-bold text-white shadow-lg shadow-red-500/25 transition-colors"
            style={{ backgroundColor: RED }}
          >
            Experience a Professional IPTV Reseller Dashboard
            <ArrowRight className="h-4 w-4 shrink-0" />
          </motion.a>
        </div>

        {/* Right column — feature cards */}
        <div className="lg:col-span-7 space-y-3">
          {panelFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="group rounded-xl border border-zinc-200 bg-white shadow-[0_2px_12px_rgba(11,30,92,0.04)] transition-shadow hover:shadow-[0_6px_20px_rgba(11,30,92,0.08)]"
              >
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5">
                  <div
                    className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:bg-red-50"
                    style={{ backgroundColor: `${NAVY}08` }}
                  >
                    <Icon
                      className="h-5 w-5 sm:h-[20px] sm:w-[20px]"
                      style={{ color: NAVY }}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3
                      className="text-[13px] sm:text-[14px] font-extrabold leading-snug"
                      style={{ color: NAVY }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-[#343341] text-[11.5px] sm:text-[12.5px] leading-relaxed mt-1.5 sm:mt-2">
                      {feature.description}
                    </p>
                  </div>

                  <ChevronDown
                    className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 mt-0.5 opacity-70 transition-transform group-hover:translate-y-0.5"
                    style={{ color: RED }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
