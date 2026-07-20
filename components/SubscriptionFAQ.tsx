"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is an IPTV Subscription UK?",
    answer:
      "An IPTV Subscription UK allows viewers to stream live television channels, sports, movies, and TV series through an internet connection rather than traditional cable or satellite systems.",
  },
  {
    question: "How does IPTV Subscription work?",
    answer:
      "IPTV delivers television content through internet technology. Users access content through compatible applications on supported devices connected to the internet.",
  },
  {
    question: "What devices support IPTV subscriptions?",
    answer:
      "Most IPTV services support Smart TVs, Fire TV Stick devices, Android TV, Apple TV, smartphones, tablets, Windows PCs, and Mac computers.",
  },
  {
    question: "Can I watch live sports using IPTV?",
    answer:
      "Many IPTV subscriptions provide access to sports channels covering football, UFC, Formula 1, boxing, cricket, and other major sporting events.",
  },
  {
    question: "What internet speed is recommended for IPTV?",
    answer:
      "A stable internet connection helps provide a smoother viewing experience. Faster internet speeds generally improve HD and 4K streaming performance.",
  },
  {
    question: "Does IPTV support HD and 4K streaming?",
    answer:
      "Many IPTV platforms support HD, Full HD, and 4K quality where content and device compatibility allow.",
  },
  {
    question: "What is IPTV EPG?",
    answer:
      "EPG stands for Electronic Program Guide. It helps viewers browse channels, schedules, and upcoming programs more efficiently.",
  },
  {
    question: "What is IPTV Catch-Up?",
    answer:
      "Catch-Up functionality allows viewers to access previously aired content when available through supported IPTV services.",
  },
  {
    question: "Can IPTV be used on Firestick?",
    answer:
      "Yes. Fire TV Stick is one of the most popular devices used for IPTV streaming because it offers a simple setup process and convenient navigation.",
  },
  {
    question: "Can IPTV be used on Smart TVs?",
    answer:
      "Many IPTV applications are compatible with Samsung Smart TVs, LG Smart TVs, Android TVs, and other supported television platforms.",
  },
  {
    question: "Can I try IPTV before purchasing a subscription?",
    answer:
      "Many IPTV providers offer trial access so users can evaluate compatibility, streaming quality, and overall performance before subscribing.",
  },
  {
    question: "What makes a good IPTV provider?",
    answer:
      "Viewers often look for reliable streaming, content variety, device compatibility, ease of setup, customer support, and flexible subscription options.",
  },
  {
    question: "Why are IPTV subscriptions becoming more popular?",
    answer:
      "Many people prefer IPTV because it offers flexible viewing, broad content access, compatibility across multiple devices, and convenient streaming experiences.",
  },
  {
    question: "Is IPTV suitable for sports fans?",
    answer:
      "Yes. Sports enthusiasts often choose IPTV because it provides access to football, combat sports, motorsports, cricket events, and other major competitions.",
  },
  {
    question: "Can IPTV be used while traveling?",
    answer:
      "Many users access IPTV content while traveling through compatible devices connected to the internet, depending on service availability and network conditions.",
  },
  {
    question: "How long does IPTV activation usually take?",
    answer:
      "Activation times vary by provider, but many IPTV services provide access shortly after account setup and verification.",
  },
];

const ACTIVE_COLOR = "#D72C2C";
const NAVY = "#0B1E5C";

export default function SubscriptionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8 sm:mb-14"
      >
        <span
          className="text-xs font-bold tracking-widest uppercase mb-3 block"
          style={{ color: ACTIVE_COLOR }}
        >
          IPTV Subscription UK — FAQ
        </span>
        <h2
          className="text-[26px] sm:text-4xl lg:text-5xl font-bold tracking-tight"
          style={{ color: NAVY }}
        >
          Frequently Asked Questions About{" "}
          <span style={{ color: ACTIVE_COLOR }}>IPTV Subscription UK</span>
        </h2>
      </motion.div>

      <div className="space-y-2 sm:space-y-3">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
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
                style={{ color: openIndex === index ? ACTIVE_COLOR : NAVY }}
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
                  style={{ color: openIndex === index ? ACTIVE_COLOR : "#a1a1aa" }}
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
