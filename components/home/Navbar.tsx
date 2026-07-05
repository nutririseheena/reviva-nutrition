"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      if (window.innerWidth >= 768) setMobileOpen(false);
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
            className="flex items-center justify-between overflow-hidden"
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
                src="/images/logo/reviva-logo.png"
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
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-slate-700 transition hover:text-[var(--reviva-green)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/consult"
              className="hidden md:inline-flex items-center rounded-full px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:scale-105 hover:shadow-md"
              style={{ backgroundColor: "var(--reviva-gold)" }}
            >
              Book Consultation
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden rounded-xl p-2 transition hover:bg-[#eef5eb]"
              onClick={() => setMobileOpen((prev) => !prev)}
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
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-[#eef5eb] hover:text-[var(--reviva-green)]"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/consult"
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
