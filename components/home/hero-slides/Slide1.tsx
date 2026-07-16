"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { heroRoles } from "@/data/hero";

function Typewriter() {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = heroRoles[wordIndex];

    if (phase === "typing") {
      if (displayed === current) {
        const t = setTimeout(() => setPhase("pausing"), 1800);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 130);
      return () => clearTimeout(t);
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), 350);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (displayed === "") {
        const t = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % heroRoles.length);
          setPhase("typing");
        }, 0);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 75);
      return () => clearTimeout(t);
    }
  }, [displayed, phase, wordIndex]);

  return (
    <span>
      <span style={{ color: "var(--reviva-gold)" }}>{displayed}</span>
      <span
        className="ml-0.5 inline-block h-[0.82em] w-[3px] translate-y-[0.1em] rounded-sm align-middle animate-cursor-blink"
        style={{ backgroundColor: "var(--reviva-gold)" }}
      />
    </span>
  );
}

const leftVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function Slide1() {
  return (
    <section className="hero-slide-section relative overflow-hidden bg-[var(--reviva-cream)]">
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(47, 107, 45, 0.05)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(244, 178, 27, 0.06)" }}
      />

      <div className="relative mx-auto max-w-7xl page-pad">
        <div className="grid items-center gap-8 py-10 sm:py-12 lg:grid-cols-[55fr_45fr] lg:gap-12 lg:py-0 hero-slide-min-h hero-s1-grid">
          {/* Left: Text — shown second on mobile (order-2), first on desktop */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1 min-w-0"
          >
            {/* Intro chip */}
            <motion.div
              variants={item}
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{
                borderColor: "var(--reviva-gold)",
                backgroundColor: "var(--reviva-gold-light)",
              }}
            >
              <Leaf size={13} color="var(--reviva-gold)" />
              <span
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: "var(--reviva-green)" }}
              >
                Root-Cause Nutrition
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-2 italic"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--reviva-warm-brown)",
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Hi, Myself Heena —
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-3 font-bold leading-[1.05] tracking-tight whitespace-nowrap"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--reviva-green)",
                fontSize: "clamp(2.0rem, 4.5vw, 3.5rem)",
              }}
            >
              Your <Typewriter />
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-lg text-base sm:text-lg leading-snug text-slate-700 hero-s1-desc"
            >
              At Reviva Nutrition, Believe in the Power of Nutrition 🌱 Transform Your Health.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-3 max-w-md text-base leading-relaxed text-slate-500 hero-s1-tags"
            >
              Personalized Nutrition &bull; Sustainable Lifestyle Changes &bull; Long-Term Wellness
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document.getElementById("consult-form")?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "var(--reviva-green)" }}
              >
                Book Online Consultation
                <ArrowRight size={17} />
              </button>
              <Link
                href="/about"
                className="rounded-full border-2 px-7 py-3.5 text-sm font-semibold transition-all hover:bg-[#eef5eb]"
                style={{
                  borderColor: "var(--reviva-green)",
                  color: "var(--reviva-green)",
                }}
              >
                Meet Heena
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="hero-stat-wrap mt-10 flex flex-nowrap gap-4 sm:gap-8 border-t border-slate-200 pt-8"
            >
              {[
                { value: "5K+", label: "Clients Guided" },
                { value: "5+", label: "Years Experience" },
                { value: "98%", label: "Success Rate" },
              ].map(({ value, label }) => (
                <div key={label} className="flex-1 min-w-0">
                  <p
                    className="hero-stat-num text-3xl sm:text-5xl font-light"
                    style={{
                      color: "var(--reviva-warm-brown)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {value}
                  </p>
                  <div
                    className="mt-2 h-px w-8 sm:w-12"
                    style={{ backgroundColor: "rgba(124,66,51,0.25)" }}
                  />
                  <p className="mt-2 text-[9px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Portrait — shown first on mobile (order-1), second on desktop */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2 min-w-0"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] hero-s1-portrait">
              {/* Glow behind portrait */}
              <div
                className="absolute -inset-6 -z-10 rounded-[50px] blur-3xl"
                style={{ backgroundColor: "rgba(47, 107, 45, 0.1)" }}
              />

              {/*
                Portrait slot — aspect-[3/4] for a tall/vertical photo.
                To use the real photo later, replace the inner <div> with:
                  <Image
                    src="/images/hero/heena-portrait.jpg"
                    alt="Heena — Nutritionist & Wellness Coach"
                    fill
                    className="object-cover object-top"
                    priority
                  />
              */}
              <div
                className="aspect-[3/4] lg:aspect-auto w-full hero-slide-img-h overflow-hidden rounded-[36px] shadow-2xl relative"
                style={{
                  background:
                    "linear-gradient(165deg, #d6ebd2 0%, #9dbf98 40%, var(--reviva-green) 75%, var(--reviva-green-dark) 100%)",
                }}
              >
                {/* Decorative orbs */}
                <div className="absolute top-6 right-6 h-20 w-20 rounded-full bg-white/10" />
                <div className="absolute top-1/3 -left-4 h-14 w-14 rounded-full bg-white/10" />
                <div className="absolute bottom-1/4 right-4 h-10 w-10 rounded-full bg-white/10" />

                {/* Placeholder — remove when real photo is added */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                  <div
                    className="h-28 w-28 rounded-full border-4 border-white/30 flex items-center justify-center mb-5"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <span
                      className="text-5xl font-bold text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      H
                    </span>
                  </div>
                  <p
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Heena
                  </p>
                  <p className="mt-1 text-sm text-white/70 tracking-wide">Reviva Nutrition</p>
                  <p className="mt-3 text-xs text-white/40 italic">Portrait photo coming soon</p>
                </div>
              </div>

              {/* Floating card — Gut Health */}
              {/* <motion.div
                className="absolute -left-5 top-16 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
              >
                <div
                  className="rounded-full p-1.5"
                  style={{ backgroundColor: "var(--reviva-gold-light)" }}
                >
                  <Leaf size={14} color="var(--reviva-green)" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Gut Health</span>
              </motion.div> */}

              {/* Floating card — Hormonal Balance */}
              {/* <motion.div
                className="absolute -right-5 top-[38%] flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
              >
                <div
                  className="rounded-full p-1.5"
                  style={{ backgroundColor: "rgba(255,100,100,0.1)" }}
                >
                  <HeartPulse size={14} color="#e05050" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Hormonal Balance</span>
              </motion.div> */}

              {/* Floating card — Personalized Plans */}
              {/* <motion.div
                className="absolute -left-5 bottom-14 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5, ease: "easeOut" }}
              >
                <div
                  className="rounded-full p-1.5"
                  style={{ backgroundColor: "rgba(244, 178, 27, 0.15)" }}
                >
                  <Calendar size={14} color="var(--reviva-gold-dark)" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Personalized Plans</span>
              </motion.div> */}

              {/* Award badge */}
              {/* <motion.div
                className="absolute -top-3 right-6 flex items-center gap-1.5 rounded-full px-3 py-1.5 shadow-lg"
                style={{ backgroundColor: "var(--reviva-gold)" }}
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.5, duration: 0.4, type: "spring", stiffness: 220 }}
              >
                <Star size={11} fill="white" color="white" />
                <span className="text-xs font-bold text-white tracking-wide">Top Rated</span>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
