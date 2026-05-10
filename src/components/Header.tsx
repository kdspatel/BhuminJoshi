// Option - 1

// "use client"
// import React,{useState} from 'react'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
// import { RiCloseLine, RiMenu3Line } from '@remixicon/react'
// import { navItems } from '../data/data'

// const Header = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = ()  => {
//     setIsOpen(!isOpen);
//   };

//   const pathname = usePathname();

//   return (
//     <header className='border-b border-neutral-900'>
//       <div className="container flex items-center justify-between py-5 lg:pb-0">

//         {/* Logo */}
//         <Link href="/" className='text-2xl font-medium uppercase'>
//           B. Studio
//         </Link>

//         {/* Mobile Screen Navigation */}
//         <nav className={`navbar ${isOpen ? "active" : ""} `}>

//           {/* Wrapper */}
//           <div className='flex justify-between items-center mb-8'>
//             <h3 className='font-medium text-3xl uppercase'>Menu</h3>
//             <button className='border w-[30px] h-[30px] rounded-full flex items-center justify-center border-neutral-800 hover:bg-neutral-900 transition-colors' onClick={handleClick}>
//               <RiCloseLine size={20} />
//             </button>
//           </div>

//           {/* Links */}
//           <ul className='grid'>
//             {
//               navItems.map((item) => (
//                 <li key={item.id} className="border-b border-neutral-900 text-center">
//                   <Link href={item.path} className={`block py-5 hover:bg-neutral-900 ${pathname === item.path ? "bg-neutral-900" : ""}`} onClick={handleClick}>{item.label}</Link>
//                 </li>
//               ))
//             }
//           </ul>

//           {/* Contact Button */}
//           <Link href="/contact" className='primary-btn block text-center mt-10' onClick={handleClick}>
//             Contact Me
//           </Link>

//         </nav>

//         {/* Large Screen Navigation */}

//         {/* Links */}
//           <ul className='max-lg:hidden flex items-center overflow-hidden'>
//             {
//               navItems.map((item) => (
//                 <li key={item.id}>
//                   <Link href={item.path} className={`px-8 py-5 block hover:bg-neutral-900 transition-colors ${pathname === item.path ? "bg-neutral-900" : ""}`}>{item.label}</Link>
//                 </li>
//               ))
//             }
//           </ul>

//         {/* Contact Button */}
//         <Link href="/contact" className='max-lg:hidden primary-btn'>
//           Contact Me
//         </Link>

//         {/* Menu Icon */}
//         <button className='lg:hidden' onClick={handleClick}>
//           <RiMenu3Line size={30} />
//         </button>

//         {/* Overlay */}
//         <div className={`overlay ${isOpen ? "active" : ""}`} onClick={handleClick}></div>

//       </div>
//     </header>
//   )
// }

// export default Header

// Option - 2

// "use client";
// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
// import { navItems } from "../data/data";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   const pathname = usePathname();

//   return (
//     <header className="w-full bg-black border-b border-neutral-800">
//       <div className="container flex items-center justify-between py-4">

//         {/* Logo */}
//         <Link href="/" className="text-xl font-medium uppercase">
//           B. Studio
//         </Link>

//         {/* Mobile Navigation */}
//         <nav className={`navbar ${isOpen ? "active" : ""}`}>
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-2xl uppercase">Menu</h3>
//             <button
//               onClick={handleClick}
//               className="border w-[30px] h-[30px] rounded-full flex items-center justify-center border-neutral-800"
//             >
//               <RiCloseLine size={20} />
//             </button>
//           </div>

//           <ul className="grid">
//             {navItems.map((item) => (
//               <li
//                 key={item.id}
//                 className="relative group border-b border-neutral-800 text-center"
//               >
//                 <Link
//                   href={item.path}
//                   onClick={(e) => {
//                     handleClick();

//                     if (item.path.startsWith("#")) {
//                       e.preventDefault();
//                       const section = document.querySelector(item.path);
//                       section?.scrollIntoView({ behavior: "smooth" });
//                     }
//                   }}
//                   className="block py-5 text-base"
//                 >
//                   {item.label}
//                 </Link>

//                 <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
//               </li>
//             ))}
//           </ul>

//           <Link
//             href="/contact"
//             onClick={handleClick}
//             className="primary-btn block text-center mt-6"
//           >
//             Contact Me
//           </Link>
//         </nav>

//         {/* Desktop Navigation */}
//         <ul className="hidden lg:flex items-center gap-25">
//           {navItems.map((item) => (
//             <li key={item.id} className="relative group">
//               <Link
//                 href={item.path}
//                 onClick={(e) => {
//                   if (item.path.startsWith("#")) {
//                     e.preventDefault();
//                     const section = document.querySelector(item.path);
//                     section?.scrollIntoView({ behavior: "smooth" });
//                   }
//                 }}
//                 className="py-3 text-base"
//               >
//                 {item.label}
//               </Link>

//               <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
//             </li>
//           ))}
//         </ul>

//         {/* Contact */}
//         <Link
//           href="/contact"
//           className="hidden lg:block primary-btn text-base px-5 py-2"
//         >
//           Get In Touch
//         </Link>

//         {/* Menu Icon */}
//         <button className="lg:hidden" onClick={handleClick}>
//           <RiMenu3Line size={26} />
//         </button>

//         {/* Overlay */}
//         <div
//           className={`overlay ${isOpen ? "active" : ""}`}
//           onClick={handleClick}
//         ></div>
//       </div>
//     </header>
//   );
// };

// export default Header;

//  Option - 3

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiCloseLine, RiMenu3Line, RiArrowDownSLine } from "@remixicon/react";
import { navItems } from "../data/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const handleClick = () => setIsOpen(!isOpen);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 transition-all duration-300 ${
        isTop ? "bg-transparent border-transparent" : ""
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-medium uppercase text-white">
          Pixel Studio
        </Link>

        {/* Mobile Navigation */}
        <nav className={`navbar ${isOpen ? "active" : ""}`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl uppercase">Menu</h3>
            <button onClick={handleClick}>
              <RiCloseLine size={20} />
            </button>
          </div>

          <ul className="grid">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="border-b border-neutral-800 text-center"
              >
                {item.submenu ? (
                  <details className="group">
                    <summary className="list-none cursor-pointer py-5 text-base flex justify-center items-center gap-2">
                      {item.label}
                      <RiArrowDownSLine
                        size={18}
                        className="transition-transform duration-300 group-open:rotate-180"
                      />
                    </summary>
                    <ul className="pb-3">
                      {item.submenu.map((subItem, index) => (
                        <li key={index}>
                          <Link
                            href={subItem.path}
                            onClick={handleClick}
                            className="block py-2 text-sm text-neutral-400 hover:text-white transition"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.path!}
                    onClick={handleClick}
                    className="block py-5 text-base"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            onClick={handleClick}
            className="primary-btn block text-center mt-6"
          >
            Contact Me
          </Link>
        </nav>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-16 text-white">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              {item.submenu ? (
                <>
                  <button className="py-2 text-base flex items-center gap-1">
                    {item.label}
                    <RiArrowDownSLine
                      size={18}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </button>

                  {/* Dropdown */}
                  <ul className="absolute left-0 top-full mt-3 w-48 bg-black border border-neutral-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.submenu.map((subItem, index) => (
                      <li key={index}>
                        <Link
                          href={subItem.path}
                          className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white transition"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.path!} className="py-2 text-base">
                  {item.label}
                </Link>
              )}

              {/* Hover Underline */}
              <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden lg:block px-6 py-2 text-sm tracking-widest uppercase border border-white/30 text-white rounded-full transition duration-300 hover:bg-white hover:text-black hover:border-white"
        >
          Get In Touch
        </Link>

        {/* Menu Icon */}
        <button className="lg:hidden text-white" onClick={handleClick}>
          <RiMenu3Line size={26} />
        </button>

        {/* Overlay */}
        <div
          className={`overlay ${isOpen ? "active" : ""}`}
          onClick={handleClick}
        ></div>
      </div>
    </header>
  );
};

export default Header;
