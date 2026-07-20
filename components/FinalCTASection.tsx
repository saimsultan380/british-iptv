"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

export default function FinalCTASection() {
  const phoneNumber = "447482794475";

  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-20 lg:py-28 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200 bg-white px-6 py-10 sm:px-14 sm:py-20 text-center shadow-[0_8px_40px_rgba(0,0,0,0.04)]"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#D72C2C]/8 blur-[100px]" />

        <div className="relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 text-[#D72C2C] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-5 px-3 py-1.5 rounded-full border border-[#D72C2C]/30 bg-[#D72C2C]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D72C2C] inline-block animate-pulse" />
            FREE 24-HOUR TRIAL AVAILABLE NOW
          </span>

          <h2
            className="text-[24px] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5 sm:mb-6 max-w-3xl"
            style={{ color: NAVY }}
          >
            Start Your <span style={{ color: RED }}>IPTV UK</span> Experience
            Today
          </h2>

          <div className="space-y-3 sm:space-y-4 text-[#343341] text-[13px] sm:text-[16px] leading-relaxed max-w-2xl mb-7 sm:mb-9">
            <p>
              Finding the right IPTV UK service is about more than simply
              accessing channels. Modern viewers want convenience, flexibility,
              reliability, and a viewing experience that fits their lifestyle.
            </p>
            <p>
              Whether you enjoy live sports, movies, television series, news
              coverage, documentaries, or family entertainment, IPTV provides a
              modern way to access content from compatible devices wherever you
              choose to watch.
            </p>
            <p>
              With simple setup, broad device compatibility, flexible viewing
              options, and a 24-hour free trial, getting started has never been
              easier.
            </p>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/contact/"
              className="inline-flex h-12 items-center justify-center rounded-xl px-7 sm:px-9 text-[13px] sm:text-sm font-bold text-white shadow-[0_10px_28px_rgba(215,44,44,0.28)] transition-shadow hover:shadow-[0_14px_36px_rgba(215,44,44,0.38)] whitespace-nowrap"
              style={{ backgroundColor: RED }}
            >
              Get Started Today →
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I want to know more about IPTV UK")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-7 sm:px-9 text-[13px] sm:text-sm font-bold transition-colors hover:bg-zinc-50 whitespace-nowrap"
              style={{ color: NAVY }}
            >
              <MessageCircle className="h-4 w-4 text-green-500" />
              Contact Us on WhatsApp
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
