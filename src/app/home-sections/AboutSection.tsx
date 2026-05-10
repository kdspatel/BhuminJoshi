"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Title from "../../components/Title";
import Divider from "../../components/Divider";
import SocialIcons from "../../components/SocialIcons";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section className="section" id="about">
      <div className="container">
        {/* Title */}
        <Title subtitle="" title="The Founder" link="" />

        {/* Divider */}
        <Divider />

        {/* Wrapper */}
        <div className="grid gap-4 lg:grid-cols-2 lg:items-center">
          {/* Banner */}
          <figure>
            <Image
              src="/images/about-section-banner.jpg"
              alt="About Section"
              width={783}
              height={710}
            />
          </figure>

          {/* Content */}
          <div className="border border-neutral-900 p-6 rounded-2xl mt-5">
            {/* Wrapper */}
            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold lg:text-3xl my-3">
                <Image
                  src={"/images/star.png"}
                  alt="shape"
                  width={30}
                  height={30}
                />
                Introduction
              </h3>
    
              <p className="text-justify leading-[1.35] m-0 hyphens-auto [word-spacing:0px]">
                Dedicated Professional Photographer with 10 years of experience
                specializing in highend wedding photography. Expert in capturing
                authentic candid moments and creating cinematic wedding
                portraits. Proven mastery in advanced lighting techniques and
                technical composition,utilizing industry-leading mirrorless
                technology to deliver premium visual storytelling for clients
                and freelance agencies.
              </p>
            </div>

            {/* Wrapper */}
            <div className="grid gap-5 mt-6">
              <h3 className="flex items-center gap-2 text-xl font-semibold lg:text-3xl my-3">
                <Image
                  src={"/images/star.png"}
                  alt="shape"
                  width={30}
                  height={30}
                />
                Contact Information
              </h3>

              {/* Links Wrapper */}
              <div className="flex gap-3 flex-col lg:flex-row lg:gap-10">
                {/* Email Address */}
                <div>
                  <p>Email</p>
                  <a href="mailto:youremail@gmail.com">
                    youremail@gmail.com
                  </a>
                </div>

                {/* Phone Number */}
                <div>
                  <p>Phone Number</p>
                  <a href="#">
                    +91 00000 00000
                  </a>
                </div>
              </div>

              {/* Button Wrapper */}
              <div className="flex gap-3 justify-between lg:items-center lg:flex-row flex-col flex-wrap">
                {/* Social Icons */}
                <SocialIcons />

                <div className="flex gap-4 flex-wrap">
                  <Link
                    href="/contact"
                    className="primary-btn w-full text-center"
                  >
                    Let’s Work
                  </Link>

                  <Link
                    href="#"
                    // href="/Bhumin Joshi CV.pdf"
                    // download="Bhumin_Joshi_CV.pdf"
                    className="primary-btn w-full text-center"
                  >
                    Download CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-10">
          <h3 className="flex items-center gap-2 text-xl font-semibold lg:text-3xl my-6">
            <Image
              src={"/images/star.png"}
              alt="shape"
              width={30}
              height={30}
            />
            Experience
          </h3>

          <div ref={timelineRef} className="relative pl-6">
            {/* Animated Line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-0 top-0 w-[2px] bg-white origin-top"
            />

            {/* Item 1 */}
            <div className="relative mb-16">
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="absolute left-[-31px] top-2 w-4 h-4 bg-white rounded-full border-2 border-neutral-900"
              />

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 1 }}
              >
                <h4 className="font-semibold text-lg">
                  Founder & Lead Photographer
                </h4>
                <p className="text-sm opacity-70">
                  {/* Bhumin Joshi Photography | 2016 – Present */}
                  Any Detail
                </p>

                <ul className="mt-3 space-y-2 opacity-80 list-disc pl-5">
                  <li>
                    {/* Manage and lead full-scale wedding photography projects,
                    from pre-wedding shoots to main-day coverage. */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel sapien eget nunc finibus efficitur.
                  </li>
                  <li>
                    {/* Specialize in candid photography, focusing on emotional
                    storytelling and in-between moments. */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel sapien eget nunc finibus efficitur.
                  </li>
                  <li>
                    {/* Execute high-fashion wedding portraits using creative
                    lighting and specialized lenses. */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel sapien eget nunc finibus efficitur.
                  </li>
                  <li>
                    {/* Oversee all post-production workflows to ensure a
                    consistent, professional brand aesthetic. */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel sapien eget nunc finibus efficitur.
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Item 2 */}
            <div className="relative mb-16">
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.4 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute left-[-31px] top-2 w-4 h-4 bg-white rounded-full border-2 border-neutral-900"
              />

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h4 className="font-semibold text-lg">
                  Freelance Photographer
                </h4>
                <p className="text-sm opacity-70">
                  {/* Various Clients / Agencies | 2016 – Present */}
                  Any Details
                </p>

                <ul className="mt-3 space-y-2 opacity-80 list-disc pl-5">
                  <li>
                    {/* Collaborate with diverse teams to provide specialized
                    coverage for luxury weddings and events. */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel sapien eget nunc finibus efficitur.
                  </li>
                  <li>
                    {/* Adapt quickly to different lighting environments and client
                    requirements. */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    vel sapien eget nunc finibus efficitur.
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;