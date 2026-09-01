import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";
import MythsFactsHero from "@/components/myths-facts/MythsFactsHero";
import MythsFactsCategory from "@/components/myths-facts/MythsFactsCategory";
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid";
import TestimonialsFeedback from "@/components/testimonials/TestimonialsFeedback";
import { mythsFactsData } from "@/data/myths-facts";

export const metadata: Metadata = {
  title: "Myths & Facts — Reviva Nutrition",
  description:
    "Don't let myths shape your health journey. Learn the facts about weight gain, high BP, menstrual health, acidity, childhood obesity, and constipation.",
};

export default function MythsFactsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <MythsFactsHero />
        {mythsFactsData.map((category, index) => (
          <MythsFactsCategory key={category.id} category={category} isFirst={index === 0} />
        ))}
        <TestimonialsGrid />
        <TestimonialsFeedback />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
