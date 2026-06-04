"use client";

import Link from "next/link";
import { Quote, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

const accentColors = [
  "var(--reviva-green)",
  "var(--reviva-gold-dark)",
  "var(--reviva-green)",
  "var(--reviva-gold-dark)",
];

export default function TestimonialsPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <span
              className="inline-block rounded-full px-4 py-2 text-sm font-medium"
              style={{
                backgroundColor: "var(--reviva-gold-light)",
                color: "var(--reviva-green)",
              }}
            >
              Success Stories
            </span>

            <h2
              className="mt-4 text-4xl md:text-5xl lg:text-6xl"
              style={{
                color: "var(--reviva-green)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Real People,
              <br />
              Meaningful Change
            </h2>
          </div>

          <Link
            href="/testimonials"
            className="mt-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:bg-[#eef5eb] md:mt-0"
            style={{
              borderColor: "var(--reviva-green)",
              color: "var(--reviva-green)",
            }}
          >
            View All Stories
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <p className="mt-4 max-w-2xl text-lg text-slate-500">
          Every wellness journey is unique. Here are a few examples of how personalized nutrition
          and sustainable habits create lasting transformation.
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              className="group relative overflow-hidden rounded-[28px] bg-[var(--reviva-cream)] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 h-full w-1 rounded-l-[28px]"
                style={{ backgroundColor: accentColors[index] }}
              />

              {/* Quote icon */}
              <div className="absolute right-8 top-8 opacity-10">
                <Quote size={40} color="var(--reviva-green)" />
              </div>

              {/* Avatar + Name */}
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-bold"
                  style={{
                    backgroundColor: "#eef5eb",
                    color: "var(--reviva-green)",
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold" style={{ color: "var(--reviva-green)" }}>
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-slate-500">{testimonial.condition}</p>
                </div>

                {/* Stars — pushed to right */}
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#f4b21b" color="#f4b21b" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="mt-6 text-base italic leading-relaxed text-slate-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Result badge */}
              <div className="mt-6">
                <span
                  className="inline-block rounded-full px-4 py-1.5 text-sm font-medium"
                  style={{
                    backgroundColor: "#eef5eb",
                    color: "var(--reviva-green)",
                  }}
                >
                  ✓ {testimonial.result}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
