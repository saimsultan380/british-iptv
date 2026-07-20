"use client";

import Image from "next/image";
import {
  Gauge,
  ShieldCheck,
  PlayCircle,
  Clock,
  ArrowRight,
  Tv,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const GAUGE_IMG = "/Reliable IPTV UK Streaming Performance.PNG";

const badges = [
  { icon: Gauge, label: "Fast Access" },
  { icon: ShieldCheck, label: "Stable Performance" },
  { icon: PlayCircle, label: "Quality Playback" },
];

export default function StreamingPerformanceSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-5 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

        {/* Left: heading + intro + badges + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 order-1"
        >
          <span
            className="text-[12px] font-bold tracking-[0.2em] uppercase"
            style={{ color: RED }}
          >
            IPTV UK
          </span>
          <div className="mt-2 h-1 w-10 rounded-full" style={{ backgroundColor: RED }} />

          <h2
            className="mt-4 text-[28px] sm:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-[1.12]"
            style={{ color: NAVY }}
          >
            Reliable IPTV Streaming{" "}
            <span style={{ color: RED }}>Designed for Modern Viewers</span>
          </h2>

          <div className="mt-4 space-y-4 text-[#343341] text-[13px] sm:text-[14px] leading-relaxed">
            <p>
              Streaming quality is one of the most important factors when selecting
              an IPTV subscription. Viewers want fast access to channels, smooth
              playback, and an enjoyable entertainment experience.
            </p>
            <p>
              Our IPTV platform is designed to prioritize performance and convenience.
            </p>
          </div>

          {/* Badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-zinc-200 bg-white">
                <b.icon className="h-4 w-4 flex-shrink-0" style={{ color: RED }} />
                <span
                  className="text-[11px] font-bold"
                  style={{ color: NAVY }}
                >
                  {b.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-col items-start gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-bold text-white shadow-[0_10px_28px_rgba(215,44,44,0.28)] transition-shadow hover:shadow-[0_14px_36px_rgba(215,44,44,0.38)]"
              style={{ backgroundColor: RED }}
            >
              Experience a Better IPTV Subscription
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <p className="text-[#343341] text-xs sm:text-sm font-medium">
              Enjoy entertainment designed around convenience, flexibility, and quality.
            </p>
          </div>
        </motion.div>

        {/* Middle: gauge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-3 order-2 flex justify-center"
        >
          <div className="relative w-full max-w-[300px] lg:max-w-[360px] aspect-[1024/819]">
            <Image
              src={GAUGE_IMG}
              alt="Reliable IPTV UK Streaming Performance"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 300px, 360px"
            />
          </div>
        </motion.div>

        {/* Right: feature list */}
        <div className="lg:col-span-5 order-3 space-y-5 sm:space-y-6">
          <Feature
            index={0}
            icon={<Gauge className="h-5 w-5" style={{ color: NAVY }} />}
            title="Fast Channel Access"
          >
            Quick access helps users move between channels and entertainment
            categories more efficiently.
          </Feature>

          <Feature
            index={1}
            icon={<ShieldCheck className="h-5 w-5" style={{ color: NAVY }} />}
            title="Stable Streaming Performance"
          >
            Reliable streaming infrastructure helps improve consistency and
            overall viewing quality.
          </Feature>

          <Feature
            index={2}
            icon={
              <span className="text-[13px] font-extrabold" style={{ color: NAVY }}>
                4K
              </span>
            }
            title="HD, Full HD & 4K Streaming"
          >
            <p>
              Modern viewers increasingly expect high-quality video experiences.
              Where available, content can be enjoyed in:
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {["HD", "Full HD", "4K UHD"].map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-bold"
                  style={{ color: NAVY }}
                >
                  {p}
                </span>
              ))}
            </div>
          </Feature>

          <Feature
            index={3}
            icon={<Tv className="h-5 w-5" style={{ color: NAVY }} />}
            title="IPTV EPG & Content Navigation"
          >
            An Electronic Program Guide helps viewers organize their entertainment
            experience and find content more efficiently.
          </Feature>

          <Feature
            index={4}
            icon={<Clock className="h-5 w-5" style={{ color: NAVY }} />}
            title="IPTV Catch-Up Features"
          >
            Catch-up functionality helps users stay connected to previously aired
            content when available.
          </Feature>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  children,
  index = 0,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="flex gap-3.5"
    >
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-100">
        {icon}
      </div>
      <div>
        <h3 className="text-[15px] font-bold leading-tight" style={{ color: NAVY }}>
          {title}
        </h3>
        <div className="mt-1.5 text-[12.5px] text-[#343341] leading-relaxed">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
