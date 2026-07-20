"use client";

import {
  Flame,
  Tv,
  Monitor,
  TabletSmartphone,
  Smartphone,
  Laptop,
  Box,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const NAVY = "#0B1E5C";
const RED = "#D72C2C";
const PHONE_NUMBER = "447482794475";

type DeviceGroup = {
  label: string;
  icon: LucideIcon;
  devices: { name: string; icon: LucideIcon }[];
};

const deviceGroups: DeviceGroup[] = [
  {
    label: "Streaming Devices",
    icon: Tv,
    devices: [
      { name: "Amazon Fire TV Stick", icon: Flame },
      { name: "Android TV", icon: Tv },
      { name: "Apple TV", icon: Tv },
      { name: "NVIDIA Shield TV", icon: Cpu },
    ],
  },
  {
    label: "Smart TVs",
    icon: Monitor,
    devices: [
      { name: "Samsung Smart TV", icon: Monitor },
      { name: "LG Smart TV", icon: Monitor },
      { name: "Sony Smart TV", icon: Monitor },
      { name: "Philips Smart TV", icon: Monitor },
      { name: "Hisense Smart TV", icon: Monitor },
      { name: "TCL Smart TV", icon: Monitor },
      { name: "VIDAA Smart TV", icon: Monitor },
    ],
  },
  {
    label: "Mobile & Tablets",
    icon: TabletSmartphone,
    devices: [
      { name: "Android Phones & Tablets", icon: TabletSmartphone },
      { name: "iPhone & iPad", icon: Smartphone },
    ],
  },
  {
    label: "Computers",
    icon: Laptop,
    devices: [
      { name: "Windows PC", icon: Laptop },
      { name: "Mac", icon: Laptop },
    ],
  },
  {
    label: "IPTV Boxes",
    icon: Box,
    devices: [
      { name: "MAG Box", icon: Box },
      { name: "Formuler Box", icon: Box },
    ],
  },
];

export default function ResellerCompatibleDevicesSection() {
  const whatsappHref = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    "Hi, I want to offer IPTV across multiple devices",
  )}`;

  return (
    <section className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="rounded-[24px] sm:rounded-[32px] border border-zinc-200 bg-zinc-50/60 px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="h-1 w-8 rounded-full"
                style={{ backgroundColor: RED }}
              />
              <span
                className="text-[11px] font-bold tracking-[0.18em] uppercase"
                style={{ color: RED }}
              >
                Device Compatibility
              </span>
            </div>

            <h2
              className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold tracking-tight leading-[1.15]"
              style={{ color: NAVY }}
            >
              Compatible with Popular{" "}
              <span style={{ color: RED }}>IPTV Devices</span>
            </h2>

            <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-[#343341] text-[13px] sm:text-[14px] leading-relaxed">
              <p>
                Your customers expect flexibility when choosing an IPTV service.
                Our reseller platform supports subscriptions that work across
                many of today&apos;s most popular streaming devices and IPTV
                applications.
              </p>
              <p>
                This broad compatibility allows resellers to serve customers
                with different devices and viewing preferences while providing a
                consistent streaming experience.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-[0_2px_16px_rgba(11,30,92,0.05)]">
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${RED}12` }}
                >
                  <Layers
                    className="h-5 w-5"
                    style={{ color: RED }}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className="text-[15px] sm:text-[16px] font-extrabold leading-snug pt-1.5"
                  style={{ color: NAVY }}
                >
                  Simple Device Compatibility
                </h3>
              </div>
              <p className="text-[#343341] text-[12.5px] sm:text-[13px] leading-relaxed pl-[52px] sm:pl-0">
                Customers can enjoy IPTV using compatible applications available
                for their preferred device, making setup straightforward and
                accessible.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Supported platforms label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[13px] sm:text-[14px] font-bold mb-5 sm:mb-6"
          style={{ color: NAVY }}
        >
          Supported platforms include:
        </motion.p>

        {/* Device groups */}
        <div className="space-y-6 sm:space-y-8">
          {deviceGroups.map((group, groupIndex) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.05, ease: "easeOut" }}
              >
                <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${NAVY}10` }}
                  >
                    <GroupIcon
                      className="h-4 w-4"
                      style={{ color: NAVY }}
                      strokeWidth={1.75}
                    />
                  </div>
                  <h4
                    className="text-[12px] sm:text-[13px] font-bold tracking-wide uppercase"
                    style={{ color: NAVY }}
                  >
                    {group.label}
                  </h4>
                  <div className="flex-1 h-px bg-zinc-200" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
                  {group.devices.map((device, deviceIndex) => {
                    const DeviceIcon = device.icon;

                    return (
                      <motion.div
                        key={device.name}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: groupIndex * 0.05 + deviceIndex * 0.03,
                          ease: "easeOut",
                        }}
                        whileHover={{ y: -2 }}
                        className="group flex items-center gap-2.5 sm:gap-3 rounded-xl border border-zinc-200 bg-white px-3 py-2.5 sm:px-3.5 sm:py-3 shadow-sm transition-shadow hover:shadow-md hover:border-red-100"
                      >
                        <div
                          className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg transition-colors group-hover:bg-red-50"
                          style={{ backgroundColor: `${RED}0D` }}
                        >
                          <DeviceIcon
                            className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                            style={{ color: RED }}
                            strokeWidth={1.75}
                          />
                        </div>
                        <span
                          className="text-[10.5px] sm:text-[12px] font-semibold leading-tight"
                          style={{ color: NAVY }}
                        >
                          {device.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-[0_2px_16px_rgba(11,30,92,0.05)]"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="h-5 w-5 shrink-0 mt-0.5"
              style={{ color: RED }}
              strokeWidth={2}
            />
            <p className="text-[#343341] text-[12.5px] sm:text-[13px] leading-relaxed">
              Serve customers on Fire TV, Smart TVs, mobile devices, computers,
              and dedicated IPTV boxes — all from one reseller platform.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit max-w-full shrink-0 self-start sm:self-center items-center justify-center gap-2 rounded-xl px-5 sm:px-6 py-3.5 text-[12px] sm:text-[13px] font-bold text-white shadow-lg shadow-red-500/25 transition-colors"
            style={{ backgroundColor: RED }}
          >
            Offer IPTV Across Multiple Devices
            <ArrowRight className="h-4 w-4 shrink-0" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
