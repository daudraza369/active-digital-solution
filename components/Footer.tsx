import Link from "next/link";
import Image from "next/image";

const DotIcon = () => (
  <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-trg-accent shrink-0 mr-2" />
);

export default function Footer() {
  return (
    <footer className="bg-trg-bg border-t border-trg-border py-12">
      <div className="max-w-[1290px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo + Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.svg"
                alt="Active Digital Solution"
                width={280}
                height={140}
                className="h-48 w-auto object-contain min-w-[180px]"
              />
            </Link>
            <p className="text-trg-text/70 text-sm font-light leading-relaxed max-w-xs">
              Active Digital Solution, where expertise meets innovation. Our smart AI-powered marketing solutions redefine campaigns while our adept web, app and game developers bring your ideas to life.
            </p>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h3 className="font-orbitron text-trg-accent font-medium mb-4">Our Services</h3>
            <ul className="space-y-2 text-trg-text/70">
              <li>
                <Link href="/services/search-engine-optimisation" className="flex items-center hover:text-trg-accent transition">
                  <DotIcon />
                  Search Engine optimisation
                </Link>
              </li>
              <li>
                <Link href="/services/google-business-profile" className="flex items-center hover:text-trg-accent transition">
                  <DotIcon />
                  Google business profile
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-marketing" className="flex items-center hover:text-trg-accent transition">
                  <DotIcon />
                  Social media marketing
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="flex items-center hover:text-trg-accent transition">
                  <DotIcon />
                  Web development
                </Link>
              </li>
              <li>
                <Link href="/services/geo-fencing" className="flex items-center hover:text-trg-accent transition">
                  <DotIcon />
                  Geo-fencing
                </Link>
              </li>
              <li>
                <Link href="/services/ai-optimisation-gemini" className="flex items-center hover:text-trg-accent transition">
                  <DotIcon />
                  AI optimisation & Gemini
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-orbitron text-trg-accent font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-trg-text/70">
              <li>
                <Link href="/" className="flex items-center hover:text-trg-accent transition">
                  <DotIcon />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="flex items-center hover:text-trg-accent transition">
                  <DotIcon />
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center hover:text-trg-accent transition">
                  <DotIcon />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="flex items-center hover:text-trg-accent transition">
                  <DotIcon />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-orbitron text-trg-accent font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-trg-text/70">
              <li>
                <a href="tel:9802772918" className="flex items-center hover:text-trg-accent transition">
                  <DotIcon />
                  (980) 277-2918
                </a>
              </li>
              <li>
                <a href="mailto:adam@activedigitalsolution.com" className="flex items-center hover:text-trg-accent transition break-all">
                  <DotIcon />
                  adam@activedigitalsolution.com
                </a>
              </li>
              <li className="flex items-start">
                <DotIcon />
                <span>9540 W QUAIL AVE<br />PEORIA, AZ 85382</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar - copyright left, legal right */}
        <div className="mt-10 pt-8 border-t border-trg-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-trg-text/60 text-sm">
            ©2026 activedigitalsolution.com | All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
            <Link href="/privacy-policy" className="flex items-center text-trg-accent hover:text-trg-accent/80 transition">
              <DotIcon />
              Privacy Policy
            </Link>
            <Link href="/cancellation-and-refund" className="flex items-center text-trg-accent hover:text-trg-accent/80 transition">
              <DotIcon />
              Cancellation And Refund
            </Link>
            <Link href="/terms-and-conditions" className="flex items-center text-trg-accent hover:text-trg-accent/80 transition">
              <DotIcon />
              Terms And Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
