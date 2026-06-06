"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Slide1 from "./hero-slides/Slide1";
import Slide2 from "./hero-slides/Slide2";
import Slide3 from "./hero-slides/Slide3";

const slides = [Slide1, Slide2, Slide3];
// Slide 1 has a typewriter cycling 4 words (~12s for full cycle), slides 2-3 are shorter
const slideDurations = [12000, 5500, 5500];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const CurrentSlide = slides[current];

  // Auto-advance: respects per-slide duration and pauses on hover
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, slideDurations[current]);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused]);

  const goTo = (index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrent(index);
  };

  const nextSlide = () => goTo((current + 1) % slides.length);
  const prevSlide = () => goTo((current - 1 + slides.length) % slides.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) >= 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:scale-110 transition items-center justify-center"
      >
        <ChevronLeft className="h-5 w-5 text-[var(--reviva-green)]" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:scale-110 transition items-center justify-center"
      >
        <ChevronRight className="h-5 w-5 text-[var(--reviva-green)]" />
      </button>

      {/* Dots */}
      <div
        className="flex justify-center gap-2.5 py-4"
        style={{ backgroundColor: "var(--reviva-cream)" }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-[var(--reviva-gold)]"
                : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
