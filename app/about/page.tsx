import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutStatsCharts from "@/components/about/AboutStatsCharts";
import AboutYoutube from "@/components/about/AboutYoutube";
import ConsultationCTA from "@/components/home/MythnFactPreview";

export const metadata: Metadata = {
  title: "About — Reviva Nutrition",
  description:
    "Meet Heena, the nutritionist behind Reviva Nutrition. A decade of evidence-based, root-cause nutrition for sustainable health.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <AboutHero />
        <AboutStory />
        <AboutStatsCharts />
        <AboutYoutube />
        <ConsultationCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
