"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const sportsCards = [
  {
    title: "Football Coverage for Dedicated Fans",
    description:
      "Football remains one of the most watched sports in the United Kingdom and around the world. IPTV helps viewers stay connected to major competitions throughout the season.",
    listLabel: "Popular football competitions include:",
    items: [
      "Premier League",
      "UEFA Champions League",
      "UEFA Europa League",
      "International Football",
      "Domestic Cup Competitions",
      "FIFA World Cup Events",
    ],
    footer:
      "Whether you follow local clubs or international tournaments, IPTV provides a flexible way to enjoy football entertainment.",
  },
  {
    title: "UFC, Boxing & Combat Sports",
    description:
      "Combat sports continue to attract millions of viewers globally.",
    listLabel: "Many IPTV users enjoy access to:",
    items: [
      "UFC Events",
      "Boxing Matches",
      "MMA Competitions",
      "Championship Fights",
      "PPV Sporting Events",
    ],
  },
  {
    title: "Formula 1 & Motorsport Coverage",
    description:
      "Motorsport enthusiasts can follow qualifying sessions, race weekends, and major racing competitions through sports channels available on compatible IPTV platforms.",
  },
  {
    title: "Cricket & International Sports",
    description:
      "Cricket remains one of the world's most popular sports. IPTV helps viewers stay connected to international matches, tournaments, and seasonal competitions throughout the year.",
  },
];

export default function WatchLiveSportsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-24">

        {/* ── Top: heading + body ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 sm:mb-12"
        >
          <h2
            className="text-[30px] sm:text-[38px] lg:text-[46px] font-extrabold tracking-tight leading-[1.12] mb-5"
            style={{ color: NAVY }}
          >
            Watch Live Sports with the Best{" "}
            <span style={{ color: RED }}>IPTV Subscription UK</span>
          </h2>

          <div className="max-w-3xl space-y-3">
            <p className="text-[#343341] text-[13.5px] sm:text-[15px] leading-relaxed">
              For many viewers, sports are one of the main reasons for choosing
              an IPTV subscription. Traditional television services often require
              multiple subscriptions to access different sporting events, leagues,
              and competitions. IPTV simplifies the experience by bringing sports
              entertainment together in one place.
            </p>
            <p className="text-[#343341] text-[13.5px] sm:text-[15px] leading-relaxed">
              Whether you enjoy football, combat sports, motorsports, cricket, or
              international tournaments, IPTV provides convenient access to sports
              content across multiple compatible devices.
            </p>
          </div>
        </motion.div>

        {/* ── 4-column sports cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {sportsCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.09,
                ease: "easeOut",
              }}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-[0_2px_16px_rgba(11,30,92,0.05)] hover:shadow-[0_6px_28px_rgba(11,30,92,0.09)] transition-shadow duration-300"
            >
              {/* Title */}
              <h3
                className="text-[14px] sm:text-[15px] font-bold leading-snug mb-2"
                style={{ color: NAVY }}
              >
                {card.title}
              </h3>

              {/* Red underline */}
              <div
                className="mb-4 h-[3px] w-7 rounded-full"
                style={{ backgroundColor: RED }}
              />

              {/* Description */}
              <p className="text-[#343341] text-[12.5px] sm:text-[13px] leading-relaxed mb-3">
                {card.description}
              </p>

              {/* Optional bullet list */}
              {card.listLabel && card.items && (
                <div className="mt-4">
                  <p
                    className="text-[12px] font-bold mb-2"
                    style={{ color: NAVY }}
                  >
                    {card.listLabel}
                  </p>
                  <ul className="space-y-1.5">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[#343341] text-[12px] sm:text-[12.5px] leading-snug"
                      >
                        <span
                          className="mt-[5px] h-[6px] w-[6px] flex-shrink-0 rounded-full"
                          style={{ backgroundColor: RED }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Optional footer note */}
              {card.footer && (
                <p className="mt-4 text-[#343341] text-[12px] sm:text-[12.5px] leading-relaxed italic">
                  {card.footer}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 rounded-2xl border border-zinc-200 bg-white px-6 sm:px-8 py-5 sm:py-6 shadow-[0_2px_16px_rgba(11,30,92,0.05)]"
        >
          {/* Left red bar + text */}
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 self-stretch w-1 rounded-full"
              style={{ backgroundColor: RED }}
            />
            <div>
              <p
                className="text-[15px] sm:text-[17px] font-extrabold leading-snug mb-1"
                style={{ color: NAVY }}
              >
                Enjoy Sports Entertainment Without Missing a Moment
              </p>
              <p className="text-[#343341] text-[13px] sm:text-[14px] leading-relaxed">
                Watch your favorite competitions from compatible devices wherever
                you are.
              </p>
            </div>
          </div>

          {/* CTA button */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/contact"
            className="inline-flex flex-shrink-0 items-center gap-2.5 rounded-xl px-6 py-3.5 text-[13px] sm:text-[14px] font-bold text-white shadow-sm transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: RED }}
          >
            Enjoy Sports with IPTV UK
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
