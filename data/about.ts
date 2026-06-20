import { BookOpen, Award, ShieldCheck, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Credential {
  icon: LucideIcon;
  text: string;
}

export const credentials: Credential[] = [
  { icon: BookOpen, text: "M.Sc. Food Science & Nutrition" },
  { icon: Award, text: "Certified Clinical Dietician" },
  { icon: ShieldCheck, text: "Member, Indian Dietetic Association" },
  { icon: Heart, text: "10+ Years Clinical Experience" },
];

export const aboutSpecialties = [
  "Weight Management",
  "PCOS & Hormonal Balance",
  "Gut Health",
  "Thyroid Care",
  "Diabetes Management",
  "Sports Nutrition",
  "Pregnancy Nutrition",
  "Child & Adolescent Nutrition",
];

export const tickerSpecialties = [
  "Weight Management",
  "Diabetes",
  "PCOS",
  "Thyroid",
  "IBS/IBD",
  "Prenatal Nutrition",
  "Fatty Liver",
  "Cholesterol Management",
  "Autoimmune Conditions (Eczema, Psoriasis)",
  "Hypertension",
  "Hair & Skin Health",
  "Kidney Health",
  "Heart Health",
  "Sports Nutrition",
];
