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
                    className="group relative block overflow-hidden rounded-[28px] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    style={{ minHeight: "280px" }}
                  >
                    {/* Image layer — zooms on hover */}
                    <div
                      className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    {/* Brand tint overlay — blends image into each card's colour palette */}
                    <div
                      className="absolute inset-0"
                      style={{ background: card.gradient, opacity: 0.52 }}
                    />
                    {/* Bottom readability gradient — keeps text clearly legible */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.20) 52%, transparent 100%)",
                      }}
                    />

                    {/* Card content */}
                    <div
                      className="relative z-10 flex h-full flex-col justify-between p-7"
                      style={{ minHeight: "280px" }}
                    >
                      {/* Top: Icon + step badge */}
                      <div className="relative w-fit">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                          <Icon size={22} color="white" />
                        </div>
                        <span
                          className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-sm"
                          style={{ backgroundColor: "var(--reviva-gold)" }}
                        >
                          {index + 1}
                        </span>
                      </div>

                      {/* Bottom: text */}
                      <div>
                        <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/75">
                          {card.description}
                        </p>
                        <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-white/60 group-hover:text-white transition-colors">
                          Learn More
                          <ArrowRight
                            size={13}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </div>
                      </div>
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
