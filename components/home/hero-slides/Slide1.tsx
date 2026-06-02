import { ArrowRight, Calendar, HeartPulse, Leaf } from "lucide-react";

export default function Slide1() {
  return (
    <section className="bg-[var(--reviva-cream)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}

          <div>
            <span
              className="inline-block rounded-full px-4 py-2 text-sm font-medium"
              style={{
                backgroundColor: "rgba(244,178,27,0.15)",
                color: "var(--reviva-green)",
              }}
            >
              Root-Cause Nutrition
            </span>

            <h1
              className="mt-6 max-w-xl text-4xl font-bold leading-tight lg:text-6xl"
              style={{
                color: "var(--reviva-green)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Heal the Root Cause,
              <br />
              Not Just the Symptoms.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Personalized nutrition and lifestyle guidance to help restore
              energy, improve digestion, balance hormones, and achieve
              sustainable health.
            </p>

            {/* CTA Buttons */}

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                className="flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white transition hover:scale-105"
                style={{
                  backgroundColor: "var(--reviva-green)",
                }}
              >
                Book Consultation
                <ArrowRight size={18} />
              </button>

              <button
                className="rounded-full border px-6 py-3 font-medium transition"
                style={{
                  borderColor: "var(--reviva-green)",
                  color: "var(--reviva-green)",
                }}
              >
                Learn More
              </button>
            </div>

            {/* Stats */}

            <div className="mt-12 flex flex-wrap gap-10">
              <div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--reviva-green)" }}
                >
                  500+
                </h3>
                <p className="text-sm text-slate-500">
                  Clients Guided
                </p>
              </div>

              <div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--reviva-green)" }}
                >
                  10+
                </h3>
                <p className="text-sm text-slate-500">
                  Years Experience
                </p>
              </div>

              <div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--reviva-green)" }}
                >
                  100%
                </h3>
                <p className="text-sm text-slate-500">
                  Personalized Plans
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div className="relative">
            <div
              className="aspect-[4/5] rounded-[32px] border"
              style={{
                background:
                  "linear-gradient(135deg,#f4b21b15,#2f6b2d10)",
                borderColor: "#ece7d9",
              }}
            >
              <div className="flex h-full items-center justify-center">
                <span className="text-slate-500">
                  Heena's Professional Photo
                </span>
              </div>
            </div>

            {/* Floating Card 1 */}

            <div className="absolute left-0 top-10 rounded-2xl bg-white p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <Leaf
                  size={20}
                  color="var(--reviva-green)"
                />
                <span>Gut Health</span>
              </div>
            </div>

            {/* Floating Card 2 */}

            <div className="absolute -right-4 top-1/3 rounded-2xl bg-white p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <HeartPulse
                  size={20}
                  color="var(--reviva-green)"
                />
                <span>Hormonal Balance</span>
              </div>
            </div>

            {/* Floating Card 3 */}

            <div className="absolute bottom-10 left-10 rounded-2xl bg-white p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <Calendar
                  size={20}
                  color="var(--reviva-green)"
                />
                <span>Personalized Plans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}