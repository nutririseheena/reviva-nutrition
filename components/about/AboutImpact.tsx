"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { impactPhotos } from "@/data/about";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

/* Card aspect ratio — 3:4 portrait, self-sizes based on Swiper slide width */
const CARD_RATIO = "3 / 4";

const PLACEHOLDER_BG = ["#f5e8e0", "#fef3d4", "#edd8cc", "#eaf1ea", "#f5e8e0", "#fef3d4"];

const PREV_CLS = "impact-carousel-prev";
const NEXT_CLS = "impact-carousel-next";

function onBeforeInit(swiper: SwiperType) {
  const nav = swiper.params.navigation;
  if (nav && typeof nav !== "boolean") {
    nav.prevEl = `.${PREV_CLS}`;
    nav.nextEl = `.${NEXT_CLS}`;
  }
}

const NAV_BTN =
  "flex-shrink-0 items-center justify-center w-9 h-9 rounded-full border " +
  "bg-[var(--reviva-cream)] transition-all hover:scale-105 active:scale-95 cursor-pointer " +
  "border-[var(--reviva-terracotta)] text-[var(--reviva-terracotta)]";

function toAbsoluteUrl(url: string) {
  if (!url) return url;
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

function CardInner({ photo, index }: { photo: { src?: string; alt: string; url?: string }; index: number }) {
  const inner = (
    <div
      className="relative overflow-hidden rounded-[20px] shadow-lg w-full"
      style={{ aspectRatio: CARD_RATIO }}
    >
      {photo.src ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 767px) 80vw, (max-width: 1023px) 45vw, 30vw"
          className="object-cover"
        />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ backgroundColor: PLACEHOLDER_BG[index % PLACEHOLDER_BG.length] }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect
              x="3"
              y="6"
              width="18"
              height="13"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.4"
              style={{ color: "rgba(0,0,0,0.15)" }}
            />
            <circle
              cx="12"
              cy="12"
              r="3.2"
              stroke="currentColor"
              strokeWidth="1.4"
              style={{ color: "rgba(0,0,0,0.15)" }}
            />
            <path
              d="M16 6l1-2"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              style={{ color: "rgba(0,0,0,0.15)" }}
            />
          </svg>
        </div>
      )}
      </div>
  );

  if (photo.url) {
    return (
      <a
        href={toAbsoluteUrl(photo.url)}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
        style={{ aspectRatio: CARD_RATIO, width: "100%" }}
      >
        {inner}
      </a>
    );
  }

  return inner;
}

export default function AboutImpact() {
  /*
   * Swiper breakpoints are evaluated against window.innerWidth which is only
   * available on the client. Rendering Swiper only after mount avoids the
   * SSR/hydration mismatch where the server sends slidesPerView=1 and the
   * browser never re-evaluates the breakpoints — causing the single giant card.
   */
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-[var(--reviva-cream)] py-10 sm:py-16 lg:py-20">

      {/* ── Main row: stacked on <lg, horizontal on lg+ ── */}
      <div className="flex flex-col lg:flex-row lg:items-center px-6 sm:px-8 lg:px-10 xl:px-12">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="lg:flex-shrink-0 mb-6 sm:mb-8 lg:mb-0 lg:mr-4 xl:mr-8 lg:max-w-[360px] xl:max-w-[380px] text-center lg:text-left"
        >
          <p
            className="reviva-display leading-none"
            style={{ fontSize: "clamp(1.5rem, 3.9vw, 2.5rem)" }}
          >
            <span className="block mb-2">Creating Awareness.</span>
            <span className="block mb-2" style={{ color: "var(--reviva-terracotta)" }}>Transforming Mindsets.</span>
            <span className="block">Inspiring Healthier Lives.</span>
          </p>
        </motion.div>

        {/* Prev — inline on lg+, hidden below */}
        <button
          className={`${PREV_CLS} hidden lg:flex mx-2 xl:mx-6 ${NAV_BTN}`}
          aria-label="Previous photo"
        >
          <ChevronLeft size={17} strokeWidth={2} />
        </button>

        {/* Carousel */}
        <div className="flex-1 min-w-0">
          {mounted ? (
            <Swiper
              effect="coverflow"
              grabCursor
              centeredSlides
              loop
              speed={500}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              coverflowEffect={{ rotate: 40, stretch: 0, depth: 80, modifier: 1, slideShadows: true }}
              navigation={{ prevEl: `.${PREV_CLS}`, nextEl: `.${NEXT_CLS}` }}
              onBeforeInit={onBeforeInit}
              breakpoints={{
                0:    { slidesPerView: 1,   spaceBetween: 0  },
                640:  { slidesPerView: 2.1, spaceBetween: 10 },
                900:  { slidesPerView: 2.8, spaceBetween: 12 },
                1023: { slidesPerView: 2.5, spaceBetween: 10 },
                1279: { slidesPerView: 2.8, spaceBetween: 12 },
              }}
              modules={[EffectCoverflow, Navigation, Autoplay]}
              style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
            >
              {impactPhotos.map((photo, i) => (
                <SwiperSlide key={i} className="!rounded-[20px] !overflow-hidden">
                  <CardInner photo={photo} index={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            /* SSR placeholder */
            <div className="flex gap-3 items-center h-full">
              {impactPhotos.slice(0, 3).map((photo, i) => (
                <div key={i} className={i === 0 ? "flex-1" : "hidden lg:flex flex-1"}>
                  <CardInner photo={photo} index={i} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Next — inline on lg+, hidden below */}
        <button
          className={`${NEXT_CLS} hidden lg:flex mx-2 xl:mx-6 ${NAV_BTN}`}
          aria-label="Next photo"
        >
          <ChevronRight size={17} strokeWidth={2} />
        </button>

      </div>



    </section>
  );
}
