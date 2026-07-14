import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";
import ConsultBanner from "@/components/consult/ConsultBanner";
import HealingJourney from "@/components/consult/HealingJourney";
import HowItWorks from "@/components/consult/HowItWorks";
import ProgramOptions from "@/components/consult/ProgramOptions";
import FaqAccordion from "@/components/consult/FaqAccordion";
import ConsultaionCTA from "@/components/consult/ConsultationCTA";
import PaymentPreview from "@/components/consult/PaymentPreview";
import ConsultProgram from "@/components/consult/ConsultProgram";

export const metadata: Metadata = {
  title: "Consult — Reviva Nutrition",
  description:
    "Book a personalized nutrition consultation with Heena. 3, 6 or 12-month programs to help you heal from within.",
};

export default function ConsultPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <ConsultBanner />
        <HealingJourney />
        <ConsultProgram />
        <HowItWorks />
        <ProgramOptions />
        <FaqAccordion />
        <ConsultaionCTA />
        <PaymentPreview />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
