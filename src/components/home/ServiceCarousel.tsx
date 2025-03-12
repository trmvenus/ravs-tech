"use client";

import Image from "next/image";
import React, { useState } from "react";

import ArrowUpRight from "../icons/ArrowUpRight";
import ChevronUp from "@/components/icons/ChevronUp";
import ChevronDown from "@/components/icons/ChevronDown";

const services = [
  {
    id: 1,
    title: "Service 1",
    description:
      "Description for service 1. This explains what the service offers and its benefits.",
    image: "/assets/service.png",
  },
  {
    id: 2,
    title: "Service 2",
    description:
      "Description for service 2. This explains what the service offers and its benefits.",
    image: "/assets/bottom-bg.png",
  },
];

const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("up");

  const nextSlide = () => {
    setDirection("down");
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection("up");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full py-6 sm:py-8 md:py-10 lg:py-12 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-0">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[101px]">
          <Image
            src={services[currentIndex].image}
            alt={services[currentIndex].title}
            width={463}
            height={463}
            className={`object-cover rounded-[20px] w-full sm:w-[80%] md:w-[70%] lg:w-[25vw] h-auto aspect-square ${
              direction === "up"
                ? "animate-slide-in-up"
                : "animate-slide-in-down"
            }`}
          />
          <div className="flex flex-col w-full lg:w-[480px] text-white mt-6 lg:mt-0 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] leading-tight lg:leading-[40px] font-bold text-white">
              Crafting Staffing Solutions
            </h3>
            <p className="text-base sm:text-lg md:text-[18px] leading-normal md:leading-[27px] font-normal mt-4 sm:mt-5 md:mt-6 text-white">
              We empower organizations to achieve their goals and scale
              efficiently, minimizing risks by providing top-tier learning and
              technology talent.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-transparent border-white border-[1px] text-base sm:text-lg md:text-[18px] leading-normal md:leading-[27px] font-normal flex items-center gap-2 py-3 sm:py-4 md:py-[18px] px-5 sm:px-6 md:px-[30px] mt-8 sm:mt-10 md:mt-12 w-fit rounded-[30px] cursor-pointer text-white">
                Know more <ArrowUpRight color="white" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col items-center gap-4 mt-8 lg:mt-0">
          <button
            onClick={nextSlide}
            className="p-3 sm:p-4 md:p-[18px] rounded-full bg-transparent border-white border-[1px] transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronUp />
          </button>

          <div className="mx-6 lg:my-6 flex flex-row lg:flex-col items-center">
            {services.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`cursor-pointer mx-1 lg:my-1 transition-all ${
                  index === currentIndex
                    ? "w-3 h-3 sm:w-4 sm:h-4 bg-rvs-yellow"
                    : "w-2 h-2 bg-gray-300 rounded-2xl"
                }`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="p-3 sm:p-4 md:p-[18px] rounded-full bg-transparent border-white border-[1px] transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
