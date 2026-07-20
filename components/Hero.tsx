"use client";

import Image from "next/image";
import {
  Play,
  Zap,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { SkewedLine } from "@/components/SkewedTextReveal";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const MAP_SRC =
  "/IPTV UK - Premium IPTV Subscription UK for Live TV, Sports, Movies & Series.PNG";

const HERO_ACTION_IMAGES = {
  freeTrial: "/free-trail.PNG",
  viewPlans: "/view-plans.PNG",
  installationGuide: "/installation-guide.PNG",
} as const;

const HERO_STAT_IMAGES = {
  uptime: "/uptime.PNG",
  support: "/support.PNG",
  devices: "/all devices.PNG",
} as const;

export default function Hero() {
  return (
    <section id="hero" className="relative bg-white overflow-hidden">
      {/* MOBILE ONLY: Background UK map — right-aligned, sits behind content */}
      <div
        aria-hidden
        className="lg:hidden pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute top-[34%] sm:top-[30%] right-[-38%] sm:right-[-28%] w-[135%] sm:w-[120%] bottom-[-14%]">
          <Image
            src={MAP_SRC}
            alt=""
            fill
            priority
            className="object-contain object-right-top"
            sizes="(max-width: 1024px) 100vw, 0vw"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.12) 18%, #000 48%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.12) 18%, #000 48%)",
            }}
          />
        </div>
        {/* Left-only white fade so paragraph text stays readable — no fade on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-[0%] via-white/90 via-[38%] to-transparent to-[58%]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 pt-24 pb-9 sm:pt-40 sm:pb-12 lg:pt-48 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          {/* LEFT: Text content */}
          <div className="lg:col-span-7 xl:col-span-6 order-1">
            <h1
              className="text-[22px] sm:text-4xl lg:text-[44px] font-bold sm:font-extrabold tracking-tight leading-[1.12]"
              style={{ color: NAVY }}
            >
              <SkewedLine delay={0}>IPTV UK &ndash; Premium IPTV</SkewedLine>
              <SkewedLine delay={0.08}>
                Subscription <span style={{ color: RED }}>UK</span> for Live TV,
              </SkewedLine>
              <SkewedLine delay={0.16}>Sports, Movies &amp; Series</SkewedLine>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative mt-3 sm:mt-5 space-y-2 sm:space-y-4 text-[#0B1E5C] text-[11px] sm:text-[15px] leading-relaxed max-w-[88%] sm:max-w-[82%] lg:max-w-none"
            >
              {/* Soft rounded white glow — fades out smoothly at the bottom */}
              <div
                aria-hidden
                className="lg:hidden pointer-events-none absolute -inset-x-5 -top-4 -bottom-10 -z-10 rounded-[3rem]"
                style={{
                  background:
                    "radial-gradient(ellipse 108% 78% at 22% 34%, #ffffff 0%, rgba(255,255,255,0.98) 30%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.42) 72%, rgba(255,255,255,0.1) 90%, transparent 100%)",
                }}
              />
              <p>
                Looking for a reliable IPTV UK service that delivers smooth
                streaming, premium entertainment, and instant access to live
                television? Our IPTV UK platform is designed for viewers who want
                a simple way to enjoy live channels, sports, movies, and TV
                series from one place.
              </p>
              <p>
                Whether you enjoy football, blockbuster movies, international
                channels, documentaries, or family entertainment, our IPTV
                Subscription UK service brings everything together in one
                easy-to-use platform. With support for Smart TVs, Firestick,
                Android devices, Apple TV, tablets, and computers, you can enjoy
                your favorite content wherever you are.
              </p>
              <p>
                Unlike traditional television services, IPTV offers flexibility,
                convenience, and access to a much larger content library. More
                importantly, you can start streaming within minutes and explore
                the service with a 24-hour free trial before making a decision.
                Experience premium streaming, live sports, and entertainment with
                instant activation and simple setup.
              </p>
            </motion.div>

            {/* DESKTOP CTA cards (two) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="hidden lg:flex items-center gap-4 mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/contact/"
                className="group inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-[0_4px_20px_rgba(11,30,92,0.06)] hover:shadow-[0_8px_28px_rgba(11,30,92,0.12)] transition-shadow"
              >
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: NAVY }}
                >
                  <Play className="h-4 w-4 text-white" fill="currentColor" />
                </span>
                <span
                  className="text-left text-[13px] font-bold leading-tight"
                  style={{ color: NAVY }}
                >
                  Start Your IPTV UK
                  <br />
                  Free Trial Today
                </span>
                <ArrowRight
                  className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                  style={{ color: RED }}
                />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/subscription-plans/"
                className="group inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-[0_4px_20px_rgba(11,30,92,0.06)] hover:shadow-[0_8px_28px_rgba(11,30,92,0.12)] transition-shadow"
              >
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: NAVY }}
                >
                  <Zap className="h-4 w-4 text-white" fill="currentColor" />
                </span>
                <span
                  className="text-left text-[13px] font-bold leading-tight"
                  style={{ color: NAVY }}
                >
                  Get Instant
                  <br />
                  Access Now
                </span>
                <ArrowRight
                  className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                  style={{ color: RED }}
                />
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT: UK flag map (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex lg:col-span-5 xl:col-span-6 order-2 justify-end relative"
          >
            {/* We make it overflow its container slightly to the right to be nice and large */}
            <div className="relative w-[135%] max-w-[850px] aspect-square right-[-15%] xl:right-[-10%]">
              <Image
                src={MAP_SRC}
                alt="IPTV UK – Premium IPTV Subscription UK map"
                fill
                priority
                className="object-contain object-center"
                sizes="(min-width: 1024px) 50vw, 0vw"
              />
            </div>
          </motion.div>
        </div>

        {/* MOBILE CTA cards — restricted width, left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="lg:hidden mt-6 space-y-3 sm:space-y-3.5 w-[220px] sm:w-[255px]"
        >
          <motion.a
            whileTap={{ scale: 0.98 }}
            href="/contact/"
            className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-3 py-3.5 min-h-[64px] shadow-[0_4px_18px_rgba(11,30,92,0.07)]"
          >
            <CardIconImage src={HERO_ACTION_IMAGES.freeTrial} alt="Free Trial" />
            <span className="min-w-0 leading-tight flex-1">
              <span className="block text-[12px] sm:text-[13px] font-bold" style={{ color: NAVY }}>
                Free Trial
              </span>
              <span className="block text-[10px] sm:text-[11px] text-[#343341] leading-[1.25]">
                Start your free trial today
              </span>
            </span>
            <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" style={{ color: RED }} />
          </motion.a>

          <motion.a
            whileTap={{ scale: 0.98 }}
            href="/subscription-plans/"
            className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-3 py-3.5 min-h-[64px] shadow-[0_4px_18px_rgba(11,30,92,0.07)]"
          >
            <CardIconImage src={HERO_ACTION_IMAGES.viewPlans} alt="View Plans" />
            <span className="min-w-0 leading-tight flex-1">
              <span className="block text-[12px] sm:text-[13px] font-bold" style={{ color: NAVY }}>
                View Plans
              </span>
              <span className="block text-[10px] sm:text-[11px] text-[#343341] leading-[1.25]">
                Explore our subscription plans
              </span>
            </span>
            <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" style={{ color: RED }} />
          </motion.a>

          <motion.a
            whileTap={{ scale: 0.98 }}
            href="/installation-guide/"
            className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-3 py-3.5 min-h-[64px] shadow-[0_4px_18px_rgba(11,30,92,0.07)]"
          >
            <CardIconImage src={HERO_ACTION_IMAGES.installationGuide} alt="Installation Guide" />
            <span className="min-w-0 leading-tight flex-1">
              <span className="block text-[12px] sm:text-[13px] font-bold" style={{ color: NAVY }}>
                Installation Guide
              </span>
              <span className="block text-[10px] sm:text-[11px] text-[#343341] leading-[1.25]">
                Step-by-step setup instructions
              </span>
            </span>
            <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" style={{ color: RED }} />
          </motion.a>
        </motion.div>

        {/* DESKTOP stats row (left aligned, light top border) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="hidden lg:grid grid-cols-3 gap-6 mt-14 border-t border-zinc-200 pt-8 max-w-3xl"
        >
          <StatItem
            imageSrc={HERO_STAT_IMAGES.uptime}
            imageAlt="99.9% Uptime"
            value="99.9%"
            label="Uptime"
          />
          <StatItem
            imageSrc={HERO_STAT_IMAGES.support}
            imageAlt="24/7 Support"
            value="24/7"
            label="Support"
          />
          <StatItem
            imageSrc={HERO_STAT_IMAGES.devices}
            imageAlt="All Devices Compatible"
            value="All"
            label="Devices"
          />
        </motion.div>

        {/* MOBILE stats box (bordered, rounded) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="lg:hidden mt-6 grid grid-cols-3 divide-x divide-zinc-200 rounded-2xl border border-zinc-200 bg-white/90 px-2 py-5 w-full max-w-[420px]"
        >
          <StatItem
            mobile
            imageSrc={HERO_STAT_IMAGES.uptime}
            imageAlt="99.9% Uptime"
            value="99.9%"
            label="Uptime"
          />
          <StatItem
            mobile
            imageSrc={HERO_STAT_IMAGES.support}
            imageAlt="24/7 Support"
            value="24/7"
            label="Support"
          />
          <StatItem
            mobile
            imageSrc={HERO_STAT_IMAGES.devices}
            imageAlt="All Devices Compatible"
            value="All"
            label="Devices"
          />
        </motion.div>
      </div>
    </section>
  );
}

function CardIconImage({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="relative h-11 w-11 sm:h-12 sm:w-12 flex-shrink-0 translate-y-0.5">
      <Image src={src} alt={alt} fill className="object-contain" sizes="48px" />
    </span>
  );
}

function StatItem({
  imageSrc,
  imageAlt,
  value,
  label,
  mobile = false,
}: {
  imageSrc: string;
  imageAlt: string;
  value: string;
  label: string;
  mobile?: boolean;
}) {
  return (
    <div
      className={`flex ${
        mobile
          ? "flex-row items-center justify-start gap-2.5 text-left pl-1.5 pr-1"
          : "items-center justify-start gap-3"
      }`}
    >
      <span
        className={`relative flex-shrink-0 ${
          mobile
            ? "h-12 w-12 sm:h-14 sm:w-14 translate-y-0.5"
            : "h-11 w-11 lg:h-12 lg:w-12 translate-y-0.5"
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          sizes={mobile ? "56px" : "48px"}
        />
      </span>
      <div className="leading-tight min-w-0">
        <p
          className={`font-bold ${mobile ? "text-[12px] sm:text-[13px]" : "text-lg font-extrabold"}`}
          style={{ color: NAVY }}
        >
          {value}
        </p>
        <p
          className={`text-[#343341] leading-[1.25] ${mobile ? "text-[10px] sm:text-[11px]" : "text-sm"}`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
