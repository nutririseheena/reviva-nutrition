import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + About */}

          <div>
            <Image
              src="/images/logo/reviva-logo.png"
              alt="Reviva Nutrition"
              width={180}
              height={60}
              className="h-auto"
            />

            <p className="mt-4 leading-relaxed text-slate-600">
              Personalized nutrition and lifestyle guidance
              focused on addressing root causes and helping
              you achieve sustainable wellness.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-lg font-semibold text-[var(--reviva-green)]">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-slate-600">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-[var(--reviva-green)]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-[var(--reviva-green)]"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/consult"
                  className="transition hover:text-[var(--reviva-green)]"
                >
                  Consult
                </Link>
              </li>

              <li>
                <Link
                  href="/testimonials"
                  className="transition hover:text-[var(--reviva-green)]"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-lg font-semibold text-[var(--reviva-green)]">
              Contact
            </h3>

            <div className="mt-4 space-y-4 text-slate-600">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>nutririseheena@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Social Media */}

          <div>
            <h3 className="text-lg font-semibold text-[var(--reviva-green)]">
              Follow Us
            </h3>

            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="rounded-full border border-slate-200 p-3 transition hover:border-[var(--reviva-green)] hover:text-[var(--reviva-green)]"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-slate-200 p-3 transition hover:border-[var(--reviva-green)] hover:text-[var(--reviva-green)]"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-slate-200 p-3 transition hover:border-[var(--reviva-green)] hover:text-[var(--reviva-green)]"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-slate-200 p-3 transition hover:border-[var(--reviva-green)] hover:text-[var(--reviva-green)]"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Follow Reviva Nutrition for wellness tips,
              nutrition guidance, and health updates.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Reviva Nutrition.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}