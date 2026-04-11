// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Button from "../../components/Button";
// import Marquee from "../../components/MarqueeSection";

// const images = [
//   "/images/banner1.jpg",
//   "/images/banner2.jpg",
//   "/images/banner3.jpg",
// ];

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section>
//       <div>
//         {/* Content */}
//         <div className="container grid lg:grid-cols-3 lg:items-center">

//           {/* Title 1*/}
//           <div>
//             <p className="subtitle">Professional Wedding Photographer</p>
//             <h1 className="text-[40px] sm:text-5xl md:text-6xl font-semibold">
//               Bhumin Joshi
//             </h1>
//           </div>

//           {/* Shape */}
//           <div className="max-lg:hidden">
//             <Image
//               src="/images/shape-1.svg"
//               alt="Shape"
//               width={346}
//               height={346}
//             />
//           </div>

//           {/* Title 2*/}
//           <div>
//             <Button label="Let's" />
//             <h2>Work Together</h2>
//           </div>
//         </div>

//         {/* Marquee */}
//         <Marquee />

//         {/* Banner Slider */}
//         <div className="flex justify-center">
//           <figure className="w-full relative">
//             {images.map((img, index) => (
//               <div
//                 key={index}
//                 className={`transition-opacity duration-1000 ease-in-out ${
//                   index === currentIndex
//                     ? "opacity-100"
//                     : "opacity-0 absolute inset-0"
//                 }`}
//               >
//                 <Image
//                   src={img}
//                   alt="Banner"
//                   width={1200}
//                   height={800}
//                   className="w-full h-auto rounded-2xl shadow-xl"
//                   priority
//                 />
//               </div>
//             ))}
//           </figure>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Button from "../../components/Button";
import Marquee from "../../components/MarqueeSection";

const HeroSection: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState<boolean>(false);

  // Trigger animation after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 800); // Delay before animation starts

    return () => clearTimeout(timer);
  }, []);

  // Parent container animation (stagger effect)
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  // Child fade-up animation
  const fadeUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full">
      {/* Video Background */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="/images/banner-vedio.mp4"
          className="absolute top-0 left-1/2 w-auto h-auto min-w-full min-h-full -translate-x-1/2 object-cover"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Centered Content */}
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center px-4 mt-10">
          <motion.div
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
          >
            {/* Subtitle */}
            <motion.p
              variants={fadeUpVariants}
              className="subtitle text-white mb-2 text-lg sm:text-xl"
            >
              Professional Wedding Photographer
            </motion.p>

            {/* Title */}
            <motion.h1
              variants={fadeUpVariants}
              className="text-[40px] sm:text-5xl md:text-6xl font-semibold text-white"
            >
              Bhumin Joshi
            </motion.h1>

            {/* Button */}
            {/* <motion.div variants={fadeUpVariants} className="mt-5">
              <Button label="Let's Work Together" />
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      {/* Marquee below video */}
      <Marquee />
    </section>
  );
};

export default HeroSection;
