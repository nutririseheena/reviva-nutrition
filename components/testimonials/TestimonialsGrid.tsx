"use client";

import { startTransition, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import {
  allTestimonials,
  testimonialCategories,
  type TestimonialCategory,
} from "@/data/testimonials";
import { accentColors, cardGradients } from "@/data/home";

function getInitialCategory(): TestimonialCategory | "All" {
  if (typeof window === "undefined") return "All";

  const category = new URLSearchParams(window.location.search).get("category");
  return category && testimonialCategories.includes(category as TestimonialCategory)
    ? (category as TestimonialCategory)
    : "All";
}

export default function TestimonialsGrid() {
  const [activeCategory, setActiveCategory] = useState<TestimonialCategory | "All">(
    getInitialCategory
  );

  const visibleTestimonials =
    activeCategory === "All"
      ? allTestimonials
      : allTestimonials.filter((testimonial) => testimonial.category === activeCategory);

  return (
    <section id="testimonials-grid" className="bg-[var(--reviva-cream)] pb-20 sm:pb-24 md:pb-28">
      <motion.div
        className="mb-10 w-full px-5 py-12 text-center sm:px-8 md:py-16 lg:px-20"
        style={{
          background:
            "linear-gradient(to right, #fdeee6 0%, var(--reviva-blush) 38%, #fdf6f0 68%, var(--reviva-blush-deep) 100%)",
        }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-4xl">
          <h1
            className="mx-auto max-w-4xl text-4xl leading-[1.1] sm:text-5xl md:text-6xl"
            style={{
              color: "var(--reviva-green)",
              fontFamily: "var(--font-heading)",
            }}
          >
            From Health Struggles
            <br />
            <span className="italic" style={{ color: "var(--reviva-warm-brown)" }}>
              to Lasting Change
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Hear how people like you found clarity, confidence, and lasting change by understanding
            their health from within.
          </p>
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl page-pad">
        <div
          className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3"
          aria-label="Filter success stories"
        >
          {(["All", ...testimonialCategories] as const).map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => startTransition(() => setActiveCategory(category))}
                className="cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors sm:px-5"
                style={{
                  backgroundColor: isActive ? "var(--reviva-green)" : "rgba(255,255,255,0.8)",
                  borderColor: isActive ? "var(--reviva-green)" : "var(--reviva-blush-deep)",
                  color: isActive ? "#fff" : "var(--reviva-warm-brown)",
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {visibleTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${testimonial.category}`}
              className="group relative overflow-hidden rounded-[28px] border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: cardGradients[index % cardGradients.length] }}
            >
              <div
                className="absolute left-0 top-0 h-full w-1 rounded-l-[28px]"
                style={{ backgroundColor: accentColors[index % accentColors.length] }}
              />

              <div className="absolute right-8 top-8 opacity-10">
                <Quote size={48} color="var(--reviva-green)" />
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-bold shadow-sm"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.85)",
                    color: "var(--reviva-green)",
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">{testimonial.name}</h3>
                  <p className="mt-0.5 text-sm text-slate-500">{testimonial.condition}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} size={15} fill="#f4b21b" color="#f4b21b" />
                  ))}
                </div>
              </div>

              <p className="mt-5 text-[15px] sm:text-base italic leading-relaxed text-slate-700">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {testimonial.result && (
                <div className="mt-5">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm"
                    style={{ backgroundColor: "rgba(255,255,255,0.8)", color: "#374151" }}
                  >
                    {testimonial.result}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
