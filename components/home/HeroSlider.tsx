"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Slide1 from "./hero-slides/Slide1";
import Slide2 from "./hero-slides/Slide2";
import Slide3 from "./hero-slides/Slide3";

const slides = [Slide1, Slide2, Slide3];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const CurrentSlide = slides[current];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[680px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:scale-110 transition"
      >
        <ChevronLeft className="h-5 w-5 text-[var(--reviva-green)]" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:scale-110 transition"
      >
        <ChevronRight className="h-5 w-5 text-[var(--reviva-green)]" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index
                ? "bg-[var(--reviva-gold)] w-8"
                : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}