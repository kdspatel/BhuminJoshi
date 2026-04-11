// import React from "react";
// import MarqueeSection from "./MarqueeSection";
// import { footerList } from "../data/data";
// import Button from "./Button";
// import { link } from "fs";
// import { li } from "framer-motion/client";
// import Link from "next/link";
// import SocialIcons from "./SocialIcons";

// const Footer = () => {
//   return (
//     <footer>
//       <div>
//         {/* Footer lg text */}
//         <div className="container block">
//           <div className="text-[64px] uppercase flex justify-end text-neutral-800 font-semibold sm:text-[100px] md:text-[160px] lg:text-[200px]">
//             <h1>Bhumin</h1>
//           </div>
//         </div>

//         {/* Marquee */}
//         <MarqueeSection />

//         {/* Footer Top */}
//         <div className="container py-24 grid gap-10 border-x border-neutral-800 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.5fr_0.5fr_0.5fr_0.5fr]">
//           {/* Wrapper */}
//           <div>
//             <p className="subtitle">A more meaningful home for photography</p>
//             {/* Button */}
//             <Button label="Let's"/>
//             <h2>Work Together</h2>
//           </div>
//           {/* Footer List */}
//           {footerList.map((item) => (
//             <div key={item.id}>
//               <p className="font-semibold text-xl text-white">{item.title}</p>
//               {/* List */}
//               <ul className="grid mt-5 gap-3">
//                 {item.links.map((link,index) => (
//                   <li key={index}>
//                     <Link href='#' className="hover:underline">{link.label}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t border-neutral-900">
//           <div className="container py-6">
//             {/* Links */}
//             <div className="flex gap-4 mb-7">
//               <a href="#" className="hover:underline">Terms & Conditions</a>
//               <a href="#" className="hover:underline">Privacy Policy</a>
//             </div>
//             {/* Wrapper */}
//             <div className="flex items-center flex-wrap gap-3 justify-between">
//               {/* Social Icons */}
//               <SocialIcons/>
//               {/* Copyright Info */}
//               <p>
//                 &copy; {new Date().getFullYear()}
//                 Bhumin Joshi Photography. All rights reserved.
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import React from "react";
import MarqueeSection from "./MarqueeSection";
import { footerList } from "../data/data";
import Button from "./Button";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="text-white bg-black">

      {/* MARQUEE */}
      <MarqueeSection />

      {/* CTA SECTION */}
      <div className="container py-24 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-500">
          Available for weddings worldwide
        </p>

        <h2 className="mt-6 text-3xl md:text-4xl lg:text-6xl font-light leading-none">
          Capturing love <br />
          in its purest form
        </h2>

        <p className="max-w-xl mx-auto mt-8 text-neutral-400 text-sm md:text-base leading-relaxed">
          Wedding films, pre-wedding stories, and cinematic photography crafted
          with emotion, light, and timeless storytelling.
        </p>

        <div className="mt-10 flex justify-center">
          <Button label="Book Your Moment" />
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-neutral-800" />

      {/* SIMPLIFIED FOOTER (NO EMPTY SPACE) */}
      <div className="container py-14 flex flex-col items-center text-center gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-lg font-light">Bhumin Joshi</h3>
          <p className="text-sm text-neutral-500 mt-3 max-w-md">
            Cinematic wedding photographer & filmmaker capturing timeless love stories.
          </p>
        </div>

        {/* LINKS INLINE (FIXES EMPTY SPACE ISSUE) */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {footerList.map((item) => (
            <div key={item.id}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
                {item.title}
              </h4>

              <ul className="space-y-1">
                {item.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SOCIALS */}
        <SocialIcons />

      </div>

      {/* BOTTOM BAR (CLEAN + CENTERED) */}
      <div className="border-t border-neutral-800 py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Bhumin Joshi
          </p>

          <div className="flex gap-6 text-xs text-neutral-500">
            <Link href="/terms" className="hover:text-white transition">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;