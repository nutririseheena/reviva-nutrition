"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { processCards } from "@/data/process-cards";

export default function ProcessCards() {
  return (
    <section className="py-24" style={{ backgroundColor: "#fdf8f4" }}>
      <div className="mx-auto max-w-7xl page-pad">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="reviva-eyebrow">Your Healing Journey</p>

          <h2
            className="mt-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-[4.5rem] leading-tight"
            style={{
              color: "var(--reviva-green)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Nourishing Health Through the<br></br>{" "}
            <span className="italic" style={{ color: "var(--reviva-warm-brown)" }}>
              Power of Nutrition
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-l text-lg sm:text-xl text-slate-500">
            Four purposeful steps designed to help you heal, restore, and thrive.
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
        </div>

        {/* Cards — image only, no text/icons */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processCards.map((card, index) => (
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
                aria-label={card.title}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={800}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 50%)",
                  }}
                />
                {/* Fallback gradient shown when image is absent */}
                <div
                  className="absolute inset-0"
                  style={{ background: card.gradient, opacity: card.image ? 0 : 0.85 }}
                />
                {/* Very subtle bottom vignette for depth */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 50%)",
                  }}
                />
              </Link>
            </motion.div>
          ))}
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
