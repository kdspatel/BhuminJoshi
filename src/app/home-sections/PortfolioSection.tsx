import React from "react";
import Title from "@/src/components/Title";
import { portfolioSectionItems } from "@/src/data/data";
import PortfolioCard from "@/src/components/PortfolioCard";

const PortfolioSection = () => {
  // Display only the first 6 portfolio items
  const featuredPortfolio = portfolioSectionItems.slice(0, 6);

  return (
    <section className="section" id="portfolio">
      <div className="container">
        {/* Title */}
        <Title
          subtitle="Portfolio"
          title="Explore My Photography Work"
          link="View All Works"
          href="/portfolio"
        />

        {/* Card Wrapper */}
        <div className="grid gap-12 mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPortfolio.map((item) => (
            <PortfolioCard
              key={item.slug}
              img={item.imgUrl}
              title={item.title}
              date={item.date}
              slug={item.slug} // Dynamic routing
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;