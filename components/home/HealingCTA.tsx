"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HealingCTA() {
  return (
    <section className="py-15" style={{ backgroundColor: "var(--reviva-cream)" }}>
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          

          <h2
            className="mt-6 text-7xl md:text-7xl font-bold"
            style={{
              color: "var(--reviva-green)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Ready to Discover Root Cause and Transform Your Health?
          </h2>

          <Link
            href="/consult"
            className="mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-[25px] font-medium text-white transition-all hover:scale-105"
            style={{
              backgroundColor: "var(--reviva-green)",
            }}
          >
            Connect with us
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
