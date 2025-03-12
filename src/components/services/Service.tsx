import React from "react";
import Image from "next/image";

import ITStaffing from "../icons/ITStaffing";
import Temphiring from "../icons/Temphiring";
import Outsourcing from "../icons/Outsourcing";
import Search from "../icons/Search";

import UserInsight from "../icons/UserInsight";
import VisualDesign from "../icons/VisualDesign";
import ServerSide from "../icons/ServerSide";
import Responsive from "../icons/Responsive";

const Service = ({ activeTab }: { activeTab: string }) => {
  return (
    <div className="bg-rvs-green-dark px-5 sm:px-10 md:px-16 lg:px-24 xl:px-[238px] py-10 sm:py-16 md:py-20 lg:py-[120px] flex flex-col relative">
      <h1 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-center leading-tight lg:leading-12">
        <span className="text-rvs-green">
          {activeTab === "staffing" ? "Staffing" : "Software"}
        </span>{" "}
        Solutions services
      </h1>
      <p className="text-white text-center text-base sm:text-lg lg:text-[18px] leading-normal lg:leading-[27px] font-normal mt-4 sm:mt-5 lg:mt-7 relative z-10 px-2">
        With our multi-domain expertise, we deliver high-quality staffing
        solutions <br className="hidden md:block" /> across a wide range of
        industries and sectors.
      </p>
      <div className="mt-6 sm:mt-8 lg:mt-[60px] flex justify-center items-center flex-col gap-y-4 sm:gap-y-6 lg:gap-y-10 relative z-10 px-1 sm:px-2">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-x-8 lg:gap-x-10 w-full justify-center">
          <div className="card bg-rvs-blue-light rounded-[15px] sm:rounded-[20px] p-4 sm:p-6 lg:p-[40px] w-full md:w-[480px] h-auto min-h-[240px] sm:min-h-[280px] lg:min-h-[360px] flex flex-col relative">
            {activeTab === "staffing" ? <ITStaffing /> : <Responsive />}
            <div className="flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-5 mt-4 sm:mt-6 lg:mt-10 relative z-10">
              <h3 className="text-white text-xl sm:text-2xl lg:text-[30px] leading-tight lg:leading-[100%] font-bold">
                {activeTab === "staffing"
                  ? "IT Staffing"
                  : "Responsive web design"}
              </h3>
              <p className="text-white text-sm sm:text-base lg:font-18">
                {activeTab === "staffing"
                  ? "IT staffing offers numerous benefits to businesses by enabling companies to scale their workforce based on project demands, reducing overhead costs associated with full-time hires."
                  : "We stay ahead of the curve, leveraging the latest frontend technologies and trends to drive innovation and keep your digital presence competitive."}
              </p>
            </div>
            <Image
              src="/assets/icons/percent-blue-light.svg"
              width={279}
              height={279}
              alt="bg"
              className="absolute top-8 sm:top-10 right-8 sm:right-10 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[279px] lg:h-[279px] z-0"
            />
          </div>
          <div className="card bg-rvs-yellow rounded-[15px] sm:rounded-[20px] p-4 sm:p-6 lg:p-[40px] w-full md:w-[480px] h-auto min-h-[240px] sm:min-h-[280px] lg:min-h-[360px] flex flex-col relative">
            {activeTab === "staffing" ? <Temphiring /> : <ServerSide />}
            <div className="flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-5 mt-4 sm:mt-6 lg:mt-10 relative z-10">
              <h3 className="text-black text-xl sm:text-2xl lg:text-[30px] leading-tight lg:leading-[100%] font-bold">
                {activeTab === "staffing"
                  ? "Temporary Hiring"
                  : "Server-side architecture"}
              </h3>
              <p className="text-black text-sm sm:text-base lg:font-18">
                {activeTab === "staffing"
                  ? "We provide businesses with qualified professionals on a temporary or contract basis to meet the specific needs of enterprises so they can focus on their core business."
                  : "Our experts design and implement robust, scalable, and efficient backend architectures that support your growing business needs."}
              </p>
            </div>
            <Image
              src="/assets/icons/percent-yellow-light.svg"
              width={279}
              height={279}
              alt="bg"
              className="absolute top-8 sm:top-10 right-8 sm:right-10 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[279px] lg:h-[279px] z-0"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-x-8 lg:gap-x-10 w-full justify-center">
          <div className="card bg-rvs-card-green rounded-[15px] sm:rounded-[20px] p-4 sm:p-6 lg:p-[40px] w-full md:w-[480px] h-auto min-h-[240px] sm:min-h-[280px] lg:min-h-[360px] flex flex-col relative">
            {activeTab === "staffing" ? <Outsourcing /> : <VisualDesign />}
            <div className="flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-5 mt-4 sm:mt-6 lg:mt-10 relative z-10">
              <h3 className="text-white text-xl sm:text-2xl lg:text-[30px] leading-tight lg:leading-[100%] font-bold">
                {activeTab === "staffing"
                  ? "Process Outsourcing"
                  : "Visual design innovation"}
              </h3>
              <p className="text-white text-sm sm:text-base lg:font-18">
                {activeTab === "staffing"
                  ? "We offer a range of outsourcing services to help businesses scale their workforce based on project demands, reducing overhead costs associated with full-time hires."
                  : "We combine technical expertise with artistic flair to create visually stunning and highly functional interfaces that elevate your brand."}
              </p>
            </div>
            <Image
              src="/assets/icons/percent-green-light.svg"
              width={279}
              height={279}
              alt="bg"
              className="absolute top-8 sm:top-10 right-8 sm:right-10 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[279px] lg:h-[279px] z-0"
            />
          </div>
          <div className="card bg-rvs-card-cyan rounded-[15px] sm:rounded-[20px] p-4 sm:p-6 lg:p-[40px] w-full md:w-[480px] h-auto min-h-[240px] sm:min-h-[280px] lg:min-h-[360px] flex flex-col relative">
            {activeTab === "staffing" ? <Search /> : <UserInsight />}
            <div className="flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-5 mt-4 sm:mt-6 lg:mt-10 relative z-10">
              <h3 className="text-white text-xl sm:text-2xl lg:text-[30px] leading-tight lg:leading-[100%] font-bold">
                {activeTab === "staffing" ? "Executive Search" : "User insight"}
              </h3>
              <p className="text-white text-sm sm:text-base lg:font-18">
                {activeTab === "staffing"
                  ? "Our team of experienced recruitment professionals is dedicated to finding and placing the most qualified candidates for your organization's unique leadership needs."
                  : "We prioritize user experience, designing interfaces that are intuitive, elegant, and effortless to use, ensuring an exceptional user journey."}
              </p>
            </div>
            <Image
              src="/assets/icons/percent-cyan-light.svg"
              width={279}
              height={279}
              alt="bg"
              className="absolute top-8 sm:top-10 right-8 sm:right-10 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[279px] lg:h-[279px] z-0"
            />
          </div>
        </div>
      </div>
      <Image
        src="/assets/service-left.svg"
        alt="service-bg"
        width={657}
        height={657}
        className="absolute top-[381px] left-[-50px] z-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[657px] lg:h-[657px] opacity-50 md:opacity-70 lg:opacity-100 hidden sm:block"
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
