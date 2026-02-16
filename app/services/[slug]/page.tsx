import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import servicesData from "@/data/services.json";
import { SERVICE_IMAGES } from "@/lib/service-images";

export async function generateStaticParams() {
  return servicesData.map((s: { slug: string }) => ({ slug: s.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s: { slug: string }) => s.slug === slug);

  if (!service) notFound();

  const heroImage = SERVICE_IMAGES[(service as { id: string }).id];

  return (
    <div>
      <section className="relative py-20 overflow-hidden min-h-[280px] flex items-center">
        {heroImage && (
          <>
            <Image
              src={heroImage}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, rgba(0,12,20,0.92) 0%, rgba(0,12,20,0.7) 50%, rgba(0,12,20,0.4) 100%)",
              }}
            />
          </>
        )}
        {!heroImage && <div className="absolute inset-0 bg-dark-card/50" />}
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {service.name}
          </h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="mt-16 p-8 bg-dark-card border border-dark-border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Get in touch and lets collaborate with Active Digital Solution
            </h2>
            <div className="space-y-2 text-gray-400">
              <p><span className="text-accent">Office Location:</span> 9540 W QUAIL AVE, PEORIA, AZ 85382</p>
              <p><span className="text-accent">Phone:</span> <a href="tel:9802772918" className="hover:text-accent">(980) 277-2918</a></p>
              <p><span className="text-accent">Email:</span> <a href="mailto:adam@activedigitalsolution.com" className="hover:text-accent">adam@activedigitalsolution.com</a></p>
            </div>
            <Link
              href="/contact-us"
              className="inline-block mt-6 border border-accent px-6 py-2 rounded hover:bg-accent hover:text-dark-bg transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
