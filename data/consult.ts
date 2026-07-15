import { ClipboardCheck, Activity, Target, Calendar, TrendingUp, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ConsultStage {
  number: string;
  phase: string;
  icon: LucideIcon;
  color: string;
  points: string[];
}

export const consultStages: ConsultStage[] = [
  {
    number: "1",
    phase: "THE PRE-CONSULTATION STAGE",
    icon: ClipboardCheck,
    color: "var(--reviva-green)",
    points: [
      "Dietary Analysis",
      "Health Symptoms Review",
      "Medical & Health History",
      "Medication Review",
      "Lifestyle Assessment",
    ],
  },
  {
    number: "2",
    phase: "Blood Biomarker Assessment & Recovery Strategy",
    icon: Activity,
    color: "var(--reviva-gold)",
    points: [
      "Detailed Blood Report Analysis",
      "Identification of Nutritional & Metabolic Gaps",
      "Personalized Recovery Roadmap",
    ],
  },
  {
    number: "3",
    phase: "Personalized Treatment Process",
    icon: Target,
    color: "var(--reviva-rose)",
    points: [
      "Dietary & Lifestyle Gap Analysis linked with Blood Biomarker Assessment",
      "Vikrati Analysis (Vata • Pitta • Kapha) integrated with Food Analysis",
      "Personalized Diet Plan combining Ayurvedic Wisdom & Modern Nutrition Science",
      "Customized Yoga, Mudra, Cardio & Strength Training Recommendations",
      "Weekly Diet Follow-Up & Progress Tracking",
      "Monthly Performance Evaluation",
      "Periodic Blood Biomarker Assessment",
      "Counseling & Guidance for Treatment Deviations and Challenges",
      "Regular Motivation & Accountability Support to Help You Achieve Your Health Goals",
    ],
  },
];

export const durationCards = [
  {
    months: "3 Months",
    label: "Build the Foundation",
    icon: Calendar,
    points: [
      "Focus on habit-building and consistency",
      "Regular check-ins & plan adjustments",
      "Support to overcome early challenges",
      "Track progress & celebrate small wins",
    ],
  },
  {
    months: "6 Months",
    label: "Strengthen & Optimize",
    icon: TrendingUp,
    points: [
      "Deepen results with personalized tweaks",
      "Advanced nutrition & lifestyle strategies",
      "Sustained motivation & accountability",
      "Improved energy, gut health & balance",
    ],
  },
  {
    months: "12 Months",
    label: "Sustain & Thrive",
    icon: Star,
    points: [
      "Long-term wellness & prevention focus",
      "Refine for your evolving goals",
      "Build a lifestyle that lasts a lifetime",
      "Enjoy lasting transformation & confidence",
    ],
  },
];

export interface ProgramDuration {
  months: string;
  label: string;
  desc: string;
  features: string[];
  highlight?: boolean;
}

export const programDurations: ProgramDuration[] = [
  {
    months: "3",
    label: "Kickstart",
    desc: "Ideal for a focused reset — build foundational habits and see early results.",
    features: [
      "Initial assessment + plan",
      "12 weekly sessions",
      "WhatsApp support",
      "Guidelines document",
    ],
  },
  {
    months: "6",
    label: "Transform",
    desc: "The most popular choice — enough time to create deep, lasting change.",
    features: [
      "Initial assessment + plan",
      "24 weekly sessions",
      "Special occasion planning",
      "WhatsApp support",
      "Mid-program review",
    ],
    highlight: true,
  },
  {
    months: "12",
    label: "Evolve",
    desc: "Comprehensive healing for complex conditions requiring a long-term approach.",
    features: [
      "Initial assessment + plan",
      "48 weekly sessions",
      "Special occasion planning",
      "WhatsApp support",
      "Quarterly reviews",
      "Post-consultation document",
    ],
  },
];

export interface MythFact {
  myth: string;
  fact: string;
}

export const mythsFacts: MythFact[] = [
  {
    myth: "Thyroid means lifelong weight gain.",
    fact: "Weight gain may be influenced by nutrition, lifestyle, inflammation, and metabolism.",
  },
  {
    myth: "Diabetes is only about sugar intake.",
    fact: "Blood sugar is influenced by diet, stress, sleep, activity, and metabolic health.",
  },
  {
    myth: "PCOS can only be managed with medication.",
    fact: "Nutrition and lifestyle changes can play a significant supportive role.",
  },
  {
    myth: "Constipation is normal with age.",
    fact: "Digestive issues often indicate an underlying imbalance.",
  },
  {
    myth: "Fatigue is a part of modern life.",
    fact: "Persistent fatigue may be your body\u2019s signal that something needs attention.",
  },
];
