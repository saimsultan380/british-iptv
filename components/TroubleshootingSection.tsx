"use client";

import React from "react";
import {
  Lock,
  Tv,
  Loader,
  PlaySquare,
  CreditCard,
  AlertCircle,
  X,
  Check,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

type BadgeType = "alert" | "x" | "check" | "loading";

type ProblemCard = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  icon: LucideIcon;
  badge: BadgeType;
};

const problems: ProblemCard[] = [
  {
    title: "Incorrect Login Details",
    paragraphs: [
      "If your IPTV application displays an authentication or login error, carefully check that your username, password, Portal URL, or activation details have been entered exactly as provided.",
      "If the issue continues, contact our support team to confirm your account information.",
    ],
    icon: Lock,
    badge: "alert",
  },
  {
    title: "IPTV App Is Not Loading",
    paragraphs: ["If the IPTV application does not open correctly:"],
    bullets: [
      "Restart your device.",
      "Confirm that the application is fully installed.",
      "Check that your internet connection is active.",
      "Make sure you are using the recommended IPTV application for your device.",
    ],
    icon: Tv,
    badge: "x",
  },
  {
    title: "Buffering or Playback Interruptions",
    paragraphs: [
      "Streaming quality depends on both your internet connection and device performance.",
      "To improve playback:",
    ],
    bullets: [
      "Use a stable internet connection.",
      "Close unnecessary background applications.",
      "Restart your streaming device if needed.",
      "Verify that your network is performing normally.",
    ],
    icon: Loader,
    badge: "loading",
  },
  {
    title: "No Channels or Content Appearing",
    paragraphs: ["If channels or content do not load:"],
    bullets: [
      "Confirm your IPTV account is active.",
      "Refresh the application if supported.",
      "Restart the IPTV player.",
      "Contact support if activation needs to be verified.",
    ],
    icon: PlaySquare,
    badge: "alert",
  },
  {
    title: "Device Activation Required",
    paragraphs: [
      "Some IPTV applications require a Device ID, MAC Address, or activation code before streaming begins.",
      "Simply send the requested information to our support team and we will complete the activation process for your device.",
    ],
    icon: CreditCard,
    badge: "check",
  },
];

function IconBadge({
  icon: Icon,
  badge,
}: {
  icon: LucideIcon;
  badge: BadgeType;
}) {
  return (
    <div className="relative shrink-0">
      <div
        className="flex h-[52px] w-[52px] sm:h-[56px] sm:w-[56px] items-center justify-center rounded-full"
        style={{ backgroundColor: NAVY }}
      >
        <Icon className="h-6 w-6 text-white" strokeWidth={1.75} />
      </div>
      <div className="absolute -bottom-0.5 -right-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white shadow-sm">
        <div
          className="flex h-[18px] w-[18px] items-center justify-center rounded-full"
          style={{ backgroundColor: RED }}
        >
          {badge === "alert" && (
            <AlertCircle className="h-2.5 w-2.5 text-white" strokeWidth={3} />
          )}
          {badge === "x" && (
            <X className="h-2.5 w-2.5 text-white" strokeWidth={3} />
          )}
          {badge === "check" && (
            <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
          )}
          {badge === "loading" && (
            <span className="flex gap-[2px]">
              <span className="h-1 w-1 rounded-full bg-white/50" />
              <span className="h-1 w-1 rounded-full bg-white" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function ProblemCardItem({
  card,
  index,
}: {
  card: ProblemCard;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(11,30,92,0.05)]"
    >
      <div className="flex flex-1 gap-4 sm:gap-5">
        <IconBadge icon={card.icon} badge={card.badge} />
        <div className="min-w-0 flex-1">
          <h3
            className="text-[14px] sm:text-[15px] font-extrabold leading-snug mb-2.5"
            style={{ color: NAVY }}
          >
            {card.title}
          </h3>
          <div className="space-y-2 text-[#343341] text-[12px] sm:text-[12.5px] leading-relaxed">
            {card.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            {card.bullets && (
              <ul className="space-y-1.5 pt-0.5">
                {card.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2">
                    <span
                      className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: RED }}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <div
          className="h-[3px] w-10 rounded-full"
          style={{ backgroundColor: RED }}
        />
      </div>
    </motion.div>
  );
}

export default function TroubleshootingSection() {
  const topRow = problems.slice(0, 3);
  const bottomRow = problems.slice(3);

  return (
    <section className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        <span
          className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 block"
          style={{ color: RED }}
        >
          Quick Help
        </span>
        <h2
          className="text-[26px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight leading-[1.15] mb-4"
          style={{ color: NAVY }}
        >
          Common IPTV Installation Problems &{" "}
          <span style={{ color: RED }}>Simple Solutions</span>
        </h2>
        <p className="text-[#343341] text-[13px] sm:text-[14px] leading-relaxed">
          Most IPTV installations are completed within a few minutes. However,
          depending on the device, application, or internet connection, you may
          occasionally encounter setup issues. The good news is that most
          problems can be resolved quickly by checking a few common settings.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6">
        {topRow.map((card, index) => (
          <ProblemCardItem key={card.title} card={card} index={index} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 sm:gap-6">
        {bottomRow.map((card, index) => (
          <div
            key={card.title}
            className={`md:col-span-2 ${
              index === 0 ? "md:col-start-2" : ""
            }`}
          >
            <ProblemCardItem card={card} index={index + 3} />
          </div>
        ))}
      </div>
    </section>
  );
}
