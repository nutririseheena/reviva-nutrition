"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const diseaseList = [
  "Diabetes",
  "PCOS / PCOD",
  "Hypothyroid",
  "Gut Disorders",
  "Obesity",
  "Hormonal Imbalance",
];
const healedList = [
  "Blood Sugar Balanced",
  "Hormones Restored",
  "Thyroid Regulated",
  "Gut Health Revived",
  "Weight Normalised",
  "Inner Balance Achieved",
];

export default function Slide2() {
  return (
    <section className="relative overflow-hidden bg-[var(--reviva-cream)]">
      {/* Background blobs — matches Slide1/Slide3 */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(244, 178, 27, 0.06)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(47, 107, 45, 0.05)" }}
      />

      {/* Container — same height contract as Slide1/Slide3 */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col py-10 sm:py-12 lg:py-0 lg:min-h-[700px] lg:justify-center gap-6 lg:gap-7">
          {/* ── Heading ── */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div
              className="mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{
                borderColor: "var(--reviva-gold)",
                backgroundColor: "var(--reviva-gold-light)",
              }}
            >
              <span
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: "var(--reviva-green)" }}
              >
                Your Healing Begins Here
              </span>
            </div>

            <h1
              className="font-bold leading-[1.05] tracking-tight"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--reviva-green)",
                fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
              }}
            >
              Opportunity To Heal.
            </h1>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500 leading-relaxed">
              Every sunset of illness can give way to a sunrise of restoration.
            </p>
          </motion.div>

          {/* ── Two image cards — fixed lg:h-[370px] so total height matches Slide1/3 ── */}
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
            {/* Sunset card */}
            <motion.div
              className="group relative overflow-hidden rounded-[20px] shadow-lg"
              style={{ minHeight: "300px" }}
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            >
              {/* Image layer */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url(/images/hero/sunset-disease.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              />
              {/* Brand tint: warm red-orange at 40% — blends image into palette */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(139,40,0,0.42) 0%, rgba(80,10,0,0.52) 100%)",
                }}
              />
              {/* Bottom readability vignette */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)",
                }}
              />

              <div
                className="relative z-10 flex h-full flex-col justify-between p-6"
                style={{ minHeight: "300px" }}
              >
                <span className="inline-block self-start rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm border border-white/20">
                  🌅 Without Nutrition
                </span>
                <div>
                  <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-widest text-white/55">
                    Life with poor diet
                  </p>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                    {diseaseList.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-1.5 text-xs font-medium text-white/90"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-[11px] leading-relaxed text-white/55">
                    Poor nutrition silently drives chronic illness — leaving you drained and
                    searching for answers.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sunrise card */}
            <motion.div
              className="group relative overflow-hidden rounded-[20px] shadow-lg"
              style={{ minHeight: "300px" }}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.28, ease: "easeOut" }}
            >
              {/* Image layer */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: "url(/images/hero/sunrise-heal.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              />
              {/* Brand tint: deep green at 38% — blends into Reviva palette */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(30,74,28,0.38) 0%, rgba(47,107,45,0.48) 100%)",
                }}
              />
              {/* Bottom readability vignette */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.14) 55%, transparent 100%)",
                }}
              />

              <div
                className="relative z-10 flex h-full flex-col justify-between p-6"
                style={{ minHeight: "300px" }}
              >
                <span className="inline-block self-start rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm border border-white/20">
                  🌄 With Reviva Nutrition
                </span>
                <div>
                  <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-widest text-white/55">
                    Life after healing
                  </p>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                    {healedList.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-1.5 text-xs font-medium text-white/90"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: "var(--reviva-gold)" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-[11px] leading-relaxed text-white/55">
                    Root-cause nutrition for lasting recovery — your body knows how to heal. Reviva
                    shows it the way.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── CTA ── */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
          >
            <button
              onClick={() =>
                document.getElementById("consult-cta")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: "var(--reviva-green)" }}
            >
              Begin Your Journey
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() =>
                document.getElementById("about-preview")?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full border-2 px-7 py-3 text-sm font-semibold transition-all hover:bg-[#eef5eb]"
              style={{ borderColor: "var(--reviva-green)", color: "var(--reviva-green)" }}
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
