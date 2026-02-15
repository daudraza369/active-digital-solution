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
    <header
      data-elementor-type="header"
      data-elementor-id="45"
      className="elementor elementor-45 elementor-location-header elementor-sticky shrinker fixed top-0 left-0 right-0 z-50 bg-[#01141D]/95 backdrop-blur border-b border-white/10"
    >
      <div className="elementor-container max-w-[1285px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[64px] py-1.5">
        {/* Logo - height fits header, width maximized for visibility */}
        <div className="elementor-element flex-shrink-0 h-full flex items-center">
          <Link href="/" className="shrinking-logo flex items-center h-full">
            <Image
              src="/logo.svg"
              alt="Active Digital Solution"
              width={320}
              height={120}
              className="h-[88px] sm:h-[100px] md:h-[120px] w-auto object-contain min-w-[240px] max-w-[520px]"
              unoptimized
            />
          </Link>
        </div>

        {/* Desktop nav */}
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
                  className="flex items-center gap-1 text-white hover:text-[#2EDAF1] transition font-semibold"
                >
                  {link.name}
                  <ChevronDown
                    className={`w-4 h-4 transition ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 py-2 w-56 bg-[#01141D] border border-white/20 rounded-xl shadow-xl">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2 text-white/80 hover:text-[#2EDAF1] hover:bg-white/5 transition"
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
                className="text-white hover:text-[#2EDAF1] transition font-semibold"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* CTA - TRG elementor-button with float animation */}
        <div className="hidden lg:block">
          <Link
            href="/contact-us"
            className="elementor-button elementor-animation-float inline-flex items-center justify-center !px-6 !py-2 text-sm font-medium text-white border border-[#2EDAF1] rounded-[50px] hover:bg-[#2EDAF1] hover:text-[#01141D] transition-colors"
          >
            Get a proposal
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#01141D]">
          <div className="max-w-[1290px] mx-auto px-4 py-4 space-y-2">
            {NAV_LINKS.filter((l) => !l.hasDropdown).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-white hover:text-[#2EDAF1]"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <span className="block py-2 text-[#2EDAF1] font-semibold">
                Services
              </span>
              <div className="pl-4 space-y-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block py-2 text-white/80 hover:text-[#2EDAF1]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/contact-us"
              className="elementor-button elementor-animation-float block py-3 text-center mt-4 px-8 border border-[#2EDAF1] rounded-[50px] text-white hover:bg-[#2EDAF1] hover:text-[#01141D] w-fit mx-auto"
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
