import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import VideoCarousel from "@/components/VideoCarousel";
import HeroSlider from "@/components/HeroSlider";
import servicesData from "@/data/services.json";
import projectsData from "@/data/projects.json";
import testimonialsData from "@/data/testimonials.json";
import { Users, Building2, Award } from "lucide-react";

export default function Home() {
  const featuredServices = servicesData.slice(0, 4);
  const featuredProjects = projectsData.slice(0, 3);
  const testimonials = testimonialsData.written;

  return (
    <div>
      <HeroSlider />

      {/* Why Choose */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(at center center, #2EDAF1 0%, #053F48 76%)",
          }}
        />
        <div className="relative max-w-[1290px] mx-auto px-4">
          <h2 className="font-outfit text-3xl md:text-4xl font-semibold text-center mb-4 text-trg-primary">
            Why Choose <span className="text-trg-accent">Active Digital Solution</span>?
          </h2>
          <p className="text-trg-text/80 text-center max-w-2xl mx-auto mb-16 font-light">
            We assist in leading digital transformation teams of specialists in crafting digital strategies and building businesses.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Client-Centric Approach:",
                desc: "At Active Digital Solution, we prioritize our clients needs above all else. We take the time to understand your business objectives, challenges, and vision.",
                icon: Users,
              },
              {
                title: "Innovative Solutions:",
                desc: "Innovation is in our DNA. We stay at the forefront of technology trends, integrating the latest tools and methodologies.",
                icon: Building2,
              },
              {
                title: "Latest Technology",
                desc: "We redefine possibilities by harnessing AI-driven intelligence, blockchain security, PWAs, and edge computing.",
                icon: Award,
              },
              {
                title: "Trusted By Big Companies",
                desc: "Our proven track record with industry leaders speaks to our commitment to excellence.",
                icon: Building2,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="trg-card group cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-trg-accent flex items-center justify-center text-trg-accent-dark mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-orbitron text-xl font-medium text-trg-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-trg-text/80 font-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoCarousel />

      {/* Transform CTA */}
      <section className="py-20 bg-trg-bg relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundColor: "#000C14" }}
        />
        <div className="relative max-w-[1290px] mx-auto px-4 text-center">
          <h2 className="font-outfit text-3xl md:text-4xl font-semibold text-trg-primary mb-2">
            Transform Your Business into a
          </h2>
          <h2 className="font-outfit text-3xl md:text-4xl font-semibold text-trg-accent mb-4">
            Technological Powerhouse
          </h2>
          <p className="text-trg-text/80 max-w-2xl mx-auto mb-8 font-light">
            Enjoy enhanced innovation, efficiency, and remarkable growth as we guide your company to success in the digital era.
          </p>
          <Link href="/services" className="trg-button inline-block text-trg-primary">
            Learn More
          </Link>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20">
        <div className="max-w-[1290px] mx-auto px-4">
          <h2 className="font-outfit text-3xl md:text-4xl font-semibold text-center mb-4">
            Our <span className="text-trg-accent">Services</span>
          </h2>
          <p className="text-trg-text/80 text-center max-w-2xl mx-auto mb-12 font-light">
            Lets explore our cutting-edge SEO and Development services for transformative possibilities.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service: { id: string; name: string; shortDescription: string; slug: string }) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-trg-accent hover:text-trg-accent/80 font-medium"
            >
              View All Services
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-trg-bg">
        <div className="max-w-[1290px] mx-auto px-4">
          <h2 className="font-outfit text-3xl md:text-4xl font-semibold text-center mb-4">
            Our Successfully Completed <span className="text-trg-accent">Projects</span>
          </h2>
          <p className="text-trg-text/80 text-center max-w-2xl mx-auto mb-12 font-light">
            Explore our completed projects—an intersection of innovation and implementation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project: { id: string; name: string; thumbnail: string; url: string }) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                thumbnail={project.thumbnail}
                url={project.url}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-trg-accent hover:text-trg-accent/80 font-medium"
            >
              View All Project
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20">
        <div className="max-w-[1290px] mx-auto px-4">
          <h2 className="font-outfit text-3xl md:text-4xl font-semibold text-center mb-4">
            Find Out Why Our Clients Keep Coming Back
          </h2>
          <p className="text-trg-text/80 text-center max-w-3xl mx-auto mb-12 font-light">
            Experience the future of Clients loyalty with our Smart SEO and Web Development services!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t: { id: string; quote: string; name: string; title: string }) => (
              <div
                key={t.id}
                className="trg-card"
              >
                <p className="text-trg-text/90 mb-4 font-light italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-trg-accent">{t.name}</p>
                <p className="text-trg-text/60 text-sm">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-trg-border">
        <div className="max-w-[1290px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "200+", label: "Trusted Partners" },
              { num: "1300+", label: "Trusted Customers" },
              { num: "250+", label: "Permanent Clients" },
              { num: "4+", label: "Years Of Experience" },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-orbitron text-3xl md:text-4xl font-semibold text-trg-accent">
                  {s.num.replace("+", "")}
                  <span className="text-2xl align-super ml-0.5">+</span>
                </p>
                <p className="text-trg-text/70 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead CTA - TRG layout: robot left, text right */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,12,20,0.98) 0%, rgba(5,63,72,0.6) 50%, rgba(0,12,20,0.98) 100%)",
        }}
      >
        <div className="relative max-w-[1290px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Robot image - left (hidden on mobile, shown on lg) */}
            <div className="relative hidden lg:block h-[320px] md:h-[400px] order-2 lg:order-1">
              <Image
                src="https://therankinggeeks.ai/wp-content/uploads/2023/11/robot-ZHM8ZSZ.png"
                alt=""
                fill
                className="object-contain object-left"
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
            </div>
            {/* Content - right */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="font-outfit text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-trg-primary leading-tight">
                Lead with Innovation - Join us for best Strategies for{" "}
                <span className="text-trg-accent">Web & SEO Advancement</span>
              </h2>
              <p className="text-trg-text/80 max-w-xl mx-auto lg:mx-0 mb-8 font-light">
                Contact us today and let Active Digital Solutions innovative strategies lead your WEB and SEO endeavors to new heights of innovation and success.
              </p>
              <Link
                href="/contact-us"
                className="trg-button inline-block text-trg-primary animate-float"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
