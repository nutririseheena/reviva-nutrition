import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";
import TermsAndConditions from "@/components/terms/TermsAndConditions";

export const metadata: Metadata = {
  title: "Terms & Conditions — Reviva Nutrition",
  description:
    "Read Reviva Nutrition's Terms & Conditions, Consultation Process, and Returns, Refunds & Cancellations Policy.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <TermsAndConditions />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
