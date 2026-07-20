"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Headphones } from "lucide-react";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";
const PHONE_NUMBER = "447482794475";

const supportAreas = [
  "IPTV activation",
  "Device setup",
  "Login assistance",
  "Application recommendations",
  "Device configuration",
  "General troubleshooting",
];

export default function InstallationCTASection() {
  const supportHref = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    "Hi, I need help completing my IPTV installation",
  )}`;

  return (
    <section className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200 bg-white px-6 py-10 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center shadow-[0_8px_40px_rgba(11,30,92,0.06)]"
      >
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ backgroundColor: `${RED}14` }}
        />

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <h2
            className="text-[24px] sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.15] mb-4 sm:mb-5"
            style={{ color: NAVY }}
          >
            Need Help Completing Your{" "}
            <span style={{ color: RED }}>IPTV Setup</span>?
          </h2>

          <p className="text-[#343341] text-[13px] sm:text-[15px] leading-relaxed mb-5 sm:mb-6">
            Every device is different, but the goal is always the same—getting
            you connected quickly so you can start enjoying your IPTV
            subscription.
          </p>

          <p
            className="text-[13px] sm:text-[14px] font-bold mb-4 sm:mb-5"
            style={{ color: NAVY }}
          >
            If you experience any difficulties during installation, our support
            team is available to help with:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-left w-full max-w-xl mb-6 sm:mb-8">
            {supportAreas.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-[12.5px] sm:text-[13px] text-zinc-700"
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0"
                  style={{ color: RED }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-[#343341] text-[13px] sm:text-[14px] leading-relaxed mb-8 sm:mb-10">
            We are committed to making your IPTV installation process as smooth
            and straightforward as possible.
          </p>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={supportHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-lg px-6 sm:px-8 text-[12.5px] sm:text-sm font-bold text-white shadow-md shadow-red-500/20 transition-colors whitespace-nowrap"
            style={{ backgroundColor: RED }}
          >
            <Headphones className="h-4 w-4" />
            Contact Our Support Team
            <ArrowRight className="h-4 w-4" />
          </motion.a>

          <p className="mt-5 sm:mt-6 text-[#343341] text-[12px] sm:text-[13px] leading-relaxed max-w-xl">
            Need assistance? Reach out to our team for fast IPTV installation and
            setup support so you can start streaming with confidence.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
