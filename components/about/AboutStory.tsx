"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Award, BookOpen } from "lucide-react";

const credentials = [
  { icon: BookOpen, text: "M.Sc. Food Science & Nutrition" },
  { icon: Award, text: "Certified Clinical Dietician" },
  { icon: ShieldCheck, text: "Member, Indian Dietetic Association" },
  { icon: Heart, text: "10+ Years Clinical Experience" },
];

const specialties = [
  "Weight Management",
  "PCOS & Hormonal Balance",
  "Gut Health",
  "Thyroid Care",
  "Diabetes Management",
  "Sports Nutrition",
  "Pregnancy Nutrition",
  "Child & Adolescent Nutrition",
];

export default function AboutStory() {
  return (
    <section id="story" className="bg-[var(--reviva-cream)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/images/about/about-preview.png"
                alt="Heena — Reviva Nutrition"
                width={800}
                height={900}
                className="h-full w-full object-cover"
              />
              {/* Floating credential card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm border border-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Credentials
                </p>
                <div className="grid grid-cols-2 gap-y-2 gap-x-3">
                  {credentials.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-1.5">
                      <Icon size={13} color="var(--reviva-green)" className="shrink-0" />
                      <span className="text-xs text-slate-700 leading-tight">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative blob */}
            <div
              className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(244,178,27,0.12)" }}
            />
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span
              className="inline-block rounded-full px-4 py-2 text-sm font-medium"
              style={{
                backgroundColor: "var(--reviva-gold-light)",
                color: "var(--reviva-green)",
              }}
            >
              My Story
            </span>

            <h2
              className="mt-4 text-4xl md:text-5xl leading-tight"
              style={{ color: "var(--reviva-green)", fontFamily: "var(--font-heading)" }}
            >
              Nutrition That Heals
              <br />
              From the Inside Out
            </h2>

            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                My journey into nutrition started long before I made it my career. Growing up in a
                household where food was medicine, I saw firsthand how the right eating habits could
                transform health — and how the wrong advice could do lasting damage.
              </p>
              <p>
                After completing my master&apos;s in Food Science and Nutrition and training as a
                clinical dietician, I spent years in hospital settings treating complex conditions.
                What I found was that most patients weren&apos;t lacking willpower — they were
                missing a plan that actually fit their life.
              </p>
              <p>
                That insight became the foundation of Reviva Nutrition: personalized, sustainable,
                culturally aware nutrition that addresses root causes rather than chasing symptoms.
                No crash diets. No impossible restrictions. Just science that works in the real
                world.
              </p>
            </div>

            {/* Specialties */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Areas of Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full px-3.5 py-1.5 text-sm font-medium"
                    style={{
                      backgroundColor: "var(--reviva-gold-light)",
                      color: "var(--reviva-green)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
