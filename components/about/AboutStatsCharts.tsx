"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import {
  specialtyBarData,
  programSplitData,
  aboutStatsData,
  type StatItem,
} from "@/data/about-stats";

function AnimatedCounter({ icon: Icon, target, suffix, label }: StatItem) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const totalFrames = 60;
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
      className="flex flex-col items-center gap-2 rounded-2xl bg-white px-6 py-6 text-center shadow-sm"
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-full"
        style={{ backgroundColor: "var(--reviva-gold-light)" }}
      >
        <Icon size={22} color="var(--reviva-gold)" />
      </div>
      <span className="text-3xl font-bold" style={{ color: "var(--reviva-green)" }}>
        {count}
        {suffix}
      </span>
      <span className="text-sm leading-tight text-slate-500">{label}</span>
    </div>
  );
}

// Recharts needs client-only render (hydration guard)
function Charts() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Mount guard for recharts hydration — must run after first render
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  if (!mounted) {
    return (
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="h-72 animate-pulse rounded-[24px] bg-slate-100" />
        <div className="h-72 animate-pulse rounded-[24px] bg-slate-100" />
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Horizontal Bar Chart */}
      <motion.div
        className="rounded-[24px] bg-white p-6 shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-base font-semibold" style={{ color: "var(--reviva-green)" }}>
          Specialization Areas
        </h3>
        <p className="mb-4 text-xs text-slate-400">Approximate client success rate by condition</p>
        <ResponsiveContainer width="100%" height={240} minWidth={0}>
          <BarChart data={specialtyBarData} layout="vertical" margin={{ left: 0, right: 16 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
            <XAxis
              type="number"
              domain={[0, 100]}
              tick={{ fontSize: 11 }}
              tickFormatter={(v) => `${v}%`}
            />
            <YAxis type="category" dataKey="area" width={120} tick={{ fontSize: 11 }} />
            <Tooltip
              formatter={(value) => [`${value}%`, "Success Rate"]}
              contentStyle={{
                borderRadius: 12,
                border: "none",
                fontSize: 12,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            />
            <Bar dataKey="pct" fill="var(--reviva-green)" radius={[0, 6, 6, 0]} maxBarSize={22} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Donut Chart */}
      <motion.div
        className="rounded-[24px] bg-white p-6 shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <h3 className="text-base font-semibold" style={{ color: "var(--reviva-green)" }}>
          Program Duration Breakdown
        </h3>
        <p className="mb-4 text-xs text-slate-400">Distribution of client program lengths</p>
        <ResponsiveContainer width="100%" height={240} minWidth={0}>
          <PieChart>
            <Pie
              data={programSplitData}
              cx="50%"
              cy="45%"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={4}
              dataKey="value"
            >
              {programSplitData.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`${value}%`, "Clients"]}
              contentStyle={{
                borderRadius: 12,
                border: "none",
                fontSize: 12,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              formatter={(value) => <span style={{ fontSize: 12 }}>{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}

export default function AboutStatsCharts() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block rounded-full px-4 py-2 text-sm font-medium"
            style={{ backgroundColor: "var(--reviva-gold-light)", color: "var(--reviva-green)" }}
          >
            By the Numbers
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl"
            style={{ color: "var(--reviva-green)", fontFamily: "var(--font-heading)" }}
          >
            Results That Speak
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-500">
            Over a decade of practice, hundreds of clients, and measurable outcomes across diverse
            health conditions.
          </p>
        </motion.div>

        {/* Animated counters */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {aboutStatsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AnimatedCounter {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="mt-10">
          <Charts />
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          * Stats are representative estimates based on program outcomes. Exact figures will be
          updated with verified data.
        </p>
      </div>
    </section>
  );
}
