"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function AboutBio() {
  return (
    <section className="bg-[var(--reviva-cream)] px-4 sm:px-8 lg:px-20">
      <div className="w-full flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[var(--reviva-blush-deep)]">
        {/* ── Left panel — name + credentials ── */}
        <motion.div
          {...fadeUp}
          className="lg:w-[40%] flex flex-col items-center justify-center text-center px-8 py-14 sm:px-12 lg:px-14 lg:py-20"
          style={{ backgroundColor: "var(--reviva-blush)" }}
        >
          <span className="reviva-eyebrow mb-5 block" style={{ fontSize: "1.0rem" }}>
            About Me
          </span>

          <h1
            className="reviva-display leading-[1.05] whitespace-nowrap"
            style={{ fontSize: "clamp(2.4rem, 4.6vw, 4.8rem)", color: "var(--reviva-gold-dark)" }}
          >
            Dt. Heena Yadav
          </h1>

          <p
            className="mt-3 font-medium tracking-wide"
            style={{ color: "var(--reviva-terracotta)", fontSize: "1.1rem" }}
          >
            Founder, Reviva Nutrition
          </p>

          <div className="mt-6 mb-15 h-0.5 w-28 rounded-full bg-[var(--reviva-gold)] mx-auto" />

          {/* My Aim — moved from right panel into left */}
          <div className="flex flex-col items-center gap-3 mb-5">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-base font-bold uppercase tracking-widest"
              style={{ backgroundColor: "var(--reviva-terracotta)", color: "#fff" }}
            >
              My Aim
            </span>
          </div>
          <p
            className="reviva-quote leading-[1.6] max-w-xs"
            style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.35rem)" }}
          >
            <span
              className="block text-[3.5rem] leading-none mb-1 opacity-20"
              style={{ color: "var(--reviva-terracotta)", fontFamily: "Georgia, serif" }}
            >
              &ldquo;
            </span>
            To use my knowledge and experience to bring a positive and meaningful change in
            people&apos;s lives by helping them discover the{" "}
            <span style={{ color: "var(--reviva-terracotta)" }}>healing power of nutrition</span>.
          </p>
        </motion.div>

        {/* ── Right panel — bio + aim ── */}
        <div className="lg:flex-1 flex flex-col justify-center px-8 py-14 sm:px-10 lg:pl-14 lg:pr-0 lg:py-20">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.1 }}
            className="space-y-5 text-[17px] leading-[1.75] text-stone-600 text-justify"
          >
            <p>
              Growing up in a family with a rich legacy of the{" "}
              <span className="font-bold" style={{ color: "var(--reviva-warm-brown)" }}>
                Unani healing system
              </span>
              , I developed a deep respect for nature and its healing wisdom from an early age. My
              passion for research, love for nature, and curiosity to uncover the root causes of
              health challenges inspired me to become a{" "}
              <span className="font-semibold" style={{ color: "var(--reviva-warm-brown)" }}>
                Clinical Dietitian
              </span>
              .
            </p>
            <p>
              I believe true healing begins with the{" "}
              <span className="font-semibold" style={{ color: "var(--reviva-warm-brown)" }}>
                right approach, consistency, and discipline
              </span>
              . Through Reviva Nutrition, my mission is to help people reconnect with the{" "}
              <span className="font-semibold" style={{ color: "var(--reviva-terracotta)" }}>
                healing power of nutrition
              </span>{" "}
              and build a healthier, more balanced life.
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
        </div>
      </div>
    </section>
  );
}
