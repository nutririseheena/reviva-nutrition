import {
  Search,
  FlaskConical,
  Leaf,
  Activity,
  HeartPulse,
  Heart,
  BadgePlus,
  Droplets,
  PersonStanding,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface HeroPillar {
  icon: LucideIcon;
  label: string;
}

export const heroRoles = ["Nutritionist", "Dietician", "Coach", "Guide"];

export const diseaseList = [
  { icon: PersonStanding, label: "Obesity" },
  { icon: Droplets, label: "Diabetes" },
  { icon: HeartPulse, label: "Hypertension" },
  { icon: Heart, label: "Heart Disease" },
  { icon: Activity, label: "Fatty Liver" },
  { icon: BadgePlus, label: "Thyroid Disorders" },
];

export const heroPillars = [
  {
    icon: Search,
    label: "Identify Root Cause",
  },
  {
    icon: FlaskConical,
    label: "Science-Backed Approach",
  },
  {
    icon: UserRound,
    label: "Personalized Nutrition",
  },
  {
    icon: Leaf,
    label: "Lasting Wellness",
  },
];

export const barColors = [
  "#5B6C9D",
  "#8C6E9F",
  "#C27A5A",
  "#9C5B5B",
  "#7A6A58",
  "#5F7F8A",
  "#A18B7A",
];

export const heroMetrics = {
  consultations: 5000,
  successStories: 3000,
  rating: 4.9,
};

export const outcomesData = [
  { condition: "IBS/IBD", cases: 175 },
  { condition: "Type 2 - Diabetes", cases: 250 },
  { condition: "Thyroid Disorder", cases: 75 },
  { condition: "Hypertension", cases: 150 },
  { condition: "High Uric Acid/Creatinine", cases: 90 },
  { condition: "Prenatal Nutrition", cases: 60 },
  { condition: "Menopause", cases: 75 },
  { condition: "Child Nutrition", cases: 120 },
  { condition: "GallBladder - Post Surgery", cases: 40 },
  { condition: "Nutrition Deficiency", cases: 100 },
];
