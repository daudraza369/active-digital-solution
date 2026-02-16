import Link from "next/link";
import Image from "next/image";

const ABOUT_HERO_IMAGE = "/Gemini_Generated_Image_d6clrld6clrld6cl.png";

export default function AboutPage() {
  return (
    <div>
      <section className="relative py-20 overflow-hidden min-h-[280px] flex items-center">
        <Image
          src={ABOUT_HERO_IMAGE}
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
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-accent">Active Digital Solution</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Where expertise meets innovation in digital marketing and web development.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="p-4 sm:p-6 bg-dark-card border border-dark-border rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-accent">Our Mission</h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                To empower businesses with client-centric digital solutions that drive growth. We put your needs first, understanding your objectives and delivering strategies that deliver measurable results.
              </p>
            </div>
            <div className="p-4 sm:p-6 bg-dark-card border border-dark-border rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-accent">Our Vision</h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                To lead innovation in digital marketing and web development, harnessing AI and cutting-edge technology to help brands thrive in an ever-evolving digital landscape.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-8 mb-8 border-y border-dark-border text-center">
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">200+</p>
              <p className="text-gray-400 text-xs sm:text-sm">Trusted Partners</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">1300+</p>
              <p className="text-gray-400 text-xs sm:text-sm">Customers</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">250+</p>
              <p className="text-gray-400 text-xs sm:text-sm">Permanent Clients</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">4+</p>
              <p className="text-gray-400 text-xs sm:text-sm">Years Experience</p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-accent">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12">
            <div className="flex gap-3 p-3 rounded-lg bg-dark-card/50 border border-dark-border">
              <span className="text-accent font-semibold shrink-0">SEO</span>
              <p className="text-gray-400 text-sm sm:text-base">Search engine optimization to boost rankings and organic traffic.</p>
            </div>
            <div className="flex gap-3 p-3 rounded-lg bg-dark-card/50 border border-dark-border">
              <span className="text-accent font-semibold shrink-0">Web Dev</span>
              <p className="text-gray-400 text-sm sm:text-base">Custom websites, apps, and software tailored to your vision.</p>
            </div>
            <div className="flex gap-3 p-3 rounded-lg bg-dark-card/50 border border-dark-border">
              <span className="text-accent font-semibold shrink-0">AI & Marketing</span>
              <p className="text-gray-400 text-sm sm:text-base">AI-driven campaigns, social media, and Google Business Profile.</p>
            </div>
            <div className="flex gap-3 p-3 rounded-lg bg-dark-card/50 border border-dark-border">
              <span className="text-accent font-semibold shrink-0">Growth</span>
              <p className="text-gray-400 text-sm sm:text-base">Geo-fencing, analytics, and strategies that scale your business.</p>
            </div>
          </div>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
            Active Digital Solution, where expertise meets innovation in a journey of success. Our smart AI-powered marketing solutions redefine campaigns while our adept web developers bring your ideas to life.
          </p>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
            We assist in leading digital transformation teams of specialists in crafting digital strategies and building businesses. At Active Digital Solution, we prioritize our clients needs above all else.
          </p>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            Innovation is in our DNA. We stay at the forefront of technology trends, integrating the latest tools, frameworks, and methodologies into our web app development process and smart SEO services.
          </p>

          <div className="mt-12 p-4 sm:p-6 md:p-8 bg-dark-card border border-dark-border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
            <p className="text-gray-400 mb-4">9540 W QUAIL AVE, PEORIA, AZ 85382</p>
            <p className="text-gray-400 mb-4">
              <a href="tel:9802772918" className="text-accent hover:underline">(980) 277-2918</a>
            </p>
            <p className="text-gray-400 mb-4">
              <a href="mailto:adam@activedigitalsolution.com" className="text-accent hover:underline">adam@activedigitalsolution.com</a>
            </p>
            <Link
              href="/contact-us"
              className="inline-block border border-accent px-6 py-2 rounded hover:bg-accent hover:text-dark-bg transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
