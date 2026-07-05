"use client";

import { motion } from "framer-motion";
import { consultStages } from "@/data/consult";

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
          <span
            className="inline-block rounded-full px-4 py-2 text-sm font-medium"
            style={{ backgroundColor: "var(--reviva-gold-light)", color: "var(--reviva-green)" }}
          >
            How It Works
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl"
            style={{ color: "var(--reviva-green)", fontFamily: "var(--font-heading)" }}
          >
            A 3-Stage Process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            You choose the <strong>duration</strong> (3, 6 or 12 months) and{" "}
            <strong>who you work with</strong> — Heena directly or a team nutritionist. The
            structure stays exactly the same.
          </p>
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
                      className="text-sm font-bold uppercase tracking-widest"
                      style={{ color: stage.color }}
                    >
                      {stage.phase}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {stage.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: stage.color }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
