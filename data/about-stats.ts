import { Users, Clock, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface StatItem {
  icon: LucideIcon;
  target: number;
  suffix: string;
  label: string;
}

export const aboutStatsData: StatItem[] = [
  { icon: Users, target: 500, suffix: "+", label: "Clients Guided" },
  { icon: Clock, target: 10, suffix: "+", label: "Years of Practice" },
  { icon: Award, target: 95, suffix: "%", label: "Client Satisfaction" },
];

// ─────────────────────────────────────────────────────────────────────────────
// UPDATABLE DATA — Edit values here to update the charts on the About page.
// No code knowledge needed. Just change the numbers or labels and save the file.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Bar chart — "Specialization Areas"
 * Each entry shows a condition and the approximate client success rate (0–100).
 * Add / remove entries freely; the chart will resize automatically.
 */
export const specialtyBarData = [
  { area: "Weight Management", pct: 88 },
  { area: "PCOS / Hormonal", pct: 84 },
  { area: "Gut Health", pct: 80 },
  { area: "Thyroid Support", pct: 76 },
  { area: "Diabetes Care", pct: 72 },
  { area: "Sports Nutrition", pct: 68 },
];

/**
 * Donut chart — "Program Duration Breakdown"
 * value = approximate percentage of clients on that duration.
 * The three values should ideally add up to 100.
 */
export const programSplitData = [
  { name: "12-Month Program", value: 45, color: "#2f6b2d" },
  { name: "6-Month Program", value: 35, color: "#f4b21b" },
  { name: "3-Month Program", value: 20, color: "#3dba24" },
];

// ─────────────────────────────────────────────────────────────────────────────
// YOUTUBE TOPICS
// Add / remove entries to update the YouTube section on the About page.
// Replace the placeholder URLs with real video links once available.
// ─────────────────────────────────────────────────────────────────────────────
export const youtubeTopics = [
  {
    topic: "Understanding PCOS Through Diet",
    url: "https://www.youtube.com/@NutriRiseHeena",
  },
  {
    topic: "5 Foods for Better Gut Health",
    url: "https://www.youtube.com/@NutriRiseHeena",
  },
  {
    topic: "Managing Thyroid with Nutrition",
    url: "https://www.youtube.com/@NutriRiseHeena",
  },
  {
    topic: "Meal Planning for Busy Professionals",
    url: "https://www.youtube.com/@NutriRiseHeena",
  },
  {
    topic: "Indian Diet & Weight Management",
    url: "https://www.youtube.com/@NutriRiseHeena",
  },
  {
    topic: "Pre & Post Workout Nutrition",
    url: "https://www.youtube.com/@NutriRiseHeena",
  },
  {
    topic: "Hormonal Balance Through Food",
    url: "https://www.youtube.com/@NutriRiseHeena",
  },
  {
    topic: "Detox Myths & What Actually Works",
    url: "https://www.youtube.com/@NutriRiseHeena",
  },
];
