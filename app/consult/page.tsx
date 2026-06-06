import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";
import ConsultHero from "@/components/consult/ConsultHero";
import HowItWorks from "@/components/consult/HowItWorks";
import ProgramOptions from "@/components/consult/ProgramOptions";
import FaqAccordion from "@/components/consult/FaqAccordion";
import ConsultationCTA from "@/components/home/ConsultationCTA";

export const metadata: Metadata = {
  title: "Consult — Reviva Nutrition",
  description:
    "Book a personalized nutrition consultation with Heena. 3, 6 or 12-month programs to help you heal from within.",
};

export default function ConsultPage() {
  return (
    <>
      <Navbar />
      <main>
        <ConsultHero />
        <HowItWorks />
        <ProgramOptions />
        <FaqAccordion />
        <div id="book">
          <ConsultationCTA />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
