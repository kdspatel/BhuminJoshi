import React from "react";
import Divider from "@/src/components/Divider";
import Title from "@/src/components/Title";
import { services } from "@/src/data/data";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <section className="section mt-20 mb-20">
      <div className="container">
        {/* Page Title */}
        <Title subtitle="My Services" title="What I Offer" />
        <Divider />

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 mt-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Service Title */}
              <h2 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-neutral-300 mb-5">{service.description}</p>

              {/* Price */}
              <div className="mb-5">
                <span className="text-sm text-neutral-400">Starting From</span>
                <p className="text-xl font-bold text-white">{service.price}</p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-neutral-300"
                  >
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link href="/contact" className="block">
                <button className="primary-btn w-full">
                  Book This Service
                </button>
              </Link>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
