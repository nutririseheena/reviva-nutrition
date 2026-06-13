import Navbar from "@/components/home/Navbar";
import HeroSlider from "@/components/home/HeroSlider";
import TrustTicker from "@/components/home/TrustTicker";
import ProcessCards from "@/components/home/ProcessCards";
import AboutPreview from "@/components/home/AboutPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import Footer from "@/components/home/Footer";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSlider />
        <TrustTicker />
        <ProcessCards />
        <AboutPreview />
        <TestimonialsPreview />
        <ConsultationCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
