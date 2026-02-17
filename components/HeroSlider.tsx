"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SLIDES = [
  {
    bg: "https://therankinggeeks.ai/wp-content/uploads/2023/11/neon-ai-on-a-keyboard.jpg",
    title: "Digital Marketing",
    highlight: "Services",
    subtitle: "Future-Proofing For Web Presence With AI and SEO Coverage",
  },
  {
    bg: "https://therankinggeeks.ai/wp-content/uploads/2023/12/Google-my-business-GMB.jpg",
    title: "Empowering The Future Of",
    highlight: "WEB & SEO With AI",
    subtitle: "Transform your online presence with AI-driven strategies",
  },
  {
    bg: "https://therankinggeeks.ai/wp-content/uploads/2023/11/robot-s-hands-typing-on-keyboard.jpg",
    title: "Smart Solutions",
    highlight: "For Modern Business",
    subtitle: "Leverage cutting-edge technology for growth",
  },
  {
    bg: "https://therankinggeeks.ai/wp-content/uploads/2023/12/search-engine-optimization-online-marketing-concept_31965-10840.jpg",
    title: "Lead With",
    highlight: "Innovation",
    subtitle: "AI and SEO coverage that drives results",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.bg}
            alt=""
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          {/* Dark overlay for text readability - left side darker where heading sits */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,12,20,0.92) 0%, rgba(0,12,20,0.7) 35%, rgba(0,12,20,0.4) 65%, transparent 100%)",
            }}
          />
          {/* Teal brand tint */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 50% at 20% 50%, rgba(46,218,241,0.15) 0%, transparent 70%)",
            }}
          />
        </div>
      ))}

      <div className="relative z-10 max-w-[1290px] mx-auto px-4 sm:px-6 w-full">
        <div key={current} className="max-w-2xl">
          <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-semibold capitalize leading-[1.3em] tracking-wide animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <span className="text-trg-accent">{SLIDES[current].title} </span>
            <span className="text-trg-primary">{SLIDES[current].highlight}</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-trg-text/90 font-light animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {SLIDES[current].subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Link href="/services" className="elementor-button elementor-animation-float trg-button text-white">
              Explore Now
            </Link>
            <Link href="/contact-us" className="elementor-button elementor-animation-float trg-button text-white">
              Talk to an expert
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center">
        {[
          { logo: "/logos/google.png", text: "Partner" },
          { logo: "/logos/business.png", text: "Business Partner" },
          { logo: "/logos/settings.png", text: "Solutions Partner" },
          { logo: "/logos/shopify.png", text: "Shopify" },
        ].map((partner, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center gap-1 p-2 border-2 bg-[#01141D]/80 backdrop-blur transition-all duration-300 hover:border-[#2EDAF1] hover:shadow-[0_0_20px_rgba(46,218,241,0.4)] ${
              i === current
                ? "border-[#2EDAF1] shadow-[0_0_20px_rgba(46,218,241,0.4)]"
                : "border-[#2EDAF1]/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          >
            <Image
              src={partner.logo}
              alt={partner.text}
              width={36}
              height={36}
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 object-contain shrink-0"
            />
            <span className="text-[10px] sm:text-xs md:text-sm text-white/90 font-medium text-center leading-tight">
              {partner.text}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
