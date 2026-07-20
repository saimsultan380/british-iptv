"use client";

import {
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Clapperboard,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";
const BLUE = "#5B9BD5";

const categories = [
  "Live television",
  "Sports coverage",
  "Movies",
  "TV series",
  "News channels",
  "Documentary content",
  "Family entertainment",
];

const featureCards: {
  icon: LucideIcon | "live-tv" | "sports" | "family";
  title: string;
  description: string;
}[] = [
  {
    icon: Monitor,
    title: "Smart TV",
    description: "Stream directly on your television.",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Watch on the go anytime, anywhere.",
  },
  {
    icon: Tablet,
    title: "Tablet",
    description: "Enjoy content on your tablet.",
  },
  {
    icon: Laptop,
    title: "Computer",
    description: "Stream on laptops and desktops.",
  },
  {
    icon: "live-tv",
    title: "Live TV",
    description: "Access thousands of live channels.",
  },
  {
    icon: "sports",
    title: "Sports",
    description: "Never miss your favorite matches.",
  },
  {
    icon: Clapperboard,
    title: "Movies",
    description: "Watch the latest movies on demand.",
  },
  {
    icon: "family",
    title: "Family Content",
    description: "Entertainment for all ages.",
  },
];

function LiveTvIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 flex-shrink-0" aria-hidden>
      <rect
        x="6"
        y="10"
        width="28"
        height="20"
        rx="2"
        fill="none"
        stroke={NAVY}
        strokeWidth="1.8"
      />
      <text
        x="20"
        y="24"
        textAnchor="middle"
        fill={NAVY}
        fontSize="8"
        fontWeight="800"
        fontFamily="sans-serif"
      >
        LIVE
      </text>
    </svg>
  );
}

function SportsIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 flex-shrink-0" aria-hidden>
      <circle
        cx="20"
        cy="20"
        r="14"
        fill="none"
        stroke={NAVY}
        strokeWidth="1.8"
      />
      <path
        d="M20 6c3 3.5 4.5 8 4.5 14s-1.5 10.5-4.5 14M20 6c-3 3.5-4.5 8-4.5 14s1.5 10.5 4.5 14M6 20h28"
        stroke={NAVY}
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M9.5 13l21 14M30.5 13l-21 14"
        stroke={NAVY}
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

function MoviesIcon() {
  return (
    <div className="relative h-10 w-10 flex-shrink-0">
      <Clapperboard className="h-10 w-10" style={{ color: NAVY }} strokeWidth={1.5} />
      <svg
        viewBox="0 0 10 10"
        className="absolute bottom-1.5 right-1.5 h-3 w-3"
        aria-hidden
      >
        <polygon points="2,1 9,5 2,9" fill={RED} />
      </svg>
    </div>
  );
}

function FamilyIcon() {
  return (
    <div className="relative h-10 w-10 flex-shrink-0">
      <Users className="h-10 w-10" style={{ color: NAVY }} strokeWidth={1.5} />
      <span
        className="absolute -right-0.5 -top-0.5 text-[11px] leading-none"
        style={{ color: RED }}
      >
        ♥
      </span>
    </div>
  );
}

function FeatureIcon({
  icon,
}: {
  icon: LucideIcon | "live-tv" | "sports" | "family";
}) {
  if (icon === "live-tv") return <LiveTvIcon />;
  if (icon === "sports") return <SportsIcon />;
  if (icon === "family") return <FamilyIcon />;
  if (icon === Clapperboard) return <MoviesIcon />;

  const Icon = icon;
  return (
    <Icon
      className="h-10 w-10 flex-shrink-0"
      style={{ color: NAVY }}
      strokeWidth={1.5}
    />
  );
}

function BluePlusNode() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="flex h-7 w-7 items-center justify-center rounded-full border-2 bg-white shadow-sm"
      style={{ borderColor: BLUE }}
    >
      <span className="text-sm font-bold leading-none" style={{ color: BLUE }}>
        +
      </span>
    </motion.div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.06 * i + 0.15,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

export default function IptvPopularSection() {
  return (
    <section className="mx-auto w-full max-w-7xl bg-white px-5 py-12 sm:px-8 sm:py-16 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left: content */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="text-[28px] font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[42px]"
            style={{ color: NAVY }}
          >
            What Makes <span style={{ color: RED }}>IPTV UK</span> Popular Among
            Modern Viewers?
          </h2>

          <div
            className="mt-4 h-[3px] w-12 rounded-full sm:mt-5"
            style={{ backgroundColor: RED }}
          />

          <div className="mt-4 space-y-4 text-[13px] leading-relaxed text-[#343341] sm:mt-5 sm:text-[15px]">
            <p>
              The popularity of IPTV UK continues to grow because viewers want
              more control over how and where they watch content.
            </p>
            <p>
              Instead of relying on a single television setup, IPTV allows users
              to stream across Smart TVs, smartphones, tablets, computers, and
              streaming devices.
            </p>
            <p>
              Many viewers appreciate IPTV because it combines multiple
              entertainment categories into one platform, including:
            </p>
          </div>

          <ul className="mt-5 space-y-2.5">
            {categories.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.12 + i * 0.05 }}
                className="flex items-center gap-2.5 text-[13px] text-zinc-700 sm:text-[14px]"
              >
                <span
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: RED }}
                />
                {c}
              </motion.li>
            ))}
          </ul>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.45 }}
            className="mt-6 text-[13px] leading-relaxed text-[#343341] sm:text-[15px]"
          >
            This flexibility makes IPTV an attractive option for households with
            different viewing preferences.
          </motion.p>
        </motion.div>

        {/* Right: feature grid */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-[540px] lg:max-w-none"
        >
          {/* Left blue + button */}
          <div className="absolute -left-3 top-1/2 z-20 hidden -translate-y-1/2 sm:block">
            <BluePlusNode />
          </div>

          {/* Right blue + button */}
          <div className="absolute -right-3 top-1/2 z-20 hidden -translate-y-1/2 sm:block">
            <BluePlusNode />
          </div>

          {/* Outer frame */}
          <div className="relative overflow-hidden rounded-[22px] border border-zinc-200 bg-zinc-50/50 px-4 py-6 sm:px-5 sm:py-7">
            {/* Full-height center vertical dashed line */}
            <div className="pointer-events-none absolute inset-y-5 left-1/2 z-0 flex -translate-x-1/2 flex-col items-center">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: RED }}
              />
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="my-1 w-px flex-1 origin-center border-l border-dashed"
                style={{ borderColor: RED }}
              />
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.55 }}
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: RED }}
              />
            </div>

            {/* 2×4 card grid */}
            <div className="relative z-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
              {featureCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={cardVariants}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex items-start gap-3.5 rounded-2xl bg-white px-4 py-4 shadow-[0_4px_20px_rgba(11,30,92,0.07)] transition-shadow hover:shadow-[0_8px_28px_rgba(11,30,92,0.12)]"
                >
                  <FeatureIcon icon={card.icon} />
                  <div className="min-w-0 pt-0.5">
                    <h3
                      className="text-[13px] font-bold leading-tight sm:text-[14px]"
                      style={{ color: NAVY }}
                    >
                      {card.title}
                    </h3>
                    <p className="mt-1 text-[11.5px] leading-snug text-[#343341] sm:text-[12.5px]">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
