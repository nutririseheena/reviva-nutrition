"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#faf8f2]/85 shadow-md border-b border-[#2f6b2d]/10"
          : "bg-[var(--reviva-cream)]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}

          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/reviva-logo.png"
              alt="Reviva Nutrition"
              width={180}
              height={60}
              priority
              className={`h-auto transition-all duration-300 ${
                scrolled ? "w-[120px]" : "w-[140px]"
              }`}
            />
          </Link>

          {/* Navigation */}

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="transition hover:text-[var(--reviva-green)]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="transition hover:text-[var(--reviva-green)]"
            >
              About
            </Link>

            <Link
              href="/consult"
              className="transition hover:text-[var(--reviva-green)]"
            >
              Consult
            </Link>

            <Link
              href="/testimonials"
              className="transition hover:text-[var(--reviva-green)]"
            >
              Testimonials
            </Link>
          </nav>

          {/* CTA */}

          <button
            className="rounded-full px-5 py-2 font-medium transition hover:scale-105"
            style={{
              backgroundColor: "var(--reviva-gold)",
              color: "#fff",
            }}
          >
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
}