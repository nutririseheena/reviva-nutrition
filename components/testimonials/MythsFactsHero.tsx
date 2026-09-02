"use client";

import { motion } from "framer-motion";
import { pageTagline } from "@/data/myths-facts";

export default function MythsFactsHero() {
  return (
    <section
      className="py-20 sm:py-24 md:py-28"
      style={{
        background:
          "linear-gradient(145deg, #fdeee6 0%, var(--reviva-blush) 42%, #fdf6f0 72%, var(--reviva-blush-deep) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl page-pad text-center">
        <motion.div
          className="relative py-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1
            className="mx-auto max-w-6xl leading-[1.3]"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.65rem, 3vw, 2.7rem)",
            }}
          >
            <span className="block" style={{ color: "var(--reviva-warm-brown)" }}>
              {pageTagline.split("\n\n")[0]}
            </span>
            <span className="mt-5 block italic" style={{ color: "var(--reviva-terracotta)" }}>
              {pageTagline.split("\n\n")[1]}
            </span>
          </h1>
          <div
            className="mx-auto mt-8 h-0.5 w-16"
            style={{ backgroundColor: "var(--reviva-terracotta)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
