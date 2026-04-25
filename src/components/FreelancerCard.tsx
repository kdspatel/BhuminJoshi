"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLongLine } from "@remixicon/react";

interface CardProps {
  imgUrl: string;
  title: string;
  date: string;
  slug: string;
}

const FreelancerCard: React.FC<CardProps> = ({
  imgUrl,
  title,
  date,
  slug,
}) => {
  return (
    <div className="group">

      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl">

        <Image
          src={imgUrl}
          alt={title}
          width={600}
          height={450}
          priority
          className="w-full h-[450px] sm:h-[500px] lg:h-[550px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            href={`/freelancer/${slug}`}
            aria-label={`View work: ${title}`}
            className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium tracking-wide hover:bg-neutral-200 transition transform translate-y-4 group-hover:translate-y-0"
          >
            View Work
            <RiArrowRightUpLongLine size={18} />
          </Link>
        </div>

      </div>

      {/* Content */}
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-lg font-serif text-white">{title}</h3>
        <span className="text-sm text-neutral-400">{date}</span>
      </div>

    </div>
  );
};

export default FreelancerCard;