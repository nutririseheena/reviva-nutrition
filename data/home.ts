import { Handshake, Hourglass, CalendarCheck2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface HomePillar {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  accent: string;
}

// export const homePillars = [
//   {
//     title: "Consistency",
//     description:
//       "Following the right diet and lifestyle habits consistently creates lasting wellness.",
//     image: "/images/pillars/consistency.png",
//     accent: "#2f6b2d",
//   },
//   {
//     title: "Patience",
//     description: "Healing takes time. Sustainable transformation happens through steady progress.",
//     image: "/images/pillars/patience.png",
//     accent: "#f4b21b",
//   },
//   {
//     title: "Trust",
//     description:
//       "Trusting the process and professional guidance helps you stay committed to your goals.",
//     image: "/images/pillars/trust.png",
//     accent: "#2f6b2d",
//   },
// ];

export const homePillars = [
  {
    number: "01",
    title: "CONSISTENCY",
    description: "Consistency Today. Wellness Tomorrow.",
    image: "/images/pillars/consistency1.png",
    topIcon: CalendarCheck2,
    bottomText: "Consistent today, stronger tomorrow.",
  },
  {
    number: "02",
    title: "PATIENCE",
    description: "Gentle Progress, Meaningful Change.",
    image: "/images/pillars/patience1.png",
    topIcon: Hourglass,
    bottomText: "Trust the process. Every step counts.",
  },
  {
    number: "03",
    title: "TRUST",
    description: "Trust the process. Trust your nutrition expert.",
    image: "/images/pillars/trust1.png",
    topIcon: Handshake,
    bottomText: "You're not alone. We're in this together.",
  },
];

export const cardGradients = [
  "linear-gradient(135deg, #a8d5a2 0%, #d4edcf 45%, #f0f8ee 100%)",
  "linear-gradient(135deg, #ffc87a 0%, #fde3b0 45%, #fff8ec 100%)",
  "linear-gradient(135deg, #a8d5a2 0%, #d4edcf 45%, #f0f8ee 100%)",
  "linear-gradient(135deg, #eed2ab 0%, #fde3b0 45%, #fff8ec 100%)",
];

export const accentColors = [
  "var(--reviva-green)",
  "var(--reviva-gold-dark, #c97c10)",
  "var(--reviva-green)",
  "var(--reviva-gold-dark, #c97c10)",
];
