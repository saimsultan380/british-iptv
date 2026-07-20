"use client";

import { Clock, MonitorPlay, MonitorCog, Headphones, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

const supportCards = [
  {
    icon: <Clock className="h-6 w-6" strokeWidth={1.6} />,
    badge: "24h",
    title: "IPTV Free Trial Requests",
    desc: "Request your 24-hour IPTV Free Trial and receive the information required to begin testing the service.",
    span2: true,
  },
  {
    icon: <MonitorPlay className="h-6 w-6" strokeWidth={1.6} />,
    title: "IPTV Subscription UK Assistance",
    desc: "Need help selecting the most suitable IPTV Subscription UK? Our team can explain available plans and help you choose the option that best matches your viewing preferences.",
    span2: true,
  },
  {
    icon: <MonitorCog className="h-6 w-6" strokeWidth={1.6} />,
    title: "Installation & Device Support",
    desc: "If you need help installing IPTV on Fire TV Stick, Android TV, Apple TV, Samsung Smart TV, LG Smart TV, Windows PC, Mac, or another supported device, our team is ready to assist.",
    span2: false,
  },
  {
    icon: <Headphones className="h-6 w-6" strokeWidth={1.6} />,
    title: "Technical Support",
    desc: "If you experience setup difficulties, activation questions, or account-related issues, we will work with you to resolve them as quickly as possible.",
    span2: false,
  },
  {
    icon: <MessageCircle className="h-6 w-6" strokeWidth={1.6} />,
    title: "General Questions",
    descParts: [
      "Whether you would like more information about IPTV UK, compatible devices, activation, or account management, ",
      "our support team is always happy to help.",
    ],
    span2: false,
  },
];

function SectionDotHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: RED }} />
      <span className="text-[15px] sm:text-[17px] font-bold tracking-wide" style={{ color: NAVY }}>
        {children}
      </span>
      <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: RED }} />
    </div>
  );
}

function SupportCard({
  card,
  delay,
}: {
  card: (typeof supportCards)[number];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white px-5 py-5 sm:px-6 sm:py-6 shadow-[0_2px_16px_rgba(11,30,92,0.06)] hover:shadow-[0_4px_24px_rgba(11,30,92,0.1)] transition-shadow"
    >
      {/* Icon box */}
      <div
        className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border-2 relative"
        style={{ borderColor: NAVY, color: NAVY }}
      >
        {card.badge ? (
          <>
            <Clock className="h-6 w-6" strokeWidth={1.6} />
            <span
              className="absolute -bottom-1.5 -right-1.5 flex h-5 w-9 items-center justify-center rounded-full text-[9px] font-extrabold text-white"
              style={{ backgroundColor: RED }}
            >
              {card.badge}
            </span>
          </>
        ) : (
          card.icon
        )}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h3
          className="text-[14px] sm:text-[15px] font-bold leading-snug mb-1.5"
          style={{ color: NAVY }}
        >
          {card.title}
        </h3>
        {"descParts" in card && card.descParts ? (
          <p className="text-[12px] sm:text-[13px] text-[#343341] leading-relaxed">
            {card.descParts[0]}
            <strong className="font-semibold" style={{ color: NAVY }}>
              {card.descParts[1]}
            </strong>
          </p>
        ) : (
          <p className="text-[12px] sm:text-[13px] text-[#343341] leading-relaxed">{card.desc}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function ContactSupportTeamSection() {
  const phoneNumber = "447482794475";
  const supportHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi, I need help with IPTV UK",
  )}`;

  const topCards = supportCards.slice(0, 2);
  const bottomCards = supportCards.slice(2);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">

        {/* ── SECTION HEADING ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-4"
        >
          <h2
            className="text-[26px] sm:text-[36px] lg:text-[42px] font-extrabold tracking-tight leading-tight"
          >
            <span style={{ color: RED }}>Contact</span>{" "}
            <span style={{ color: NAVY }}>Our IPTV Support Team</span>
          </h2>
        </motion.div>

        {/* ── INTRO TEXT ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-center mb-8"
        >
          <p className="text-[#343341] text-[13px] sm:text-[14px] leading-relaxed">
            We understand that every customer has different questions before choosing an IPTV service.
          </p>
          <p className="text-[#343341] text-[13px] sm:text-[14px] leading-relaxed">
            Our support team is available to provide clear answers and guide you through every stage of the process.
          </p>
        </motion.div>

        {/* ── "YOU CAN CONTACT US FOR:" DOT HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="mb-6"
        >
          <SectionDotHeader>You can contact us for:</SectionDotHeader>
        </motion.div>

        {/* ── TOP ROW: 2 CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {topCards.map((card, i) => (
            <SupportCard key={card.title} card={card} delay={0.14 + i * 0.08} />
          ))}
        </div>

        {/* ── BOTTOM ROW: 3 CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {bottomCards.map((card, i) => (
            <SupportCard key={card.title} card={card} delay={0.22 + i * 0.08} />
          ))}
        </div>

        {/* ── CTA BUTTON ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={supportHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl px-10 py-4 text-[15px] font-bold text-white shadow-lg shadow-red-500/30 transition-all"
            style={{ backgroundColor: RED }}
          >
            <Headphones className="h-5 w-5" />
            Contact Our IPTV Experts
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
