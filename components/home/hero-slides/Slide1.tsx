import { ArrowRight, Calendar, HeartPulse, Leaf } from "lucide-react";
import HeroLayout from "./HeroLayout";
import Image from "next/image";

export default function Slide1() {
  return (
    <HeroLayout
      leftContent={
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
            className="mt-6 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{
              color: "var(--reviva-green)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Heal the Root Cause,
            <br />
            Not Just the Symptoms.
          </h1>

          <p className="mt-6 max-w-lg text-lg text-slate-600">
            Personalized nutrition and lifestyle guidance to help restore
            energy, improve digestion, balance hormones, and achieve
            sustainable health.
          </p>

          {/* CTA Buttons */}

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              className="flex items-center gap-2 rounded-full px-5 py-3 text-sm md:text-base font-medium text-white transition hover:scale-105"
              style={{
                backgroundColor: "var(--reviva-green)",
              }}
            >
              Book Consultation
              <ArrowRight size={18} />
            </button>

            <button
              className="rounded-full border px-5 py-3 text-sm md:text-base font-medium transition"
              style={{
                borderColor: "var(--reviva-green)",
                color: "var(--reviva-green)",
              }}
            >
              Learn More
            </button>
          </div>

          {/* Stats */}

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <h3
                className="text-2xl font-bold"
                style={{ color: "var(--reviva-green)" }}
              >
                500+
              </h3>

              <p className="text-xs md:text-sm text-slate-500">
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

              <p className="text-xs md:text-sm text-slate-500">
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

              <p className="text-xs md:text-sm text-slate-500">
                Personalized Plans
              </p>
            </div>
          </div>
        </div>
      }
      rightContent={
        <div className="relative flex justify-center w-full">
          {/* Main Image */}

          <div className="w-[90%] md:w-full max-w-[540px]">
            <Image
      src="/images/hero/heena-placeholder.png"
      alt="Nutrition Consultant"
      width={1680}
      height={945}
      className="w-full h-auto rounded-[32px] shadow-xl"
    />
          </div>

          {/* Floating Cards - Desktop Only */}

          <div className="hidden md:block absolute left-0 top-12 rounded-2xl bg-white px-4 py-3 shadow-xl">
            <div className="flex items-center gap-3">
              <Leaf
                size={18}
                color="var(--reviva-green)"
              />
              <span className="font-medium">
                Gut Health
              </span>
            </div>
          </div>

          <div className="hidden md:block absolute -right-4 top-1/3 rounded-2xl bg-white px-4 py-3 shadow-xl">
            <div className="flex items-center gap-3">
              <HeartPulse
                size={18}
                color="var(--reviva-green)"
              />
              <span className="font-medium">
                Hormonal Balance
              </span>
            </div>
          </div>

          <div className="hidden md:block absolute bottom-8 left-10 rounded-2xl bg-white px-4 py-3 shadow-xl">
            <div className="flex items-center gap-3">
              <Calendar
                size={18}
                color="var(--reviva-green)"
              />
              <span className="font-medium">
                Personalized Plans
              </span>
            </div>
          </div>
        </div>
      }
    />
  );
}