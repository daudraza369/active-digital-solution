import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import VideoCarousel from "@/components/VideoCarousel";
import HeroSlider from "@/components/HeroSlider";
import AnimatedSection from "@/components/AnimatedSection";
import FunFactCounter from "@/components/FunFactCounter";
import servicesData from "@/data/services.json";
import projectsData from "@/data/projects.json";
import testimonialsData from "@/data/testimonials.json";
import { Users, Building2, Award } from "lucide-react";
import { SERVICE_IMAGES } from "@/lib/service-images";

const SHOW_VIDEO_CAROUSEL = false; // set to true to show Customer Reviews section

const SERVICE_GROUPS = [
  {
    title: "SEO & Visibility",
    description: "Boost your search rankings and local presence",
    ids: ["search-engine-optimisation", "google-business-profile"],
  },
  {
    title: "Marketing & Growth",
    description: "Reach and engage your audience effectively",
    ids: ["social-media-marketing", "geo-fencing"],
  },
  {
    title: "Development & Innovation",
    description: "Build powerful digital solutions",
    ids: ["web-development", "ai-optimisation-gemini"],
  },
] as const;

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);
  const testimonials = testimonialsData.written;

  const STATS = [
    { num: 200, suffix: "+", label: "Trusted Partners", delay: 200 },
    { num: 1300, suffix: "+", label: "Trusted Customers", delay: 400 },
    { num: 250, suffix: "+", label: "Permanent Clients", delay: 600 },
    { num: 4, suffix: "+", label: "Years Of Experience", delay: 800 },
  ];

  return (
    <div className="elementor elementor-16 elementor-page elementor-page-16">
      <HeroSlider />

      {SHOW_VIDEO_CAROUSEL && <VideoCarousel />}

      {/* Why Choose */}
      <section className="relative py-20 overflow-hidden bg-[#000C14]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(at center center, #2EDAF1 0%, #053F48 76%)",
          }}
        />
        <div className="relative max-w-[1290px] mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fadeInUp" delay={600}>
            <h2 className="font-outfit text-3xl md:text-4xl font-semibold text-center mb-4 text-white">
              Why Choose <span className="text-[#2EDAF1]">Active Digital Solution</span>?
            </h2>
            <p className="text-white/80 text-center max-w-2xl mx-auto mb-16 font-light">
              We assist in leading digital transformation teams of specialists in crafting digital strategies and building businesses.
            </p>
          </AnimatedSection>
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
              <AnimatedSection key={i} animation="fadeInUp" delay={200 + i * 100}>
                <div className="trg-card group cursor-default">
                  <div className="w-14 h-14 rounded-full bg-[#2EDAF1] flex items-center justify-center text-[#01141D] mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-orbitron text-xl font-medium text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 font-light text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Transform CTA - middle section */}
      <section className="py-20 bg-[#000C14] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundColor: "#000C14" }}
        />
        <div className="relative max-w-[1290px] mx-auto px-4 text-center">
          <h2 className="font-outfit text-3xl md:text-4xl font-semibold text-white mb-2">
            Transform Your Business into a
          </h2>
          <h2 className="font-outfit text-3xl md:text-4xl font-semibold text-[#2EDAF1] mb-4">
            Technological Powerhouse
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 font-light">
            Enjoy enhanced innovation, efficiency, and remarkable growth as we guide your company to success in the digital era.
          </p>
          <Link href="/services" className="elementor-button elementor-animation-float trg-button inline-block text-white">
            Learn More
          </Link>
        </div>
      </section>

      {/* Our Services - grouped by category */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, #2EDAF1 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-[1290px] mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fadeInUp" delay={0}>
            <h2 className="font-outfit text-3xl md:text-4xl font-semibold text-center mb-4">
              Our <span className="text-[#2EDAF1]">Services</span>
            </h2>
            <p className="text-white/80 text-center max-w-2xl mx-auto mb-16 font-light">
              Lets explore our cutting-edge SEO and Development services for transformative possibilities.
            </p>
          </AnimatedSection>
          <div className="space-y-16">
            {SERVICE_GROUPS.map((group, groupIdx) => {
              const services = group.ids
                .map((id) => servicesData.find((s: { id: string }) => s.id === id))
                .filter(Boolean) as { id: string; name: string; shortDescription: string; slug: string }[];
              if (services.length === 0) return null;
              return (
                <AnimatedSection key={group.title} animation="fadeInUp" delay={100 + groupIdx * 150}>
                  <div className="mb-6">
                    <h3 className="font-orbitron text-xl md:text-2xl font-medium text-[#2EDAF1] mb-1">
                      {group.title}
                    </h3>
                    <p className="text-white/60 text-sm font-light">{group.description}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, i) => (
                      <ServiceCard
                        key={service.id}
                        name={service.name}
                        description={service.shortDescription}
                        href={`/services/${service.slug}`}
                        image={SERVICE_IMAGES[service.id]}
                      />
                    ))}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#2EDAF1] hover:text-[#2EDAF1]/80 font-medium transition"
            >
              View All Services
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-[#000C14]">
        <div className="max-w-[1290px] mx-auto px-4">
          <h2 className="font-outfit text-3xl md:text-4xl font-semibold text-center mb-4">
            Our Successfully Completed <span className="text-[#2EDAF1]">Projects</span>
          </h2>
          <p className="text-white/80 text-center max-w-2xl mx-auto mb-12 font-light">
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
              className="inline-flex items-center gap-2 text-[#2EDAF1] hover:text-[#2EDAF1]/80 font-medium"
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
          <p className="text-white/80 text-center max-w-3xl mx-auto mb-12 font-light">
            Experience the future of Clients loyalty with our Smart SEO and Web Development services!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t: { id: string; quote: string; name: string; title: string }) => (
              <div key={t.id} className="trg-card">
                <p className="text-white/90 mb-4 font-light italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-[#2EDAF1]">{t.name}</p>
                <p className="text-white/60 text-sm">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-16 border-y border-white/16">
        <div className="max-w-[1290px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {STATS.map((s, i) => (
              <div key={i}>
                <p className="font-orbitron text-3xl md:text-4xl font-semibold text-[#2EDAF1]">
                  <FunFactCounter end={s.num} suffix={s.suffix} duration={3500} />
                </p>
                <p className="text-white/70 text-xs sm:text-sm mt-1 break-words">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead CTA - robot left, text right - positioned at top of footer */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,12,20,0.98) 0%, rgba(5,63,72,0.6) 50%, rgba(0,12,20,0.98) 100%)",
        }}
      >
        <div className="relative max-w-[1290px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative hidden lg:block h-[320px] md:h-[400px] order-2 lg:order-1">
              <Image
                src="https://therankinggeeks.ai/wp-content/uploads/2023/11/robot-ZHM8ZSZ.png"
                alt=""
                fill
                className="object-contain object-left"
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="font-outfit text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-white leading-tight">
                Lead with Innovation - Join us for best Strategies for{" "}
                <span className="text-[#2EDAF1]">Web & SEO Advancement</span>
              </h2>
              <p className="text-white/80 max-w-xl mx-auto lg:mx-0 mb-8 font-light">
                Contact us today and let Active Digital Solutions innovative strategies lead your WEB and SEO endeavors to new heights of innovation and success.
              </p>
              <Link
                href="/contact-us"
                className="elementor-button elementor-animation-float trg-button inline-block text-white"
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
