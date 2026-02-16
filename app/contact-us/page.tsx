import ContactForm from "@/components/ContactForm";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import { Mail, Phone, MapPin, Share2 } from "lucide-react";

// Use your plexus/network image: add it to public/contact-hero-bg.png and set src="/contact-hero-bg.png"
const CONTACT_HERO_IMAGE =
  "https://therankinggeeks.ai/wp-content/uploads/2023/11/neon-ai-on-a-keyboard.jpg";

export default function ContactPage() {
  return (
    <div>
      <section className="relative py-20 overflow-hidden min-h-[280px] flex items-center">
        <Image
          src={CONTACT_HERO_IMAGE}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,12,20,0.9) 0%, rgba(0,12,20,0.65) 50%, rgba(0,12,20,0.4) 100%)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Stay Connected with <span className="text-accent">Us</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Find the Perfect Solution for Your Business
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-12">
            Get in touch and lets collaborate with Active Digital Solution
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Office Location</h3>
                  <p className="text-gray-400">9540 W QUAIL AVE<br />PEORIA, AZ 85382</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Phone Number</h3>
                  <a href="tel:9802772918" className="text-accent hover:underline">(980) 277-2918</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Drop Us a Line</h3>
                  <a href="mailto:adam@activedigitalsolution.com" className="text-accent hover:underline">adam@activedigitalsolution.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Share2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Follow Us</h3>
                  <SocialIcons
                    className="flex gap-3"
                    iconClassName="text-accent hover:text-accent/80 transition-colors"
                  />
                </div>
              </div>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-lg p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
