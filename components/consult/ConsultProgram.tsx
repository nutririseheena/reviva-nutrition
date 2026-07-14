"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Video } from "lucide-react";

export default function ConsultHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--reviva-cream)] py-24 md:py-28">
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
          <p className="reviva-eyebrow">Consultation Programs</p>

          <h1
            className="mt-6 leading-[1.06] whitespace-nowrap"
            style={{
              color: "var(--reviva-green)",
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4.8vw, 4.5rem)",
            }}
          >
            Your Path to{" "}
            <span className="italic" style={{ color: "var(--reviva-warm-brown)" }}>
              Lasting Health
            </span>
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
              <MapPin size={14} color="var(--reviva-green)" />
              Offline Consultation
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
              <Video size={14} color="var(--reviva-green)" />
              Online Consultation
            </span>
          </div>

          <div className="mt-10">
            <Link
              href="/consult#consult-form"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "var(--reviva-green)" }}
            >
              Book Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
