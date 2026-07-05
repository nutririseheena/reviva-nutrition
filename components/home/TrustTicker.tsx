import { Leaf } from "lucide-react";
import { tickerSpecialties } from "@/data/about";

// Triple the items — animation moves exactly -33.33% so the loop is seamless
const items = [...tickerSpecialties, ...tickerSpecialties, ...tickerSpecialties];

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
            <Leaf size={15} color="var(--reviva-gold)" className="shrink-0" />
            <span className="text-sm sm:text-base lg:text-[18px] font-semibold tracking-wide text-white/90">
              {name}
            </span>
            <span className="ml-3 text-white/25 text-base select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
