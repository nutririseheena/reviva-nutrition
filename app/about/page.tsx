import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";
import AboutHeroBanner from "@/components/about/AboutHeroBanner";
import AboutBio from "@/components/about/AboutBio";
import AboutImpact from "@/components/about/AboutImpact";
import AboutInvite from "@/components/about/AboutInvite";

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
        <AboutHeroBanner />
        <AboutBio />
        <AboutImpact />
        <AboutInvite />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
