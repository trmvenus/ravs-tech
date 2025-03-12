import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white px-5 sm:px-10 md:px-16 lg:px-24 xl:px-[238px] pb-10 sm:pb-16 md:pb-20 lg:pb-[142px] relative">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-[100px] h-full lg:h-[472px] justify-between py-8 sm:py-10 md:py-12 lg:py-14 px-6 lg:px-6 2xl:px-10  bg-rvs-green-dark rounded-[20px] mt-10 sm:mt-16 md:mt-20 lg:mt-[160px] relative z-10">
        <div className="flex flex-col gap-y-5 sm:gap-y-6 md:gap-y-8 lg:gap-y-[35px] max-w-full lg:max-w-[360px] relative z-10">
          <Image
            src="/assets/logo-light.svg"
            alt="logo"
            width={148.66}
            height={44.23}
            className="w-32 sm:w-36 md:w-40 lg:w-[148.66px]"
          />
          <p className="text-white text-xs sm:text-sm font-normal">
            Our mission is to revolutionize workforce management through
            innovative software solutions. We design cutting-edge staffing
            technology that streamlines hiring, enhances efficiency, and
            empowers businesses to build high-performing teams.
          </p>
          <p className="text-white text-xs sm:text-sm font-normal">
            Our commitment is to deliver excellence, adaptability, and seamless
            user experiences, helping organizations thrive through smarter
            staffing solutions.
          </p>
        </div>
        <div className="flex flex-col justify-between h-full w-full relative z-10 gap-8 lg:gap-0">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-0">
            <div className="w-full sm:w-2/3 flex flex-col sm:flex-row gap-8 sm:gap-x-[20px] justify-between sm:pe-[40px]">
              <div className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-[19px]">
                <h6 className="text-rvs-yellow text-lg sm:text-xl font-bold">
                  Quick Links
                </h6>
                <Link
                  href="/"
                  className="text-white text-xs sm:text-sm font-normal"
                >
                  Home
                </Link>
                <Link
                  href="/careers"
                  className="text-white text-xs sm:text-sm font-normal"
                >
                  Careers
                </Link>
              </div>
              <div className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-[19px]">
                <h6 className="text-rvs-yellow text-lg sm:text-xl font-bold">
                  Services
                </h6>
                <p className="text-white text-xs sm:text-sm font-normal">
                  Software development and maintenance
                </p>
                <p className="text-white text-xs sm:text-sm font-normal">
                  Staffing Solutions
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/3">
              <div className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-[19px] sm:ps-[20px]">
                <h6 className="text-rvs-yellow text-lg sm:text-xl font-bold">
                  Offices
                </h6>
                <p className="text-white text-xs sm:text-sm font-normal">
                  RAVS Technologies LLC
                </p>
                <p className="text-white text-xs font-normal">
                  5565 Stonegrove OverLook, Johns Creek, GA 30097
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="w-full sm:w-2/3 flex flex-col gap-y-3 sm:gap-y-[13px]">
              <h6 className="text-rvs-yellow text-lg sm:text-xl font-bold">
                Contact
              </h6>
              <div className="flex flex-col gap-y-2 sm:gap-y-[9px]">
                <p className="text-white text-xs sm:text-sm font-normal">
                  connect.hr@ravstechnologies.com
                </p>
                <p className="text-white text-xs sm:text-sm font-normal">
                  +1 (704) 458-4396
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/3 flex flex-col gap-y-3 sm:gap-y-[20px] mt-6 sm:mt-0 sm:ps-[20px]">
              <p className="text-white text-xs sm:text-sm font-normal">
                Copyright © 2025
              </p>
              <p className="text-white text-xs sm:text-sm font-normal">
                RAVS Technologies LLC <br />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/assets/footer-bg.svg"
          alt="footer-bg"
          width={468}
          height={468}
          className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[468px] lg:h-[468px] z-0"
        />
      </div>
      <Image
        src="/assets/footer-left.svg"
        alt="footer-bg"
        width={582}
        height={582}
        className="absolute bottom-[188px] left-[-200px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[582px] lg:h-[582px] z-0 opacity-50 md:opacity-70 lg:opacity-100 hidden sm:block"
      />
      <Image
        src="/assets/footer-right.svg"
        alt="footer-bg"
        width={461}
        height={461}
        className="absolute bottom-[350px] right-[-50px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[461px] lg:h-[461px] z-0 opacity-50 md:opacity-70 lg:opacity-100 hidden sm:block"
      />
    </div>
  );
};

export default Footer;
