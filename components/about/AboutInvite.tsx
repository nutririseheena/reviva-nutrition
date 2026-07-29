"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const VENUES = [
  "Corporate Wellness",
  "Schools",
  "Colleges",
  "Communities",
  "YouTube Live",
  "Facebook Live",
  "Instagram Live",
  "Workshops",
];

type FormState = { name: string; phone: string; email: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Name is required";
  if (!f.phone.trim()) e.phone = "Phone is required";
  else if (!/^\+?[\d\s\-().\/]{7,15}$/.test(f.phone.trim()))
    e.phone = "Enter a valid phone number";
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
    e.email = "Enter a valid email";
  if (!f.message.trim()) e.message = "Please tell us more";
  return e;
}

export default function AboutInvite() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  function closeModal() {
    setOpen(false);
    setForm({ name: "", phone: "", email: "", message: "" });
    setErrors({});
    setStatus("idle");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState])
      setErrors((prev) => { const n = { ...prev }; delete n[name as keyof FormState]; return n; });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");
    try {
      const res = await fetch("/api/invite", {
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
    `w-full rounded-xl border px-4 py-3 text-sm text-[var(--reviva-warm-brown)] bg-white outline-none transition-all placeholder:text-[var(--reviva-warm-brown)]/40 ${
      errors[field]
        ? "border-red-400 focus:ring-2 focus:ring-red-200"
        : "border-[var(--reviva-blush-deep)] focus:border-[var(--reviva-terracotta)] focus:ring-2 focus:ring-[var(--reviva-terracotta)]/20"
    }`;

  return (
    <>
      <section
        id="invite-form"
        className="bg-[var(--reviva-blush)] py-16 sm:py-20 lg:py-28 scroll-mt-24"
      >
        <div className="page-pad">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" as const }}
            className="text-center"
          >
            <h2
              className="font-bold text-[var(--reviva-warm-brown)] leading-[1.1] mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Nutrition{" "}
              <span className="reviva-display font-normal" style={{ color: "var(--reviva-terracotta)", fontSize: "1.08em" }}>
                Education
              </span>
            </h2>

            <p
              className="text-[var(--reviva-warm-brown)] leading-relaxed mb-8 max-w-2xl mx-auto"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", opacity: 0.8 }}
            >
              Empowering people to understand their body, challenge health myths, and make
              informed nutrition and lifestyle choices for lifelong wellness.
            </p>

            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {VENUES.map((v) => (
                <span
                  key={v}
                  className="px-4 py-1.5 rounded-full text-sm font-medium text-[var(--reviva-warm-brown)]"
                  style={{
                    border: "1px solid rgba(193,99,74,0.35)",
                    backgroundColor: "rgba(193,99,74,0.07)",
                  }}
                >
                  {v}
                </span>
              ))}
            </div>

            <button
              onClick={() => setOpen(true)}
              className="inline-block rounded-full bg-[var(--reviva-warm-brown)] text-[var(--reviva-cream)] text-sm font-semibold tracking-widest uppercase transition-all hover:bg-[var(--reviva-terracotta)] hover:scale-105 active:scale-95"
              style={{ padding: "0.9rem 2.4rem" }}
            >
              Invite Heena
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Invite Modal ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={closeModal}
              aria-hidden="true"
            />

            {/* Card */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="invite-modal-title"
                className="relative w-full max-w-md rounded-3xl shadow-2xl"
                style={{ backgroundColor: "var(--reviva-cream)" }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  onClick={closeModal}
                  aria-label="Close"
                  className="absolute top-4 right-4 p-2 rounded-full transition-colors text-[var(--reviva-warm-brown)]/50 hover:text-[var(--reviva-terracotta)] hover:bg-[var(--reviva-blush)]"
                >
                  <X size={18} />
                </button>

                <div className="px-7 pt-7 pb-8">
                  {/* Modal heading — hidden on success */}
                  {status !== "success" && (
                    <>
                      <h3
                        id="invite-modal-title"
                        className="font-bold text-[var(--reviva-warm-brown)] leading-tight mb-1"
                        style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)" }}
                      >
                        Invite{" "}
                        <span className="reviva-display font-normal" style={{ color: "var(--reviva-terracotta)" }}>
                          Heena
                        </span>
                      </h3>
                      <p className="text-sm mb-6" style={{ color: "rgba(124,66,51,0.6)" }}>
                        Fill in the details and we&apos;ll get back to you shortly.
                      </p>
                    </>
                  )}

                  {status === "success" ? (
                    <div className="text-center py-8">
                      <div className="text-5xl mb-4">🙏</div>
                      <p className="font-semibold text-[var(--reviva-warm-brown)] text-lg mb-1">Thank you!</p>
                      <p className="text-sm" style={{ color: "rgba(124,66,51,0.65)" }}>
                        We&apos;ve received your invitation request and will reach out soon.
                      </p>
                      <button
                        onClick={closeModal}
                        className="mt-6 px-7 py-2.5 rounded-full bg-[var(--reviva-warm-brown)] text-[var(--reviva-cream)] text-sm font-semibold hover:bg-[var(--reviva-terracotta)] transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: "var(--reviva-warm-brown)" }}>
                          Name <span style={{ color: "var(--reviva-terracotta)" }}>*</span>
                        </label>
                        <input
                          ref={firstInputRef}
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={inputCls("name")}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: "var(--reviva-warm-brown)" }}>
                          Phone <span style={{ color: "var(--reviva-terracotta)" }}>*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={inputCls("phone")}
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: "var(--reviva-warm-brown)" }}>
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={inputCls("email")}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>

                      {/* Tell us more */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: "var(--reviva-warm-brown)" }}>
                          Tell us more <span style={{ color: "var(--reviva-terracotta)" }}>*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Event type, audience size, date, location…"
                          rows={3}
                          className={`${inputCls("message")} resize-none`}
                        />
                        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                      </div>

                      {status === "error" && (
                        <p className="text-sm text-red-500 text-center">
                          Something went wrong. Please try again.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full rounded-full bg-[var(--reviva-warm-brown)] text-[var(--reviva-cream)] text-sm font-semibold tracking-widest uppercase py-3.5 transition-all hover:bg-[var(--reviva-terracotta)] hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === "loading" ? "Sending…" : "Invite Heena"}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
