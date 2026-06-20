"use client";

import Link from "next/link";
import { Quote, Star, ArrowRight, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { homePillars, cardGradients, accentColors } from "@/data/home";

export default function TestimonialsPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* ── Section header ── */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span
            className="inline-block rounded-full px-4 py-2 text-[38px] font-medium"
            style={{
              backgroundColor: "var(--reviva-gold-light)",
              color: "var(--reviva-green)",
            }}
          >
            Foundation of Reviva
          </span>

          <h2
            className="mt-8 text-3xl md:text-4xl lg:text-5xl"
            style={{
              color: "var(--reviva-green)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Three Pillars That Turn Hope Into Healing
          </h2>
          {/* <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            These principles guide every consultation, every plan, and every transformation at
            Reviva Nutrition.
          </p> */}
        </motion.div>

        {/* ── Pillars grid ── */}
        <div className="mt-12 grid gap-10 lg:gap-12 md:grid-cols-3">
          {homePillars.map((pillar, index) => {
            const Icon = pillar.topIcon;

            return (
              <motion.div
                key={pillar.title}
                className="overflow-hidden rounded-[32px] border border-[#eadfcf] bg-[#fdf8ef] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >
                <div className="relative overflow-hidden rounded-[32px]">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="h-[500px] w-full object-cover"
                  />

                  {/* Top Content */}
                  <div className="absolute inset-x-0 top-0 h-[210px] px-8 pt-8 text-center">
                    <div
                      className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2"
                      style={{
                        borderColor: "var(--reviva-green)",
                        color: "var(--reviva-green)",
                        backgroundColor: "rgba(255,255,255,0.75)",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      <Icon size={24} />
                    </div>

                    <h3
                      className="mt-4 text-2xl tracking-[0.08em]"
                      style={{
                        color: "var(--reviva-green)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {pillar.title}
                    </h3>

                    <p className="mx-auto mt-4 max-w-[260px] text-[15px] leading-7 text-slate-700">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Badge */}
                  {/* <div className="absolute inset-x-0 bottom-6 px-6">
                    <div className="mx-auto flex max-w-[300px] items-center justify-center gap-3 rounded-full bg-white/95 px-4 py-2.5 shadow-md backdrop-blur-md">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: "var(--reviva-gold-light)",
                        }}
                      >
                        <Leaf size={16} color="var(--reviva-green)" />
                      </div>

                      <span className="text-left text-[12px] font-medium text-slate-700">
                        {pillar.bottomText}
                      </span>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Testimonials header ── */}
        <motion.div
          className="mt-24 flex flex-col items-center text-center md:flex-row md:items-end md:justify-between md:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>

            <h2
              className="mt-4 text-4xl md:text-5xl lg:text-6xl"
              style={{
                color: "var(--reviva-green)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Real People, Meaningful Change
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
            View All Success Stories
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* ── Testimonial Cards ── */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              className="group relative overflow-hidden rounded-[28px] p-8 shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: cardGradients[index % cardGradients.length] }}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 h-full w-1 rounded-l-[28px]"
                style={{ backgroundColor: accentColors[index % accentColors.length] }}
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

                {/* Stars */}
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
                  📍 {testimonial.result}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
