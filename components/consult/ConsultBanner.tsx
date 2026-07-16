"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ConsultBanner() {
  return (
    <section className="bg-[var(--reviva-cream)] pt-0 pb-8 sm:pb-10 md:pb-12">
      {/*
       * No container div — motion.div fills the full section width directly,
       * matching HeroSlider which wraps slides with only <section className="relative overflow-hidden">.
       * The max-w-7xl wrapper was what made this look like a centered image card.
       */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden"
      >
        {/* ── Background image — fills the full banner width ── */}
        <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/8]">
          <Image
            src="/images/consult/consult_template.png"
            alt="Welcome to Reviva Nutrition Consultation Room — with Dietician Heena"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* ── Soft left-to-right gradient scrim ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,8,5,0.78) 0%, rgba(10,8,5,0.54) 26%, rgba(10,8,5,0.18) 56%, transparent 78%)",
          }}
        />

        {/* ── Text overlay — page-pad left alignment, vertically centered ──
         *  pl values match page-pad (2rem / 3rem / 5rem) so the text column
         *  aligns with every other section on the site. */}
        <div className="absolute inset-0 flex items-center pl-8 sm:pl-12 lg:pl-20 pr-6 sm:pr-8">
          <div>
            {/* ── Heading: three tightly-stacked lines ── */}
            <h2 className="leading-none">
              {/* "Welcome to" — small italic intro */}
              <span
                className="block italic"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "clamp(1.2rem, 1.9vw, 1.8rem)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  letterSpacing: "0.02em",
                  marginBottom: "0.08em",
                }}
              >
                Welcome to
              </span>

              {/* "Reviva Nutrition" — primary hero display; italic gold */}
              <span
                className="block italic whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--reviva-gold)",
                  fontSize: "clamp(2.0rem, 5.4vw, 5.2rem)",
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.01em",
                }}
              >
                Reviva Nutrition
              </span>

              {/* "Consultation Room" — secondary display, tight to "Reviva Nutrition" */}
              <span
                className="block whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#ffffff",
                  fontSize: "clamp(1.3rem, 2.6vw, 2.5rem)",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: "0.01em",
                }}
              >
                Consultation Room
              </span>
            </h2>

            {/* ── Subtitle — single line; "Heena" emphasised inline at 1.32× size ── */}
            <p
              className="mt-3 sm:mt-4 italic"
              style={{
                fontFamily: "var(--font-heading)",
                color: "rgba(255,255,255,0.65)",
                fontSize: "clamp(1.2rem, 1.9vw, 1.8rem)",
                fontWeight: 400,
                lineHeight: 1.4,
                letterSpacing: "0.01em",
              }}
            >
              With Dietician{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--reviva-amber-deep)",
                  fontWeight: 700,
                  fontSize: "1.8em",
                }}
              >
                Heena
              </em>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
