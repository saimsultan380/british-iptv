"use client";

import {
  Monitor,
  Smartphone,
  Plane,
  Tv,
  Cast,
  TabletSmartphone,
  Laptop,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const badges: { icon: LucideIcon; l1: string; l2: string }[] = [
  { icon: Monitor, l1: "Flexible", l2: "Viewing" },
  { icon: Smartphone, l1: "Multi-Device", l2: "Access" },
  { icon: Plane, l1: "Home or", l2: "Travel" },
];

type Device = {
  title: string;
  icon?: LucideIcon;
  badge?: string;
  desc?: string;
  listTitle?: string;
  list?: string[];
  note?: string;
  highlight?: boolean;
};

const devices: Device[] = [
  {
    icon: Tv,
    title: "Smart TVs",
    desc: "Many users prefer IPTV on Smart TVs because of the larger screen and simple viewing experience.",
    listTitle: "Supported options commonly include:",
    list: ["Samsung Smart TV", "LG Smart TV", "Android Smart TV"],
  },
  {
    badge: "tv",
    title: "Apple TV & Android TV",
    desc: "Apple TV and Android TV offer a premium viewing experience and support IPTV applications designed for modern streaming.",
    highlight: true,
  },
  {
    icon: Cast,
    title: "Fire TV Stick",
    desc: "Fire TV Stick remains one of the most popular streaming devices among IPTV users.",
    listTitle: "Benefits include:",
    list: [
      "Easy setup",
      "User-friendly navigation",
      "Convenient remote control",
      "Reliable streaming experience",
    ],
  },
  {
    icon: TabletSmartphone,
    title: "Smartphones & Tablets",
    listTitle: "Watch IPTV content on:",
    list: ["Android Phones", "Android Tablets", "iPhone", "iPad"],
    note: "This flexibility allows users to enjoy entertainment wherever internet access is available.",
  },
  {
    icon: Laptop,
    title: "Windows & Mac Computers",
    desc: "Users can also access IPTV content through compatible applications on desktop and laptop devices.",
    listTitle: "Supported platforms commonly include:",
    list: ["Windows PCs", "Mac Computers", "Laptops", "Desktop Systems"],
  },
];

export default function CompatibleDevicesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl w-full px-5 py-12 sm:px-8 sm:py-16 lg:py-24">
        <div className="rounded-[28px] sm:rounded-[36px] bg-zinc-50/80 px-5 py-10 sm:px-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* Left: heading + intro + badges */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4"
            >
              <h2
                className="text-[28px] sm:text-4xl lg:text-[40px] font-extrabold tracking-tight leading-[1.12]"
                style={{ color: NAVY }}
              >
                IPTV Subscription Compatible with{" "}
                <span style={{ color: RED }}>All Popular Devices</span>
              </h2>

              <div className="mt-4 sm:mt-5 space-y-4 text-[#343341] text-[13px] sm:text-[15px] leading-relaxed">
                <p>
                  One of the biggest advantages of IPTV is flexibility. Instead
                  of being restricted to a single television, viewers can enjoy
                  content across a variety of compatible devices.
                </p>
                <p>
                  Whether you prefer watching on a large screen at home or
                  streaming content while traveling, IPTV adapts to your
                  viewing habits.
                </p>
              </div>

              {/* Divider with red accent */}
              <div className="relative my-7 h-px w-full max-w-xs bg-zinc-200">
                <span
                  className="absolute left-[30%] top-1/2 -translate-y-1/2 h-0.5 w-16 rounded-full"
                  style={{ backgroundColor: RED }}
                />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                {badges.map((b) => (
                  <div
                    key={b.l1}
                    className="flex items-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-3 py-2.5 shadow-sm"
                  >
                    <b.icon className="h-5 w-5 flex-shrink-0" style={{ color: NAVY }} />
                    <span
                      className="text-[11px] font-bold leading-tight"
                      style={{ color: NAVY }}
                    >
                      {b.l1}
                      <br />
                      {b.l2}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: device bento grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                {devices.map((d, i) => {
                  const span = i < 3 ? "lg:col-span-2" : "lg:col-span-3";
                  return d.highlight ? (
                    /* Highlighted center card */
                    <motion.div
                      key={d.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                      className={`relative flex flex-col items-start text-left lg:items-center lg:justify-center lg:text-center overflow-hidden rounded-2xl border border-[#0B1E5C]/15 bg-gradient-to-b from-white to-[#0B1E5C]/[0.05] p-6 shadow-[0_18px_50px_rgba(11,30,92,0.14)] ${span}`}
                    >
                      <div
                        className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl"
                        style={{ backgroundColor: "rgba(11,30,92,0.08)" }}
                      />
                      <span
                        className="relative z-10 inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                        style={{ color: RED, borderColor: "rgba(215,44,44,0.3)" }}
                      >
                        Premium
                      </span>
                      <div
                        className="relative z-10 mt-5 flex h-16 w-16 items-center justify-center rounded-2xl border-2 bg-white shadow-sm"
                        style={{ borderColor: NAVY }}
                      >
                        <span
                          className="text-xl font-extrabold lowercase"
                          style={{ color: NAVY }}
                        >
                          {d.badge}
                        </span>
                      </div>
                      <h3
                        className="relative z-10 mt-4 text-lg font-bold leading-tight"
                        style={{ color: NAVY }}
                      >
                        {d.title}
                      </h3>
                      <div
                        className="relative z-10 mt-2.5 h-0.5 w-10 rounded-full lg:mx-auto"
                        style={{ backgroundColor: RED }}
                      />
                      {d.desc && (
                        <p className="relative z-10 mt-4 text-[13px] text-[#343341] leading-relaxed lg:max-w-[15rem]">
                          {d.desc}
                        </p>
                      )}
                    </motion.div>
                  ) : (
                    /* Standard device card */
                    <motion.div
                      key={d.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                      whileHover={{ y: -4 }}
                      className={`group flex flex-col rounded-2xl border border-zinc-200/70 bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(11,30,92,0.04)] transition-all hover:border-[#0B1E5C]/20 hover:shadow-[0_16px_40px_rgba(11,30,92,0.12)] ${span}`}
                    >
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:bg-[#0B1E5C]/[0.09]"
                        style={{ backgroundColor: "rgba(11,30,92,0.06)" }}
                      >
                        {d.icon && (
                          <d.icon className="h-6 w-6" style={{ color: NAVY }} />
                        )}
                      </div>

                      <h3
                        className="mt-4 text-[16px] font-bold leading-tight"
                        style={{ color: NAVY }}
                      >
                        {d.title}
                      </h3>
                      <div
                        className="mt-2 h-0.5 w-9 rounded-full"
                        style={{ backgroundColor: RED }}
                      />

                      {d.desc && (
                        <p className="mt-3 text-[12.5px] text-[#343341] leading-relaxed">
                          {d.desc}
                        </p>
                      )}

                      {d.listTitle && (
                        <p
                          className="mt-3 text-[12.5px] font-bold"
                          style={{ color: NAVY }}
                        >
                          {d.listTitle}
                        </p>
                      )}

                      {d.list && (
                        <ul className="mt-2 space-y-1.5">
                          {d.list.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-[12.5px] text-[#343341]"
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

                      {d.note && (
                        <p className="mt-3 text-[12.5px] text-[#343341] leading-relaxed">
                          {d.note}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-9 sm:mt-12 flex flex-col items-center gap-3 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact/"
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-bold text-white shadow-[0_10px_28px_rgba(215,44,44,0.28)] transition-shadow hover:shadow-[0_14px_36px_rgba(215,44,44,0.38)]"
              style={{ backgroundColor: RED }}
            >
              Stream IPTV on the Devices You Already Use
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <p className="text-[#343341] text-xs sm:text-sm font-medium">
              Enjoy flexibility without needing specialized hardware.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
