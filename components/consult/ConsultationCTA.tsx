"use client";

import { useState } from "react";
import { CheckCircle, MessageCircle, Phone, Mail, Loader2, PartyPopper } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FieldErrors {
  name?: string;
  phone?: string;
  email?: string;
}

function validate(name: string, phone: string, email: string): FieldErrors {
  const errs: FieldErrors = {};
  if (!name.trim() || name.trim().length < 2) {
    errs.name = "Please enter your full name";
  }
  const digits = phone.replace(/\D/g, "");
  if (!phone.trim()) {
    errs.phone = "Phone number is required.";
  } else if (digits.length < 10) {
    errs.phone = "Please enter a valid 10-digit phone number.";
  }
  if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errs.email = "Please enter a valid email address.";
  }
  return errs;
}

export default function ConsultationCTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [concern, setConcern] = useState("");
  const [duration, setDuration] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeProcess, setAgreeProcess] = useState(false);
  const [agreeRefunds, setAgreeRefunds] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const allChecked = agreeTerms && agreeProcess && agreeRefunds;
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function clearFieldError(field: keyof FieldErrors) {
    if (fieldErrors[field]) setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError("");
    const errs = validate(name, phone, email);
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});

    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          duration,
          concern,
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or reach out on WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setName("");
    setPhone("");
    setEmail("");
    setDuration("");
    setConcern("");
    setAgreeTerms(false);
    setAgreeProcess(false);
    setAgreeRefunds(false);
    setFieldErrors({});
    setSubmitError("");
    setSubmitted(false);
  }

  return (
    <section id="consult-form" className="bg-[var(--reviva-cream)] py-24">
      <div className="mx-auto max-w-7xl page-pad">
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
                className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
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
                <Benefit text="Online consultation" />
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

            {/* Right — Form / Success */}
            <div className="rounded-[20px] sm:rounded-[28px] bg-white p-5 sm:p-8 shadow-2xl">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center text-center py-8 gap-4"
                  >
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-full"
                      style={{ backgroundColor: "var(--reviva-gold-light)" }}
                    >
                      <PartyPopper size={30} color="var(--reviva-green)" />
                    </div>
                    <h3 className="text-2xl font-semibold" style={{ color: "var(--reviva-green)" }}>
                      Request Received!
                    </h3>
                    <p className="text-slate-600 max-w-xs leading-relaxed">
                      Thank you, <strong>{name || "there"}</strong>! We&apos;ve received your
                      consultation request and will reach out within 24 hours.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-2 text-sm font-medium underline underline-offset-4"
                      style={{ color: "var(--reviva-green)" }}
                    >
                      Submit another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-semibold" style={{ color: "var(--reviva-green)" }}>
                      Book Consultation
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Fill in your details and we&apos;ll get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-slate-600">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                              clearFieldError("name");
                            }}
                            placeholder="Priya Sharma"
                            className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:bg-white ${fieldErrors.name ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-[#2f6b2d]"}`}
                          />
                          {fieldErrors.name && (
                            <p className="mt-1 text-xs text-red-500">{fieldErrors.name}</p>
                          )}
                        </div>

                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-slate-600">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => {
                              setPhone(e.target.value);
                              clearFieldError("phone");
                            }}
                            placeholder="+91 98765 43210"
                            className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:bg-white ${fieldErrors.phone ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-[#2f6b2d]"}`}
                          />
                          {fieldErrors.phone && (
                            <p className="mt-1 text-xs text-red-500">{fieldErrors.phone}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-600">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            clearFieldError("email");
                          }}
                          placeholder="you@example.com"
                          className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:bg-white ${fieldErrors.email ? "border-red-400 focus:border-red-400" : "border-slate-200 focus:border-[#2f6b2d]"}`}
                        />
                        {fieldErrors.email && (
                          <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-600">
                          Program Duration
                        </label>
                        <div className="relative">
                          <select
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#2f6b2d] focus:bg-white appearance-none cursor-pointer"
                            style={{
                              color: duration ? "inherit" : "#94a3b8",
                              paddingRight: duration ? "2.5rem" : "1rem",
                            }}
                          >
                            <option value="" disabled>
                              Select a program duration
                            </option>
                            <option value="3 Months">3 Months</option>
                            <option value="6 Months">6 Months</option>
                            <option value="12 Months">12 Months</option>
                          </select>
                          {duration && (
                            <button
                              type="button"
                              onClick={() => setDuration("")}
                              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full text-[1rem] font-light text-slate-400 transition hover:bg-slate-200 hover:text-slate-600"
                              aria-label="Clear duration"
                            >
                              &#x2715;
                            </button>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="mb-1 block text-xs font-medium text-slate-600">
                          Health Concern
                        </label>
                        <p className="mb-1.5 text-[11px] text-slate-400">
                          Please describe your primary health concern.
                        </p>
                        <textarea
                          rows={4}
                          value={concern}
                          onChange={(e) => setConcern(e.target.value)}
                          placeholder="Ex. Undergoing Diabetes 10yrs."
                          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#2f6b2d] focus:bg-white"
                        />
                      </div>

                      {/* Consent checkboxes */}
                      <div className="space-y-2.5">
                        <CheckboxRow
                          id="agreeProcess"
                          checked={agreeProcess}
                          onChange={setAgreeProcess}
                          label="I have read the"
                          linkText="Consultation Process"
                          href="/terms-and-conditions#consultation-process"
                        />
                        <CheckboxRow
                          id="agreeTerms"
                          checked={agreeTerms}
                          onChange={setAgreeTerms}
                          label="I agree to accept the"
                          linkText="Terms & Conditions"
                          href="/terms-and-conditions#important-terms"
                        />
                        <CheckboxRow
                          id="agreeRefunds"
                          checked={agreeRefunds}
                          onChange={setAgreeRefunds}
                          label="I have read the"
                          linkText="Returns, Refunds & Cancellations Policy"
                          href="/terms-and-conditions#refunds-policy"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading || !allChecked}
                        className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
                        style={{ backgroundColor: "var(--reviva-green)" }}
                      >
                        {loading ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Book Consultation"
                        )}
                      </button>

                      {submitError && (
                        <p className="rounded-xl bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">
                          {submitError}
                        </p>
                      )}

                      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-400">
                        <CheckCircle size={13} />
                        Your information is secure and will never be shared.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
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

function CheckboxRow({
  id,
  checked,
  onChange,
  label,
  linkText,
  href,
}: {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  linkText: string;
  href: string;
}) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-2.5">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#2f6b2d]"
      />
      <span className="text-xs leading-snug text-slate-600">
        {label}{" "}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium"
          style={{ color: "var(--reviva-green)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {linkText}
        </a>
      </span>
    </label>
  );
}
