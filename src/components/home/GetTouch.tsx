"use client";

import Image from "next/image";
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import ArrowUpRight from "../icons/ArrowUpRight";

const GetTouch = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleRecaptchaChange = (response: string | null) => {
    console.log(response);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="bg-rvs-green-dark-light px-4 md:px-8 lg:px-16 xl:px-[238px] py-12 md:py-20 lg:py-[156px] relative flex flex-col justify-center items-center">
        <div className="w-full flex items-center justify-center relative overflow-hidden rounded-b-[30px] z-10">
          <Image
            src="/assets/get-in-touch.png"
            alt="get-touch"
            width={1000}
            height={1000}
            className={`object-contain w-full h-auto 2xl:h-[34vw]  transition-transform duration-500 ease-in-out rounded-b-[30px]`}
          />
        </div>

        <Image
          src="/assets/get-in-touch-left.svg"
          width="805"
          height="805"
          alt="get-in-touch-left"
          className="absolute top-[65px] left-[-300px] w-[805px] h-[805px] z-0 hidden md:block"
        />
        <Image
          src="/assets/get-in-touch-right.svg"
          width="805"
          height="805"
          alt="get-in-touch-right"
          className="absolute top-[49px] right-[-200px] w-[805px] h-[805px] z-0 hidden md:block"
        />
      </div>

      <div className="flex flex-col rounded-[20px] w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] max-w-[860px] py-6 sm:py-10 md:py-[76px] px-6 sm:px-8 md:px-12 lg:px-[50px] bg-white relative mt-[-150px] md:mt-[-200px] lg:mt-[-300px] shadow-[0px_5px_30px_0px_rgba(0,0,0,0.1)] z-50">
        <h1 className="text-black text-3xl md:text-4xl lg:text-[48px] font-bold leading-none">
          Request <span className="text-rvs-green">Consultation</span>
        </h1>
        <div className="form mt-8 md:mt-[60px]">
          <form action="" className="flex flex-col gap-y-5 md:gap-y-[30px]">
            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="name"
                className="text-black text-[12px] leading-[18px] font-medium uppercase"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Add your name"
                className="text-black text-base md:text-[18px] leading-[24px] font-normal border-[#bababa] border-[1px] rounded-[10px] py-3 md:py-[18px] px-4 md:px-6 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="email"
                className="text-black text-[12px] leading-[18px] font-medium uppercase"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Add your email address"
                className="text-black text-base md:text-[18px] leading-[24px] font-normal border-[#bababa] border-[1px] rounded-[10px] py-3 md:py-[18px] px-4 md:px-6 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="phone"
                className="text-black text-[12px] leading-[18px] font-medium uppercase"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Add your contact number"
                className="text-black text-base md:text-[18px] leading-[24px] font-normal border-[#bababa] border-[1px] rounded-[10px] py-3 md:py-[18px] px-4 md:px-6 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="looking-for"
                className="text-black text-[12px] leading-[18px] font-medium uppercase"
              >
                What are you looking for?
              </label>
              <input
                type="text"
                id="looking-for"
                placeholder="Select any service"
                className="text-black text-base md:text-[18px] leading-[24px] font-normal border-[#bababa] border-[1px] rounded-[10px] py-3 md:py-[18px] px-4 md:px-6 focus:outline-none"
              />
            </div>
            <div className="flex justify-center mt-4 md:mt-[23px]">
              <div className="scale-[0.6] sm:scale-[0.7] md:scale-75 transform origin-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LfC1vAqAAAAACO00Ad4MVD2Jbx5lOngUUObpD7t"
                  onChange={handleRecaptchaChange}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-rvs-yellow text-black py-3 md:py-[18px] px-6 md:px-[58px] rounded-[30px] flex justify-center items-center gap-x-[10px] text-base md:text-[18px] leading-none font-bold cursor-pointer"
              >
                Submit request
                <ArrowUpRight color="black" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetTouch;
