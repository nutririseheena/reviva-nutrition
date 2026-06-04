"use client";

import { ArrowRight, MonitorSmartphone, TrendingUp, Users, Star } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import { motion } from "framer-motion";
import { heroMetrics, heroGrowthData } from "@/data/hero";

const leftVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Slide3() {
  return (
    <section className="relative overflow-hidden bg-[var(--reviva-cream)]">
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(47, 107, 45, 0.05)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(244, 178, 27, 0.06)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-8 py-10 sm:py-12 lg:grid-cols-[55%_45%] lg:gap-12 lg:py-0 lg:min-h-[700px]">
          {/* Left: Text */}
          <motion.div variants={leftVariants} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{
                borderColor: "var(--reviva-gold)",
                backgroundColor: "var(--reviva-gold-light)",
              }}
            >
              <MonitorSmartphone size={13} color="var(--reviva-gold)" />
              <span
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: "var(--reviva-green)" }}
              >
                Meet Me Online
              </span>
            </motion.div>

            <motion.p variants={item} className="text-lg font-medium text-slate-500">
              Expert guidance —
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-1 font-bold leading-[1.05] tracking-tight"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--reviva-green)",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              }}
            >
              From
              <br />
              Anywhere.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-lg text-xl font-semibold leading-snug text-slate-700"
            >
              Personalized nutrition, from your home.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-3 max-w-md text-base leading-relaxed text-slate-500"
            >
              Get personalized nutrition support, progress tracking, and lifestyle guidance wherever
              you are — all online.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document.getElementById("consult-cta")?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "var(--reviva-green)" }}
              >
                Book Online Consultation
                <ArrowRight size={17} />
              </button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap gap-8 border-t border-slate-200 pt-8"
            >
              {[
                { value: "Video", label: "Consultations" },
                { value: "Chat", label: "WhatsApp Support" },
                { value: "Plans", label: "Sent Digitally" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-base font-bold" style={{ color: "var(--reviva-green)" }}>
                    {value}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Laptop + Stats mockup */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px]">
              <div
                className="absolute -inset-6 -z-10 rounded-[50px] blur-3xl"
                style={{ backgroundColor: "rgba(47, 107, 45, 0.1)" }}
              />

              {/* Laptop shell */}
              <div className="relative">
                {/* Screen bezel */}
                <div
                  className="w-full rounded-t-[18px] rounded-b-[6px] p-[10px] pb-[8px] shadow-2xl"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  {/* Traffic lights */}
                  <div className="mb-2 flex items-center gap-1.5 px-1">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </div>

                  {/* Dashboard screen */}
                  <div className="rounded-[10px] bg-white p-4 overflow-hidden">
                    {/* Screen header */}
                    <div className="mb-3 flex items-center justify-between">
                      <div>
                        <p
                          className="text-[11px] font-semibold"
                          style={{ color: "var(--reviva-green)" }}
                        >
                          Client Progress Dashboard
                        </p>
                        <p className="text-[9px] text-slate-400">Updated today</p>
                      </div>
                      <div
                        className="rounded-full px-2 py-0.5 text-[9px] font-semibold text-white"
                        style={{ backgroundColor: "var(--reviva-gold)" }}
                      >
                        LIVE
                      </div>
                    </div>

                    {/* Metrics row */}
                    <div className="mb-3 grid grid-cols-3 gap-2">
                      <MetricCard
                        icon={Users}
                        value={`${heroMetrics.consultations}+`}
                        label="Consultations"
                      />
                      <MetricCard
                        icon={TrendingUp}
                        value={`${heroMetrics.successStories}+`}
                        label="Success"
                      />
                      <MetricCard
                        icon={Star}
                        value={`${heroMetrics.satisfaction}%`}
                        label="Satisfaction"
                      />
                    </div>

                    {/* Chart */}
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-2">
                      <p className="mb-1 text-[9px] font-medium text-slate-500">
                        Client Growth — 2024
                      </p>
                      <div className="h-[90px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart
                            data={heroGrowthData}
                            margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
                          >
                            <defs>
                              <linearGradient id="clientGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2f6b2d" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#2f6b2d" stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <XAxis
                              dataKey="month"
                              tick={{ fontSize: 7, fill: "#94a3b8" }}
                              axisLine={false}
                              tickLine={false}
                            />
                            <YAxis hide />
                            <Tooltip
                              contentStyle={{ fontSize: 10, padding: "2px 6px" }}
                              itemStyle={{ fontSize: 9 }}
                            />
                            <Area
                              type="monotone"
                              dataKey="clients"
                              stroke="#2f6b2d"
                              strokeWidth={2}
                              fill="url(#clientGradient)"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                      <p className="mt-1 text-center text-[9px] text-slate-400">
                        Client Success Growth
                      </p>
                    </div>
                  </div>
                </div>

                {/* Laptop base */}
                <div
                  className="mx-auto h-[8px] w-[85%] rounded-b-[6px]"
                  style={{ backgroundColor: "#2a2a2a" }}
                />
                <div
                  className="mx-auto h-[4px] w-full rounded-b-[10px]"
                  style={{ backgroundColor: "#3a3a3a" }}
                />
              </div>

              {/* Floating card — Live Clients */}
              {/* <motion.div
                className="absolute -left-6 top-10 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
              >
                <div className="rounded-full p-1.5" style={{ backgroundColor: "var(--reviva-gold-light)" }}>
                  <Users size={14} color="var(--reviva-green)" />
                </div>
                <span className="text-sm font-semibold text-slate-700">1200+ Clients</span>
              </motion.div> */}

              {/* Floating card — 95% Success */}
              {/* <motion.div
                className="absolute -right-6 top-[40%] flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
              >
                <div className="rounded-full p-1.5" style={{ backgroundColor: "rgba(100,200,100,0.15)" }}>
                  <Star size={14} color="var(--reviva-gold)" fill="var(--reviva-gold)" />
                </div>
                <span className="text-sm font-semibold text-slate-700">95% Success Rate</span>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div
      className="rounded-xl border border-slate-100 p-2 text-center"
      style={{ background: "linear-gradient(135deg, #f0f7ef 0%, #ffffff 100%)" }}
    >
      <Icon size={12} color="var(--reviva-gold)" className="mx-auto mb-1" />
      <div className="text-sm font-bold" style={{ color: "var(--reviva-green)" }}>
        {value}
      </div>
      <div className="text-[9px] text-slate-500">{label}</div>
    </div>
  );
}
