"use client";

import Image from "next/image";
import {
  Zap,
  Sparkles,
  LibraryBig,
  MonitorSmartphone,
  Settings2,
  Gift,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const features = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Instant Activation",
    desc: "Get started within minutes. Once your account is activated, you can access live channels, movies, and TV series without complicated installation processes.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Premium Streaming Quality",
    desc: "Enjoy content in HD, Full HD, and 4K quality where available. Our platform is optimized to provide a smooth viewing experience across supported devices.",
  },
  {
    icon: <LibraryBig className="h-5 w-5" />,
    title: "Huge Entertainment Library",
    desc: "Access a large collection of live TV channels, sports coverage, movies, documentaries, children's programming, and on-demand entertainment.",
  },
  {
    icon: <MonitorSmartphone className="h-5 w-5" />,
    title: "Compatible With Popular Devices",
    desc: "Watch IPTV UK on Smart TVs, Fire TV Stick, Android TV, Apple TV, smartphones, tablets, Windows PCs, and Mac devices.",
  },
  {
    icon: <Settings2 className="h-5 w-5" />,
    title: "Easy Setup",
    desc: "Our step-by-step setup process helps both beginners and experienced users get connected quickly.",
  },
  {
    icon: <Gift className="h-5 w-5" />,
    title: "24-Hour Free Trial",
    desc: "We offer a free trial so you can evaluate streaming quality, channel availability, and overall performance before subscribing.",
  },
];

export default function WhyBestSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">

        {/* Left: Heading + intro + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col"
        >
          <h2 className="text-[26px] sm:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-[1.12]">
            <span style={{ color: NAVY }}>Why We Are Considered One of the </span>
            <span style={{ color: RED }}>Best IPTV UK Services</span>
          </h2>

          <div className="mt-4 sm:mt-6 space-y-3 text-[#343341] text-[13px] sm:text-[15px] leading-relaxed">
            <p>
              Finding the best IPTV UK service is not just about accessing
              channels. Modern viewers want a reliable IPTV provider that
              delivers quality streaming, device compatibility, flexible viewing
              options, and a smooth user experience.
            </p>
            <p>
              Our IPTV UK platform is designed to meet those expectations.
              Whether you are searching for IPTV Subscription UK plans, British
              IPTV access, or a complete United Kingdom IPTV solution, our goal
              is to provide a convenient and enjoyable entertainment experience.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/contact/"
            className="mt-6 sm:mt-8 inline-flex h-12 w-fit items-center gap-2 rounded-[6px] px-6 text-[13px] sm:text-sm font-bold text-white shadow-lg shadow-red-500/20 transition-colors"
            style={{ backgroundColor: RED }}
          >
            <span>Start Free Trial</span>
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* Right: dashboard image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-7 relative"
        >
          <div className="relative w-full max-w-[360px] sm:max-w-[560px] lg:max-w-none mx-auto aspect-[1024/819]">
            <Image
              src="/Why We Are Considered One of the Best IPTV UK Services.PNG"
              alt="Why We Are Considered One of the Best IPTV UK Services"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 360px, (max-width: 1024px) 560px, 720px"
            />
          </div>
        </motion.div>

      </div>

      {/* Feature cards — full-width row below */}
      <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl mb-3"
              style={{ backgroundColor: "#0B1E5C14", color: NAVY }}
            >
              {feature.icon}
            </div>
            <h3
              className="text-[14px] sm:text-[15px] font-bold mb-1.5"
              style={{ color: NAVY }}
            >
              {feature.title}
            </h3>
            <p className="text-[12px] sm:text-[12.5px] text-[#343341] leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
