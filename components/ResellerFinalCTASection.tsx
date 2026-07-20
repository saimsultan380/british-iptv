"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

export default function ResellerFinalCTASection() {
  const phoneNumber = "447482794475";
  const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I want to start my IPTV reseller journey",
  )}`;

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
            <span className="w-1.5 h-1.5 rounded-full bg-[#D72C2C] inline-block animate-pulse shrink-0" />
            IPTV Reseller UK
          </span>

          <h2
            className="text-[22px] sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-tight mb-4 sm:mb-5 max-w-3xl"
            style={{ color: NAVY }}
          >
            Build a Stronger IPTV Business with the Right{" "}
            <span style={{ color: RED }}>Reseller Partner</span>
          </h2>

          <p className="text-[#343341] text-[13px] sm:text-[16px] leading-relaxed max-w-2xl mb-6 sm:mb-8">
            Choosing the right IPTV Reseller UK program is about more than
            purchasing reseller credits. It is about finding a reliable business
            partner that provides the tools, flexibility, and support needed for
            long-term success.
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 sm:px-8 text-[13px] sm:text-sm font-bold text-white shadow-[0_10px_28px_rgba(215,44,44,0.28)] transition-shadow hover:shadow-[0_14px_36px_rgba(215,44,44,0.38)] whitespace-nowrap"
              style={{ backgroundColor: RED }}
            >
              Start Your IPTV Reseller Journey Today
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 shrink-0" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 sm:px-8 text-[13px] sm:text-sm font-bold transition-colors hover:bg-zinc-50 whitespace-nowrap"
              style={{ color: NAVY }}
            >
              <MessageCircle className="h-4 w-4 text-green-500 shrink-0" />
              Contact Us on WhatsApp
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
