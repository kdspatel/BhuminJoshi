import React from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioSectionItems } from "@/src/data/data";
import { RiArrowRightUpLongLine } from "@remixicon/react";

const PortfolioPage = () => {
  return (
    <section className="py-16 mt-20 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
          Captured Vows & Memories
        </h1>

        {/* Divison */}
        <div className="flex justify-center my-6">
          <div className="w-20 h-[1px] bg-neutral-500" />
        </div>

        {/* Paragrapgh */}
        <p className="text-center max-w-2xl mx-auto mb-16 text-white-400">
          A curated collection of timeless memories, cinematic wedding stories,
          and artistic photography captured with passion and precision.
        </p>

        {/* Portfolio Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {portfolioSectionItems.map((item) => (
            <div key={item.slug} className="space-y-5 group">
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  width={600}
                  height={750}
                  className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-neutral-200 transition"
                  >
                    View Project
                    <RiArrowRightUpLongLine size={18} />
                  </Link>
                </div>
              </div>

              {/* Title & Location */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif">{item.title}</h2>
                <span className="text-sm text-gray-500">{item.location}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
