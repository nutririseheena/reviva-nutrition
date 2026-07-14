"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { diseaseList, heroPillars } from "@/data/hero";

export default function Slide2() {
  return (
    <section className="hero-slide-section relative overflow-hidden bg-[var(--reviva-cream)]">
      {/* Background blobs — matches Slide1/Slide3 */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[620px] w-[520px] rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(244, 178, 27, 0.06)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(47, 107, 45, 0.05)" }}
      />

      <div className="relative mx-auto max-w-7xl page-pad">
        <div className="flex flex-col py-10 sm:py-12 lg:py-0 lg:justify-center gap-6 lg:gap-7 hero-slide-min-h">
          {/* ── Two image cards ── */}
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-6 hero-s2-card-grid">
            {/* Sunset card — Lifestyle Diseases */}
            <motion.div
              className="overflow-hidden rounded-[32px] border border-[#eadfcf] bg-[#fdf8ef] shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.15 }}
            >
              <div className="relative h-[480px] sm:h-[560px] hero-slide-img-h overflow-hidden rounded-[32px]">
                <Image
                  fill
                  priority
                  src="/images/hero/sunset2.png"
                  alt="Lifestyle Diseases"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-[center_30%]"
                />
                <div className="absolute inset-0 bg-black/8" />{" "}
                {/* Dim overlay for better text contrast */}
                {/* Top Content + Disease List — single flowing block so list always sits below text */}
                <div className="absolute inset-x-0 top-0 px-5 sm:px-8 lg:px-10 pt-5 sm:pt-7 lg:pt-8 text-center">
                  <h2
                    className="mx-auto leading-[1.0]"
                    style={{
                      color: "#5c1f12",
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(22px, min(5vw, 6dvh), 45px)",
                    }}
                  >
                    Sunset of
                    <br />
                    <span className="italic" style={{ color: "var(--reviva-terracotta)" }}>
                      Health Issues
                    </span>
                  </h2>

                  <p className="mx-auto mt-2 sm:mt-3 lg:mt-4 max-w-[400px] text-[11px] sm:text-[13px] lg:text-[14px] leading-6 text-slate-700 font-medium">
                    When nutrition and lifestyle deviate, health issues begin.
                  </p>

                  {/* Disease List */}
                  <div className="mt-3 sm:mt-4 lg:mt-5 flex justify-center hero-s2-disease-list">
                    <ul className="space-y-0 text-left">
                      {diseaseList.map(({ icon: Icon, label }, index) => (
                        <li
                          key={label}
                          className={
                            index === diseaseList.length - 1
                              ? "pt-[2px] sm:pt-[4px]"
                              : "py-[2px] sm:py-[4px]"
                          }
                        >
                          <div className="flex items-center gap-1.5 sm:gap-3">
                            <Icon size={13} className="shrink-0 text-[#8d4a2a]" />
                            <span className="text-[11px] sm:text-[13px] lg:text-[15px] font-semibold text-[#6a2b18]">
                              {label}
                            </span>
                          </div>
                          {index !== diseaseList.length - 1 && (
                            <div className="mt-1 sm:mt-2 ml-[20px] sm:ml-[26px] h-px w-[60px] sm:w-[80px] lg:w-[85px] bg-[#8d4a2a]/10" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sunrise card — Reviva Pillars */}
            <motion.div
              className="overflow-hidden rounded-[32px] border border-[#d9e5d3] bg-[#fdf8ef] shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.28 }}
            >
              <div className="relative h-[480px] sm:h-[560px] hero-slide-img-h overflow-hidden rounded-[32px]">
                <Image
                  fill
                  src="/images/hero/sunrise2.png"
                  alt="Reviva Nutrition"
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-center"
                />

                {/* Top Content + Pillars — single flowing block so pillars always sit below text */}
                <div className="absolute inset-x-0 top-0 px-5 sm:px-7 lg:px-10 pt-5 sm:pt-7 lg:pt-9 text-center">
                  <h2
                    className="mx-auto leading-[1.0]"
                    style={{
                      color: "var(--reviva-green)",
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(22px, min(5vw, 6dvh), 45px)",
                    }}
                  >
                    Sunrise of
                    <br />
                    <span className="italic" style={{ color: "var(--reviva-warm-brown)" }}>
                      Better Health
                    </span>
                  </h2>

                  <p className="mx-auto mt-2 sm:mt-3 lg:mt-4 max-w-[400px] text-[11px] sm:text-[13px] lg:text-[14px] leading-6 text-slate-700 font-medium">
                    When nutrition and lifestyle align, health begins to thrive.
                  </p>

                  {/* Pillars */}
                  <div className="mt-3 sm:mt-4 lg:mt-6 grid grid-cols-4 gap-x-2 sm:gap-x-4 lg:gap-x-6">
                    {heroPillars.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex flex-col items-center gap-1 sm:gap-2">
                        <Icon
                          size={14}
                          className="text-[var(--reviva-green)] sm:size-[16px] lg:size-[18px]"
                        />
                        <p className="text-[9px] sm:text-[11px] lg:text-[13px] font-semibold leading-tight text-[var(--reviva-green)]">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── CTA ── */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
          >
            <button
              onClick={() =>
                document.getElementById("consult-form")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "var(--reviva-green)" }}
            >
              Begin Your Journey
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() =>
                document.getElementById("about-preview")?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border-2 px-7 py-3 text-sm font-semibold transition-all hover:bg-[#eef5eb]"
              style={{ borderColor: "var(--reviva-green)", color: "var(--reviva-green)" }}
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
