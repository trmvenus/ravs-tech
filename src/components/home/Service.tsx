import React from "react";
import Image from "next/image";

import ServiceCarousel from "./ServiceCarousel";

const Service = () => {
  return (
    <div className="bg-rvs-green-dark px-5 sm:px-10 md:px-16 lg:px-24 xl:px-[238px] py-10 sm:py-16 md:py-20 lg:py-[100px] flex flex-col gap-y-8 sm:gap-y-10 md:gap-y-16 lg:gap-y-[110px] relative">
      <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-center">
        Our <span className="text-rvs-yellow">Expert</span> Services
      </h1>
      <ServiceCarousel />
      <Image
        src="/assets/service-left.svg"
        alt="service-bg"
        width={657}
        height={657}
        className="absolute top-[191px] left-[-50px] z-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[657px] lg:h-[657px] opacity-50 md:opacity-70 lg:opacity-100 hidden sm:block"
      />
      <Image
        src="/assets/service-right.svg"
        alt="service-bg"
        width={449}
        height={449}
        className="absolute top-[294px] right-[-50px] z-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[449px] lg:h-[449px] opacity-50 md:opacity-70 lg:opacity-100 hidden sm:block"
      />
    </div>
  );
};

export default Service;
