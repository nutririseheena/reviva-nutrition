"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/site";

const specializations = [
  {
    src: "/images/consult/healing1.png",
    alt: "Lifestyle & Metabolic Disorders — Reviva Nutrition",
  },
  {
    src: "/images/consult/healing2.png",
    alt: "Digestive & Gut Health — Reviva Nutrition",
  },
  {
    src: "/images/consult/healing3.png",
    alt: "Women's Health — Reviva Nutrition",
  },
  {
    src: "/images/consult/healing4.png",
    alt: "Pediatric & Adolescent Nutrition — Reviva Nutrition",
  },
  {
    src: "/images/consult/healing5.png",
    alt: "Senior Nutrition — Reviva Nutrition",
  },
  {
    src: "/images/consult/healing6.png",
    alt: "Mental Health & Wellbeing — Reviva Nutrition",
  },
];

export default function HealingJourney() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.replace("+", "")}`;

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
          <p className="reviva-eyebrow">Healing Specializations</p>
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

              {/* Buttons below the card */}
              <div className="mt-4 flex gap-3">
                {/* Consult Now — WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:shadow-md"
                  style={{ backgroundColor: "var(--reviva-green)" }}
                >
                  <FaWhatsapp size={16} />
                  Consult Now
                </a>

                {/* Google Review */}
                <a
                  href={siteConfig.googleReview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border py-3 text-sm font-semibold bg-white transition-all hover:scale-[1.03] hover:shadow-md"
                  style={{ borderColor: "#dadce0", color: "#3c4043" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    />
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    />
                  </svg>
                  Google Review
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
