"use client";

import Link from "next/link";
import { ClipboardList, FileText, MessageCircle, Leaf, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { processCards } from "@/data/process-cards";

const icons = [ClipboardList, FileText, MessageCircle, Leaf];

export default function ProcessCards() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span
            className="inline-block rounded-full px-4 py-2 text-sm font-medium"
            style={{
              backgroundColor: "var(--reviva-gold-light)",
              color: "var(--reviva-green)",
            }}
          >
            Your Healing Journey
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl lg:text-6xl"
            style={{
              color: "var(--reviva-green)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Believe in Nutrition Power to Better health
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
            Four intentional steps to restore your energy, balance, and wellbeing.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="relative mt-16">
          {/* Connecting gradient line — desktop only */}
          <motion.div
            className="absolute top-[2.25rem] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] hidden h-px lg:block origin-left"
            style={{
              background: "linear-gradient(to right, var(--reviva-green), var(--reviva-gold))",
              opacity: 0.3,
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processCards.map((card, index) => {
              const Icon = icons[index];
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.11 }}
                >
                  <Link
                    href="/consult"
                    className="group relative block rounded-[28px] bg-[var(--reviva-cream)] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                  >
                    {/* Icon + step badge */}
                    <div className="relative w-fit">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-[#eef5eb]"
                        style={{
                          backgroundColor: isEven ? "rgba(244,178,27,0.12)" : "#eef5eb",
                        }}
                      >
                        <Icon size={26} color="var(--reviva-green)" />
                      </div>

                      {/* Step number badge */}
                      <span
                        className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm"
                        style={{ backgroundColor: "var(--reviva-gold)" }}
                      >
                        {index + 1}
                      </span>
                    </div>

                    <h3
                      className="mt-6 text-xl font-semibold"
                      style={{ color: "var(--reviva-green)" }}
                    >
                      {card.title}
                    </h3>

                    <p className="mt-3 text-slate-500 leading-relaxed">{card.description}</p>

                    <div
                      className="mt-6 flex items-center gap-2 text-sm font-medium"
                      style={{ color: "var(--reviva-gold-dark)" }}
                    >
                      Learn More
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/consult"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:scale-105 hover:shadow-md"
            style={{ backgroundColor: "var(--reviva-green)" }}
          >
            Start Your Journey
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
