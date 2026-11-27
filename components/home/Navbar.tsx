"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled((prev) => {
            if (!prev && window.scrollY > 80) return true;
            if (prev && window.scrollY < 50) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setExpandedMobile(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Spacer keeps page content below the fixed navbar */}
      <div className="h-24" aria-hidden="true" />
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{
          backgroundColor: scrolled ? "rgba(250,248,242,0.92)" : "rgba(250,248,242,1)",
          boxShadow: scrolled ? "0 1px 12px rgba(47,107,45,0.10)" : "none",
          borderBottom: scrolled ? "1px solid rgba(47,107,45,0.10)" : "1px solid transparent",
          transition: "background-color 350ms ease, box-shadow 350ms ease, border-color 350ms ease",
        }}
      >
        <div className="mx-auto max-w-7xl page-pad">
          <div
            className="flex items-center justify-between"
            style={{
              height: scrolled ? "76px" : "96px",
              transition: "height 350ms ease",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image
                src="/images/logo/reviva_logo.png"
                alt="Reviva Nutrition"
                width={180}
                height={60}
                priority
                style={{ height: "auto" }}
                className={`transition-all duration-[350ms] ${scrolled ? "w-[95px] sm:w-[120px] lg:w-[140px]" : "w-[110px] sm:w-[140px] lg:w-[165px]"}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 py-2 text-base font-medium text-slate-700 transition hover:text-[var(--reviva-green)]"
                  >
                    {link.label}
                    {link.submenu && (
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                      />
                    )}
                  </Link>

                  {link.submenu && (
                    <>
                      {/* Invisible hover bridge so the dropdown doesn't close in the gap */}
                      <div className="absolute left-0 right-0 top-full h-3" />
                      <div className="invisible absolute left-1/2 top-[calc(100%+0.75rem)] z-50 w-72 -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                        <div
                          className="rounded-2xl border bg-white p-2 shadow-xl"
                          style={{ borderColor: "rgba(47,107,45,0.12)" }}
                        >
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-[#eef5eb] hover:text-[var(--reviva-green)]"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center rounded-full px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:scale-105 hover:shadow-md"
              style={{ backgroundColor: "var(--reviva-gold)" }}
            >
              Book Consultation
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden rounded-xl p-2 transition hover:bg-[#eef5eb]"
              onClick={() =>
                setMobileOpen((prev) => {
                  if (prev) setExpandedMobile(null);
                  return !prev;
                })
              }
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <X size={22} color="var(--reviva-green)" />
              ) : (
                <Menu size={22} color="var(--reviva-green)" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="overflow-hidden border-t border-[#2f6b2d]/10 bg-[var(--reviva-cream)] md:hidden"
            >
              <nav className="flex flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <div className="flex items-center rounded-xl transition hover:bg-[#eef5eb]">
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex-1 px-3 py-3 text-base font-medium text-slate-700 transition hover:text-[var(--reviva-green)]"
                      >
                        {link.label}
                      </Link>
                      {link.submenu && (
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedMobile((prev) => (prev === link.href ? null : link.href))
                          }
                          aria-label={`Toggle ${link.label} submenu`}
                          aria-expanded={expandedMobile === link.href}
                          className="p-3 text-slate-500 transition hover:text-[var(--reviva-green)]"
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${expandedMobile === link.href ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {link.submenu && expandedMobile === link.href && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden pl-3"
                        >
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => {
                                setMobileOpen(false);
                                setExpandedMobile(null);
                              }}
                              className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-[#eef5eb] hover:text-[var(--reviva-green)]"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <Link
                  href="/consult#consult-form"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 flex justify-center rounded-full py-3 text-base font-semibold text-white transition hover:opacity-90"
                  style={{ backgroundColor: "var(--reviva-gold)" }}
                >
                  Book Consultation
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
