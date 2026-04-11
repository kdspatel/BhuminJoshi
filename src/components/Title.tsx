import React from "react";
import Link from "next/link";
import { RiArrowRightLongLine } from "@remixicon/react";

interface TitleProps {
  subtitle: string;
  title: string;
  link?: string;
  href?: string;
}

const Title = ({ subtitle, title, link, href = "#" }: TitleProps) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-7">
      {/* Left Content */}
      <div>
        <p className="subtitle">{subtitle}</p>
        <h2>{title}</h2>
      </div>

      {/* Right Link */}
      {link && (
        <Link href={href} className="primary-btn flex items-center gap-2">
          {link}
          <span>
            <RiArrowRightLongLine size={20} />
          </span>
        </Link>
      )}
    </div>
  );
};

export default Title;