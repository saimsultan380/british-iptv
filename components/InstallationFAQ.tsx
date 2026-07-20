"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const faqs = [
  {
    question: "How do I install IPTV on my device?",
    answer:
      "Choose your device from this guide, install the recommended IPTV application, and enter the login or activation details provided with your subscription. The exact steps vary slightly depending on the device.",
  },
  {
    question: "What information do I need before installing IPTV?",
    answer:
      "You should have your IPTV login credentials, subscription details, and a stable internet connection. Some applications may also require a Device ID, MAC Address, or Portal URL.",
  },
  {
    question: "Which devices support IPTV installation?",
    answer:
      "Our IPTV service supports Amazon Fire TV Stick, Android TV, Google Chromecast, Samsung Smart TV, LG Smart TV, Sony Smart TV, Philips Smart TV, Hisense Smart TV, TCL Smart TV, VIDAA TV, Apple TV, iPhone, iPad, Android devices, Windows PC, Mac, MAG Box, Formuler Box, and NVIDIA Shield TV.",
  },
  {
    question: "How long does IPTV setup usually take?",
    answer:
      "Most users complete the installation within a few minutes when they follow the recommended setup instructions for their device.",
  },
  {
    question: "Do I need technical knowledge to install IPTV?",
    answer:
      "No. This IPTV Setup Guide is written for beginners as well as experienced users. Simply follow the instructions for your device.",
  },
  {
    question: "What should I do if my IPTV login details do not work?",
    answer:
      "Check that the information has been entered correctly. If the problem continues, contact our support team so we can verify your account details.",
  },
  {
    question: "Which IPTV application should I install?",
    answer:
      "The recommended IPTV application depends on your device. Each section of this guide lists the supported applications for that platform.",
  },
  {
    question: "Can I install IPTV on more than one device?",
    answer:
      "Your subscription options determine how many devices can be used. If you are unsure, contact our support team for guidance.",
  },
  {
    question: "Why is my IPTV buffering?",
    answer:
      "Buffering is often related to internet stability, device performance, or application settings. A reliable internet connection and the recommended IPTV application usually provide the best streaming experience.",
  },
  {
    question: "Where can I get help if I have installation problems?",
    answer:
      "Our technical support team is available to assist with setup questions, activation, application recommendations, and device configuration whenever you need help.",
  },
];

export default function InstallationFAQ() {
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
          <span style={{ color: RED }}>IPTV Installation</span>
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
                style={{
                  color: openIndex === index ? RED : NAVY,
                }}
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
                  style={{
                    color: openIndex === index ? RED : "#a1a1aa",
                  }}
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
