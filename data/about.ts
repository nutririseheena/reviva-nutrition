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

export interface ImpactPhoto {
  src?: string; // add real image path here when available
  alt: string;
  url?: string; // optional — opens in new tab when clicked
}

export const impactPhotos: ImpactPhoto[] = [
  { src: "/images/about/impact1.png", alt: "Impact photo 1", url: "" },
  { src: "/images/about/impact2.png", alt: "Impact photo 2", url: "https://www.youtube.com/shorts/6TfHleXIOx8" },
  { src: "/images/about/impact3.png", alt: "Impact photo 3", url: "" },
  { src: "/images/about/impact4.png", alt: "Impact photo 4", url: "https://www.facebook.com/share/p/1Cjj8SRASF/" },
  { src: "/images/about/impact5.png", alt: "Impact photo 5", url: "" },
  { src: "/images/about/impact6.png", alt: "Impact photo 6", url: "https://www.instagram.com/tv/CO-4GO1lSEQ/?igsh=MWtydTB2eTJ5eGZ5aQ==" },
  { src: "/images/about/impact7.png", alt: "Impact photo 7", url: "" },
];
