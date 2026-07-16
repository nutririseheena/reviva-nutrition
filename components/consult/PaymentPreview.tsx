"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CreditCard, Lock, Sprout, ClipboardList } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/site";

/* ─── Decorative lotus SVG ─── */
function Lotus() {
  return (
    <svg
      width="52"
      height="30"
      viewBox="0 0 52 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left outer */}
      <path
        d="M26 22
           C20 21 14 18 8 13
           C11 8 18 8 23 14
           C24.5 16.5 25.5 19.5 26 22"
        stroke="var(--reviva-gold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left inner */}
      <path
        d="M26 22
           C23 19 20.5 14.5 21 9
           C24 10 25.5 15 26 22"
        stroke="var(--reviva-gold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center */}
      <path
        d="M26 22
           C23.8 18 23.8 8 26 3
           C28.2 8 28.2 18 26 22"
        stroke="var(--reviva-gold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right inner */}
      <path
        d="M26 22
           C26.5 15 28 10 31 9
           C31.5 14.5 29 19 26 22"
        stroke="var(--reviva-gold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right outer */}
      <path
        d="M26 22
           C26.5 19.5 27.5 16.5 29 14
           C34 8 41 8 44 13
           C38 18 32 21 26 22"
        stroke="var(--reviva-gold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Gold divider with lotus ─── */
function GoldDivider({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center gap-3 my-2${compact ? "" : " w-full"}`}>
      <div className={compact ? "w-10 h-px" : "flex-1 h-px"} style={{ backgroundColor: "var(--reviva-gold)", opacity: 0.5 }} />
      <Lotus />
      <div className={compact ? "w-10 h-px" : "flex-1 h-px"} style={{ backgroundColor: "var(--reviva-gold)", opacity: 0.5 }} />
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Choose Program",
    desc: "3 Months / 6 Months / 12 Months",
    icon: <ClipboardList size={34} strokeWidth={1.5} />,
  },
  {
    number: "02",
    title: "Scan & Pay",
    desc: "Pay using any UPI app",
    icon: (
  <svg
    width="41"
    height="41"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Phone */}
    <rect
      x="6"
      y="2"
      width="12"
      height="20"
      rx="2.8"
      stroke="currentColor"
      strokeWidth="1.8"
    />

    {/* Speaker */}
    <rect
      x="10"
      y="4"
      width="4"
      height="0.9"
      rx="0.45"
      fill="currentColor"
    />

    {/* Rupee */}
    <text
      x="12"
      y="13"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="8"
      fontWeight="700"
      fontFamily="Inter, Arial, sans-serif"
      fill="currentColor"
    >
      ₹
    </text>

    {/* Home dot */}
    <circle
      cx="12"
      cy="19.2"
      r="0.7"
      fill="currentColor"
    />
  </svg>
),
  },
  {
    number: "03",
    title: "Confirm on WhatsApp",
    desc: "Share payment screenshot to confirm your slot",
    icon: <FaWhatsapp size={36} />,
  },
];

export default function PaymentPreview() {
  return (
    <section className="py-10 sm:py-14" style={{ backgroundColor: "var(--reviva-cream)" }}>
      <div className="mx-auto max-w-6xl page-pad">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.65, ease: "easeOut" as const }}
        >
          {/* ── LEFT: Journey Steps ── */}
          <div
            className="flex flex-col rounded-[28px] px-8 py-7"
            style={{ backgroundColor: "#f5f2eb" }}
          >
            {/* Heading */}
            <h2
              className="text-center leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                color: "#3a4a28",
                fontWeight: 800,
              }}
            >
              Your Journey<br />Starts Here
            </h2>

            <GoldDivider />

            {/* Steps */}
            <div className="mt-2 flex flex-col gap-0">
              {steps.map((step, i) => (
                <div key={step.number}>
                  {/* Step row — icon + text, perfectly centered */}
                  <div className="flex items-center gap-5">
                    <div
                      className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "#e8e4d8", color: "#3a4a28" }}
                    >
                      {step.icon}
                    </div>

                    {/* Text */}
                    <div className="flex items-start gap-2.5">
                      <span
                        className="inline-flex shrink-0 items-center justify-center rounded-xl w-10 h-10 text-sm font-bold"
                        style={{ backgroundColor: "#e8e4d8", color: "#6a7a58" }}
                      >
                        {step.number}
                      </span>
                      <div>
                        <p
                          className="font-bold"
                          style={{ fontSize: "1.05rem", color: "#2a3a1a" }}
                        >
                          {step.title}
                        </p>
                        {step.desc && (
                          <p className="mt-0.5 text-sm" style={{ color: "#7a7060" }}>
                            {step.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Connector — outside the row so centering is unaffected */}
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        marginLeft: "35px",
                        width: "2px",
                        height: "36px",
                        borderLeft: "2px dashed #b5a98a",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div
              className="mt-6 rounded-2xl px-5 py-4 text-center"
              style={{ backgroundColor: "#e8e4d8" }}
            >
              <p className="text-sm leading-snug" style={{ color: "#5a4e38" }}>
                We&apos;ll connect with you on WhatsApp once we receive your payment.
              </p>
            </div>
          </div>

          {/* ── RIGHT: Payment Card ── */}
          <div
            className="flex flex-col rounded-[28px] overflow-hidden bg-white"
            style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.08)" }}
          >
            {/* Card header */}
            <div className="px-7 pt-5 pb-4">
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: "#f0ede6" }}
                >
                  <CreditCard size={22} strokeWidth={1.5} color="#5a5040" />
                </div>
                <div>
                  <p className="font-bold text-base leading-tight" style={{ color: "#1a1a1a" }}>
                    Consultation Payment
                  </p>
                  <p className="text-sm" style={{ color: "#8a8070" }}>
                    Reviva Nutrition
                  </p>
                </div>
              </div>

              <div className="mt-4 h-px" style={{ backgroundColor: "#ebebeb" }} />

              {/* UPI Number */}
              <p
                className="mt-3 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#9a9080" }}
              >
                Pay to UPI Number
              </p>
              <p
                className="mt-1 font-bold leading-none tracking-tight"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", color: "#2a4a1a" }}
              >
                {siteConfig.payment.upi}
              </p>

              {/* Payment app pills */}
              <div className="mt-4 flex flex-wrap gap-2">

                {/* G Pay */}
                <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5" style={{ borderColor: "#e0ddd5" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: "#1a1a1a" }}>Pay</span>
                </span>

                {/* Paytm */}
                <span className="inline-flex items-center gap-0 rounded-full border px-2.5 py-1.0" style={{ borderColor: "#e0ddd5" }}>
                  <span className="text-base font-extrabold leading-none" style={{ color: "#012970" }}>pay</span>
                  <span className="text-base font-extrabold leading-none" style={{ color: "#00BAF2" }}>tm</span>
                </span>

                {/* PhonePe */}
                <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5" style={{ borderColor: "#e0ddd5" }}>
                  <svg width="20" height="20" viewBox="0 0 18 18">
                    <circle cx="9" cy="9" r="9" fill="#5f259f"/>
                    <text x="9" y="9" textAnchor="middle" dominantBaseline="central" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="11" fill="white">पे</text>
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: "#5f259f" }}>PhonePe</span>
                </span>

                {/* UPI */}
                <span className="inline-flex items-center rounded-full border px-3 py-1.5" style={{ borderColor: "#e0ddd5" }}>
                  <svg width="50" height="18" viewBox="0 0 50 18">
                    <text x="0" y="14" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="15" fill="#6b6b6b" fontStyle="italic">UPI</text>
                    <polygon points="35,1 44,9 35,17" fill="#f47920"/>
                    <polygon points="40,1 49,9 40,17" fill="#1a7a3a"/>
                  </svg>
                </span>

              </div>
            </div>

            {/* QR section */}
            <div
              className="flex-1 flex flex-col items-center px-7 py-4"
              style={{ backgroundColor: "#f5f2eb" }}
            >
              <p
                className="font-semibold"
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", color: "#2a3a1a", fontWeight: 800 }}
              >
                Scan &amp; Pay
              </p>
              <GoldDivider compact />

              {/* QR code — replace /images/consult/qr-code.png with your actual QR image */}
              <div className="mt-1 rounded-2xl bg-white p-3 shadow-sm">
                <Image
                  src="/images/consult/qr_code.png"
                  alt="UPI QR Code — Reviva Nutrition"
                  width={180}
                  height={180}
                  className="rounded-xl"
                />
              </div>

              <p className="mt-3 text-sm font-medium" style={{ color: "#4a4030" }}>
                UPI ID:{" "}
                <span className="font-semibold" style={{ color: "#2a4a1a" }}>
                  {siteConfig.payment.upi_id}
                </span>
              </p>
            </div>

            {/* Secure footer */}
            <div
              className="flex items-center justify-center gap-2 py-3.5 text-sm font-medium"
              style={{ backgroundColor: "#dedad0", color: "#5a5040" }}
            >
              <Lock size={14} />
              Secure &nbsp;•&nbsp; Instant &nbsp;•&nbsp; Hassle-free
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
