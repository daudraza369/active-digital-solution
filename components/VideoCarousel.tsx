"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const VIDEO_TESTIMONIALS = [
  { id: 1, title: "Heirloom Roofing", video: "IMG_8127-1.mp4" },
  { id: 2, title: "Jubilee Movers", video: "IMG_5996-1.mp4" },
  { id: 3, title: "Leamon Aid Construction", video: "Video-1.mp4" },
  { id: 4, title: "Olive Construction", video: "IMG_0-4.mp4" },
  { id: 5, title: "MJ Mountain Builders", video: "IMG_0-3.mp4" },
  { id: 6, title: "Customer Testimonial", video: "VID_20240227_131007851-1.mp4" },
  { id: 7, title: "Customer Testimonial", video: "media_20250310_215033_2058355812101990175.mp4" },
  { id: 8, title: "Customer Testimonial", video: "Review-Video-2.3.2025_2.mp4" },
];

export default function VideoCarousel() {
  return (
    <section className="py-20 bg-trg-bg">
      <div className="max-w-[1290px] mx-auto px-4">
        <h2 className="font-outfit text-3xl md:text-4xl font-semibold text-center mb-4">
          Customer <span className="text-trg-accent">Reviews</span>
        </h2>
        <p className="text-trg-text/80 text-center max-w-2xl mx-auto mb-12 font-light">
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
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-trg-accent",
          }}
          className="pb-12 [&_.swiper-pagination-bullet]:bg-white/40 [&_.swiper-pagination-bullet-active]:bg-trg-accent"
        >
          {VIDEO_TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="trg-card aspect-video overflow-hidden">
                <video
                  src={`/videos/${item.video}`}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  autoPlay
                  loop
                  controls
                  controlsList="nodownload"
                />
                <div className="p-3 text-center">
                  <p className="font-orbitron text-trg-accent font-medium text-sm">{item.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
