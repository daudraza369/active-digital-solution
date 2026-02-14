"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const SERVICES = [
  { name: "Search Engine optimisation", href: "/services/search-engine-optimisation" },
  { name: "Google business profile", href: "/services/google-business-profile" },
  { name: "Social media marketing", href: "/services/social-media-marketing" },
  { name: "Web development", href: "/services/web-development" },
  { name: "Geo-fencing", href: "/services/geo-fencing" },
  { name: "AI optimisation & Gemini", href: "/services/ai-optimisation-gemini" },
];

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-trg-bg/95 backdrop-blur border-b border-trg-border shrinker overflow-visible">
      <div className="max-w-[1290px] mx-auto px-4 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 shrinking-logo flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Active Digital Solution"
            width={320}
            height={120}
            className="h-[9rem] w-auto object-contain min-w-[140px]"
            unoptimized
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-trg-primary hover:text-trg-accent transition font-medium"
                >
                  {link.name}
                  <ChevronDown
                    className={`w-4 h-4 transition ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 py-2 w-56 bg-trg-card border border-trg-border rounded-xl shadow-xl">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2 text-trg-text/80 hover:text-trg-accent hover:bg-trg-bg transition"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-trg-primary hover:text-trg-accent transition font-medium"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact-us"
            className="trg-button inline-block text-trg-primary"
          >
            Get a proposal
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-trg-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-trg-border bg-trg-bg">
          <div className="max-w-[1290px] mx-auto px-4 py-4 space-y-2">
            {NAV_LINKS.filter((l) => !l.hasDropdown).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-trg-primary hover:text-trg-accent"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <span className="block py-2 text-trg-accent font-medium">Services</span>
              <div className="pl-4 space-y-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block py-2 text-trg-text/80 hover:text-trg-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/contact-us"
              className="block py-2 trg-button text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get a proposal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
