import Link from "next/link";
import {
  ClipboardList,
  FileText,
  MessageCircle,
  Leaf,
  ArrowRight,
} from "lucide-react";

import { processCards } from "@/data/process-cards";

const icons = [
  ClipboardList,
  FileText,
  MessageCircle,
  Leaf,
];

export default function ProcessCards() {
  return (
    <section className="bg-[var(--reviva-cream)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span
            className="rounded-full px-4 py-2 text-sm font-medium"
            style={{
              backgroundColor: "rgba(244,178,27,0.15)",
              color: "var(--reviva-green)",
            }}
          >
            Your Healing Journey
          </span>

          <h2
            className="mt-6 text-5xl lg:text-6xl"
            style={{
              color: "var(--reviva-green)",
              fontFamily: "var(--font-heading)",
            }}
          >
            A Simple Path To Better Health
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processCards.map((card, index) => {
            const Icon = icons[index];

            return (
              <Link
                key={card.title}
                href="/consult"
                className="group rounded-[28px] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: "rgba(244,178,27,0.12)",
                  }}
                >
                  <Icon
                    size={28}
                    color="var(--reviva-green)"
                  />
                </div>

                <h3
                  className="mt-6 text-xl font-semibold"
                  style={{
                    color: "var(--reviva-green)",
                  }}
                >
                  {card.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {card.description}
                </p>

                <div
                  className="mt-6 flex items-center gap-2 font-medium"
                  style={{
                    color: "var(--reviva-gold-dark)",
                  }}
                >
                  Learn More
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}