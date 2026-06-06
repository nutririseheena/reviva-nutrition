"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";

const allTestimonials = [
  {
    name: "Priya M.",
    condition: "Weight Management",
    quote:
      "The personalized nutrition plan helped me build healthier habits and feel more energetic throughout the day. I've tried countless diets before, but this approach actually worked because it fit my life.",
    result: "Lost 12 kg sustainably",
    duration: "6-month program",
  },
  {
    name: "Sunita R.",
    condition: "PCOS Support",
    quote:
      "The guidance was practical, sustainable, and easy to follow. I finally feel more in control of my health. My hormones are more balanced and I'm off medication I'd been on for years.",
    result: "Hormone levels normalized",
    duration: "12-month program",
  },
  {
    name: "Meera K.",
    condition: "Gut Health",
    quote:
      "The root-cause approach completely changed how I think about nutrition and wellness. I stopped treating symptoms and started understanding my body. The bloating I lived with for years is completely gone.",
    result: "Digestive issues resolved",
    duration: "6-month program",
  },
  {
    name: "Kavita S.",
    condition: "Hormonal Wellness",
    quote:
      "The support and accountability helped me stay consistent and make lasting changes. Having someone who understood both the science and the cultural context of my food made all the difference.",
    result: "Healthier daily habits",
    duration: "3-month program",
  },
  {
    name: "Ananya D.",
    condition: "Thyroid Management",
    quote:
      "I was skeptical that food could make such a difference for thyroid issues, but the results spoke for themselves. My doctor actually reduced my medication dosage after six months on the program.",
    result: "Medication dosage reduced",
    duration: "12-month program",
  },
  {
    name: "Ritika P.",
    condition: "Post-Pregnancy Weight",
    quote:
      "After two pregnancies, I had given up on feeling like myself again. The personalized approach helped me lose weight without crash dieting while maintaining my energy for my kids.",
    result: "Lost 18 kg post-pregnancy",
    duration: "12-month program",
  },
  {
    name: "Deepika V.",
    condition: "Sports Performance",
    quote:
      "As a competitive runner, I needed nutrition that would support my training without compromising my health. The sports-specific plan improved my performance and reduced my recovery time.",
    result: "PB improvement by 8%",
    duration: "6-month program",
  },
  {
    name: "Nishka A.",
    condition: "Diabetes Management",
    quote:
      "My blood sugar levels have been the most stable they've been in years. Learning why certain foods affect blood sugar changed my entire perspective on eating. I feel empowered, not restricted.",
    result: "HbA1c reduced by 1.4%",
    duration: "12-month program",
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="bg-[var(--reviva-cream)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {allTestimonials.map((t, index) => (
            <motion.article
              key={t.name}
              className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.08 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 h-1 w-full"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(to right, var(--reviva-green), var(--reviva-gold))"
                      : "linear-gradient(to right, var(--reviva-gold), var(--reviva-green))",
                }}
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="var(--reviva-gold)" color="var(--reviva-gold)" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote
                size={28}
                className="mb-3 opacity-15"
                style={{ color: "var(--reviva-green)" }}
              />

              {/* Quote text */}
              <p className="flex-1 text-sm leading-relaxed text-slate-600 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Result pill */}
              <div className="mt-5">
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    backgroundColor: "var(--reviva-gold-light)",
                    color: "var(--reviva-green)",
                  }}
                >
                  ✓ {t.result}
                </span>
              </div>

              {/* Author */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.condition}</p>
                </div>
                <span className="text-xs text-slate-400">{t.duration}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-slate-600 mb-6">Ready to write your own success story?</p>
          <Link
            href="/consult"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: "var(--reviva-green)" }}
          >
            Start Your Journey
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
