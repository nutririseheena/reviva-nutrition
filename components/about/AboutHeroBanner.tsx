"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHeroBanner() {
  return (
    <section className="bg-[var(--reviva-cream)] pt-0 pb-0">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden"
      >
        <Image
          src="/images/about/about_heena.png"
          alt="Heena — Reviva Nutrition, Your Nutrition Partner"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="w-full h-auto block"
        />
      </motion.div>
    </section>
  );
}
