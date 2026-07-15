"use client";

import { motion } from "framer-motion";
import { consultStages, durationCards } from "@/data/consult";
import { MapPin, Video } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl page-pad">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="reviva-eyebrow"
            // style={{
            //   color: "var(--reviva-green)",
            //   fontFamily: "var(--font-heading)",
            //   fontSize: "clamp(2rem, 4.8vw, 4.5rem)",
            // }}
          >
            How the Treatment Program <span>Works</span>
          </h1>

          {/* Step cards — side-by-side on desktop */}
          <div className="mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {/* Step 1 */}
            <motion.div
              className="relative rounded-2xl p-7 text-left overflow-hidden"
              style={{
                backgroundColor: "var(--reviva-cream)",
                borderLeft: "4px solid var(--reviva-green)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: "var(--reviva-green)" }}
                >
                  1
                </span>
                <p className="font-semibold text-slate-800 text-lg">Choose Your Program Duration</p>
              </div>
              <div className="flex flex-wrap gap-2 pl-12">
                {["3 Months", "6 Months", "12 Months"].map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center rounded-xl px-5 py-2 text-base font-semibold"
                    style={{
                      backgroundColor: "rgba(47,107,45,0.09)",
                      color: "var(--reviva-green)",
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="relative rounded-2xl p-7 overflow-hidden flex flex-col justify-center"
              style={{
                backgroundColor: "var(--reviva-cream)",
                borderLeft: "4px solid var(--reviva-gold)",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <div className="flex items-start gap-3">
                <span
                  className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: "var(--reviva-gold)" }}
                >
                  2
                </span>
                <div>
                  <p
                    className="leading-snug"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                      color: "var(--reviva-green)",
                      fontWeight: 600,
                    }}
                  >
                    Consultation with Dietitian{" "}
                    <span className="italic" style={{ color: "var(--reviva-warm-brown)" }}>
                      Heena
                    </span>{" "}
                    &amp; Reviva Nutrition Team
                  </p>
                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm"
                      style={{
                        backgroundColor: "rgba(244,178,27,0.15)",
                        color: "var(--reviva-green)",
                      }}
                    >
                      <MapPin size={14} color="var(--reviva-green)" /> Offline Consultation
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm"
                      style={{
                        backgroundColor: "rgba(244,178,27,0.15)",
                        color: "var(--reviva-green)",
                      }}
                    >
                      <Video size={14} color="var(--reviva-green)" /> Online Consultation
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Note */}
          <motion.div
            className="mx-auto mt-5 rounded-2xl px-6 py-4 flex gap-3 items-start text-left"
            style={{ backgroundColor: "#f0ede7" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <span className="text-base shrink-0 mt-0.5">📌</span>
            <p className="text-base leading-relaxed ">
              <span className="font-semibold text-slate-600">Note: </span>
              The treatment approach, assessment process, and program structure remain the same
              across all program options. The duration and consultation format are the only
              differences.
            </p>
          </motion.div>
        </motion.div>

        {/* Stage cards */}
        <div className="mt-16 space-y-6">
          {consultStages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.number}
                className="relative grid gap-6 overflow-hidden rounded-[28px] bg-[var(--reviva-cream)] p-8 md:grid-cols-[auto_1fr] md:gap-10"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
              >
                {/* Large number */}
                <div className="flex items-start gap-6 md:flex-col md:items-center md:gap-4">
                  <span
                    className="text-[4rem] sm:text-[6rem] leading-none font-bold select-none opacity-15"
                    style={{ fontFamily: "var(--font-heading)", color: stage.color }}
                  >
                    {stage.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor:
                          stage.color === "var(--reviva-gold)"
                            ? "rgba(244,178,27,0.15)"
                            : "rgba(47,107,45,0.1)",
                      }}
                    >
                      <Icon size={20} color={stage.color} />
                    </div>
                    <h3
                      className="text-base font-bold uppercase tracking-widest"
                      style={{ color: stage.color }}
                    >
                      {stage.phase}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {stage.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-600 text-base leading-relaxed"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: stage.color }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Duration sub-cards — only inside stage 3 */}
                  {stage.number === "3" && (
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {durationCards.map((card) => {
                        const CardIcon = card.icon;
                        return (
                          <div
                            key={card.months}
                            className="rounded-2xl p-5"
                            style={{ backgroundColor: "rgba(47,107,45,0.06)" }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                                style={{ backgroundColor: "rgba(47,107,45,0.15)" }}
                              >
                                <CardIcon size={18} color="var(--reviva-green)" />
                              </div>
                              <div>
                                <p
                                  className="text-sm font-bold uppercase tracking-widest"
                                  style={{ color: "var(--reviva-green)" }}
                                >
                                  {card.months}
                                </p>
                                <p className="text-base font-semibold text-slate-700">
                                  {card.label}
                                </p>
                              </div>
                            </div>
                            <ul className="space-y-2">
                              {card.points.map((pt, j) => (
                                <li
                                  key={j}
                                  className="flex items-start gap-2 text-sm text-slate-500 leading-relaxed"
                                >
                                  <span
                                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                                    style={{ backgroundColor: "var(--reviva-green)" }}
                                  />
                                  {pt}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
