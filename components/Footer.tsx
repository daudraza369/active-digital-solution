import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-accent font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/search-engine-optimisation" className="hover:text-accent">Search Engine optimisation</Link></li>
              <li><Link href="/services/google-business-profile" className="hover:text-accent">Google business profile</Link></li>
              <li><Link href="/services/social-media-marketing" className="hover:text-accent">Social media marketing</Link></li>
              <li><Link href="/services/web-development" className="hover:text-accent">Web development</Link></li>
              <li><Link href="/services/geo-fencing" className="hover:text-accent">Geo-fencing</Link></li>
              <li><Link href="/services/ai-optimisation-gemini" className="hover:text-accent">AI optimisation & Gemini</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-accent font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-accent">Home</Link></li>
              <li><Link href="/projects" className="hover:text-accent">Projects</Link></li>
              <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-accent">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-accent font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="tel:9802772918" className="hover:text-accent">(980) 277-2918</a></li>
              <li><a href="mailto:adam@activedigitalsolution.com" className="hover:text-accent">adam@activedigitalsolution.com</a></li>
              <li>9540 W QUAIL AVE<br />PEORIA, AZ 85382</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-dark-border text-gray-500 text-center text-sm">
          ©2026 activedigitalsolution.com | All Rights Reserved.
        </div>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <Link href="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
          <Link href="/cancellation-and-refund" className="hover:text-accent">Cancellation And Refund</Link>
          <Link href="/terms-and-conditions" className="hover:text-accent">Terms And Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
