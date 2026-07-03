"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HealingCTA() {
  return (
    <section className="py-20 sm:py-24 md:py-32" style={{ backgroundColor: "var(--reviva-blush)" }}>
      <div className="mx-auto max-w-4xl px-2 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-bold leading-[1.1]"
            style={{
              color: "var(--reviva-green)",
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1rem, 5vw, 4.5rem)",
            }}
          >
            Ready to Discover Root Cause and{" "}
            <span className="italic" style={{ color: "var(--reviva-warm-brown)" }}>
              Transform Your Health?
            </span>
          </h2>

          <Link
            href="/consult"
            className="mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white transition-all hover:scale-105"
            style={{
              backgroundColor: "var(--reviva-green)",
            }}
          >
            Connect with us
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
