import React from "react";
import Image from "next/image";

import ArrowUpRight from "../icons/ArrowUpRight";

const About = () => {
  return (
    <div className="bg-white px-5 sm:px-10 md:px-16 lg:px-24 xl:px-[238px] pt-10 sm:pt-16 md:pt-20 lg:pt-[200px] pb-10 sm:pb-16 md:pb-20 lg:pb-[175px] overflow-hidden relative">
      <div className="relative bg-rvs-green h-auto md:h-[400px] lg:h-[514px] w-full rounded-[20px] py-8 sm:py-10 md:py-12 lg:py-[57px] px-6 sm:px-8 md:px-10 lg:px-[60px] flex flex-col md:flex-row justify-between z-10">
        <div className="flex flex-col z-10 relative max-w-full md:max-w-[400px] lg:max-w-[515px]">
          <h6 className="font-medium text-white text-sm md:text-base leading-normal md:leading-[44px] uppercase">
            Welcome to RAVS Technologies
          </h6>
          <h1 className="font-bold text-white text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] leading-tight md:leading-[56px] mt-2 md:mt-[10px]">
            Aligning staffing solution <br className="hidden md:block" />{" "}
            through innovation
          </h1>
          <p className="text-white text-base md:text-[18px] font-normal leading-normal md:leading-[28px] tracking-normal mt-3 md:mt-5">
            Whether it&rsquos finding skilled professionals or developing
            innovative software, we&rsquos committed to delivering customized
            solutions that empower businesses to grow and succeed in a
            competitive market.
          </p>
          <button className="flex items-center gap-2 md:gap-[10px] px-5 sm:px-6 md:px-[30px] py-3 sm:py-4 md:py-[18px] bg-white hover:bg-white/[90%] text-black rounded-[30px] font-bold text-sm md:text-[18px] w-fit mt-6 md:mt-10 cursor-pointer">
            View services <ArrowUpRight color="black" />
          </button>
        </div>
        <div className="flex flex-col z-10 gap-y-4 sm:gap-y-5 md:gap-y-[34px] mt-8 md:mt-[-100px]">
          <Image
            src="/assets/1.png"
            width={379}
            height={174}
            alt="about"
            className="w-full md:w-[300px] lg:w-[379px] h-auto md:h-[140px] lg:h-[174px]"
          />
          <Image
            src="/assets/2.png"
            width={379}
            height={174}
            alt="about"
            className="w-full md:w-[300px] lg:w-[379px] h-auto md:h-[140px] lg:h-[174px]"
          />
          <Image
            src="/assets/3.png"
            width={379}
            height={174}
            alt="about"
            className="w-full md:w-[300px] lg:w-[379px] h-auto md:h-[140px] lg:h-[174px]"
          />
        </div>
        <Image
          src="/assets/service-top-green.svg"
          alt="about"
          width={514}
          height={514}
          className="object-cover w-full md:w-[400px] lg:w-[514px] h-full md:h-[400px] lg:h-[514px] top-0 left-0 absolute z-0"
        />
        <Image
          src="/assets/service-top-yellow.svg"
          alt="about"
          width={514}
          height={514}
          className="object-cover w-full md:w-[400px] lg:w-[514px] h-full md:h-[400px] lg:h-[514px] top-0 right-0 absolute z-0"
        />
      </div>
      <div className="relative bg-rvs-yellow h-auto w-full rounded-[20px] flex flex-col md:flex-row items-center z-10 mt-10 sm:mt-16 md:mt-20 lg:mt-[189px] gap-x-6 lg:gap-x-[73px]">
        <Image
          src="/assets/bottom-bg.png"
          alt="about"
          width={569}
          height={514}
          className="object-cover w-full md:w-[40%] lg:w-[32vw] h-[300px] md:h-[35vw] rounded-[20px] z-50"
        />

        <div className="flex flex-col z-10 relative w-full justify-center p-6 md:p-0">
          <h6 className="font-medium text-black text-sm md:text-base leading-normal md:leading-[44px] uppercase">
            CAREERS AT RAVS TECHNOLOGIES
          </h6>
          <h1 className="font-bold text-black text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] leading-tight md:leading-[56px] mt-2 md:mt-[10px]">
            Explore your career with <br className="hidden 2xl:block" /> RAVS
            Technologies
          </h1>
          <p className="text-black text-base md:text-[18px] font-normal leading-normal md:leading-[28px] tracking-normal xl:mt-3 2xl:mt-5">
            Join our team of experts. <br className="hidden md:block" /> Create
            innovative solutions.
          </p>
          <button className="flex items-center gap-2 md:gap-[10px] px-5 sm:px-6 md:px-[30px] py-3 sm:py-4 md:py-[18px] bg-white hover:bg-white/[90%] text-black rounded-[30px] font-bold text-sm md:text-[18px] w-fit mt-4 2xl:mt-10 cursor-pointer">
            Apply now <ArrowUpRight color="black" />
          </button>
        </div>
        <Image
          src="/assets/apply-right.svg"
          width={397}
          height={397}
          alt="apply-bg"
          className="absolute xl:top-[40px] xl:right-[40px] 2xl:top-[60px] 2xl:right-[60px] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] 2xl:w-[397px] :h-[397px] hidden lg:block"
        />
      </div>
      <Image
        src="/assets/line-top-left.svg"
        alt="about"
        width={411}
        height={411}
        className="absolute top-[376px] left-0 z-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[411px] lg:h-[411px] opacity-50 md:opacity-70 lg:opacity-100 hidden sm:block"
      />
      <Image
        src="/assets/line-top-right.svg"
        alt="about"
        width={411}
        height={411}
        className="absolute top-[138px] right-0 z-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[411px] lg:h-[411px] opacity-50 md:opacity-70 lg:opacity-100 hidden sm:block"
      />
      <Image
        src="/assets/line-bottom-left.svg"
        alt="about"
        width={571}
        height={571}
        className="absolute top-[1162px] left-0 z-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[571px] lg:h-[571px] opacity-50 md:opacity-70 lg:opacity-100 hidden sm:block"
      />
      <Image
        src="/assets/line-bottom-right.svg"
        alt="about"
        width={571}
        height={571}
        className="absolute top-[1118px] right-0 z-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[571px] lg:h-[571px] opacity-50 md:opacity-70 lg:opacity-100 hidden sm:block"
      />
    </div>
  );
};

export default About;
