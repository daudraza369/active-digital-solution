import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import servicesData from "@/data/services.json";
import testimonialsData from "@/data/testimonials.json";

export default function ServicesPage() {
  const testimonials = testimonialsData.written;

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-dark-card/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Active Digital Solution for Proactive Digital Marketing Services
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service: { id: string; name: string; shortDescription: string; slug: string }) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-dark-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">0+</p>
              <p className="text-gray-400">Trusted Customers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">0+</p>
              <p className="text-gray-400">Permanent Clients</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">0+</p>
              <p className="text-gray-400">Years Of Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">0+</p>
              <p className="text-gray-400">Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Find Out Why Our Clients Keep Coming Back
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Experience the future of Clients loyalty with our Smart SEO and Web Development services!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t: { id: string; quote: string; name: string; title: string }) => (
              <div
                key={t.id}
                className="bg-dark-card border border-dark-border rounded-lg p-6"
              >
                <p className="text-gray-300 mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-accent">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">
            Get in touch and lets collaborate with Active Digital Solution
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Office Location</p>
              <p>9540 W QUAIL AVE<br />PEORIA, AZ 85382</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Phone Number</p>
              <a href="tel:9802772918" className="text-accent">(980) 277-2918</a>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Drop Us a Line</p>
              <a href="mailto:adam@activedigitalsolution.com" className="text-accent">adam@activedigitalsolution.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
