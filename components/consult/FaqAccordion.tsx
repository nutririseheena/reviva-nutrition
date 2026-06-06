"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
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
            FAQs
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl"
            style={{ color: "var(--reviva-green)", fontFamily: "var(--font-heading)" }}
          >
            Common Questions
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-lg text-slate-500">
            Everything you need to know before your first session.
          </p>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-[16px] bg-[var(--reviva-cream)] shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-semibold leading-snug text-slate-800">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  color="var(--reviva-green)"
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                  >
                    <p className="border-t border-slate-100 px-6 py-4 text-sm leading-relaxed text-slate-600">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
