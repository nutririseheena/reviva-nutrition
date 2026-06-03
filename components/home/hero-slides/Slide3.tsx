"use client";

import { ArrowRight, MonitorSmartphone } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

import HeroLayout from "./HeroLayout";
import { heroMetrics, heroGrowthData } from "@/data/hero";

export default function Slide3() {
  return (
    <HeroLayout
      leftContent={
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
            className="mt-6 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
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
            className="w-fit mt-8 flex items-center gap-2 rounded-full px-5 py-3 text-sm md:text-base font-medium text-white transition hover:scale-105"
            style={{
              backgroundColor: "var(--reviva-green)",
            }}
          >
            Book Online Consultation
            <ArrowRight size={18} />
          </button>
        </div>
      }
      rightContent={
        <div className="relative flex justify-center w-full">
          {/* Laptop */}

          <div className="h-[220px] md:h-[500px] w-[90%] md:w-full max-w-[540px] rounded-[32px] bg-slate-900 p-4 shadow-2xl">
            <div className="flex h-full flex-col justify-center md:justify-start rounded-[24px] bg-white p-4 md:p-6">
              {/* Stats */}

              <div className="grid grid-cols-3 gap-2 md:gap-4">
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

              <div className="mt-6 flex-1 hidden md:block">
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

              <div className="hidden md:block mt-4 text-center text-sm text-slate-500">
                Client Success Growth
              </div>
            </div>
          </div>

          
        </div>
      }
    />
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
    <div className="rounded-2xl border border-slate-100 p-2 md:p-4 text-center">
      <div
        className="text-2xl font-bold"
        style={{
          color: "var(--reviva-green)",
        }}
      >
        {value}
      </div>

      <div className="mt-1 text-[10px] md:text-sm text-slate-500">
        {label}
      </div>
    </div>
  );
}