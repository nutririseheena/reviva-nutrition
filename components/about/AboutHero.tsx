"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--reviva-green)] py-24 md:py-32">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-10 blur-3xl bg-[var(--reviva-gold)]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-10 blur-3xl bg-white" />

      <div className="relative mx-auto max-w-4xl page-pad text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
            <Leaf size={14} />
            About Reviva Nutrition
          </span>

          <h1
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Meet Heena — <br className="hidden sm:block" />
            <span style={{ color: "var(--reviva-gold)" }}>Your Nutrition Partner</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            A decade of helping people heal from within. No fad diets, no quick fixes — just
            evidence-based, culturally rooted nutrition science that fits your real life.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/consult"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-[var(--reviva-green)] shadow-md transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "var(--reviva-gold)" }}
            >
              Book a Consultation
              <ArrowRight size={16} />
            </Link>
            <a
              href="#story"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Read My Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
