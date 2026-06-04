import { Leaf } from "lucide-react";

const specialties = [
  "Weight Management",
  "PCOS Support",
  "Gut Health",
  "Hormonal Wellness",
  "Root-Cause Approach",
  "Online Consultations",
  "Personalized Nutrition Plans",
  "Thyroid Support",
  "Diabetes Management",
  "Digestive Wellness",
  "Lifestyle Transformation",
  "Sports Nutrition",
];

// Triple the items — animation moves exactly -33.33% so the loop is seamless
const items = [...specialties, ...specialties, ...specialties];

export default function TrustTicker() {
  return (
    <div
      className="overflow-hidden py-4 border-y border-white/10"
      style={{ backgroundColor: "var(--reviva-green)" }}
    >
      <div
        className="flex w-max"
        style={{
          animation: "ticker 48s linear infinite",
          willChange: "transform",
        }}
      >
        {items.map((name, i) => (
          <span key={i} className="inline-flex shrink-0 items-center gap-2.5 px-6">
            <Leaf size={13} color="var(--reviva-gold)" className="shrink-0" />
            <span className="text-sm font-medium tracking-wide text-white/90">{name}</span>
            <span className="ml-3 text-white/25 text-base select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
