"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const faqs = [
  {
    question: "What is an IPTV Reseller UK?",
    answer:
      "An IPTV Reseller UK program allows individuals or businesses to purchase reseller credits, create customer subscriptions, manage accounts, and sell IPTV services through a professional reseller panel.",
  },
  {
    question: "How does an IPTV reseller panel work?",
    answer:
      "A reseller panel provides access to business management tools that allow you to create subscriptions, manage customer accounts, monitor activity, and organize your reseller operations from one dashboard.",
  },
  {
    question: "How do IPTV reseller credits work?",
    answer:
      "Credits are used to create customer subscriptions based on the selected subscription duration. Your available credit balance decreases as subscriptions are created.",
  },
  {
    question: "Can beginners become IPTV resellers?",
    answer:
      "Yes. Many IPTV reseller programs are designed for beginners and provide easy-to-use dashboards, flexible credit systems, and reseller support to help new users get started.",
  },
  {
    question: "Do IPTV reseller credits expire?",
    answer:
      "Credit policies vary between providers. Our reseller plans are designed to offer flexible credit management so you can operate your business with confidence.",
  },
  {
    question: "What makes a good IPTV reseller panel?",
    answer:
      "A professional reseller panel should provide customer management, subscription creation, credit management, business monitoring, simple navigation, and reliable reseller support.",
  },
  {
    question: "Can I build my own IPTV business?",
    answer:
      "Yes. An IPTV reseller program allows you to create your own customer base, manage subscriptions, set your own prices, and grow your business over time.",
  },
  {
    question:
      "What is the difference between a reseller panel and a White Label IPTV solution?",
    answer:
      "A reseller panel allows you to manage customer subscriptions, while a White Label IPTV solution focuses on building your own business identity and brand experience.",
  },
  {
    question: "Can I grow my reseller business over time?",
    answer:
      "Yes. Many resellers begin with a smaller customer base and gradually expand by increasing reseller credits, improving customer service, and developing long-term business relationships.",
  },
  {
    question: "Why choose your IPTV Reseller UK program?",
    answer:
      "Our reseller platform combines a user-friendly dashboard, flexible credit management, customer administration tools, scalable reseller plans, and dedicated support to help businesses grow with confidence.",
  },
];

export default function ResellerFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="mx-auto max-w-4xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-20 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8 sm:mb-14"
      >
        <span
          className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 block"
          style={{ color: RED }}
        >
          FAQs
        </span>
        <h2
          className="text-[26px] sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.15]"
          style={{ color: NAVY }}
        >
          Frequently Asked Questions About{" "}
          <span style={{ color: RED }}>IPTV Reseller UK</span>
        </h2>
      </motion.div>

      <div className="space-y-2 sm:space-y-3">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: Math.min(index * 0.03, 0.3),
              ease: "easeOut",
            }}
            className={`rounded-xl border transition-all duration-200 overflow-hidden ${
              openIndex === index
                ? "border-[#D72C2C] shadow-[0_4px_20px_rgba(215,44,44,0.08)]"
                : "border-zinc-200 hover:border-zinc-300"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-5 text-left focus:outline-none gap-3 sm:gap-4"
            >
              <span
                className="text-[13px] sm:text-[15px] font-bold leading-snug transition-colors"
                style={{ color: openIndex === index ? RED : NAVY }}
              >
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <ChevronDown
                  className="h-5 w-5"
                  style={{ color: openIndex === index ? RED : "#a1a1aa" }}
                />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-zinc-100">
                    <p className="text-[#343341] text-[12px] sm:text-[14px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
