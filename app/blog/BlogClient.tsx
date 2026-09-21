"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

export default function BlogClient() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-28 lg:pt-52 lg:pb-32 bg-gradient-to-b from-zinc-50/60 to-white">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white px-4 py-1.5 text-xs font-bold shadow-sm mb-6"
              style={{ color: NAVY }}
            >
              <Sparkles className="h-3.5 w-3.5 text-[#D72C2C]" />
              <span>IPTV UK Insights & Guides</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6"
              style={{ color: NAVY }}
            >
              Our <span style={{ color: RED }}>Blog</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#343341] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
            >
              Expert tips, streaming tutorials, setup advice, and news about IPTV services across the UK.
            </motion.p>

            {/* Empty State Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative mx-auto max-w-xl rounded-3xl border border-zinc-200/70 bg-white p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.04)] text-center"
            >
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-100 text-[#0B1E5C] mb-6 shadow-sm"
              >
                <BookOpen className="h-8 w-8 text-[#D72C2C]" />
              </div>

              <h2
                className="text-xl sm:text-2xl font-bold mb-3"
                style={{ color: NAVY }}
              >
                Articles Coming Soon
              </h2>

              <p className="text-[#343341] text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
                We are currently crafting in-depth guides, device setup tutorials, and streaming tips. Check back soon for our first published stories.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/subscription-plans/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#D72C2C] px-6 py-3 text-sm font-bold text-white shadow-md shadow-red-500/20 hover:bg-[#b91f1f] transition-colors"
                >
                  <span>Explore Plans</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/contact/"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-bold text-zinc-700 hover:bg-zinc-50 transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
