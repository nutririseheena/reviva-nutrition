import Navbar from "@/components/home/Navbar";
import HeroSlider from "@/components/home/HeroSlider";
import ProcessCards from "@/components/home/ProcessCards";
import AboutPreview from "@/components/home/AboutPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <ProcessCards />
      <AboutPreview />
      <TestimonialsPreview />
      <ConsultationCTA />
      <Footer />
    </>
  );
}