// import React from "react";
// import Title from "@/src/components/Title";
// import { portfolioSectionItems } from "@/src/data/data";
// import PortfolioCard from "@/src/components/PortfolioCard";

// const PortfolioSection = () => {
//   // Display only the first 3 portfolio items
//   const featuredPortfolio = portfolioSectionItems.slice(0, 3);

//   return (
//     <section className="section" id="portfolio">
//       <div className="container">
//         {/* Title */}
//         <Title
//           subtitle="Portfolio"
//           title="Explore My Photography Work"
//           link="View All Works"
//           href="/portfolio"
//         />

//         {/* Card Wrapper */}
//         <div className="grid gap-12 mt-20 sm:grid-cols-2 lg:grid-cols-3">
//           {featuredPortfolio.map((item) => (
//             <PortfolioCard
//               key={item.slug}
//               img={item.imgUrl}
//               title={item.title}
//               date={item.date}
//               slug={item.slug}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection

"use client";

import React from "react";
import Title from "@/src/components/Title";
import { portfolioSectionItems } from "@/src/data/data";
import PortfolioCard from "@/src/components/PortfolioCard";

const PortfolioSection = () => {
  const featuredPortfolio = portfolioSectionItems.slice(0, 3);

  return (
    <section className="section pt-10 pb-0 lg:py-20" id="portfolio">
      <div className="container">
        
        <Title
          subtitle="Portfolio"
          title="Explore My Photography Work"
          link="View All Works"
          href="/portfolio"
        />

        {/* ✅ Mobile line (reduced spacing) */}
        <div className="lg:hidden w-full h-[1px] bg-gray-600 my-4 mt-15"></div>

        {/* ✅ Desktop underline */}
        <div className="hidden lg:block w-full h-[1px] bg-gray-700 mt-10"></div>

        {/* ✅ Desktop cards */}
        <div className="hidden lg:grid gap-12 mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPortfolio.map((item) => (
            <PortfolioCard
              key={item.slug}
              img={item.imgUrl}
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

export default PortfolioSection;