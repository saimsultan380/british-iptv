"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I request an IPTV Free Trial?",
    answer:
      "Simply contact our support team through the contact page or your preferred communication method. We will guide you through the trial request process.",
  },
  {
    question: "How long does the IPTV Free Trial last?",
    answer:
      "Our standard trial period is 24 hours, allowing you to explore the service before making a subscription decision.",
  },
  {
    question: "Do I need technical knowledge to start my IPTV Free Trial?",
    answer:
      "No. Our setup process is beginner-friendly, and our support team is available if you need assistance.",
  },
  {
    question: "Which devices are compatible with your IPTV service?",
    answer:
      "Our IPTV service supports Fire TV Stick, Android TV, Apple TV, Samsung Smart TV, LG Smart TV, Windows PC, Mac, smartphones, tablets, and several other compatible devices.",
  },
  {
    question: "How do I choose the right IPTV Subscription UK?",
    answer:
      "Our support team can explain the available subscription options and help you choose the plan that best suits your viewing preferences.",
  },
  {
    question: "Why should I test an IPTV Free Trial before subscribing?",
    answer:
      "A free trial allows you to evaluate streaming quality, compatibility, and the overall viewing experience before making a decision.",
  },
  {
    question: "What happens after my IPTV Free Trial ends?",
    answer:
      "After your trial, you can decide whether you would like to continue with one of our IPTV Subscription UK plans. There is no obligation to subscribe.",
  },
  {
    question: "Can I ask questions during my IPTV Free Trial?",
    answer:
      "Yes. Our support team is available throughout your trial to answer questions and assist with setup or technical issues.",
  },
  {
    question: "Is the IPTV Free Trial suitable for beginners?",
    answer:
      "Absolutely. The trial is designed for both new and experienced users, making it easy to learn how IPTV works before subscribing.",
  },
  {
    question: "How quickly will I receive a response after contacting you?",
    answer:
      "Our goal is to respond as quickly as possible so you can begin your IPTV Free Trial or receive assistance without unnecessary delays.",
  },
];

export default function ContactFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8 sm:mb-14"
      >
        <span className="text-[#D72C2C] text-xs font-bold tracking-widest uppercase mb-3 block">
          IPTV Trial FAQ
        </span>
        <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1E5C]">
          Frequently Asked <span className="text-[#D72C2C]">Questions</span>
        </h2>
      </motion.div>

      {/* Accordion */}
      <div className="space-y-2 sm:space-y-3">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.3), ease: "easeOut" }}
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
              <span className={`text-[13px] sm:text-[15px] font-bold leading-snug transition-colors ${
                openIndex === index ? "text-[#D72C2C]" : "text-[#0B1E5C]"
              }`}>
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <ChevronDown className={`h-5 w-5 ${openIndex === index ? "text-[#D72C2C]" : "text-zinc-400"}`} />
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
