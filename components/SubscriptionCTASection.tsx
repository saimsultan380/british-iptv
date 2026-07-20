"use client";

import { motion } from "framer-motion";
import { ChevronRight, MessageCircle } from "lucide-react";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

export default function SubscriptionCTASection() {
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
          <span
            className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-5 px-3 py-1.5 rounded-full border"
            style={{
              color: RED,
              borderColor: `${RED}40`,
              backgroundColor: `${RED}10`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ backgroundColor: RED }} />
            Start Today
          </span>

          <h2
            className="text-[24px] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5 sm:mb-6 max-w-3xl"
            style={{ color: NAVY }}
          >
            Start Your <span style={{ color: RED }}>IPTV Subscription</span> Today
          </h2>

          <div className="space-y-3 sm:space-y-4 text-[#343341] text-[13px] sm:text-[16px] leading-relaxed max-w-2xl mb-7 sm:mb-9">
            <p>
              Choosing the right IPTV Subscription UK service is about more than simply
              accessing channels. Modern viewers want flexibility, convenience, quality,
              and a viewing experience that fits their lifestyle.
            </p>
            <p>
              Whether you enjoy live sports, blockbuster movies, television series,
              international channels, documentaries, or family entertainment, IPTV
              provides a modern solution designed around today's streaming habits.
            </p>
            <p>
              With a 24-hour free trial, easy setup, broad device compatibility, and
              flexible subscription options, getting started has never been easier.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/contact/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-7 sm:px-9 text-[13px] sm:text-sm font-bold text-white shadow-[0_10px_28px_rgba(215,44,44,0.28)] transition-shadow hover:shadow-[0_14px_36px_rgba(215,44,44,0.38)] whitespace-nowrap"
              style={{ backgroundColor: RED }}
            >
              Start Your IPTV Subscription UK Free Trial
              <ChevronRight className="h-4 w-4 text-white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I want to subscribe to IPTV Subscription UK and get instant access today")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-7 sm:px-9 text-[13px] sm:text-sm font-bold transition-colors hover:bg-zinc-50 whitespace-nowrap"
              style={{ color: NAVY }}
            >
              <MessageCircle className="h-4 w-4 text-green-500" />
              Get Instant Access Today
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
