import React from "react";
import { weddingFilms } from "@/src/data/data";

const WeddingFilmsPage = () => {
  return (
    <section className="py-16 mt-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-16">
          Unforgettable Moments, Timeless Films
        </h1>

        {/* Subheading */}
        <p className="text-center max-w-3xl mx-auto text-white mb-16">
          Celebrate the magic of love before the wedding day. Our pre-wedding
          films capture genuine emotions, timeless romance, and the beginning
          of a lifelong journey together.
        </p>

        {/* Films Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {weddingFilms.map((film) => (
            <div key={film.id} className="space-y-5">

              {/* Video */}
              <div className="relative w-full overflow-hidden rounded-lg shadow-md aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${film.youtubeId}`}
                  title={film.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Title & Location */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif text-white">
                  {film.title}
                </h2>
                <span className="text-sm text-white">
                  {film.location}
                </span>
              </div>

              {/* Description */}
              <p className="text-white text-sm leading-relaxed">
                {film.description}
              </p>

              {/* Read More */}
              {/* <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-white hover:gap-3 transition-all duration-300"
              >
                Read More →
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingFilmsPage;