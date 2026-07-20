"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

type SportCard = {
  title: string;
  desc: string;
  listTitle?: string;
  list?: string[];
};

const cards: SportCard[] = [
  {
    title: "Football Coverage",
    desc: "Football remains one of the most watched categories among IPTV users. Viewers often look for access to domestic leagues, international competitions, and major tournaments throughout the year.",
    listTitle: "Popular football competitions include:",
    list: [
      "Premier League",
      "UEFA Champions League",
      "UEFA Europa League",
      "International Football",
      "FIFA World Cup Events",
      "Domestic Cup Competitions",
    ],
  },
  {
    title: "Combat Sports & PPV Events",
    desc: "Many users choose IPTV because they enjoy access to major sporting events and premium broadcasts.",
    listTitle: "Popular categories include:",
    list: ["UFC", "Boxing", "MMA Events", "PPV Sports", "Championship Fights"],
  },
  {
    title: "Formula 1 & Motorsport",
    desc: "Motorsport fans can follow races, qualifying sessions, and major racing events through compatible sports channels available within IPTV packages.",
  },
  {
    title: "Cricket & International Sports",
    desc: "Cricket continues to attract viewers worldwide. IPTV allows fans to stay connected to international matches, tournaments, and seasonal competitions.",
  },
];

export default function LiveSportsSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-5 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-[30px] sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.12]"
        style={{ color: NAVY }}
      >
        Watch Live Sports with <span style={{ color: RED }}>IPTV UK</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        className="mt-4 sm:mt-5 space-y-4 text-[#343341] text-[13px] sm:text-[15px] leading-relaxed max-w-4xl"
      >
        <p>
          Sports fans expect reliable access to live events, high-quality
          streaming, and broad coverage across multiple competitions. Our IPTV
          UK service is designed to help viewers enjoy sports from around the
          world without constantly switching between different platforms.
        </p>
        <p>
          Whether you follow football, motorsports, combat sports, cricket, or
          international tournaments, IPTV provides convenient access to a wide
          variety of sports content in one place.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(11,30,92,0.04)]"
          >
            <h3
              className="text-[17px] font-bold leading-tight"
              style={{ color: NAVY }}
            >
              {card.title}
            </h3>
            <div
              className="mt-2.5 h-0.5 w-10 rounded-full"
              style={{ backgroundColor: RED }}
            />
            <p className="mt-4 text-[13px] text-[#343341] leading-relaxed">
              {card.desc}
            </p>

            {card.listTitle && (
              <p
                className="mt-4 text-[13px] font-bold"
                style={{ color: NAVY }}
              >
                {card.listTitle}
              </p>
            )}

            {card.list && (
              <ul className="mt-2.5 space-y-1.5">
                {card.list.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] text-[#343341]"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: RED }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="mt-8 sm:mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-zinc-200 bg-white px-5 py-5 sm:px-7 sm:py-6"
      >
        <div className="flex items-start gap-3.5">
          <span
            className="mt-1 h-9 w-1.5 flex-shrink-0 rounded-full"
            style={{ backgroundColor: RED }}
          />
          <div>
            <h3
              className="text-lg sm:text-xl font-bold leading-tight"
              style={{ color: NAVY }}
            >
              Enjoy Live Sports with IPTV UK
            </h3>
            <p className="mt-1 text-[13px] sm:text-sm text-[#343341]">
              Watch your favorite teams, athletes, and events from one
              convenient platform.
            </p>
          </div>
        </div>

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="/contact/"
          className="group inline-flex h-12 flex-shrink-0 items-center justify-center gap-2 rounded-xl px-6 text-[13px] sm:text-sm font-bold text-white shadow-[0_8px_24px_rgba(215,44,44,0.25)] transition-shadow hover:shadow-[0_12px_32px_rgba(215,44,44,0.35)]"
          style={{ backgroundColor: RED }}
        >
          Enjoy Live Sports with IPTV UK
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </motion.div>
    </section>
  );
}
