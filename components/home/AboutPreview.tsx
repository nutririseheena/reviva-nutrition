import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, ShieldCheck } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="bg-[var(--reviva-cream)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}

          <div className="relative overflow-hidden rounded-[32px]">
            <Image
              src="/images/about/about-preview.png"
              alt="Reviva Nutrition"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
              <p
                className="font-semibold"
                style={{
                  color: "var(--reviva-green)",
                }}
              >
                Root-Cause Healing
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Wellness begins from within
              </p>
            </div>
          </div>

          {/* Content */}

          <div>
            <span
              className="rounded-full px-4 py-2 text-sm font-medium"
              style={{
                backgroundColor: "rgba(244,178,27,0.15)",
                color: "var(--reviva-green)",
              }}
            >
              About Reviva Nutrition
            </span>

            <h2
              className="mt-6 text-5xl lg:text-6xl"
              style={{
                color: "var(--reviva-green)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Helping You Heal,
              <br />
              Naturally.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              At Reviva Nutrition, we believe true wellness comes from
              addressing the root cause rather than simply managing
              symptoms.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Our approach combines personalized nutrition, sustainable
              lifestyle practices, and evidence-based guidance to help
              you build long-term health and vitality.
            </p>

            {/* Feature Pills */}

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <FeaturePill
                icon={<Heart size={18} />}
                text="Personalized"
              />

              <FeaturePill
                icon={<Leaf size={18} />}
                text="Root-Cause"
              />

              <FeaturePill
                icon={<ShieldCheck size={18} />}
                text="Sustainable"
              />
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white transition hover:scale-105"
              style={{
                backgroundColor: "var(--reviva-green)",
              }}
            >
              Learn More About Heena
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturePill({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm">
      <span
        style={{
          color: "var(--reviva-green)",
        }}
      >
        {icon}
      </span>

      <span className="font-medium">{text}</span>
    </div>
  );
}