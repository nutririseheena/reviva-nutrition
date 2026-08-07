"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { siteConfig } from "@/data/site";
import { youtubeTopics } from "@/data/about-stats";

const INITIAL_COUNT = 10;

export default function AboutYoutube() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? youtubeTopics : youtubeTopics.slice(0, INITIAL_COUNT);
  const remaining = youtubeTopics.length - INITIAL_COUNT;
  return (
    <section className="bg-[var(--reviva-cream)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading row with Visit Channel button */}
          <div className="flex items-end justify-between gap-4 mb-3">
            <h2
              className="reviva-display leading-tight text-[var(--reviva-warm-brown)]"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}
            >
              Learn With Me
            </h2>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-md mb-1"
              style={{ backgroundColor: "#ff0000" }}
            >
              <FaYoutube size={15} />
              Visit Channel
            </a>
          </div>
          <p
            className="leading-relaxed text-[var(--reviva-warm-brown)] whitespace-nowrap"
            style={{ opacity: 0.65, fontSize: "1.05rem" }}
          >
            {youtubeTopics.length} free videos on nutrition, lifestyle & root-cause health —
            practical, evidence-based, rooted in Indian food culture.
          </p>
        </motion.div>

        {/* Thin divider */}
        <div
          className="h-px w-full mb-10 rounded-full"
          style={{ backgroundColor: "rgba(193,99,74,0.15)" }}
        />

        {/* Pill grid */}
        {/* Pill grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5"
          transition={{ layout: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((item) => (
              <motion.a
                key={item.url + item.topic}
                layout
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:shadow-sm"
                style={{
                  backgroundColor: "rgba(47,107,45,0.05)",
                  border: "1px solid rgba(47,107,45,0.18)",
                  color: "var(--reviva-warm-brown)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <FaYoutube size={13} className="shrink-0" style={{ color: "#e00000" }} />
                <span className="group-hover:text-[var(--reviva-green-dark)] transition-colors leading-snug">
                  {item.topic}
                </span>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more / Show less */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all hover:scale-105"
            style={{
              backgroundColor: "var(--reviva-cream-dark)",
              border: "1px solid rgba(47,107,45,0.2)",
              color: "var(--reviva-green)",
            }}
          >
            {expanded ? (
              <>
                Show less <ChevronUp size={15} />
              </>
            ) : (
              <>
                See {remaining} more videos <ChevronDown size={15} />
              </>
            )}
          </button>
        </div>

        {/* CTA strip */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-3xl px-8 py-7"
          style={{ backgroundColor: "var(--reviva-blush)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="font-semibold text-[var(--reviva-warm-brown)] text-lg">
              Ready to take it beyond the videos?
            </p>
            <p className="text-sm mt-1 text-[var(--reviva-warm-brown)]" style={{ opacity: 0.65 }}>
              Book a personalized 1-on-1 consultation and build a plan designed specifically for
              you.
            </p>
          </div>
          <Link
            href="/consult#consult-form"
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-[var(--reviva-cream)] transition-all hover:scale-105"
            style={{ backgroundColor: "var(--reviva-green)" }}
          >
            Book a Consultation
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
