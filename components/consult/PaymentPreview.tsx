"use client";

import Link from "next/link";
import { CreditCard, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

const steps = [
  {
    number: "01",
    title: "Choose Your Program",
    desc: "Select the 3, 6, or 9-month plan that fits your wellness goals from our consult page.",
  },
  {
    number: "02",
    title: "Send the Fee via UPI",
    desc: "Pay via GPay, Paytm, PhonePe, or any UPI app to the number below. Quick and hassle-free.",
  },
  {
    number: "03",
    title: "Confirm on WhatsApp",
    desc: "Share your payment screenshot on WhatsApp with your name and preferred session timings to lock your slot.",
  },
];

const upiApps = ["GPay", "Paytm", "PhonePe", "UPI"];

export default function PaymentPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span
            className="inline-block rounded-full px-4 py-2 text-sm font-medium"
            style={{
              backgroundColor: "var(--reviva-gold-light)",
              color: "var(--reviva-green)",
            }}
          >
            Simple, Secure Booking
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl lg:text-6xl"
            style={{
              color: "var(--reviva-green)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Book Your Consultation
            <br />
            in 3 Simple Steps
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-500">
            No complex checkouts. Just a quick UPI transfer and a WhatsApp message — and your
            wellness journey begins.
          </p>
        </motion.div>

        {/* Steps + Payment Card */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex gap-5"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white"
                  style={{ backgroundColor: "var(--reviva-green)" }}
                >
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: "var(--reviva-green)" }}>
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{step.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/consult"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: "var(--reviva-green)" }}
              >
                View Programs &amp; Pricing
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>

          {/* Payment Card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div
              className="relative overflow-hidden rounded-[32px] p-8 shadow-xl"
              style={{
                background:
                  "linear-gradient(145deg, var(--reviva-green-dark) 0%, var(--reviva-green) 100%)",
              }}
            >
              {/* Decorative ring */}
              <div
                className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full opacity-10"
                style={{ backgroundColor: "var(--reviva-gold)" }}
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-12 h-52 w-52 rounded-full opacity-10"
                style={{ backgroundColor: "var(--reviva-gold)" }}
              />

              {/* Card header */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: "rgba(244,178,27,0.2)" }}
                >
                  <CreditCard size={20} color="var(--reviva-gold)" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Consultation Payment</p>
                  <p className="text-xs text-white/60">Reviva Nutrition · Heena</p>
                </div>
              </div>

              {/* UPI number */}
              <div className="mt-8">
                <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                  Send to UPI number
                </p>
                <p className="mt-2 text-5xl font-bold tracking-wide text-white">
                  {siteConfig.payment.upi}
                </p>
                <p className="mt-1 text-sm text-white/60">Any UPI app · Instant transfer</p>
              </div>

              {/* Accepted apps */}
              <div className="mt-7 flex flex-wrap gap-2">
                {upiApps.map((app) => (
                  <span
                    key={app}
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    {app}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="mt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.12)" }} />

              {/* WhatsApp confirmation note */}
              <div className="mt-5 flex items-start gap-3">
                <MessageCircle size={17} className="mt-0.5 shrink-0 text-white/60" />
                <p className="text-sm leading-relaxed text-white/70">
                  After payment, send the screenshot on{" "}
                  <span className="font-medium text-white">WhatsApp</span> with your name and
                  preferred session time to confirm your slot.
                </p>
              </div>

              {/* Non-refundable note */}
              <div className="mt-4 flex items-center gap-2">
                <CheckCircle2 size={14} className="shrink-0 text-white/50" />
                <p className="text-xs text-white/50">
                  Consultation fees are non-refundable once the session is confirmed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
