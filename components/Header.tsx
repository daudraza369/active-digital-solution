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
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur border-b border-dark-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Active Digital Solution" width={140} height={35} className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
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
                  className="flex items-center gap-1 hover:text-accent transition"
                >
                  {link.name}
                  <ChevronDown
                    className={`w-4 h-4 transition ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 py-2 w-56 bg-dark-card border border-dark-border rounded-lg shadow-xl">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2 text-gray-300 hover:text-accent hover:bg-dark-bg transition"
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
                className="hover:text-accent transition"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact-us"
            className="border border-accent px-6 py-2 rounded hover:bg-accent hover:text-dark-bg transition"
          >
            Get a proposal
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-dark-border bg-dark-bg">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block py-2 hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <div>
              <span className="block py-2 text-accent">Services</span>
              <div className="pl-4 space-y-1">
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block py-2 text-gray-300 hover:text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/projects"
              className="block py-2 hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="block py-2 hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className="block py-2 hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/contact-us"
              className="block py-2 border border-accent px-4 py-2 rounded text-center"
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
