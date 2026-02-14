import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import VideoCarousel from "@/components/VideoCarousel";
import servicesData from "@/data/services.json";
import projectsData from "@/data/projects.json";
import testimonialsData from "@/data/testimonials.json";

export default function Home() {
  const featuredServices = servicesData.slice(0, 4);
  const featuredProjects = projectsData.slice(0, 3);
  const testimonials = testimonialsData.written;

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-dark-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Digital Marketing <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Future-Proofing For Web Presence With AI and SEO Coverage
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="border border-accent px-8 py-3 rounded hover:bg-accent hover:text-dark-bg transition"
            >
              Explore Now
            </Link>
            <Link
              href="/contact-us"
              className="border border-accent px-8 py-3 rounded hover:bg-accent hover:text-dark-bg transition"
            >
              Talk to an expert
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-dark-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose <span className="text-accent">Active Digital Solution</span>?
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            We assist in leading digital transformation teams of specialists in crafting digital strategies and building businesses.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
              <h3 className="text-accent font-semibold text-lg mb-2">Client-Centric Approach:</h3>
              <p className="text-gray-400">
                At Active Digital Solution, we prioritize our clients needs above all else. We take the time to understand your business objectives, challenges, and vision, ensuring that our web app solutions are tailored to meet your specific requirements.
              </p>
            </div>
            <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
              <h3 className="text-accent font-semibold text-lg mb-2">Innovative Solutions:</h3>
              <p className="text-gray-400">
                Innovation is in our DNA. Active Digital Solution stays at the forefront of technology trends, integrating the latest tools, frameworks, and methodologies into our web app development process and smart SEO services.
              </p>
            </div>
            <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
              <h3 className="text-accent font-semibold text-lg mb-2">Latest Technology</h3>
              <p className="text-gray-400">
                At Active Digital Solution, we redefine possibilities by harnessing the latest in AI-driven intelligence, blockchain security, Progressive Web Apps (PWAs), and cutting-edge edge computing solutions.
              </p>
            </div>
            <div className="bg-dark-bg border border-dark-border rounded-lg p-6">
              <h3 className="text-accent font-semibold text-lg mb-2">Trusted By Big Companies</h3>
              <p className="text-gray-400">
                Our proven track record with industry leaders speaks to our commitment to excellence and results-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <VideoCarousel />

      {/* Transform CTA */}
      <section className="py-20 bg-dark-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Business into a
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Technological Powerhouse
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Enjoy enhanced innovation, efficiency, and remarkable growth as we guide your company to success in the digital era.
          </p>
          <Link
            href="/services"
            className="inline-block border border-accent px-8 py-3 rounded hover:bg-accent hover:text-dark-bg transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Lets explore our cutting-edge SEO and different Development services for transformative possibilities.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
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
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover"
            >
              View All Services
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-dark-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Successfully Completed <span className="text-accent">Projects</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Explore our completed projects—an intersection of innovation and implementation, each telling a success story on its own.
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
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover"
            >
              View All Project
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Find Out Why Our Clients Keep Coming Back
          </h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Experience the future of Clients loyalty with our Smart SEO and Web Development services! Lets find out How Our Unparalleled Technology Delights Clients and Drives Results. Hear Directly from Our Satisfied Clients!
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

      {/* Stats */}
      <section className="py-12 border-y border-dark-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">0+</p>
              <p className="text-gray-400">Trusted Partners</p>
            </div>
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
          </div>
        </div>
      </section>

      {/* Lead CTA */}
      <section className="py-20 bg-dark-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lead with Innovation - Join us for best Strategies for Web & SEO Advancement
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Contact us today and let Active Digital Solutions innovative strategies lead your WEB and SEO endeavors to new heights of innovation and success.
          </p>
          <Link
            href="/contact-us"
            className="inline-block border border-accent px-8 py-3 rounded hover:bg-accent hover:text-dark-bg transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
