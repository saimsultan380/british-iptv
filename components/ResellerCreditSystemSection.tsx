"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const benefits = [
  "Easy subscription creation",
  "Simple inventory management",
  "Flexible business planning",
  "Efficient customer administration",
  "Organized reseller workflow",
];

export default function ResellerCreditSystemSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left — main content */}
        <div className="lg:col-span-7 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span
              className="text-[11px] sm:text-xs font-bold tracking-widest uppercase"
              style={{ color: NAVY }}
            >
              IPTV UK
            </span>
            <div
              className="mt-2 mb-4 sm:mb-5 h-[3px] w-10 rounded-full"
              style={{ backgroundColor: RED }}
            />
            <h2
              className="text-[26px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight leading-[1.15] mb-5 sm:mb-6"
              style={{ color: NAVY }}
            >
              Understanding the IPTV Credit System
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="space-y-3 sm:space-y-4 text-[#343341] text-[13px] sm:text-[14px] leading-relaxed mb-5 sm:mb-6"
          >
            <p>
              One of the most important parts of any IPTV Reseller UK program is
              understanding how reseller credits work.
            </p>
            <p>
              The credit system is designed to simplify subscription management.
              Each subscription you create uses the required number of credits
              based on the selected subscription duration. This approach allows
              you to monitor available credits while planning future sales and
              customer renewals.
            </p>
            <p>
              Instead of managing complicated billing systems, reseller credits
              provide a straightforward way to organize your business operations.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="text-[#343341] text-[13px] sm:text-[14px] leading-relaxed mb-6 sm:mb-8"
          >
            Whether you are creating your first customer account or managing a
            growing IPTV business, the credit system provides a structured
            approach that keeps your reseller operations simple and efficient.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.14 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#pricing"
            className="inline-flex w-full sm:w-fit items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 sm:px-6 py-3 text-[12.5px] sm:text-[13.5px] font-bold shadow-sm hover:bg-zinc-50 transition-colors"
            style={{ color: NAVY }}
          >
            Explore Our IPTV Reseller Plans
            <ArrowRight className="h-4 w-4" style={{ color: RED }} />
          </motion.a>
        </div>

        {/* Right — benefits card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="lg:col-span-5 lg:sticky lg:top-28"
        >
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(11,30,92,0.06)]">
            <h3
              className="text-[17px] sm:text-[19px] font-extrabold mb-5 sm:mb-6"
              style={{ color: NAVY }}
            >
              Benefits of the Credit System
            </h3>
            <ul>
              {benefits.map((benefit, index) => (
                <li
                  key={benefit}
                  className={
                    index < benefits.length - 1
                      ? "border-b border-zinc-200 py-3.5 sm:py-4 first:pt-0"
                      : "pt-3.5 sm:pt-4"
                  }
                >
                  <span
                    className="text-[13px] sm:text-[14px] font-medium leading-snug"
                    style={{ color: NAVY }}
                  >
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
