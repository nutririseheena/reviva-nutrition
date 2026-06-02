import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Slide2() {
  return (
    <section className="bg-[var(--reviva-cream)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="relative overflow-hidden rounded-[40px]">
          <div className="relative h-[650px]">
            <Image
              src="/images/hero/sunrise-slide.png"
              alt="Wellness Transformation"
              fill
              priority
              className="object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/25" />

            {/* Content */}

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl px-10 lg:px-16">
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                  Lifestyle Transformation
                </span>

                <h2
                  className="mt-6 text-4xl font-bold leading-tight text-white text-4xl lg:text-5xl"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Every Day Is A New
                  <br />
                  Opportunity To Heal.
                </h2>

                <p className="mt-6 text-lg text-white/90">
                  Small daily choices create lasting change.
                  Nourish your body, restore balance,
                  and embrace a healthier future.
                </p>

                <button
                  className="mt-8 flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white transition hover:scale-105"
                  style={{
                    backgroundColor: "var(--reviva-gold)",
                  }}
                >
                  Begin Your Journey
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}