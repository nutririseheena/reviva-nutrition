"use client";

import { ArrowRight, MonitorSmartphone } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

import { heroMetrics, heroGrowthData } from "@/data/hero";

export default function Slide3() {
  return (
    <section className="bg-[var(--reviva-cream)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
              style={{
                backgroundColor: "rgba(244,178,27,0.15)",
                color: "var(--reviva-green)",
              }}
            >
              <MonitorSmartphone size={16} />
              Meet Me Online
            </span>

            <h2
              className="mt-6 text-4xl lg:text-6xl"
              style={{
                color: "var(--reviva-green)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Expert Nutrition
              <br />
              Guidance From
              <br />
              Anywhere.
            </h2>

            <p className="mt-6 max-w-lg text-lg text-slate-600">
              Get personalized nutrition support, progress tracking,
              and lifestyle guidance from the comfort of your home.
            </p>

            <button
              className="mt-8 flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white transition hover:scale-105"
              style={{
                backgroundColor: "var(--reviva-green)",
              }}
            >
              Book Online Consultation
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right - Laptop */}

          <div className="relative">
            <div className="rounded-[32px] bg-slate-900 p-4 shadow-2xl">
              <div className="rounded-[24px] bg-white p-6">
                {/* Stats */}

                <div className="grid grid-cols-3 gap-4">
                  <MetricCard
                    value={`${heroMetrics.consultations}+`}
                    label="Consultations"
                  />

                  <MetricCard
                    value={`${heroMetrics.successStories}+`}
                    label="Success Stories"
                  />

                  <MetricCard
                    value={`${heroMetrics.satisfaction}%`}
                    label="Satisfaction"
                  />
                </div>

                {/* Chart */}

                <div className="mt-8 h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={heroGrowthData}>
                      <XAxis dataKey="month" />

                      <Tooltip />

                      <Area
                        type="monotone"
                        dataKey="clients"
                        stroke="#2f6b2d"
                        fill="#2f6b2d"
                        fillOpacity={0.2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-4 text-center text-sm text-slate-500">
                  Client Success Growth
                </div>
              </div>
            </div>

            {/* Floating Badge */}

            <div className="absolute -right-4 -top-4 rounded-2xl bg-white px-4 py-3 shadow-lg">
              <div className="font-semibold text-[var(--reviva-green)]">
                95% Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 p-4 text-center">
      <div
        className="text-2xl font-bold"
        style={{
          color: "var(--reviva-green)",
        }}
      >
        {value}
      </div>

      <div className="mt-1 text-sm text-slate-500">
        {label}
      </div>
    </div>
  );
}