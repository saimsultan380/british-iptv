"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const reasons = [
  "Access to live television",
  "Sports coverage",
  "Movies and TV series",
  "Flexible viewing options",
  "Multi-device compatibility",
  "Convenient streaming experiences",
];

export default function WhyIPTVGrowsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-24">
        {/* ── Top Grid: Left (Heading & Description) vs Right (Reasons List) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2
              className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold tracking-tight leading-[1.15]"
              style={{ color: NAVY }}
            >
              Why <span style={{ color: RED }}>IPTV</span> Subscriptions Continue to Grow in the <span style={{ color: RED }}>United Kingdom</span>
            </h2>

            {/* Red underline accent */}
            <div
              className="mt-4 mb-6 h-[3px] w-12 rounded-full"
              style={{ backgroundColor: RED }}
            />

            <div className="space-y-5 text-zinc-700 text-[13.5px] sm:text-[15px] leading-relaxed">
              <p>
                The popularity of IPTV subscriptions continues to increase because viewers want greater control over how and where they watch content.
              </p>
              <p>
                Many households now prefer IPTV because it combines multiple entertainment categories into a single viewing platform.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="md:border-l md:border-zinc-200 md:pl-8 lg:pl-16 flex flex-col h-full justify-center md:py-2"
          >
            <h3
              className="text-[17px] sm:text-[19px] font-bold leading-snug mb-5"
              style={{ color: NAVY }}
            >
              Popular reasons viewers choose IPTV include:
            </h3>

            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3.5 text-zinc-800 text-[13.5px] sm:text-[15px] font-semibold">
                  {/* Solid Red Check Circle */}
                  <div
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: RED }}
                  >
                    <Check className="h-3.5 w-3.5 stroke-[3.5]" />
                  </div>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* ── Divider Line ── */}
        <div className="w-full h-px bg-zinc-200 my-8 sm:my-10" />

        {/* ── Bottom Full-Width Paragraph ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-zinc-800 text-[13.5px] sm:text-[15px] leading-relaxed font-medium">
            Whether someone enjoys football, Formula 1, UFC events, documentaries, television dramas, or family entertainment, IPTV helps bring these interests together through one service.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
