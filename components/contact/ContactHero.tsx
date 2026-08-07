"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 md:py-28"
      style={{
        background:
          "linear-gradient(145deg, #fdeee6 0%, var(--reviva-blush) 35%, #fdf6f0 65%, var(--reviva-blush-deep) 100%)",
      }}
    >
      {/* Subtle diagonal line texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='32' x2='32' y2='0' stroke='%23c1634a' stroke-width='0.6' stroke-opacity='0.045'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top-left soft glow */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full"
        style={{ background: "var(--reviva-terracotta)", opacity: 0.07, filter: "blur(50px)" }}
      />

      {/* Bottom-right soft glow */}
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full"
        style={{ background: "var(--reviva-rose)", opacity: 0.12, filter: "blur(40px)" }}
      />

      {/* ── Left botanical illustration ── */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0"
        width="240"
        height="300"
        viewBox="0 0 240 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Large leaf — filled + stroked */}
        <path
          d="M 18 280 C -8 195 28 65 108 18 C 148 -2 200 14 214 68 C 228 120 196 182 144 222 C 88 264 36 300 18 280 Z"
          stroke="var(--reviva-terracotta)"
          strokeWidth="1.4"
          strokeOpacity="0.28"
          fill="var(--reviva-terracotta)"
          fillOpacity="0.045"
        />
        {/* Central spine */}
        <path
          d="M 18 280 C 72 196 148 95 214 68"
          stroke="var(--reviva-terracotta)"
          strokeWidth="1"
          strokeOpacity="0.22"
          fill="none"
        />
        {/* Upper vein */}
        <path
          d="M 100 108 C 126 88 168 76 190 74"
          stroke="var(--reviva-terracotta)"
          strokeWidth="0.75"
          strokeOpacity="0.18"
          fill="none"
        />
        {/* Mid vein */}
        <path
          d="M 72 158 C 102 136 144 120 172 116"
          stroke="var(--reviva-terracotta)"
          strokeWidth="0.75"
          strokeOpacity="0.18"
          fill="none"
        />
        {/* Lower vein */}
        <path
          d="M 46 208 C 78 186 120 170 148 164"
          stroke="var(--reviva-terracotta)"
          strokeWidth="0.75"
          strokeOpacity="0.18"
          fill="none"
        />
        {/* Small circle at tip */}
        <circle cx="214" cy="68" r="6" fill="var(--reviva-terracotta)" fillOpacity="0.1" />
      </svg>

      {/* ── Right botanical illustration ── */}
      <svg
        className="pointer-events-none absolute right-0 top-0"
        width="300"
        height="320"
        viewBox="0 0 300 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Large background blob */}
        <ellipse cx="252" cy="52" rx="92" ry="82" fill="var(--reviva-rose)" fillOpacity="0.13" />

        {/* Curved stem */}
        <path
          d="M 290 -10 C 255 35 225 95 232 155 C 240 215 268 240 258 295"
          stroke="var(--reviva-terracotta)"
          strokeWidth="1.4"
          strokeOpacity="0.3"
          fill="none"
        />

        {/* Leaf 1 — top, pointing right */}
        <path
          d="M 268 24 C 290 4 316 -4 322 12 C 328 28 314 50 292 58 C 270 66 256 44 268 24 Z"
          stroke="var(--reviva-terracotta)"
          strokeWidth="1"
          strokeOpacity="0.28"
          fill="var(--reviva-terracotta)"
          fillOpacity="0.05"
        />
        <path
          d="M 268 24 C 286 34 306 36 322 12"
          stroke="var(--reviva-terracotta)"
          strokeWidth="0.6"
          strokeOpacity="0.18"
          fill="none"
        />

        {/* Leaf 2 — left of stem, mid */}
        <path
          d="M 230 84 C 208 62 184 55 180 72 C 176 89 194 112 218 118 C 242 124 248 104 230 84 Z"
          stroke="var(--reviva-terracotta)"
          strokeWidth="1"
          strokeOpacity="0.28"
          fill="var(--reviva-terracotta)"
          fillOpacity="0.05"
        />
        <path
          d="M 230 84 C 212 90 192 98 180 72"
          stroke="var(--reviva-terracotta)"
          strokeWidth="0.6"
          strokeOpacity="0.18"
          fill="none"
        />

        {/* Leaf 3 — right of stem, lower */}
        <path
          d="M 248 142 C 272 120 296 116 300 134 C 304 152 288 174 264 178 C 240 182 234 162 248 142 Z"
          stroke="var(--reviva-terracotta)"
          strokeWidth="1"
          strokeOpacity="0.28"
          fill="var(--reviva-terracotta)"
          fillOpacity="0.05"
        />
        <path
          d="M 248 142 C 268 148 286 148 300 134"
          stroke="var(--reviva-terracotta)"
          strokeWidth="0.6"
          strokeOpacity="0.18"
          fill="none"
        />

        {/* Delicate arc accent near bottom */}
        <path
          d="M 200 220 C 222 200 248 196 268 208"
          stroke="var(--reviva-rose)"
          strokeWidth="1"
          strokeOpacity="0.28"
          fill="none"
        />
      </svg>

      {/* ── Heading ── */}
      <div className="relative mx-auto max-w-7xl page-pad text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(3.2rem, 9vw, 7rem)",
            fontWeight: 700,
            lineHeight: 1.04,
            color: "var(--reviva-dark-wine)",
          }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="mt-4 text-sm sm:text-base leading-relaxed whitespace-nowrap"
          style={{ color: "var(--reviva-warm-brown)", opacity: 0.75 }}
        >
          Have a question or want to connect? We&apos;d love to hear from you.
        </motion.p>
      </div>
    </section>
  );
}
