"use client";

import Image from "next/image";
import { ArrowRight, Sprout, Sun, Wind } from "lucide-react";
import { motion } from "framer-motion";

const leftVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Slide2() {
  return (
    <section className="relative overflow-hidden bg-[var(--reviva-cream)]">
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(244, 178, 27, 0.06)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(47, 107, 45, 0.05)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-8 py-10 sm:py-12 lg:grid-cols-[55%_45%] lg:gap-12 lg:py-0 lg:min-h-[700px]">
          {/* Left: Text */}
          <motion.div variants={leftVariants} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{
                borderColor: "var(--reviva-gold)",
                backgroundColor: "var(--reviva-gold-light)",
              }}
            >
              <Sun size={13} color="var(--reviva-gold)" />
              <span
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: "var(--reviva-green)" }}
              >
                Lifestyle Transformation
              </span>
            </motion.div>

            <motion.p variants={item} className="text-lg font-medium text-slate-500">
              Every day is a new —
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-1 font-bold leading-[1.05] tracking-tight"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--reviva-green)",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              }}
            >
              Opportunity
              <br />
              To Heal.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-lg text-xl font-semibold leading-snug text-slate-700"
            >
              Small daily choices create lasting change.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-3 max-w-md text-base leading-relaxed text-slate-500"
            >
              Nourish your body, restore balance, and embrace a healthier future with guided
              nutrition and lifestyle support.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document.getElementById("consult-cta")?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "var(--reviva-green)" }}
              >
                Begin Your Journey
                <ArrowRight size={17} />
              </button>
              <button
                onClick={() =>
                  document.getElementById("about-preview")?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full border-2 px-7 py-3.5 text-sm font-semibold transition-all hover:bg-[#eef5eb]"
                style={{ borderColor: "var(--reviva-green)", color: "var(--reviva-green)" }}
              >
                Learn More
              </button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap gap-8 border-t border-slate-200 pt-8"
            >
              {[
                { value: "Gut Health", label: "Root Cause Focus" },
                { value: "Hormones", label: "Balanced Naturally" },
                { value: "Energy", label: "Restored Daily" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-base font-bold" style={{ color: "var(--reviva-green)" }}>
                    {value}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px]">
              <div
                className="absolute -inset-6 -z-10 rounded-[50px] blur-3xl"
                style={{ backgroundColor: "rgba(47, 107, 45, 0.1)" }}
              />

              <div className="aspect-[3/4] w-full overflow-hidden rounded-[36px] shadow-2xl relative">
                <Image
                  src="/images/hero/sunrise-slide.png"
                  alt="Lifestyle Transformation"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              <motion.div
                className="absolute -left-5 top-16 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
              >
                <div
                  className="rounded-full p-1.5"
                  style={{ backgroundColor: "var(--reviva-gold-light)" }}
                >
                  <Sprout size={14} color="var(--reviva-green)" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Gut Healing</span>
              </motion.div>

              <motion.div
                className="absolute -right-5 top-[38%] flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
              >
                <div
                  className="rounded-full p-1.5"
                  style={{ backgroundColor: "rgba(244,178,27,0.15)" }}
                >
                  <Sun size={14} color="var(--reviva-gold)" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Daily Rituals</span>
              </motion.div>

              <motion.div
                className="absolute -left-3 bottom-20 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.5, ease: "easeOut" }}
              >
                <div
                  className="rounded-full p-1.5"
                  style={{ backgroundColor: "rgba(100,180,255,0.12)" }}
                >
                  <Wind size={14} color="#4a9cd4" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Mind Balance</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
