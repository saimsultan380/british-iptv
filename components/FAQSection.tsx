"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is IPTV UK?",
    answer:
      "IPTV UK refers to internet-based television services that allow users to stream live channels, movies, sports, and television series through an internet connection rather than traditional broadcasting methods. Many viewers choose IPTV because it offers greater flexibility and device compatibility.",
  },
  {
    question: "How does IPTV work?",
    answer:
      "IPTV delivers television content through internet technology instead of traditional cable or satellite systems. Users access content through compatible applications and supported devices connected to the internet.",
  },
  {
    question: "Which devices support IPTV UK?",
    answer:
      "Most IPTV services support Smart TVs, Fire TV Stick, Android TV, Apple TV, smartphones, tablets, Windows PCs, and Mac devices. Compatibility may vary depending on the application being used.",
  },
  {
    question: "What internet speed is recommended for IPTV?",
    answer:
      "A stable internet connection is important for smooth streaming. Higher video quality, including HD and 4K content, generally benefits from faster internet speeds and reliable network performance.",
  },
  {
    question: "Can I watch live sports using IPTV?",
    answer:
      "Many IPTV services include sports channels that provide access to football, combat sports, motorsports, cricket, and other major sporting events depending on the package and content availability.",
  },
  {
    question: "What is an IPTV EPG?",
    answer:
      "EPG stands for Electronic Program Guide. It helps users browse channel schedules, upcoming programs, and content listings in a structured format.",
  },
  {
    question: "What is Catch-Up TV?",
    answer:
      "Catch-Up TV allows viewers to access previously aired programs when the feature is available. This helps users watch content they may have missed during the original broadcast.",
  },
  {
    question: "Why do people prefer IPTV over traditional television?",
    answer:
      "Many users appreciate IPTV because it provides flexible viewing options, access to multiple content categories, compatibility with different devices, and convenient streaming experiences.",
  },
  {
    question: "Can IPTV be used on Smart TVs?",
    answer:
      "Yes. Many IPTV applications are compatible with Smart TVs, including Samsung Smart TVs, LG Smart TVs, Android TVs, and other supported platforms.",
  },
  {
    question: "Can IPTV be used while traveling?",
    answer:
      "Many viewers use IPTV while traveling because it can be accessed through compatible devices connected to the internet. Availability may vary depending on location and network conditions.",
  },
  {
    question: "What content is available through IPTV?",
    answer:
      "Content often includes live television channels, sports coverage, movies, television series, documentaries, news programming, children's entertainment, and on-demand content.",
  },
  {
    question: "Is IPTV suitable for families?",
    answer:
      "Many households choose IPTV because it offers diverse content categories that can appeal to different age groups and viewing preferences.",
  },
  {
    question: "How long does IPTV setup usually take?",
    answer:
      "The setup process is generally straightforward and can often be completed within a short period of time when users follow the provided installation instructions.",
  },
  {
    question: "How can I test an IPTV service before subscribing?",
    answer:
      "Many providers offer trial options that allow users to evaluate compatibility, streaming quality, content availability, and overall performance before choosing a subscription plan.",
  },
  {
    question: "What is the best IPTV UK service for sports fans?",
    answer:
      "Sports fans typically look for IPTV services that provide access to football, combat sports, motorsports, cricket, and other major sporting events while maintaining reliable streaming performance.",
  },
  {
    question: "Can I try IPTV before purchasing a subscription?",
    answer:
      "Yes. Many IPTV providers offer trial options that allow viewers to test compatibility, streaming quality, and overall performance before choosing a subscription plan.",
  },
  {
    question: "Does IPTV support HD and 4K streaming?",
    answer:
      "Many IPTV services support HD, Full HD, and 4K streaming where available. Video quality may depend on content availability, device compatibility, and internet performance.",
  },
  {
    question: "What makes a good IPTV provider UK?",
    answer:
      "Viewers often consider streaming reliability, content variety, device compatibility, ease of setup, and customer support when evaluating IPTV providers.",
  },
  {
    question: "Can IPTV be used on Fire TV Stick?",
    answer:
      "Yes. Fire TV Stick remains one of the most popular devices among IPTV users because of its simplicity, compatibility, and convenient streaming experience.",
  },
  {
    question: "Is IPTV suitable for watching movies and TV series?",
    answer:
      "Many IPTV platforms include large entertainment libraries featuring movies, television series, documentaries, and family content alongside live television channels.",
  },
  {
    question: "Why is IPTV becoming more popular in the United Kingdom?",
    answer:
      "Many viewers prefer IPTV because it offers greater flexibility, multi-device compatibility, access to live television, and a broad range of entertainment content from one platform.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-8 sm:mb-14"
      >
        <span className="text-[#D72C2C] text-xs font-bold tracking-widest uppercase mb-3 block">
          IPTV UK FAQ
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
