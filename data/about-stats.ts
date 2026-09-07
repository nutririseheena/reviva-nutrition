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
    topic: "Bad Breath Even After Brushing? Real Causes & Solution",
    url: "https://www.youtube.com/watch?v=0KX2QrO2Kk8",
  },
  {
    topic: "Eating Protein Every Meal but Still Not Losing Weight?",
    url: "https://www.youtube.com/watch?v=d4dRIR2SnbA",
  },
  {
    topic: "Gallbladder Stone (पित्त की पथरी) किसे हो सकती है?",
    url: "https://www.youtube.com/watch?v=Qn5eyz8qRC4&t=2s",
  },
  {
    topic: "खाली पेट चाय? सेहत को हो सकता है बड़ा नुकसान!",
    url: "https://www.youtube.com/watch?v=BCdyHbwqCJU&t=20s",
  },
  {
    topic: "High BP का Instant इलाज – Office, Travel & Home",
    url: "https://www.youtube.com/watch?v=GfF3XONFkl0&t=3s",
  },
  {
    topic: "Long-term BP Medication & Unnoticed Symptoms",
    url: "https://www.youtube.com/watch?v=reP_ROu6MNo",
  },
  {
    topic: "Alsi/FlaxSeed – Who Should Avoid It?",
    url: "https://www.youtube.com/watch?v=QTkg5_dzQsA",
  },
  {
    topic: "How to Use Flaxseed Oil for Max Diet Benefit",
    url: "https://www.youtube.com/watch?v=4zehUtYOXJg",
  },
  { topic: "Constipation Challenge — Why?", url: "https://www.youtube.com/watch?v=YwCtYIkBayY" },
  {
    topic: "Does Rice Intake Lead to Weight Gain?",
    url: "https://www.youtube.com/watch?v=YhWhMY8kAjk",
  },
  {
    topic: "Stress Impact on Men's & Women's Health",
    url: "https://www.youtube.com/watch?v=j3B-jkp2vNs&t=11s",
  },
  {
    topic: "Which Mineral Helps Vitamin D Absorption? (Part 6)",
    url: "https://www.youtube.com/watch?v=xhMhJSW5Ynw",
  },
  {
    topic: "Vitamin D Absorption Linked to Gall Bladder Health (Part 5)",
    url: "https://www.youtube.com/watch?v=nZaNsESiJxU",
  },
  {
    topic: "Benefits of Aliv Seed — Tiny Nutrient Powerhouse",
    url: "https://www.youtube.com/watch?v=BT1rQPTLdv8",
  },
  {
    topic: "Low Vitamin D Absorption (Part 4)",
    url: "https://www.youtube.com/watch?v=e7iqww2cn0Y",
  },
  {
    topic: "Child's Height Challenge & Nutrition Deficiency",
    url: "https://www.youtube.com/watch?v=i973ZYAQSNw",
  },
  {
    topic: "Root Cause of Low Vitamin D Absorption (Part 2)",
    url: "https://www.youtube.com/watch?v=JdzKWLVIL1A",
  },
  {
    topic: "Best Cooking Oil: Refined vs Filtered",
    url: "https://www.youtube.com/watch?v=L-MVNNTz_cc",
  },
  {
    topic: "Nutrition Loss Due to Diabetes Medication",
    url: "https://www.youtube.com/watch?v=yOGCZ9iBqU0",
  },
  { topic: "What Causes Skin Pigmentation?", url: "https://www.youtube.com/watch?v=VdWqPNo-rUs" },
  {
    topic: "Root Cause of Low Vitamin D Absorption (Part 1)",
    url: "https://www.youtube.com/watch?v=ge0Yclv6TFo",
  },
  {
    topic: "Poor Cooking Skills Lead to Health Challenges",
    url: "https://www.youtube.com/watch?v=_gVwT0BH-6I",
  },
  {
    topic: "Best Hair Oils During Monsoon Season",
    url: "https://www.youtube.com/watch?v=FrG9X_F-jKc",
  },
  {
    topic: "Is Home-Cooked Food a Health Culprit?",
    url: "https://www.youtube.com/watch?v=T_InAv-65Rk",
  },
  {
    topic: "Secrets to Reduce Hairfall & Root Cause (Part 2)",
    url: "https://www.youtube.com/watch?v=QzJZ6l1BQgY",
  },
  {
    topic: "Liver Health Solutions & Misconceptions",
    url: "https://www.youtube.com/watch?v=QzJZ6l1BQgY",
  },
  {
    topic: "Secrets to Reduce Hairfall (Part 1)",
    url: "https://www.youtube.com/watch?v=knuCVmMMBHA",
  },
  {
    topic: "Reverse Insulin Resistance with Diet & Lifestyle",
    url: "https://www.youtube.com/watch?v=PiCz64LAruc",
  },
  {
    topic: "Diet Plan for Post Covid Recovery",
    url: "https://www.youtube.com/watch?v=Xc7r8LO5Lc0",
  },
  {
    topic: "Organ Damage Caused by Everyday Habits",
    url: "https://www.youtube.com/watch?v=Ffbv7j4q25s",
  },
  {
    topic: "Uric Acid — Root Cause, Myths & Facts",
    url: "https://www.youtube.com/watch?v=4UfAI0TZX8k",
  },
  { topic: "Food For Taste or For Health?", url: "https://www.youtube.com/watch?v=csS07foYCM8" },
  {
    topic: "Is It Worth Spending on Collagen Supplements?",
    url: "https://www.youtube.com/watch?v=ucDNNsYKWPY",
  },
  {
    topic: "Shankh Mudra — Memory, Immunity & Thyroid Benefits",
    url: "https://www.youtube.com/watch?v=nBdtZz6_NH8",
  },
  {
    topic: "False Claims About Oils, Ghee & Vanaspati",
    url: "https://www.youtube.com/watch?v=MdVEfmhQu2w",
  },
  {
    topic: "Lifestyle Diseases Due to Nutrition Deficiency",
    url: "https://www.youtube.com/watch?v=mdsDH1QBqro",
  },
  {
    topic: "What Triggered Me to Become a Nutritionist?",
    url: "https://www.youtube.com/watch?v=zLtUrfbO1dE",
  },
  { topic: "STRESS: Root Cause & Impact", url: "https://www.youtube.com/watch?v=oZZkXEgK1Fs&t=9s" },
  { topic: "Menopause Awareness", url: "https://www.youtube.com/watch?v=03KqILRGIRk" },
  { topic: "Ask For Healthy Weight Loss", url: "https://www.youtube.com/watch?v=PVg0TTmcamY" },
  {
    topic: "When to Consult a Dietician?",
    url: "https://www.youtube.com/watch?v=QwQlgiXJ3Kg&t=95s",
  },
  {
    topic: "Post Pregnancy Myths & Facts Awareness",
    url: "https://www.youtube.com/watch?v=s_WeD2ZxOPA",
  },
  {
    topic: "Health Problems in Old Age Due to Wrong Food Combinations",
    url: "https://www.youtube.com/watch?v=CNGqGrKLf6s",
  },
  {
    topic: "Overcome Your Water Retention Challenge",
    url: "https://www.youtube.com/watch?v=irWW4hdNiWs",
  },
  {
    topic: "Health Is Fluctuating Like Share Market",
    url: "https://www.youtube.com/watch?v=NxwFY_kJjSg",
  },
  { topic: "How to Improve Child Nutrition", url: "https://www.youtube.com/watch?v=ihM6Fo4ue08" },
  { topic: "Nutritional Values in Life", url: "https://www.youtube.com/watch?v=Q_l2ymqhxZw" },
  {
    topic: "Skin Glowing with Facial Yoga (Exercise Part 1)",
    url: "https://www.youtube.com/watch?v=lu-gnvXLAdk",
  },
  {
    topic: "Solution for Blocked Nose — Face Yoga",
    url: "https://www.youtube.com/watch?v=pu5qD9Q7RxU&t=96s",
  },
  {
    topic: "Cooking Topic: Aam Panna Full of Nutritional Benefits",
    url: "https://www.youtube.com/watch?v=LQPtQKaMX44",
  },
  {
    topic: "How to Cook Traditional Style Sweet Potato",
    url: "https://www.youtube.com/watch?v=1ObJTVSYuy8",
  },
  { topic: "Mushroom Snacking Anytime", url: "https://www.youtube.com/watch?v=2yblIX7RREc" },
  {
    topic: "How to Make a Jowar Roti with a Unique Combination",
    url: "https://www.youtube.com/watch?v=e7th0s8Km7c",
  },
  {
    topic: "Are You Hungry? Grab This Snack Anytime in 5 Minutes",
    url: "https://www.youtube.com/watch?v=duSuUuHrQ2M",
  },
  {
    topic: "Saunf or Fennel Sharbat in 1 Minute — Summer Drink",
    url: "https://www.youtube.com/watch?v=MaTXivDkv9g",
  },
  {
    topic: "100% Recovery from Cold & Cough Following Home Remedy",
    url: "https://www.youtube.com/watch?v=n4Hyouts63M",
  },
  {
    topic: "Petha Juice for Piles, Fissure & Many More Health Challenges",
    url: "https://www.youtube.com/watch?v=5TR5rVs47XQ",
  },
  {
    topic: "Carrot Milk Recipe for Lung Improvement",
    url: "https://www.youtube.com/watch?v=0ECv8CUJ6cg",
  },
  { topic: "Amla Murabba Using Jaggery", url: "https://www.youtube.com/watch?v=C5EYxFvjrVo" },
];
