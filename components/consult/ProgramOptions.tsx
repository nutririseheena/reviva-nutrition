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

const consultWith = [
  {
    who: "With Heena",
    tag: "Lead Nutritionist",
    desc: "Work directly with Heena for a deeply personalized experience informed by a decade of clinical expertise.",
  },
  {
    who: "With the Team",
    tag: "Team Nutritionist",
    desc: "Work with our trained team of nutritionists — same structured program, same outcomes, greater flexibility on scheduling.",
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

        {/* Consult With */}
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
            Who Do You Want to Work With?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-500">
            Choose the experience level that works best for your needs and schedule.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {consultWith.map((option, index) => (
              <motion.div
                key={option.who}
                className="rounded-[24px] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: "var(--reviva-gold-light)",
                    color: "var(--reviva-green)",
                  }}
                >
                  {option.tag}
                </span>
                <h4
                  className="mt-3 text-2xl font-semibold"
                  style={{ color: "var(--reviva-green)" }}
                >
                  {option.who}
                </h4>
                <p className="mt-2 text-slate-500 leading-relaxed">{option.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
