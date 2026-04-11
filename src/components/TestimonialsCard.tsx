"use client";

import React from "react";
import Title from "./Title";
import Divider from "./Divider";
import SocialIcons from "./SocialIcons";
import { testimonialItems } from "../data/data";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { RiDoubleQuotesL, RiStarFill } from "@remixicon/react";

const UniqueTestimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-20 overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 blur-[120px] rounded-full"></div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Title */}
        <Title
          subtitle="Testimonials"
          title="What My Clients Say"
          link=""
        />

        <Divider />

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-12"
        >
          {testimonialItems.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div className="group relative h-[320px] w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-purple-500/20">
                
                {/* Gradient Border Glow */}
                <div className="absolute inset-0 rounded-2xl group-hover:opacity-20"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  
                  {/* Quote Icon */}
                  <RiDoubleQuotesL
                    size={40}
                    className="text-purple-400 opacity-60"
                  />

                  {/* Testimonial Text */}
                  <p className="text-neutral-300 text-sm leading-relaxed line-clamp-4">
                    {item.text}
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, index) => (
                      <RiStarFill key={index} size={18} />
                    ))}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <h4 className="text-white font-semibold">
                        {item.name}
                      </h4>
                      <p className="text-xs text-neutral-400">
                        {item.location}
                      </p>
                    </div>
                    <SocialIcons />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default UniqueTestimonials;
