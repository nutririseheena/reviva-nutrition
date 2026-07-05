import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid";
import TestimonialsFeedback from "@/components/testimonials/TestimonialsFeedback";

export const metadata: Metadata = {
  title: "Testimonials — Reviva Nutrition",
  description:
    "Real stories from clients who transformed their health through personalized nutrition with Reviva Nutrition.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <TestimonialsHero />
        <TestimonialsGrid />
        <TestimonialsFeedback />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
