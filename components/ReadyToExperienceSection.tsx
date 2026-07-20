"use client";

import Image from "next/image";
import { Crown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const SECTION_IMG = "/Ready to Experience IPTV UK.PNG";

export default function ReadyToExperienceSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-5 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Left: content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-1"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-[11px] font-bold tracking-wider uppercase shadow-sm">
            <Crown className="h-4 w-4" style={{ color: RED }} fill="currentColor" />
            <span style={{ color: RED }}>Premium IPTV UK</span>
          </span>

          {/* Heading */}
          <h2
            className="mt-5 text-[34px] sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.05]"
            style={{ color: NAVY }}
          >
            Ready to Experience{" "}
            <span style={{ color: RED }}>IPTV UK</span>
            <span style={{ color: NAVY }}>?</span>
          </h2>

          {/* Accent bars */}
          <div className="mt-4 flex items-center gap-2">
            <span className="h-1.5 w-12 rounded-full" style={{ backgroundColor: RED }} />
            <span className="h-1.5 w-6 rounded-full" style={{ backgroundColor: NAVY }} />
          </div>

          {/* Paragraphs */}
          <div className="mt-5 space-y-4 text-[#343341] text-[13px] sm:text-[15px] leading-relaxed max-w-xl">
            <p>
              Choosing the right IPTV provider is about more than channels alone.
              It is about reliability, ease of use, compatibility, and overall
              viewing experience.
            </p>
            <p>
              Our IPTV UK service combines all of these elements into one
              platform designed for modern entertainment.
            </p>
            <p>
              Whether you want live television, sports coverage, movies, TV
              series, or international content, you can access everything from a
              single subscription. Explore the service, test compatibility with
              your devices, and experience premium IPTV streaming before
              subscribing.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-7 sm:mt-9 flex flex-row items-stretch gap-3 sm:gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="group flex-1 min-w-0 inline-flex h-14 items-center justify-center gap-2 sm:gap-3 rounded-xl pl-2 pr-3 sm:pr-6 text-[12px] sm:text-sm font-bold text-white text-center shadow-[0_10px_28px_rgba(215,44,44,0.28)] transition-shadow hover:shadow-[0_14px_36px_rgba(215,44,44,0.38)]"
              style={{ backgroundColor: RED }}
            >
              <span className="flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-full bg-white">
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  style={{ color: RED }}
                />
              </span>
              Start Your 24-Hour Free Trial
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/subscription-plans"
              className="flex-shrink-0 inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 sm:px-6 text-[12px] sm:text-sm font-bold transition-colors hover:bg-zinc-50"
              style={{ color: NAVY }}
            >
              <Crown className="h-4 w-4 flex-shrink-0" style={{ color: RED }} />
              Subscribe
            </motion.a>
          </div>
        </motion.div>

        {/* Right: baked graphic (cards + UK map + orbits) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="order-2 flex justify-center"
        >
          <div className="relative w-full max-w-[460px] lg:max-w-[600px] aspect-[1024/819]">
            <Image
              src={SECTION_IMG}
              alt="Ready to Experience IPTV UK"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 460px, 600px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
