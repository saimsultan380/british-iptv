"use client";

import React, { useRef, useCallback } from "react";
import {
  CheckCircle2,
  Circle,
  ClipboardList,
  Info,
  ShieldCheck,
  ArrowRight,
  ListOrdered,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  requirements,
  ukDeviceGuides,
  type UkDeviceGuide,
} from "./ukInstallationGuideData";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";

export default function BeforeYouStartSection() {
  const [selected, setSelected] = React.useState<string | null>(null);
  const guideRef = useRef<HTMLDivElement>(null);

  const activeGuide = selected
    ? ukDeviceGuides.find((d) => d.id === selected)
    : null;

  const handleSelect = useCallback((id: string) => {
    setSelected(id);
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      requestAnimationFrame(() => {
        guideRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  return (
    <section
      id="installation-tabs"
      className="bg-white mx-auto max-w-7xl w-full px-3 sm:px-8 py-12 sm:py-16 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-3xl border border-zinc-200 bg-white shadow-[0_4px_40px_rgba(11,30,92,0.07)] overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* MOBILE: devices first | DESKTOP: content left */}
          <div
            ref={guideRef}
            id="device-guide-content"
            className="order-2 lg:order-1 p-4 sm:p-10 border-t lg:border-t-0 lg:border-r border-zinc-100 scroll-mt-28"
          >
            <AnimatePresence mode="wait">
              {activeGuide ? (
                <DeviceGuidePanel key={activeGuide.id} guide={activeGuide} />
              ) : (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <BeforeYouStartIntro />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* MOBILE: devices top | DESKTOP: devices right */}
          <div className="order-1 lg:order-2 p-4 sm:p-10">
            <DeviceSelector
              selected={selected}
              onSelect={handleSelect}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function BeforeYouStartIntro() {
  return (
    <>
      <div className="flex items-start gap-3 mb-5">
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl mt-0.5"
          style={{ backgroundColor: `${NAVY}0D` }}
        >
          <ClipboardList className="h-5 w-5" style={{ color: NAVY }} />
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="h-[3px] w-5 rounded-full" style={{ backgroundColor: NAVY }} />
            <span className="h-[3px] w-5 rounded-full" style={{ backgroundColor: RED }} />
          </div>
          <h2
            className="text-[20px] sm:text-[24px] font-extrabold leading-tight"
            style={{ color: NAVY }}
          >
            Before You Start Your UK IPTV Installation
          </h2>
        </div>
      </div>

      <p className="text-[#343341] text-[13px] sm:text-[13.5px] leading-relaxed mb-6">
        Before beginning the IPTV installation process, make sure you have
        everything required for a successful setup. Having the correct
        information ready will help you complete the installation more quickly
        and avoid unnecessary delays.
      </p>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${RED}12` }}
          >
            <CheckCircle2 className="h-4 w-4" style={{ color: RED }} />
          </div>
          <div>
            <h3 className="text-[14px] font-extrabold" style={{ color: NAVY }}>
              What You Will Need
            </h3>
            <p className="text-[#343341] text-[12px]">
              Before installing IPTV UK, please ensure you have:
            </p>
          </div>
        </div>

        <ul className="space-y-2.5 ml-1">
          {requirements.map((req) => (
            <li key={req} className="flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: RED }} />
              <span className="text-zinc-700 text-[12.5px] sm:text-[13px] leading-snug">
                {req}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50/80 px-4 py-3.5 text-[12px] sm:text-[12.5px] text-[#343341] leading-relaxed">
        <Info className="h-4 w-4 flex-shrink-0 mt-0.5 text-zinc-400" />
        <p>
          Some IPTV applications may also require a Device ID, MAC Address, or
          activation code. If your selected application requests this
          information, simply send it to our support team and we will provide the
          required activation details.
        </p>
      </div>
    </>
  );
}

function DeviceGuidePanel({ guide }: { guide: UkDeviceGuide }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <h3
        className="text-[18px] sm:text-[22px] font-extrabold leading-tight mb-3"
        style={{ color: NAVY }}
      >
        {guide.title}
      </h3>

      {guide.intro && (
        <p className="text-[#343341] text-[13px] sm:text-[13.5px] leading-relaxed mb-5">
          {guide.intro}
        </p>
      )}

      {guide.supportedApps && guide.supportedApps.length > 0 && (
        <div className="mb-5">
          <h4
            className="text-[14px] font-bold mb-2.5"
            style={{ color: NAVY }}
          >
            {guide.supportedAppsTitle ?? "Supported IPTV Applications"}
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {guide.supportedApps.map((app) => (
              <li
                key={app}
                className="flex items-center gap-2 text-[12.5px] text-[#343341]"
              >
                <span
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: RED }}
                />
                {app}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <ListOrdered className="h-4 w-4" style={{ color: RED }} />
          <h4 className="text-[14px] font-bold" style={{ color: NAVY }}>
            Installation Steps
          </h4>
        </div>
        <ol className="space-y-3">
          {guide.steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                style={{ backgroundColor: NAVY }}
              >
                {i + 1}
              </span>
              <span className="text-[#343341] text-[12.5px] sm:text-[13px] leading-relaxed pt-0.5">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {guide.benefits && guide.benefits.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4" style={{ color: RED }} />
            <h4 className="text-[14px] font-bold" style={{ color: NAVY }}>
              {guide.benefitsTitle ?? "Benefits"}
            </h4>
          </div>
          <ul className="space-y-2">
            {guide.benefits.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2.5 text-[12.5px] text-[#343341]"
              >
                <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" style={{ color: RED }} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}

      {(guide.supportTitle || guide.supportText) && (
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5">
          <h4
            className="text-[15px] font-bold mb-2"
            style={{ color: NAVY }}
          >
            {guide.supportTitle}
          </h4>
          {guide.supportText && (
            <p className="text-[12.5px] text-[#343341] leading-relaxed mb-4">
              {guide.supportText}
            </p>
          )}
          {guide.supportCta && (
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[12.5px] font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: RED }}
            >
              {guide.supportCta}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

function DeviceSelector({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <>
      <div className="flex items-center gap-3 mb-5">
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${NAVY}0D` }}
        >
          <ClipboardList className="h-5 w-5" style={{ color: NAVY }} />
        </div>
        <div>
          <h3
            className="text-[17px] sm:text-[18px] font-extrabold"
            style={{ color: NAVY }}
          >
            Compatible IPTV Devices
          </h3>
          <p className="text-[#343341] text-[12px]">
            Our IPTV service supports a wide range of devices, including:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6">
        {ukDeviceGuides.map((device) => {
          const Icon = device.icon;
          const isActive = selected === device.id;
          return (
            <button
              key={device.id}
              type="button"
              onClick={() => onSelect(device.id)}
              className={`flex items-center gap-2 sm:gap-2.5 rounded-xl border px-3 py-3 sm:px-3.5 sm:py-3.5 text-left transition-all duration-200 min-w-0 min-h-[52px] sm:min-h-0 ${
                isActive
                  ? "border-red-300 bg-red-50/60 shadow-sm"
                  : "border-zinc-200 bg-white hover:border-zinc-300"
              }`}
            >
              {isActive ? (
                <CheckCircle2
                  className="h-4 w-4 sm:h-4 sm:w-4 flex-shrink-0"
                  style={{ color: RED }}
                />
              ) : (
                <Circle className="h-4 w-4 sm:h-4 sm:w-4 flex-shrink-0 text-zinc-300" />
              )}
              <Icon
                className="h-4 w-4 sm:h-4 sm:w-4 flex-shrink-0"
                style={{ color: isActive ? RED : NAVY }}
              />
              <span
                className={`text-[11px] sm:text-[12px] font-semibold leading-snug ${
                  isActive ? "text-red-700" : "text-zinc-700"
                }`}
              >
                {device.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50/80 px-4 py-3.5">
        <ShieldCheck
          className="h-5 w-5 flex-shrink-0"
          style={{ color: NAVY }}
        />
        <p className="text-[12px] sm:text-[12.5px] text-[#343341] leading-relaxed">
          No matter which supported device you use, the setup process is
          designed to be straightforward and user-friendly.
        </p>
      </div>
    </>
  );
}
