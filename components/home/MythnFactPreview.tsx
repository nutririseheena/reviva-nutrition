"use client";

import { X, Check } from "lucide-react";
import { motion } from "framer-motion";
import { mythsFacts } from "@/data/consult";

export default function MythnFactPreview() {
  return (
    <section id="consult-cta" className="py-24" style={{ backgroundColor: "#fdf8f4" }}>
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="reviva-eyebrow">Myths &amp; Facts</p>
          <h2
            className="mt-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: "var(--reviva-green)", fontFamily: "var(--font-heading)" }}
          >
            What if the truth about your health is{" "}
            <span className="italic" style={{ color: "var(--reviva-warm-brown)" }}>
              different from what you&apos;ve been told?
            </span>
          </h2>
        </motion.div>

        {/* Table */}
        <motion.div
          className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {/* Column headers */}
          <div className="grid grid-cols-2">
            <div
              className="flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-[20px] md:text-[24px] font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: "#c12e53" }}
            >
              <X size={20} />
              Myths
            </div>

            <div
              className="flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-[20px] md:text-[24px] font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: "var(--reviva-green)" }}
            >
              <Check size={20} />
              Facts
            </div>
          </div>

          {/* Rows */}
          {mythsFacts.map((item, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-2 border-t border-slate-100"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
            >
              <div
                className="flex items-start gap-2 sm:gap-3 px-3 sm:px-6 py-4 sm:py-5 border-r border-slate-100"
                style={{ backgroundColor: index % 2 === 0 ? "#fef2f2" : "#fff5f5" }}
              >
                <X size={18} className="mt-0.5 shrink-0" style={{ color: "#b91c1c" }} />
                <p className="text-sm sm:text-base md:text-[18px] leading-relaxed text-slate-700">
                  {item.myth}
                </p>
              </div>
              <div
                className="flex items-start gap-2 sm:gap-3 px-3 sm:px-6 py-4 sm:py-5"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(135deg, #f0f7ef 0%, #fafdf9 100%)"
                      : "linear-gradient(135deg, #eaf4e8 0%, #f5fbf4 100%)",
                }}
              >
                <Check
                  size={18}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--reviva-green)" }}
                />
                <p className="text-sm sm:text-base md:text-[18px] leading-relaxed text-slate-700">
                  {item.fact}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
