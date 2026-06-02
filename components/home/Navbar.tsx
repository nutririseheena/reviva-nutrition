import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--reviva-cream)] border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}

          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/reviva-logo.png"
              alt="Reviva Nutrition"
              width={180}
              height={60}
              priority
              className="h-auto w-[140px]" // Adjust width and height as needed
            />
          </Link>

          {/* Navigation */}

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/consult">Consult</Link>
            <Link href="/testimonials">Testimonials</Link>
          </nav>

          {/* CTA */}

          <button
            className="rounded-full px-5 py-2 font-medium transition"
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