"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

export default function ContactCTASection() {
  const phoneNumber = "447482794475";
  const trialHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I want to get my 24h free trial for IPTV UK",
  )}`;
  const supportHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I need help with IPTV UK",
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#D72C2C] inline-block animate-pulse" />
            FREE 24-HOUR TRIAL AVAILABLE NOW
          </span>

          <h2
            className="text-[24px] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5 sm:mb-6 max-w-3xl"
            style={{ color: NAVY }}
          >
            Start Your <span style={{ color: RED }}>IPTV Journey</span> with Confidence
          </h2>

          <div className="space-y-3 sm:space-y-4 text-[#343341] text-[13px] sm:text-[16px] leading-relaxed max-w-2xl mb-7 sm:mb-9">
            <p>
              Choosing the right IPTV provider should never be based on guesswork. That is why we encourage every new customer to request an IPTV Free Trial, ask questions, and explore the platform before selecting an IPTV Subscription UK.
            </p>
            <p>
              Whether you need technical guidance, subscription advice, or installation assistance, our experienced support team is here to help. We are committed to providing clear communication, reliable support, and a smooth customer experience from your first inquiry to your ongoing IPTV service.
            </p>
            <p>
              If you are ready to experience premium IPTV UK streaming, request your free trial today and discover a smarter way to enjoy live TV, sports, movies, and entertainment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={trialHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl px-7 sm:px-9 text-[13px] sm:text-sm font-bold text-white shadow-[0_10px_28px_rgba(215,44,44,0.28)] transition-shadow hover:shadow-[0_14px_36px_rgba(215,44,44,0.38)] whitespace-nowrap"
              style={{ backgroundColor: RED }}
            >
              Contact Us Today and Claim Your IPTV Free Trial
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={supportHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-7 sm:px-9 text-[13px] sm:text-sm font-bold transition-colors hover:bg-zinc-50 whitespace-nowrap"
              style={{ color: NAVY }}
            >
              <MessageCircle className="h-4 w-4 text-green-500" />
              WhatsApp Us
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
