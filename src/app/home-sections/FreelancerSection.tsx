"use client";

import React from "react";
import Title from "@/src/components/Title";
import { freelanceSectionItems } from "@/src/data/data";
import FreelancerCard from "@/src/components/FreelancerCard";

const FreelanceSection = () => {
  const featuredFreelance = freelanceSectionItems.slice(0, 3);

  return (
    <section className="section mt-[-50px] pb-10 lg:py-20" id="freelance">
      <div className="container">

        <Title
          subtitle="Freelance Work"
          title="Photography"
          link="View All Work"
          href="/freelancer"
        />

        {/* ✅ Desktop underline */}
        <div className="hidden lg:block w-full h-[1px] bg-gray-700 mt-10"></div>

        {/* ✅ Desktop cards */}
        <div className="hidden lg:grid gap-12 mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {featuredFreelance.map((item) => (
            <FreelancerCard
              key={item.slug}
              imgUrl={item.imgUrl}
              title={item.title}
              date={item.date}
              slug={item.slug}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FreelanceSection;