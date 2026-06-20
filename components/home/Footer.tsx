import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { navLinks, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "var(--reviva-green-dark)" }}>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + About */}
          <div>
            <Image
              src="/images/logo/reviva-logo.png"
              alt="Reviva Nutrition"
              width={140}
              height={48}
              className="h-auto brightness-0 invert"
            />

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Personalized nutrition and lifestyle guidance focused on addressing root causes and
              helping you achieve sustainable wellness.
            </p>

            {/* Social Icons */}
            <div className="mt-4 flex gap-3">
              {siteConfig.social.instagram && (
                <SocialLink href={siteConfig.social.instagram} label="Instagram">
                  <FaInstagram size={16} />
                </SocialLink>
              )}
              {siteConfig.social.facebook && (
                <SocialLink href={siteConfig.social.facebook} label="Facebook">
                  <FaFacebookF size={16} />
                </SocialLink>
              )}
              <SocialLink href={siteConfig.social.youtube} label="YouTube">
                <FaYoutube size={16} />
              </SocialLink>
              {siteConfig.social.linkedin && (
                <SocialLink href={siteConfig.social.linkedin} label="LinkedIn">
                  <FaLinkedinIn size={16} />
                </SocialLink>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>

            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
              >
                <Mail size={16} className="shrink-0" />
                {siteConfig.contact.email}
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
              >
                <Phone size={16} className="shrink-0" />
                {siteConfig.contact.phoneDisplay}
              </a>

              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {siteConfig.contact.location}
              </div>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Start Your Journey
            </h3>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Ready to transform your health? Book an online consultation today.
            </p>

            <Link
              href="/consult"
              className="mt-4 inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105"
              style={{
                backgroundColor: "var(--reviva-gold)",
                color: "#fff",
              }}
            >
              Book Consult
            </Link>

            <a
              href={`https://wa.me/${siteConfig.contact.phone.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 text-xs text-white/60 transition hover:text-white"
            >
              or chat on WhatsApp →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-5 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Reviva Nutrition. All rights reserved.
          </p>

          <p className="text-xs text-white/40">Designed with care for your wellness journey.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/50 hover:text-white"
    >
      {children}
    </a>
  );
}
