import { ClipboardCheck, MessageSquare, HeartHandshake } from "lucide-react";
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
      "Fill the \u201cGetting to Know You\u201d health assessment to help us understand your eating patterns, workout routine, and health goals.",
      "An appointment schedule is generated for the full program duration based on your time and day preferences.",
      "A document with easy-to-implement guidelines is shared before your very first session.",
    ],
  },
  {
    number: "2",
    phase: "THE CONSULTATION STAGE",
    icon: MessageSquare,
    color: "var(--reviva-gold)",
    points: [
      "An in-depth first session where we work together to create an eating plan that is both sustainable and a cultural fit.",
      "Weekly interactions to review and refine your meal and exercise plans based on how your body responds.",
      "Special meal planning for occasions like work travel, holidays, weddings, and festivals.",
    ],
  },
  {
    number: "3",
    phase: "THE POST-CONSULTATION STAGE",
    icon: HeartHandshake,
    color: "var(--reviva-green)",
    points: [
      "We maintain a lifelong relationship with you and are available for support whenever you need it.",
      "A comprehensive post-consultation document summarizing all learnings from the program.",
      "Practical guidelines for most situations you will face going forward — so you're never left without answers.",
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
