import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <section className="py-20 bg-dark-card/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-accent">Active Digital Solution</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Where expertise meets innovation in digital marketing and web development.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Active Digital Solution, where expertise meets innovation in a journey of success. Our smart AI-powered marketing solutions redefine campaigns while our adept web developers bring your ideas to life.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We assist in leading digital transformation teams of specialists in crafting digital strategies and building businesses. At Active Digital Solution, we prioritize our clients needs above all else.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Innovation is in our DNA. We stay at the forefront of technology trends, integrating the latest tools, frameworks, and methodologies into our web app development process and smart SEO services.
          </p>

          <div className="mt-12 p-8 bg-dark-card border border-dark-border rounded-lg">
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
