"use client";

import Image from "next/image";
import {
  Rocket,
  SlidersHorizontal,
  LayoutDashboard,
  Tag,
  TrendingUp,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const SECTION_IMAGE = "/Why Start an IPTV Reseller Business.PNG";

const advantages: { icon: LucideIcon; label: string }[] = [
  { icon: Rocket, label: "Low startup requirements" },
  { icon: SlidersHorizontal, label: "Flexible business model" },
  { icon: LayoutDashboard, label: "Manage customers from one dashboard" },
  { icon: Tag, label: "Sell subscriptions at your own prices" },
  { icon: TrendingUp, label: "Scale as your business grows" },
  { icon: GraduationCap, label: "No advanced technical knowledge required" },
];

export default function ResellerWhyStartSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      {/* Top — heading, intro & illustration */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
        <div className="lg:col-span-5 flex flex-col order-1">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="h-1 w-8 rounded-full"
              style={{ backgroundColor: RED }}
            />
            <span
              className="text-[11px] font-bold tracking-[0.18em] uppercase"
              style={{ color: RED }}
            >
              Reseller Opportunity
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[26px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight leading-[1.15]"
            style={{ color: NAVY }}
          >
            Why Start an IPTV Reseller Business?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-[#343341] text-[13px] sm:text-[14px] leading-relaxed"
          >
            <p>
              The demand for internet-based television services continues to grow
              as more viewers choose flexible streaming over traditional
              television. This creates an opportunity for entrepreneurs who want
              to build an online business without developing a streaming platform
              from scratch.
            </p>
            <p>
              An IPTV Reseller UK business allows you to purchase reseller
              credits, create customer subscriptions, and sell IPTV services under
              your own pricing strategy. Instead of managing complex streaming
              infrastructure, you focus on building customer relationships and
              growing your business while using a professional reseller dashboard.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 flex justify-center lg:justify-end order-2"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[620px]">
            <div className="relative w-full aspect-[4/3] sm:aspect-[5/4]">
              <Image
                src={SECTION_IMAGE}
                alt="Why Start an IPTV Reseller Business"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 620px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom — advantage cards grid */}
      <div className="mt-10 sm:mt-12 lg:mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h3
            className="text-[16px] sm:text-[18px] font-extrabold mb-2"
            style={{ color: NAVY }}
          >
            Why Entrepreneurs Choose IPTV Reselling
          </h3>
          <p className="text-[#343341] text-[12.5px] sm:text-[13.5px] leading-relaxed">
            Starting an IPTV reseller business offers several practical
            advantages:
          </p>
        </motion.div>

        <div className="mt-5 sm:mt-6 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
                whileHover={{ y: -3 }}
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-3.5 sm:p-4 shadow-[0_2px_12px_rgba(11,30,92,0.04)] transition-shadow hover:shadow-[0_8px_24px_rgba(11,30,92,0.08)] hover:border-red-100"
              >
                <div
                  className="mb-2.5 sm:mb-3 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl transition-colors group-hover:scale-105"
                  style={{ backgroundColor: `${RED}12` }}
                >
                  <Icon
                    className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                    style={{ color: index % 2 === 0 ? RED : NAVY }}
                  />
                </div>
                <span
                  className="text-[11.5px] sm:text-[13px] font-semibold leading-snug"
                  style={{ color: NAVY }}
                >
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="mt-6 sm:mt-8 max-w-3xl text-[#343341] text-[13px] sm:text-[14px] leading-relaxed"
        >
          Many successful IPTV Resellers begin with a small number of customers
          and gradually expand through referrals, local marketing, social media,
          and excellent customer service. Whether you want a side business or a
          long-term digital venture, an IPTV reseller program provides a
          straightforward way to enter the streaming market.
        </motion.p>
      </div>
    </section>
  );
}
