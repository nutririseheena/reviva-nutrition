"use client";

import { motion } from "framer-motion";
import { Baby, Flame, Flower2, HeartPulse, Scale, Toilet } from "lucide-react";
import MythFactCard from "./MythFactCard";
import type { MythFactsCategory } from "@/data/myths-facts";

interface MythsFactsCategoryProps {
  category: MythFactsCategory;
  isFirst?: boolean;
}

const categoryIcons = {
  "weight-gain": Scale,
  "high-bp": HeartPulse,
  menstrual: Flower2,
  acidity: Flame,
  "childhood-obesity": Baby,
  constipation: Toilet,
};

export default function MythsFactsCategory({ category, isFirst = false }: MythsFactsCategoryProps) {
  const CategoryIcon = categoryIcons[category.id as keyof typeof categoryIcons];
  const categoryMessage = category.tagline ?? category.revivaMessage;

  return (
    <section
      className={`bg-[var(--reviva-cream)] pb-10 md:pb-12 ${isFirst ? "pt-24 md:pt-28" : "pt-10 md:pt-12 border-t border-slate-100"}`}
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        {/* Category Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <CategoryIcon
              aria-hidden="true"
              className="shrink-0"
              size={40}
              strokeWidth={1.5}
              style={{ color: "var(--reviva-gold)" }}
            />
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium"
              style={{ color: "var(--reviva-green)", fontFamily: "var(--font-heading)" }}
            >
              {category.title.replace(/^[^\w]+\s*/, "")}
            </h2>
          </div>

          {/* Category tagline or Reviva message */}
          {categoryMessage && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p
                className="text-lg sm:text-xl md:text-2xl font-medium italic leading-relaxed"
                style={{ color: "var(--reviva-terracotta)" }}
              >
                {categoryMessage.split("\n\n").map((line, index) => (
                  <span key={line} className={index > 0 ? "mt-2 block" : "block"}>
                    {line}
                  </span>
                ))}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Myth-Fact Cards Grid */}
        <div className="grid gap-4 md:gap-5">
          {category.mythFactPairs.map((pair, index) => (
            <MythFactCard key={index} pair={pair} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
