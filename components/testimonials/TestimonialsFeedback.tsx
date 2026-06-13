"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, MessageSquarePlus } from "lucide-react";

export default function TestimonialsFeedback() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="overflow-hidden rounded-[32px] p-8 md:p-12"
          style={{
            background: "linear-gradient(135deg, var(--reviva-green) 0%, #1e4a1c 100%)",
          }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full opacity-10 blur-3xl bg-[var(--reviva-gold)]" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full opacity-10 blur-3xl bg-white" />

          <div className="relative flex flex-col items-center text-center gap-6">
            {/* Icon */}
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ backgroundColor: "rgba(244,178,27,0.2)" }}
            >
              <MessageSquarePlus size={30} color="var(--reviva-gold)" />
            </div>

            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="var(--reviva-gold)" color="var(--reviva-gold)" />
              ))}
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl leading-tight text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Experienced Results?
              <br />
              <span style={{ color: "var(--reviva-gold)" }}>Share Your Story.</span>
            </h2>

            <p className="max-w-xl text-base md:text-lg leading-relaxed text-white/75">
              Your feedback helps others take the first step toward better health. It only takes two
              minutes — and it means the world to us.
            </p>

            <a
              href="https://forms.gle/Cjty5KrmpVbupkkL6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "var(--reviva-gold)", color: "#1e1e1e" }}
            >
              Leave Your Feedback
              <ExternalLink size={17} />
            </a>

            <p className="text-sm text-white/45">
              Takes less than 2 minutes &nbsp;·&nbsp; Google Form
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
