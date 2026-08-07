import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Reviva Nutrition",
  description:
    "Get in touch with Heena at Reviva Nutrition. We'd love to connect and answer your questions.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
