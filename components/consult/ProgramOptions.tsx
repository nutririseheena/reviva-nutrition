"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const durations = [
  {
    months: "3",
    label: "Kickstart",
    desc: "Ideal for a focused reset — build foundational habits and see early results.",
    features: [
      "Initial assessment + plan",
      "12 weekly sessions",
      "WhatsApp support",
      "Guidelines document",
    ],
  },
  {
    months: "6",
    label: "Transform",
    desc: "The most popular choice — enough time to create deep, lasting change.",
    features: [
      "Initial assessment + plan",
      "24 weekly sessions",
      "Special occasion planning",
      "WhatsApp support",
      "Mid-program review",
    ],
    highlight: true,
  },
  {
    months: "12",
    label: "Evolve",
    desc: "Comprehensive healing for complex conditions requiring a long-term approach.",
    features: [
      "Initial assessment + plan",
      "48 weekly sessions",
      "Special occasion planning",
      "WhatsApp support",
      "Quarterly reviews",
      "Post-consultation document",
    ],
  },
];

export default function ProgramOptions() {
  return (
    <section className="bg-[var(--reviva-cream)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Duration cards */}
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
            Choose Your Program
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl"
            style={{ color: "var(--reviva-green)", fontFamily: "var(--font-heading)" }}
          >
            Pick Your Duration
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-500">
            All programs follow the same 3-stage structure. The longer the duration, the deeper and
            more sustainable the results.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {durations.map((plan, index) => (
            <motion.div
              key={plan.months}
              className={`relative flex flex-col rounded-[28px] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight ? "ring-2 ring-[var(--reviva-gold)] shadow-xl" : "bg-white"
              }`}
              style={plan.highlight ? { backgroundColor: "var(--reviva-green)" } : {}}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.highlight && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: "var(--reviva-gold)" }}
                >
                  Most Popular
                </span>
              )}

              <div>
                <span
                  className={`text-xs font-semibold uppercase tracking-widest ${plan.highlight ? "text-white/60" : "text-slate-400"}`}
                >
                  {plan.label}
                </span>
                <div className="mt-2 flex items-end gap-1.5">
                  <span
                    className={`text-6xl font-bold leading-none ${plan.highlight ? "text-white" : ""}`}
                    style={plan.highlight ? {} : { color: "var(--reviva-green)" }}
                  >
                    {plan.months}
                  </span>
                  <span
                    className={`mb-1 text-lg font-medium ${plan.highlight ? "text-white/70" : "text-slate-500"}`}
                  >
                    months
                  </span>
                </div>
                <p
                  className={`mt-3 text-sm leading-relaxed ${plan.highlight ? "text-white/80" : "text-slate-500"}`}
                >
                  {plan.desc}
                </p>
              </div>

              <ul className="mt-6 space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Check
                      size={15}
                      className="shrink-0"
                      color={plan.highlight ? "var(--reviva-gold)" : "var(--reviva-green)"}
                    />
                    <span className={plan.highlight ? "text-white/90" : "text-slate-700"}>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Consult With — Heena only */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h3
            className="text-center text-3xl md:text-4xl"
            style={{ color: "var(--reviva-green)", fontFamily: "var(--font-heading)" }}
          >
            Your Guide to Better Health
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-500">
            Work directly with Heena — a decade of clinical expertise, personalised to you.
          </p>

          <motion.div
            className="mt-8 overflow-hidden rounded-[28px] bg-white shadow-md"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-[auto_1fr]">
              {/* Accent strip */}
              <div
                className="hidden md:block w-2 rounded-l-[28px]"
                style={{
                  background: "linear-gradient(to bottom, var(--reviva-green), var(--reviva-gold))",
                }}
              />

              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="flex-1 min-w-[200px]">
                    <span
                      className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: "var(--reviva-gold-light)",
                        color: "var(--reviva-green)",
                      }}
                    >
                      Lead Nutritionist
                    </span>
                    <h4
                      className="mt-3 text-3xl font-semibold"
                      style={{ color: "var(--reviva-green)", fontFamily: "var(--font-heading)" }}
                    >
                      Work With Heena
                    </h4>
                    <p className="mt-2 max-w-lg text-slate-500 leading-relaxed">
                      Get a deeply personalised nutrition experience built around your unique body,
                      lifestyle, and goals — guided by a decade of evidence-based clinical expertise
                      in root-cause healing.
                    </p>
                  </div>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-2 self-end">
                    {[
                      "Gut Health",
                      "Hormonal Balance",
                      "Diabetes",
                      "PCOS",
                      "Weight Management",
                      "Thyroid",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-3 py-1 text-xs font-medium"
                        style={{
                          borderColor: "rgba(47,107,45,0.2)",
                          color: "var(--reviva-green)",
                          backgroundColor: "rgba(47,107,45,0.04)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid gap-4 border-t border-slate-100 pt-8 sm:grid-cols-3">
                  {[
                    { value: "10+", label: "Years of Practice" },
                    { value: "500+", label: "Clients Guided" },
                    { value: "95%", label: "Success Rate" },
                  ].map(({ value, label }) => (
                    <div key={label} className="text-center">
                      <p
                        className="text-3xl font-bold"
                        style={{ color: "var(--reviva-green)", fontFamily: "var(--font-heading)" }}
                      >
                        {value}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
