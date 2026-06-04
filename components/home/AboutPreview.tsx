"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, ShieldCheck, Award, Users, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  icon: React.ElementType;
  target: number;
  suffix: string;
  label: string;
}

const statsData: StatItem[] = [
  { icon: Users, target: 500, suffix: "+", label: "Clients Guided" },
  { icon: Clock, target: 10, suffix: "+", label: "Years of Practice" },
  { icon: Award, target: 95, suffix: "%", label: "Client Satisfaction" },
];

function AnimatedCounter({ icon: Icon, target, suffix, label }: StatItem) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const totalFrames = 50;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCount(Math.floor(target * (1 - Math.pow(1 - progress, 3))));
      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-1 rounded-2xl bg-white px-3 py-4 text-center shadow-sm"
    >
      <Icon size={20} color="var(--reviva-gold)" />
      <span className="text-2xl font-bold" style={{ color: "var(--reviva-green)" }}>
        {count}
        {suffix}
      </span>
      <span className="text-xs leading-tight text-slate-500">{label}</span>
    </div>
  );
}

export default function AboutPreview() {
  return (
    <section className="bg-[var(--reviva-cream)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-[32px] shadow-xl">
              <Image
                src="/images/about/about-preview.png"
                alt="Heena — Reviva Nutrition"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm border border-white">
                <p className="font-semibold text-sm" style={{ color: "var(--reviva-green)" }}>
                  Root-Cause Healing
                </p>
                <p className="mt-0.5 text-xs text-slate-500">Wellness begins from within</p>
              </div>
            </div>

            {/* Animated stats row */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {statsData.map((stat) => (
                <AnimatedCounter key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <span
              className="inline-block rounded-full px-4 py-2 text-sm font-medium"
              style={{
                backgroundColor: "var(--reviva-gold-light)",
                color: "var(--reviva-green)",
              }}
            >
              About Reviva Nutrition
            </span>

            <h2
              className="mt-4 text-4xl md:text-5xl lg:text-6xl leading-tight"
              style={{
                color: "var(--reviva-green)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Helping You Heal,
              <br />
              Naturally.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              At Reviva Nutrition, we believe true wellness comes from addressing the root cause
              rather than simply managing symptoms.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Our approach combines personalized nutrition, sustainable lifestyle practices, and
              evidence-based guidance to help you build long-term health and vitality.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <FeaturePill icon={<Heart size={16} />} text="Personalized" />
              <FeaturePill icon={<Leaf size={16} />} text="Root-Cause" />
              <FeaturePill icon={<ShieldCheck size={16} />} text="Sustainable" />
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-sm transition-all hover:scale-105 hover:shadow-md"
              style={{ backgroundColor: "var(--reviva-green)" }}
            >
              Learn More About Heena
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeaturePill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm border border-slate-100">
      <span style={{ color: "var(--reviva-green)" }}>{icon}</span>
      <span className="text-sm font-medium text-slate-700">{text}</span>
    </div>
  );
}
