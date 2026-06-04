"use client";

import { useState } from "react";
import { CheckCircle, MessageCircle, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ConsultationCTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [concern, setConcern] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!name.trim() || !phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          concern,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Failed to submit");
      }

      setSuccess(
        "Thank you! Your consultation request has been received. We'll contact you shortly."
      );

      setName("");
      setPhone("");
      setEmail("");
      setConcern("");
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="consult-cta" className="bg-[var(--reviva-cream)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] p-5 sm:p-8 lg:p-12"
          style={{ backgroundColor: "var(--reviva-green)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Decorative background circles */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full opacity-10"
            style={{ backgroundColor: "var(--reviva-gold)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full opacity-10"
            style={{ backgroundColor: "var(--reviva-gold)" }}
          />

          <div className="relative grid gap-10 lg:grid-cols-2">
            {/* Left — Info */}
            <div className="text-white">
              <span
                className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: "rgba(244,178,27,0.2)",
                  color: "var(--reviva-gold)",
                }}
              >
                Get Started
              </span>

              <h2
                className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Start Your Healing
                <br />
                Journey Today
              </h2>

              <p className="mt-6 max-w-md text-lg text-white/80 leading-relaxed">
                Take the first step toward better health with personalized nutrition guidance and
                sustainable lifestyle support.
              </p>

              <ul className="mt-8 space-y-3.5">
                <Benefit text="Free initial consultation" />
                <Benefit text="Personalized health assessment" />
                <Benefit text="No obligation to continue" />
                <Benefit text="WhatsApp support available" />
              </ul>

              {/* Contact Options */}
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919930548506"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: "var(--reviva-gold)" }}
                >
                  <MessageCircle size={17} />
                  WhatsApp Chat
                </a>

                <a
                  href="tel:+919930548506"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <Phone size={17} />
                  Call Now
                </a>
              </div>

              <p className="mt-6 flex items-center gap-2 text-sm text-white/60">
                <Mail size={14} />
                nutririseheena@gmail.com
              </p>
            </div>

            {/* Right — Form */}
            <div className="rounded-[20px] sm:rounded-[28px] bg-white p-5 sm:p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold" style={{ color: "var(--reviva-green)" }}>
                Book Your Consultation
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Fill in your details and we&apos;ll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-600">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Priya Sharma"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#2f6b2d] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-600">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#2f6b2d] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#2f6b2d] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-600">
                    Health Concern
                  </label>
                  <textarea
                    rows={4}
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    placeholder="Tell us about your health goals or concerns..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#2f6b2d] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center rounded-xl py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
                  style={{ backgroundColor: "var(--reviva-green)" }}
                >
                  {loading ? "Sending..." : "Book Free Consultation"}
                </button>
                {success && (
                  <p className="text-center text-sm font-medium text-green-600">{success}</p>
                )}

                {error && <p className="text-center text-sm font-medium text-red-500">{error}</p>}

                <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-400">
                  <CheckCircle size={13} />
                  Your information is secure and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle size={17} color="var(--reviva-gold)" className="shrink-0" />
      <span className="text-white/90">{text}</span>
    </li>
  );
}
