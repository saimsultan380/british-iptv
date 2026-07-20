"use client";

import { useEffect } from "react";

function classString(el: HTMLElement): string {
  const raw = el.className;
  if (typeof raw === "string") return raw;
  return String((raw as { baseVal?: string })?.baseVal ?? "");
}

function looksLikeCta(el: HTMLElement): boolean {
  if (el.dataset.btnPreview === "skip") return false;
  if (el.getAttribute("aria-expanded") !== null) return false;
  if (el.getAttribute("aria-controls") !== null && el.tagName === "BUTTON") {
    return false;
  }

  const cls = classString(el);
  if (!cls || cls.includes("btn-preview")) return false;

  // Icon-only / menu toggles
  if (cls.includes("p-2") && !cls.includes("px-")) return false;
  // Fixed floating widgets (e.g. WhatsApp) — skip circular icon fabs
  if (cls.includes("w-14") && cls.includes("h-14") && cls.includes("rounded-full")) {
    return false;
  }

  const hasShape =
    cls.includes("rounded") ||
    cls.includes("rounded-[") ||
    cls.includes("rounded-xl") ||
    cls.includes("rounded-lg") ||
    cls.includes("rounded-full") ||
    cls.includes("rounded-2xl");

  const hasPadding =
    cls.includes("px-") ||
    cls.includes("py-") ||
    cls.includes("h-11") ||
    cls.includes("h-12") ||
    cls.includes("h-14") ||
    cls.includes("h-[") ||
    cls.includes("min-h-[");

  const isButtonLayout =
    cls.includes("inline-flex") ||
    cls.includes("flex items-center") ||
    cls.includes("flex h-") ||
    (cls.includes("flex") &&
      (cls.includes("justify-center") || cls.includes("items-center")));

  if (!(hasShape && hasPadding && isButtonLayout)) return false;

  const inlineBg = (el.style.backgroundColor || "").toLowerCase();
  const hasSolidBg =
    cls.includes("bg-[#D72C2C]") ||
    cls.includes("bg-[#0B1E5C]") ||
    cls.includes("bg-white") ||
    cls.includes("bg-white/") ||
    cls.includes("text-white") ||
    inlineBg.includes("215, 44, 44") ||
    inlineBg.includes("11, 30, 92") ||
    inlineBg === "#d72c2c" ||
    inlineBg === "#0b1e5c";

  const hasCtaCue =
    cls.includes("font-bold") ||
    cls.includes("font-extrabold") ||
    cls.includes("shadow-[") ||
    cls.includes("shadow-lg") ||
    cls.includes("shadow-sm") ||
    cls.includes("shadow-md") ||
    cls.includes("shadow-xl");

  return hasSolidBg && hasCtaCue;
}

function applyPreview(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>("a, button").forEach((el) => {
    if (looksLikeCta(el)) el.classList.add("btn-preview");
  });
}

/** Adds the white sweep preview animation to CTA buttons site-wide */
export default function ApplyButtonPreview() {
  useEffect(() => {
    applyPreview();

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          const el = node as HTMLElement;
          if (looksLikeCta(el)) el.classList.add("btn-preview");
          applyPreview(el);
        });
      }
    });

    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);

  return null;
}
