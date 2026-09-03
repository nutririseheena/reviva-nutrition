"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import type { MythFactPair } from "@/data/myths-facts";

interface MythFactCardProps {
  pair: MythFactPair;
  index: number;
}

export default function MythFactCard({ pair, index }: MythFactCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.05 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      {/* Myth Button */}
      <button
        onClick={toggleExpand}
        className="w-full text-left"
        aria-expanded={isExpanded}
        aria-label={`Toggle myth and fact: ${pair.myth}`}
      >
        <div
          className="flex items-start gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 cursor-pointer group"
          style={{ backgroundColor: index % 2 === 0 ? "#fef2f2" : "#fff5f5" }}
        >
          <X size={20} className="mt-0.5 shrink-0 sm:mt-1" style={{ color: "#b91c1c" }} />
          <div className="flex-1 min-w-0">
            <p
              className="text-sm sm:text-base leading-relaxed transition-colors"
              style={{ color: "var(--reviva-warm-brown)" }}
            >
              {pair.myth}
            </p>
          </div>
          <div className="shrink-0 ml-2 mt-0.5">
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-slate-400"
            >
              <ChevronIcon />
            </motion.div>
          </div>
        </div>
      </button>

      {/* Fact - Expandable */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              className="flex items-start gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 border-t border-slate-100"
              style={{
                background:
                  index % 2 === 0
                    ? "linear-gradient(135deg, #f0f7ef 0%, #fafdf9 100%)"
                    : "linear-gradient(135deg, #eaf4e8 0%, #f5fbf4 100%)",
              }}
            >
              <Check
                size={20}
                className="mt-0.5 shrink-0 sm:mt-1"
                style={{ color: "var(--reviva-green)" }}
              />
              <div className="flex-1 min-w-0">
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: "var(--reviva-green-dark)" }}
                >
                  {pair.fact}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ChevronIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );
}
