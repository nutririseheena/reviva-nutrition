"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { TestimonialCategory } from "@/data/testimonials";

const specializations = [
  {
    src: "/images/consult/healing1.png",
    alt: "Lifestyle & Metabolic Disorders — Reviva Nutrition",
    testimonialCategory: "Lifestyle and Metabolic Disorder" as TestimonialCategory,
    buttonLabel: "Explore Lifestyle Stories",
  },
  {
    src: "/images/consult/healing2.png",
    alt: "Digestive & Gut Health — Reviva Nutrition",
    testimonialCategory: "Digestive & Gut Health" as TestimonialCategory,
    buttonLabel: "Explore Gut Health Stories",
  },
  {
    src: "/images/consult/healing_3.png",
    alt: "Women's Health — Reviva Nutrition",
    testimonialCategory: "Womens Health" as TestimonialCategory,
    buttonLabel: "Explore Women's Health Stories",
  },
  {
    src: "/images/consult/healing4.png",
    alt: "Pediatric & Adolescent Nutrition — Reviva Nutrition",
    testimonialCategory: "Pediatric & Adolescent Nutrition" as TestimonialCategory,
    buttonLabel: "Explore Pediatric Stories",
  },
  {
    src: "/images/consult/healing5.png",
    alt: "Senior Nutrition — Reviva Nutrition",
    testimonialCategory: "Geriatric Nutrition - Senior Citizen" as TestimonialCategory,
    buttonLabel: "Explore Senior Nutrition",
  },
  {
    src: "/images/consult/healing6.png",
    alt: "Mental Health & Wellbeing — Reviva Nutrition",
    testimonialCategory: "Autoimmune" as TestimonialCategory,
    buttonLabel: "Explore Autoimmune Stories",
  },
];

export default function HealingJourney() {
  return (
    <section className="py-20 sm:py-24 md:py-28" style={{ backgroundColor: "#fdf8f4" }}>
      <div className="mx-auto max-w-7xl page-pad">
        {/* ── Header — centered ── */}
        <motion.div
          className="text-center mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h2
            className="mt-4 leading-[1.06] whitespace-nowrap"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--reviva-green)",
              fontSize: "clamp(2rem, 4.8vw, 4.5rem)",
            }}
          >
            Your Personalized{" "}
            <span className="italic" style={{ color: "var(--reviva-warm-brown)" }}>
              Healing Journey
            </span>
          </h2>

          <p
            className="mt-4 leading-relaxed text-slate-500"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
              lineHeight: 1.5,
            }}
          >
            Root Cause Assessment Through{" "}
            <span className="font-semibold" style={{ color: "var(--reviva-green)" }}>
              Modern Nutrition
            </span>
            ,{" "}
            <em style={{ fontStyle: "italic", color: "var(--reviva-warm-brown)" }}>
              Ayurvedic Wisdom
            </em>{" "}
            &amp; Lifestyle Transformation
          </p>
        </motion.div>

        {/* ── 2×2 image grid ── */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {specializations.map((spec, index) => (
            <motion.div
              key={spec.alt}
              className="flex flex-col"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.08 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              {/* Image card */}
              <div
                className="group relative aspect-[3/4] overflow-hidden rounded-[24px] transition-transform duration-500 hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <Image
                  src={spec.src}
                  alt={spec.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <a
                href={`/testimonials?category=${encodeURIComponent(spec.testimonialCategory)}`}
                className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-1.5 rounded-full px-3 py-3 text-center text-xs font-semibold text-white transition-all hover:scale-[1.03] hover:shadow-md sm:px-4 sm:text-sm"
                style={{ backgroundColor: "var(--reviva-green)" }}
              >
                <span className="whitespace-nowrap">{spec.buttonLabel}</span>
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
