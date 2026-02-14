"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const VIDEO_TESTIMONIALS = [
  { id: 1, title: "Heirloom Roofing" },
  { id: 2, title: "Jubilee Movers" },
  { id: 3, title: "Leamon Aid Construction" },
  { id: 4, title: "Olive" },
  { id: 5, title: "Mark" },
  { id: 6, title: "MJ Mountain Builders" },
  { id: 7, title: "Jennifer's Happy Housekeeping" },
  { id: 8, title: "Temecula's Trusted Toolbox" },
];

export default function VideoCarousel() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Customer <span className="text-accent">Reviews</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Get an idea of result-driven solutions that changed the business experience of these owners.
        </p>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {VIDEO_TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-dark-card border border-dark-border rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-accent ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-accent font-medium">{item.title}</p>
                  <p className="text-gray-500 text-sm mt-1">Video testimonial</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
