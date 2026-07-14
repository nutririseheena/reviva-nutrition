"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";
import { allTestimonials } from "@/data/testimonials";

export default function TestimonialsGrid() {
  return (
    <section className="bg-[var(--reviva-cream)] py-24">
      <div className="mx-auto max-w-7xl page-pad">
        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allTestimonials.map((t, index) => (
            <motion.article
              key={t.name}
              className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.08 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 h-1 w-full"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(to right, var(--reviva-green), var(--reviva-gold))"
                      : "linear-gradient(to right, var(--reviva-gold), var(--reviva-green))",
                }}
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--reviva-gold)" color="var(--reviva-gold)" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote
                size={28}
                className="mb-3 opacity-15"
                style={{ color: "var(--reviva-green)" }}
              />

              {/* Quote text */}
              <p className="flex-1 text-sm leading-relaxed text-slate-600 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Result pill */}
              <div className="mt-5">
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: "var(--reviva-gold-light)",
                    color: "var(--reviva-green)",
                  }}
                >
                  ✓ {t.result}
                </span>
              </div>

              {/* Author */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.condition}</p>
                </div>
                <span className="text-xs text-slate-400">{t.duration}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-slate-600 mb-6">Ready to write your own success story?</p>
          <Link
            href="/consult#consult-form"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
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
