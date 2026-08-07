"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, Phone, MapPin, Send, AlertCircle } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/site";

type FormState = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Name is required";
  if (!f.email.trim()) e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Enter a valid email";
  if (!f.subject.trim()) e.subject = "Subject is required";
  return e;
}

function SocialIcon({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:scale-110 active:scale-95"
      style={{
        color: "var(--reviva-dark-wine)",
        backgroundColor: "rgba(58,31,26,0.09)",
        border: "1px solid rgba(193,99,74,0.2)",
      }}
    >
      {icon}
    </a>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => {
        const n = { ...prev };
        delete n[name as keyof FormState];
        return n;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputCls = (field: keyof FormState) =>
    `w-full rounded-2xl border px-4 py-3 text-sm outline-none transition-all placeholder:opacity-40 bg-white/70 backdrop-blur-sm ${
      errors[field]
        ? "border-red-400 focus:ring-2 focus:ring-red-200"
        : "border-[var(--reviva-blush-deep)] focus:border-[var(--reviva-terracotta)] focus:ring-2 focus:ring-[var(--reviva-terracotta)]/20"
    }`;

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24"
      style={{
        background: "linear-gradient(160deg, #fdf7f3 0%, var(--reviva-cream) 45%, #faf1eb 100%)",
      }}
    >
      {/* Subtle grain overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='8' cy='8' r='1' fill='%23c1634a' fill-opacity='0.04'/%3E%3Ccircle cx='40' cy='8' r='1' fill='%23c1634a' fill-opacity='0.04'/%3E%3Ccircle cx='8' cy='40' r='1' fill='%23c1634a' fill-opacity='0.04'/%3E%3Ccircle cx='40' cy='40' r='1' fill='%23c1634a' fill-opacity='0.04'/%3E%3Ccircle cx='24' cy='24' r='1' fill='%237c4233' fill-opacity='0.03'/%3E%3Ccircle cx='56' cy='24' r='1' fill='%237c4233' fill-opacity='0.03'/%3E%3Ccircle cx='24' cy='56' r='1' fill='%237c4233' fill-opacity='0.03'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-6xl page-pad">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] items-start">
          {/* ── Left: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="mb-8">
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                  color: "var(--reviva-dark-wine)",
                  lineHeight: 1.15,
                }}
              >
                We would love to{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    color: "var(--reviva-terracotta)",
                    fontWeight: 600,
                  }}
                >
                  connect
                </span>{" "}
                with you
              </h2>
              
            </div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-14 px-8 rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, var(--reviva-blush) 0%, #fde8dc 100%)",
                    border: "1px solid var(--reviva-blush-deep)",
                  }}
                >
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ background: "rgba(193,99,74,0.12)" }}
                  >
                    <CheckCircle2 size={36} style={{ color: "var(--reviva-terracotta)" }} />
                  </div>
                  <h3
                    className="mt-5 text-2xl font-bold"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--reviva-dark-wine)" }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    className="mt-2 max-w-xs text-sm leading-relaxed"
                    style={{ color: "var(--reviva-warm-brown)", opacity: 0.8 }}
                  >
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 rounded-full px-7 py-2.5 text-sm font-semibold text-[var(--reviva-green-dark)] transition-all hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: "var(--reviva-gold)",
                      boxShadow: "0 4px 16px rgba(244,178,27,0.3)",
                    }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                  noValidate
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "var(--reviva-warm-brown)", opacity: 0.65 }}
                    >
                      Your name <span style={{ color: "var(--reviva-terracotta)" }}>*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      className={inputCls("name")}
                      style={{ color: "var(--reviva-warm-brown)" }}
                    />
                    {errors.name && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                        <AlertCircle size={12} />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "var(--reviva-warm-brown)", opacity: 0.65 }}
                    >
                      Your email <span style={{ color: "var(--reviva-terracotta)" }}>*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputCls("email")}
                      style={{ color: "var(--reviva-warm-brown)" }}
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                        <AlertCircle size={12} />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "var(--reviva-warm-brown)", opacity: 0.65 }}
                    >
                      Subject <span style={{ color: "var(--reviva-terracotta)" }}>*</span>
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className={inputCls("subject")}
                      style={{ color: "var(--reviva-warm-brown)" }}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                        <AlertCircle size={12} />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "var(--reviva-warm-brown)", opacity: 0.65 }}
                    >
                      Your message{" "}
                      <span
                        className="normal-case tracking-normal font-normal text-xs"
                        style={{ color: "var(--reviva-warm-brown)", opacity: 0.45 }}
                      >
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us more…"
                      className={`${inputCls("message")} resize-none`}
                      style={{ color: "var(--reviva-warm-brown)" }}
                    />
                  </div>

                  {/* Error banner */}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 rounded-2xl px-4 py-3 text-sm text-red-700"
                      style={{ background: "#fee2e2" }}
                    >
                      <AlertCircle size={16} className="shrink-0" />
                      Something went wrong — please try again.
                    </motion.p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: "var(--reviva-terracotta)",
                      boxShadow: "0 4px 20px rgba(193,99,74,0.35)",
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Submit
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Right: More Ways card ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          >
            <div
              className="sticky top-28 rounded-3xl p-7 sm:p-8"
              style={{
                background:
                  "linear-gradient(145deg, var(--reviva-blush) 0%, #fde8dc 55%, var(--reviva-blush-deep) 100%)",
                border: "1px solid rgba(193,99,74,0.15)",
                boxShadow: "0 8px 32px rgba(193,99,74,0.08)",
              }}
            >
              <h3
                className="mb-7 font-bold"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.7rem, 2.8vw, 2.2rem)",
                  color: "var(--reviva-dark-wine)",
                  lineHeight: 1.15,
                }}
              >
                More Ways
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div>
                  <p
                    className="mb-1.5 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--reviva-warm-brown)", opacity: 0.55 }}
                  >
                    Phone
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-2.5 text-sm font-medium transition-opacity hover:opacity-75"
                    style={{ color: "var(--reviva-terracotta)" }}
                  >
                    <Phone size={15} className="shrink-0" />
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p
                    className="mb-1.5 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--reviva-warm-brown)", opacity: 0.55 }}
                  >
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2.5 text-sm font-medium transition-opacity hover:opacity-75 break-all"
                    style={{ color: "var(--reviva-terracotta)" }}
                  >
                    <Mail size={15} className="shrink-0" />
                    {siteConfig.contact.email}
                  </a>
                </div>

                {/* Location */}
                <div>
                  <p
                    className="mb-1.5 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--reviva-warm-brown)", opacity: 0.55 }}
                  >
                    Location
                  </p>
                  <div
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: "var(--reviva-warm-brown)" }}
                  >
                    <MapPin
                      size={15}
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--reviva-terracotta)" }}
                    />
                    {siteConfig.contact.location}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <hr className="my-7" style={{ borderColor: "rgba(193,99,74,0.18)" }} />

              {/* Social */}
              <div>
                <p
                  className="mb-4 text-sm font-medium leading-snug"
                  style={{ color: "var(--reviva-warm-brown)" }}
                >
                  Follow Me{" "}
                  <span
                    style={{
                      color: "var(--reviva-terracotta)",
                      fontStyle: "italic",
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.12em",
                    }}
                  >
                    On Social Media
                  </span>
                </p>
                <div className="flex gap-3">
                  <SocialIcon
                    href={siteConfig.social.youtube}
                    label="YouTube"
                    icon={<FaYoutube size={16} />}
                  />
                  <SocialIcon
                    href={siteConfig.social.instagram}
                    label="Instagram"
                    icon={<FaInstagram size={16} />}
                  />
                  <SocialIcon
                    href={siteConfig.social.linkedin}
                    label="LinkedIn"
                    icon={<FaLinkedinIn size={16} />}
                  />
                  <SocialIcon
                    href={`https://wa.me/${siteConfig.contact.phone.replace(/\D/g, "")}`}
                    label="WhatsApp"
                    icon={<FaWhatsapp size={16} />}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
