"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { diseaseList, heroPillars } from "@/data/hero";

export default function Slide2() {
  return (
    <section className="relative overflow-hidden bg-[var(--reviva-cream)]">
      {/* Background blobs — matches Slide1/Slide3 */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[620px] w-[520px] rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(244, 178, 27, 0.06)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(47, 107, 45, 0.05)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col py-10 sm:py-12 lg:py-0 lg:min-h-[700px] lg:justify-center gap-6 lg:gap-7">
          {/* ── Two image cards ── */}
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-6">
            {/* Sunset card — Lifestyle Diseases */}
            <motion.div
              className="overflow-hidden rounded-[32px] border border-[#eadfcf] bg-[#fdf8ef] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
            >
              <div className="relative h-[600px] overflow-hidden rounded-[32px]">
                <Image
                  fill
                  src="/images/hero/sunset2.png"
                  alt="Lifestyle Diseases"
                  className="object-cover object-[center_12%]"
                />
                <div className="absolute inset-0 bg-black/8" />{" "}
                {/* Dim overlay for better text contrast */}
                {/* Top Content */}
                <div className="absolute inset-x-0 top-0 px-10 pt-8 text-center">
                  <span className="inline-flex items-center rounded-full border border-white/30 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6a2b18] backdrop-blur-md">
                    Without Nutrition
                  </span>

                  <h2
                    className="mx-auto mt-8 max-w-[390px] text-[45px] leading-[0.95]"
                    style={{
                      color: "#5c1f12",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Sunset of
                    <br />
                    <span className="italic" style={{ color: "var(--reviva-terracotta)" }}>
                      Lifestyle Diseases
                    </span>
                  </h2>

                  <p className="mx-auto mt-4 max-w-[400px] text-[14px] leading-7 text-slate-700 font-medium">
                    When nutrition and lifestyle deviate, health issues begin.
                  </p>
                </div>
                {/* Bottom Badge */}
                {/* Disease List */}
                <div className="absolute left-[58%] top-[64%] -translate-x-1/2 -translate-y-1/2">
                  <div className="w-[200px]">
                    <ul className="space-y-0">
                      {diseaseList.map(({ icon: Icon, label }, index) => (
                        <li
                          key={label}
                          className={index === diseaseList.length - 1 ? "pt-[4px]" : "py-[4px]"}
                        >
                          <div className="flex items-center gap-3">
                            <Icon size={18} className="shrink-0 text-[#8d4a2a]" />

                            <span className="text-[15px] font-semibold text-[#6a2b18]">
                              {label}
                            </span>
                          </div>

                          {index !== diseaseList.length - 1 && (
                            <div className="mt-2 ml-[28px] h-px w-[85px] bg-[#8d4a2a]/10" />
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
              className="overflow-hidden rounded-[32px] border border-[#d9e5d3] bg-[#fdf8ef] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.28 }}
            >
              <div className="relative h-[600px] overflow-hidden rounded-[32px]">
                <Image
                  fill
                  src="/images/hero/sunrise2.png"
                  alt="Reviva Nutrition"
                  className="object-cover object-center"
                />

                {/* Top Content */}
                <div className="absolute inset-x-0 top-0 h-[250px] px-8 pt-8 text-center">
                  <span className="inline-flex items-center rounded-full border border-white/30 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--reviva-green)] backdrop-blur-md">
                    With Right Nurition
                  </span>

                  <h2
                    className="mx-auto mt-8 max-w-[450px] text-[45px] leading-[0.95]"
                    style={{
                      color: "var(--reviva-green)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Sunrise of
                    <br />
                    <span className="italic" style={{ color: "var(--reviva-warm-brown)" }}>
                      Better Health
                    </span>
                  </h2>

                  <p className="mx-auto mt-4 max-w-[400px] text-[14px] leading-7 text-slate-700 font-medium">
                    When nutrition and lifestyle align, health begins to thrive.
                  </p>
                </div>

                {/* Bottom Badge */}
                <div className="absolute inset-x-0 bottom-[280px] px-8">
                  <div className="grid grid-cols-4 gap-4">
                    {heroPillars.map(({ icon: Icon, label }) => (
                      <div key={label} className="text-center">
                        <Icon size={18} className="mx-auto text-[var(--reviva-green)]" />

                        <p className="mt-3 text-[14px] font-semibold leading-tight text-[var(--reviva-green)]">
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
                document.getElementById("consult-cta")?.scrollIntoView({ behavior: "smooth" })
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
