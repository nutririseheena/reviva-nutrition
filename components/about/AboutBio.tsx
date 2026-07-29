"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function AboutBio() {
  return (
    <section className="bg-[var(--reviva-cream)] py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl page-pad">
        {/* ── Eyebrow ── */}
        <motion.div {...fadeUp} className="flex items-center gap-3 mb-6">
          {/* <span className="h-px w-8 rounded-full bg-[var(--reviva-terracotta)] opacity-60" /> */}
          <span className="reviva-eyebrow" style={{ fontSize: "1.2rem" }}>
            About Me
          </span>
        </motion.div>

        {/* ── Name + Title ── */}
        <motion.div {...fadeUp} transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}>
          <h1
            className="reviva-display leading-none"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
          >
            Dt. Heena Yadav
          </h1>
          <p
            className="mt-2 text-base sm:text-lg font-medium tracking-wide"
            style={{ color: "var(--reviva-terracotta)" }}
          >
            Founder, Reviva Nutrition
          </p>
        </motion.div>

        {/* ── Divider ── */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-8 mb-8 h-px w-16 rounded-full bg-[var(--reviva-gold)]"
        />

        {/* ── Body paragraphs ── */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="space-y-5 text-[17px] leading-[1.75] text-slate-600"
        >
          <p>
            Growing up in a family with a rich legacy of the{" "}
            <span className="reviva-italic-em" style={{ fontSize: "1.15em" }}>
              Unani healing system
            </span>
            , I developed a deep respect for nature and its healing wisdom from an early age. My
            passion for research, love for nature, and curiosity to uncover the root causes of
            health challenges inspired me to become a Clinical Dietitian.
          </p>
          <p>
            I believe true healing begins with the right approach, consistency, and discipline.
            Through Reviva Nutrition, my mission is to help people reconnect with the healing power
            of nutrition and build a healthier, more balanced life.
          </p>
          <p>
            Beyond my profession, I enjoy travelling, sports, music, and continuous
            learning—experiences that keep me inspired, connected to nature, and committed to
            lifelong growth.
          </p>
          <p>
            For me, the greatest reward is seeing someone regain their{" "}
            <span className="font-semibold" style={{ color: "var(--reviva-green)" }}>
              confidence, energy, and hope
            </span>{" "}
            through the power of nutrition.
          </p>
        </motion.div>

        {/* ── My Aim card ── */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
          className="mt-12 rounded-[24px] px-8 py-8 sm:px-10"
          style={{ backgroundColor: "var(--reviva-blush)" }}
        >
          <div className="flex items-start gap-3 mb-4">
            <Leaf size={18} className="mt-0.5 shrink-0" style={{ color: "var(--reviva-green)" }} />
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--reviva-green)" }}
            >
              My Aim
            </p>
          </div>
          <p
            className="reviva-quote leading-[1.5]"
            style={{ fontSize: "clamp(1.15rem, 2.4vw, 1.5rem)" }}
          >
            To use my knowledge and experience to bring a positive and meaningful change in
            people&apos;s lives by helping them discover the{" "}
            <span style={{ color: "var(--reviva-terracotta)" }}>healing power of nutrition</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
