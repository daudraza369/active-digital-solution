import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <section className="py-20 bg-dark-card/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Stay Connected with <span className="text-accent">Us</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find the Perfect Solution for Your Business
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
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
              <div>
                <h3 className="font-semibold mb-2">Official Social Media</h3>
                <p className="text-gray-500 text-sm">LinkedIn, Facebook, Instagram - Connect with us</p>
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
