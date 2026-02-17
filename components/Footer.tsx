import Link from "next/link";
import Image from "next/image";
import SocialIcons from "@/components/SocialIcons";

const DotIcon = () => (
  <span className="elementor-icon-list-icon inline-flex items-center justify-center mr-2">
    <svg aria-hidden="true" className="w-3 h-3 text-[#2EDAF1]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
    </svg>
  </span>
);

export default function Footer() {
  return (
    <footer
      data-elementor-type="footer"
      data-elementor-id="131"
      className="elementor elementor-131 elementor-location-footer bg-[#000C14] border-t border-white/20 py-16 md:py-24"
    >
      <div className="elementor-element e-con-full e-flex e-con e-parent max-w-[1285px] mx-auto px-4 sm:px-8 md:px-16 flex flex-wrap justify-around gap-8 lg:gap-0 border-b border-white/20 pb-16 md:pb-24">
        {/* Column 1: Logo + Description */}
        <div className="elementor-element e-con-full e-flex e-con e-child w-full md:w-[25%] flex flex-col items-start">
          <div className="elementor-widget elementor-widget-image mb-4 w-full max-w-[360px]">
            <Link href="/" className="block w-full">
              <Image
                src="/logo.png"
                alt="Active Digital Solution"
                width={320}
                height={120}
                className="h-[80px] sm:h-[120px] md:h-[140px] lg:h-[180px] w-auto object-contain min-w-[140px] sm:min-w-[200px] max-w-full"
              />
            </Link>
          </div>
          <p className="elementor-widget-text-editor text-white font-normal text-sm md:text-base leading-relaxed max-w-xs">
            Active Digital Solution, where expertise meets innovation. Our smart AI-powered marketing solutions redefine campaigns while our adept web, app and game developers bring your ideas to life.
          </p>
        </div>

        {/* Column 2: Our Services */}
        <div className="elementor-element e-con-full e-flex e-con e-child w-full md:w-[25%] flex flex-col pl-0 md:pl-12 lg:pl-20">
          <h3 className="elementor-heading-title elementor-size-default text-[#2EDAF1] font-semibold text-xl sm:text-2xl mb-4">
            Our Services
          </h3>
          <ul className="elementor-icon-list-items space-y-2">
            {[
              { name: "Search Engine optimisation", href: "/services/search-engine-optimisation" },
              { name: "Google business profile", href: "/services/google-business-profile" },
              { name: "Google Ads", href: "/services/google-ads" },
              { name: "Social media marketing", href: "/services/social-media-marketing" },
              { name: "Web development", href: "/services/web-development" },
              { name: "Geo-fencing", href: "/services/geo-fencing" },
              { name: "AI optimisation & Gemini", href: "/services/ai-optimisation-gemini" },
            ].map((item) => (
              <li key={item.href} className="elementor-icon-list-item">
                <Link href={item.href} className="flex items-center text-white hover:text-[#2EDAF1] transition-colors">
                  <DotIcon />
                  <span className="elementor-icon-list-text">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="elementor-element e-con-full e-flex e-con e-child w-full md:w-[25%] flex flex-col pl-0 md:pl-12 lg:pl-16">
          <h3 className="elementor-heading-title elementor-size-default text-[#2EDAF1] font-semibold text-xl sm:text-2xl mb-4">
            Quick Links
          </h3>
          <ul className="elementor-icon-list-items space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "Projects", href: "/projects" },
              { name: "About Us", href: "/about" },
              { name: "Career", href: "/career" },
              { name: "Contact Us", href: "/contact-us" },
            ].map((item) => (
              <li key={item.href} className="elementor-icon-list-item">
                <Link href={item.href} className="flex items-center text-white hover:text-[#2EDAF1] transition-colors">
                  <DotIcon />
                  <span className="elementor-icon-list-text">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Image
              src="/google-partner.png"
              alt="Google Partner"
              width={160}
              height={60}
              className="h-14 w-auto object-contain brightness-110 contrast-110"
            />
          </div>
        </div>

        {/* Column 4: Contact */}
        <div className="elementor-element e-con-full e-flex e-con e-child w-full md:w-[25%] flex flex-col pl-0 md:pl-4">
          <h3 className="elementor-heading-title elementor-size-default text-[#2EDAF1] font-semibold text-xl sm:text-2xl mb-4">
            Contact
          </h3>
          <ul className="elementor-icon-list-items space-y-2">
            <li className="elementor-icon-list-item">
              <a href="tel:9802772918" className="flex items-center text-white hover:text-[#2EDAF1] transition-colors">
                <DotIcon />
                <span className="elementor-icon-list-text">(980) 277-2918</span>
              </a>
            </li>
            <li className="elementor-icon-list-item">
              <a href="mailto:adam@activedigitalsolution.com" className="flex items-center text-white hover:text-[#2EDAF1] transition-colors break-all">
                <DotIcon />
                <span className="elementor-icon-list-text">adam@activedigitalsolution.com</span>
              </a>
            </li>
            <li className="elementor-icon-list-item flex items-start">
              <DotIcon />
              <span className="elementor-icon-list-text">9540 W QUAIL AVE<br />PEORIA, AZ 85382</span>
            </li>
            <li className="elementor-icon-list-item">
              <SocialIcons className="flex gap-3" iconClassName="text-white" />
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="elementor-element e-flex e-con-boxed e-con e-parent max-w-[1285px] mx-auto px-4 sm:px-8 py-8 flex flex-col md:flex-row md:items-center md:justify-evenly gap-4">
          <div className="elementor-widget-text-editor text-center md:text-left text-white/80 text-sm">
            ©2026 activedigitalsolution.com | All Rights Reserved.
          </div>
        <div className="flex flex-wrap justify-center md:justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
          <Link href="/privacy-policy" className="flex items-center text-[#2EDAF1] hover:text-white transition-colors">
            <span className="elementor-icon-list-icon mr-2">•</span>
            <span>Privacy Policy</span>
          </Link>
          <Link href="/cancellation-and-refund" className="flex items-center text-[#2EDAF1] hover:text-white transition-colors">
            <span className="elementor-icon-list-icon mr-2">•</span>
            <span>Cancellation And Refund</span>
          </Link>
          <Link href="/terms-and-conditions" className="flex items-center text-[#2EDAF1] hover:text-white transition-colors">
            <span className="elementor-icon-list-icon mr-2">•</span>
            <span>Terms And Conditions</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
