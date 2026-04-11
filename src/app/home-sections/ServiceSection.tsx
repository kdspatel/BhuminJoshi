import React from "react";
import Title from "@/src/components/Title";
import Divider from "@/src/components/Divider";
import Image from "next/image";
import { serviceHighlights } from "@/src/data/data";

const ServiceSection = () => {
  return (
    <section className="section" id="services">
      <div className="container">
        {/* Title */}
        <Title
          subtitle="Services"
          title="What I Offer"
          link="Know More"
          href="/services"
        />

        <Divider />

        {/* Wrapper */}
        <div className="relative mt-16">
          {/* Big Image */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] rounded-3xl overflow-hidden">
            <Image
              src="/images/service-banner1.jpg"
              alt="Service Banner"
              fill
              className="object-cover"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Floating Card */}
          <div
            className="
              relative -mt-24 sm:-mt-28 md:-mt-36
              lg:absolute lg:bottom-[-60px] lg:right-10 lg:w-[600px]
              w-[90%] mx-auto
            "
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 lg:p-10 shadow-2xl">
              <h2 className="text-3xl font-semibold mb-4 text-white">
                Events Photography
              </h2>

              <p className="text-neutral-200 mb-6 leading-relaxed">
                With over a decade of experience, we capture moments that feel
                real, timeless, and deeply personal. Every story is approached
                with a cinematic eye and emotional depth.
              </p>

              {/* Highlights */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Image
                    src="/images/star.png"
                    alt="icon"
                    width={18}
                    height={18}
                  />
                  <p className="text-white font-medium text-lg">
                    Service Highlights
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {serviceHighlights.map((item) => (
                    <div
                      key={item.id}
                      className="px-4 py-3 bg-neutral-800 border border-neutral-600 text-sm text-white tracking-wide hover:bg-white hover:text-black transition duration-300 cursor-pointer flex items-center gap-3"
                    >
                      <span className="w-1 h-5 bg-white"></span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra spacing for overlap */}
        <div className="h-24 lg:h-32"></div>
      </div>
    </section>
  );
};

export default ServiceSection;
