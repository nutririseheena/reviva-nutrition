"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { siteConfig } from "@/data/site";
import { youtubeTopics } from "@/data/about-stats";

const sectionOrder = [
  "Digestive & Gut Health",
  "Weight, Metabolic & Blood Health",
  "Women's & Family Health",
  "Nutrition & Food Choices",
  "Cooking & Recipes",
  "Movement, Skin & Self-care",
  "Lifestyle & Wellness",
  "About Reviva Nutrition",
] as const;

function getSection(topic: string) {
  const title = topic.toLowerCase();

  if (
    /recipe|aam panna|sweet potato|mushroom|jowar|snack|sharbat|amla|petha|carrot milk|cold & cough/.test(
      title
    )
  ) {
    return "Cooking & Recipes";
  }
  if (
    /breath|gallbladder|constipation|gastritis|flatulence|piles|fissure|liver|uric acid/.test(title)
  ) {
    return "Digestive & Gut Health";
  }
  if (
    /weight|diabetes|insulin|blood pressure|\bbp\b|triglyceride|vitamin d|collagen|nutrition deficiency|pigmentation/.test(
      title
    )
  ) {
    return "Weight, Metabolic & Blood Health";
  }
  if (/menopause|hairfall|hair oil|post pregnancy|child|kids|women|men's|men’s/.test(title)) {
    return "Women's & Family Health";
  }
  if (
    /cooking|food|oil|ghee|vanaspati|flax|alsi|aliv|protein|tea|rice|dietician|nutritional value/.test(
      title
    )
  ) {
    return "Nutrition & Food Choices";
  }
  if (/yoga|mudra|skin|blocked nose|exercise/.test(title)) {
    return "Movement, Skin & Self-care";
  }
  if (
    /stress|organ damage|water retention|habits|remedy|share market|health is|lifestyle/.test(title)
  ) {
    return "Lifestyle & Wellness";
  }
  return "About Reviva Nutrition";
}

export default function AboutYoutube() {
  const groupedTopics = sectionOrder
    .map((section) => ({
      section,
      topics: youtubeTopics.filter((item) => getSection(item.topic) === section),
    }))
    .filter((group) => group.topics.length > 0);

  return (
    <section className="bg-[var(--reviva-cream)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl page-pad">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                className="reviva-display leading-tight text-[var(--reviva-warm-brown)]"
                style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}
              >
                Learn With Me
              </h2>
              <p
                className="mt-3 leading-relaxed text-[var(--reviva-warm-brown)] whitespace-nowrap"
                style={{ opacity: 0.65, fontSize: "1.05rem" }}
              >
                {youtubeTopics.length} free videos on nutrition, lifestyle & root-cause health —
                practical, evidence-based, rooted in Indian food culture.
              </p>
            </div>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#ff0000] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-md sm:self-auto"
            >
              <FaYoutube size={15} />
              Visit Channel
            </a>
          </div>
        </motion.div>

        <div className="space-y-12 border-t border-[rgba(193,99,74,0.15)] pt-10 sm:space-y-16">
          {groupedTopics.map(({ section, topics }, sectionIndex) => (
            <motion.section
              key={section}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.08 }}
              transition={{ duration: 0.55, delay: sectionIndex * 0.04 }}
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-8 shrink-0 bg-[var(--reviva-terracotta)]" />
                <h3
                  className="text-2xl font-medium sm:text-3xl"
                  style={{ color: "var(--reviva-green)", fontFamily: "var(--font-heading)" }}
                >
                  {section}
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {topics.map((item) => (
                  <a
                    key={`${item.url}-${item.topic}`}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-16 items-center gap-3 rounded-2xl border border-[rgba(47,107,45,0.16)] bg-white/60 px-4 py-3.5 text-sm font-medium text-[var(--reviva-warm-brown)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--reviva-terracotta)] hover:bg-white hover:shadow-md"
                  >
                    <FaYoutube
                      size={18}
                      className="shrink-0 text-[#e00000] transition-transform group-hover:scale-110"
                    />
                    <span className="leading-snug">{item.topic}</span>
                  </a>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[var(--reviva-blush)] px-8 py-7 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-lg font-semibold text-[var(--reviva-warm-brown)]">
              Ready to take it beyond the videos?
            </p>
            <p className="mt-1 text-sm text-[var(--reviva-warm-brown)] opacity-65">
              Book a personalized 1-on-1 consultation and build a plan designed specifically for
              you.
            </p>
          </div>
          <Link
            href="/consult#consult-form"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--reviva-green)] px-7 py-3.5 text-sm font-semibold text-[var(--reviva-cream)] transition-all hover:scale-105"
          >
            Book a Consultation
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
