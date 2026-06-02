import { CheckCircle, MessageCircle } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="bg-[var(--reviva-cream)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="grid gap-10 rounded-[40px] p-8 lg:grid-cols-2 lg:p-12"
          style={{
            backgroundColor: "var(--reviva-green)",
          }}
        >
          {/* Left Side */}

          <div className="text-white">
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{
                color: "var(--reviva-gold)",
              }}
            >
              Get Started
            </span>

            <h2
              className="mt-4 text-5xl lg:text-6xl"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              Start Your Healing
              <br />
              Journey Today
            </h2>

            <p className="mt-6 max-w-md text-lg text-white/80">
              Take the first step toward better health with
              personalized nutrition guidance and sustainable
              lifestyle support.
            </p>

            <div className="mt-8 space-y-4">
              <Benefit text="Free initial consultation" />
              <Benefit text="Personalized health assessment" />
              <Benefit text="No obligation to continue" />
              <Benefit text="WhatsApp support available" />
            </div>

            {/* WhatsApp Button */}

            <a
              href="https://wa.me/919930548506"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition hover:scale-105"
              style={{
                backgroundColor: "var(--reviva-gold)",
                color: "#fff",
              }}
            >
              <MessageCircle size={18} />
              WhatsApp Chat
            </a>
          </div>

          {/* Right Side */}

          <div className="rounded-[28px] bg-white p-8 shadow-xl">
            <h3
              className="text-2xl font-semibold"
              style={{
                color: "var(--reviva-green)",
              }}
            >
              Book Your Consultation
            </h3>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-600"
              />

              <textarea
                rows={4}
                placeholder="Tell us about your health concerns..."
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-600"
              />

              <button
                type="submit"
                className="w-full rounded-xl py-3 font-medium text-white transition hover:opacity-90"
                style={{
                  backgroundColor: "var(--reviva-green)",
                }}
              >
                Book Free Consultation
              </button>

              <p className="text-center text-sm text-slate-500">
                Your information is secure and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle
        size={18}
        color="var(--reviva-gold)"
      />
      <span>{text}</span>
    </div>
  );
}