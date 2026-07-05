"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock3 } from "lucide-react";

export default function ConsultHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--reviva-cream)] py-24 md:py-32">
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(47,107,45,0.06)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(244,178,27,0.07)" }}
      />

      <div className="relative mx-auto max-w-4xl page-pad text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span
            className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold uppercase tracking-wider"
            style={{ backgroundColor: "var(--reviva-gold-light)", color: "var(--reviva-green)" }}
          >
            Consultation Programs
          </span>

          <h1
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
            style={{ color: "var(--reviva-green)", fontFamily: "var(--font-heading)" }}
          >
            Your Path to
            <br />
            <span style={{ color: "var(--reviva-gold)" }}>Lasting Health</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            A structured, science-backed nutrition program designed around your unique body,
            lifestyle, and goals — not a generic plan handed to everyone.
          </p>

          {/* Quick-info chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              <Calendar size={14} color="var(--reviva-green)" />
              3, 6 or 12 month programs
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              <Clock3 size={14} color="var(--reviva-green)" />
              Online &amp; in-person
            </span>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold shadow-sm"
              style={{ backgroundColor: "var(--reviva-gold-light)", color: "var(--reviva-green)" }}
            >
              Quick online consultation
            </span>
          </div>

          <div className="mt-10">
            <Link
              href="#book"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "var(--reviva-green)" }}
            >
              Book Online Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
