"use client";
import React, { useState } from "react";
import Title from "./Title";
import Divider from "./Divider";
import { faqItems } from "../data/data";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(
    faqItems[0]?.id ?? null
  );

  const handleClick = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="container py-16" id="faq">
      {/* Title */}
      <Title subtitle="FAQ’s" title="Got Questions?" link="" />
      <Divider />

      <div className="grid lg:grid-cols-2 gap-6 mt-10">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={`group border rounded-2xl transition-all duration-300 ${
                isOpen
                  ? "border-white bg-neutral-900 shadow-lg"
                  : "border-neutral-800 hover:border-neutral-600"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => handleClick(item.id)}
                className="w-full flex items-center justify-between px-6 py-6 text-left gap-4"
              >
                <h3 className="text-lg md:text-xl uppercase tracking-wide">
                  {item.title}
                </h3>

                {/* Fixed Icon Button */}
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 min-w-[40px] min-h-[40px] md:min-w-[48px] md:min-h-[48px] flex-shrink-0 flex items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 bg-white text-black"
                      : "border-neutral-700 group-hover:bg-neutral-800"
                  }`}
                >
                  {isOpen ? (
                    <RiSubtractLine size={20} />
                  ) : (
                    <RiAddLine size={20} />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-neutral-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;