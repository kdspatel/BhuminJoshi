"use client";
import React, { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // Show button after 300px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black shadow-lg hover:scale-110 transition-transform">
        <RiArrowUpLine size={24} />
      </div>
    </button>
  );
};

export default BackToTop;