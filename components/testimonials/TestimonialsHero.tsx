"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { heroStats } from "@/data/testimonials";

export default function TestimonialsHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--reviva-green)] py-24 md:py-32">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-10 blur-3xl bg-[var(--reviva-gold)]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-10 blur-3xl bg-white" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="var(--reviva-gold)" color="var(--reviva-gold)" />
            ))}
          </div>

          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
            Success Stories
          </span>

          <h1
            className="mt-6 text-5xl md:text-6xl lg:text-7xl leading-tight text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Real People,
            <br />
            <span style={{ color: "var(--reviva-gold)" }}>Meaningful Change</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Every wellness journey is unique. Here are stories from clients who chose to heal from
            within — and the lasting transformations they achieved.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/10 px-4 py-5 backdrop-blur-sm border border-white/15"
            >
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
