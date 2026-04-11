import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLongLine } from "@remixicon/react";

interface CardProps {
  img: string;
  title: string;
  date: string;
  slug: string;
}

const PortfolioCard: React.FC<CardProps> = ({
  img,
  title,
  date,
  slug,
}) => {
  return (
    <div className="group">
      {/* Card Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={img}
          alt={title}
          width={600}
          height={450}
          className="w-full h-[450px] sm:h-[500px] lg:h-[550px] object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

        {/* View Project Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <Link
            href={`/portfolio/${slug}`}
            aria-label={`View project: ${title}`}
            className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 font-medium hover:bg-neutral-200 transition"
          >
            View Project
            <RiArrowRightUpLongLine size={18} />
          </Link>
        </div>
      </div>

      {/* Card Content */}
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-lg font-serif text-white">{title}</h3>
        <span className="text-sm text-neutral-400">{date}</span>
      </div>
    </div>
  );
};

export default PortfolioCard;