import Image from "next/image";
import { ArrowRight, Sunrise } from "lucide-react";
import HeroLayout from "./HeroLayout";

export default function Slide2() {
  return (
    <HeroLayout
      leftContent={
        <div>
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
            style={{
              backgroundColor: "rgba(244,178,27,0.15)",
              color: "var(--reviva-green)",
            }}
          >
            <Sunrise size={16} />
            Lifestyle Transformation
          </span>

          <h2
            className="mt-6 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{
              color: "var(--reviva-green)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Every Day Is A New
            <br />
            Opportunity To Heal.
          </h2>

          <p className="mt-6 max-w-lg text-lg text-slate-600">
            Small daily choices create lasting change.
            Nourish your body, restore balance,
            and embrace a healthier future.
          </p>

          <button
            className="w-fit mt-8 flex items-center gap-2 rounded-full px-5 py-3 text-sm md:text-base font-medium text-white transition hover:scale-105"
            style={{
              backgroundColor: "var(--reviva-gold)",
            }}
          >
            Begin Your Journey
            <ArrowRight size={18} />
          </button>
        </div>
      }
      rightContent={
        <div className="relative flex justify-center w-full">
          <div className="relative h-[220px] md:h-[560px] w-[90%] md:w-full max-w-[540px] overflow-hidden rounded-[32px] shadow-xl">
            <Image
              src="/images/hero/sunrise-slide.png"
              alt="Wellness Transformation"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </div>
      }
    />
  );
}