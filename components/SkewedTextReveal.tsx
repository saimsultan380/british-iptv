"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ElementType, ReactNode } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type SkewedLineProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/** Single clipped line — skewed text reveal */
export function SkewedLine({
  children,
  delay = 0,
  className = "",
}: SkewedLineProps) {
  return (
    <span className={`block overflow-hidden pb-[0.08em] ${className}`}>
      <motion.span
        className="block origin-bottom-left will-change-transform"
        initial={{ y: "115%", skewY: 9 }}
        animate={{ y: "0%", skewY: 0 }}
        transition={{ duration: 0.95, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

type SkewedTextRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  style?: CSSProperties;
};

/** Wraps an entire heading in one skewed reveal mask */
export default function SkewedTextReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "h1",
  style,
}: SkewedTextRevealProps) {
  return (
    <Tag className={className} style={style}>
      <SkewedLine delay={delay}>{children}</SkewedLine>
    </Tag>
  );
}
