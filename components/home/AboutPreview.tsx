"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section id="about-preview" className="bg-[var(--reviva-cream)] py-22">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-start gap-18 lg:grid-cols-2">
          {/* ── Left: Quote + Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Quote above image */}
            <div className="mb-8">
              <p className="reviva-quote" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
                It began with a myth
              </p>
              <p className="mt-3 text-base italic leading-relaxed text-slate-500">
                —What many accepted as a health myth, I questioned{" "}
                <span className="whitespace-nowrap">and discovered a deeper cause.</span>
              </p>
              <div
                className="mt-8 h-0.5 w-12 rounded-full"
                style={{ backgroundColor: "var(--reviva-terracotta)" }}
              />
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-[32px] shadow-2xl aspect-[1/1.1]">
              <Image
                src="/images/about/about-preview.png"
                alt="Heena — Reviva Nutrition"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* ── Right: About text + Stats box ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:pt-4"
          >
            <div className="mt-3">
              <p className="reviva-eyebrow">About</p>
              <h2 className="reviva-display mt-1" style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}>
                Heena 🌻
              </h2>
            </div>

            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p className="text-lg font-semibold" style={{ color: "var(--reviva-green)" }}>
                For over two decades, my own body has been my greatest teacher.
              </p>
              <p className="text-[17px]">
                Instead of relying solely on medication, I chose to trust the healing power of food
                and lifestyle. Through years of observation, learning, and personal experience, I
                discovered that when we truly listen to our body, it has an incredible ability to
                restore balance and heal.
              </p>
              <p className="text-[17px]">This belief became the foundation of Reviva Nutrition.</p>
              <p className="text-[17px]">
                Reviva Nutrition was born from a simple yet powerful vision—to help people reconnect
                with their body&apos;s natural wisdom, understand the root causes of their health
                challenges, and rediscover lasting wellness through nourishment and lifestyle
                transformation.
              </p>
              <blockquote
                className="mt-6 border-l-4 pl-4 reviva-quote text-xl"
                style={{ borderColor: "var(--reviva-terracotta)" }}
              >
                Your body is constantly speaking to you. Together, let&apos;s learn how to listen.
              </blockquote>
            </div>

            {/* Credentials / Info Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="rounded-2xl border p-5"
                style={{
                  background: "#f6efe6",
                  borderColor: "rgba(0,0,0,0.08)",
                }}
              >
                <p className="text-xs uppercase tracking-wider text-slate-500">Degree</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  M.Sc. Clinical Nutrition & Dietetics
                  <br />
                  Diploma in Ayurvedic Nutrition
                </p>
              </div>

              <div
                className="rounded-2xl border p-5"
                style={{
                  background: "#f6efe6",
                  borderColor: "rgba(0,0,0,0.08)",
                }}
              >
                <p className="text-xs uppercase tracking-wider text-slate-500">Specialization</p>
                <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm font-semibold text-slate-800">
                  <span>Diabetes</span>
                  <span>• PCOS</span>
                  <span>• Thyroid</span>
                  <span>• IBS/IBD</span>
                  <span>• Weight Management</span>
                </p>
              </div>

              <div
                className="rounded-2xl border p-5"
                style={{
                  background: "#f6efe6",
                  borderColor: "rgba(0,0,0,0.08)",
                }}
              >
                <p className="text-xs uppercase tracking-wider text-slate-500">Experience</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  5+ Years in Clinical, Ayurvedic & Modern Nutrition
                </p>
              </div>

              <div
                className="rounded-2xl border p-5"
                style={{
                  background: "#f6efe6",
                  borderColor: "rgba(0,0,0,0.08)",
                }}
              >
                <p className="text-xs uppercase tracking-wider text-slate-500">Clients</p>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  3000+ Health Transformation Journeys
                </p>
              </div>
            </div>

            {/* Specialty Pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["Prenatal Nutrition", "Autoimmune- Eczema, Psoriasis", "Hair & Skin Health"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border px-4 py-2 text-sm font-medium"
                    style={{
                      backgroundColor: "#eef5ee",
                      borderColor: "rgba(47,107,45,0.25)",
                      color: "var(--reviva-green)",
                    }}
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-sm transition-all hover:scale-105 hover:shadow-md"
              style={{ backgroundColor: "var(--reviva-green)" }}
            >
              Learn More About Heena
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
