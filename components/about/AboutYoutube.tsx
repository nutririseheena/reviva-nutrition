"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import { youtubeTopics } from "@/data/about-stats";

export default function AboutYoutube() {
  return (
    <section className="bg-[var(--reviva-cream)] py-24">
      <div className="mx-auto max-w-7xl page-pad">
        <motion.div
          className="flex flex-col items-start gap-2 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
              style={{ backgroundColor: "var(--reviva-gold-light)", color: "var(--reviva-green)" }}
            >
              <FaYoutube size={16} />
              On YouTube
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl md:text-5xl"
              style={{ color: "var(--reviva-green)", fontFamily: "var(--font-heading)" }}
            >
              Learn With Me
            </h2>
            <p className="mt-3 max-w-lg text-lg text-slate-500">
              Free nutrition knowledge — practical, evidence-based, and always rooted in Indian food
              culture. New videos every week on the NutriRise Heena channel.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@NutriRiseHeena"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:scale-105 hover:shadow-md md:mt-0"
            style={{ backgroundColor: "#ff0000" }}
          >
            <FaYoutube size={17} />
            Visit Channel
          </a>
        </motion.div>

        {/* Topic grid */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {youtubeTopics.map((item, index) => (
            <motion.a
              key={item.topic}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-[16px] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: "rgba(255,0,0,0.08)" }}
              >
                <FaYoutube size={16} color="#ff0000" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-snug text-slate-800 group-hover:text-[var(--reviva-green)] transition-colors">
                  {item.topic}
                </p>
              </div>
              <ExternalLink
                size={13}
                className="mt-0.5 shrink-0 text-slate-300 group-hover:text-[var(--reviva-gold)] transition-colors"
              />
            </motion.a>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[20px] p-6 sm:p-8"
          style={{
            backgroundColor: "var(--reviva-gold-light)",
            border: "1px solid rgba(244,178,27,0.3)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="font-semibold text-slate-800">Ready to take it beyond the videos?</p>
            <p className="text-sm text-slate-600 mt-0.5">
              Book a personalized 1-on-1 consultation and build a plan designed specifically for
              you.
            </p>
          </div>
          <Link
            href="/consult"
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105"
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
