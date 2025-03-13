"use client";

import ArrowUpRight from "@/components/icons/ArrowUpRight";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "@/components/careers/Footer";

const CareersPage = () => {
  const [fileName, setFileName] = useState(""); // State to store selected file name

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : ""); // Update state with file name
  };

  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <>
      <div className="flex items-center flex-col justify-center bg-white py-[90px] pt-[106px] px-4 md:px-8 lg:px-16 xl:px-[238px] mt-[80px] md:mt-[100px] relative">
        <p className="text-rvs-green text-[16px] leading-[44px] font-bold uppercase">
          CAREERS
        </p>
        <div className="main-section flex flex-col gap-y-[30px] mt-[9px] items-center">
          <h1 className="text-black text-[60px] font-bold leading-none text-center">
            Build your dream career with
            <br />
            <span className="text-rvs-green leading-20">RAVS Technologies</span>
          </h1>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-[238px] relative bg-white flex flex-col justify-center items-center">
        <Image
          src="/assets/careers.png"
          alt="get-touch"
          width={1252}
          height={1000}
          className={`w-full rounded-[20px] md:rounded-[40px] transition-transform duration-500 ease-in-out rounded-b-[30px] z-1`}
        />

        <div className="flex flex-col rounded-[20px] w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] max-w-[860px] py-[76px] px-16 lg:px-[106px] bg-white mt-[-100px] md:mt-[-150px] lg:mt-[-200px] shadow-[0px_5px_30px_0px_rgba(0,0,0,0.1)] z-50">
          <h1 className="text-black text-[48px] text-center font-bold leading-none">
            Fill in the <span className="text-rvs-green">details</span>
          </h1>
          <div className="form mt-[60px] bg-white">
            <form action="" className="flex flex-col gap-y-[30px]">
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
                  className="text-black text-[18px] leading-[24px] font-normal border-[#bababa] border-[1px] rounded-[10px] py-[18px] px-6 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="name"
                  className="text-black text-[12px] leading-[18px] font-medium uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Add your email address"
                  className="text-black text-[18px] leading-[24px] font-normal border-[#bababa] border-[1px] rounded-[10px] py-[18px] px-6 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="name"
                  className="text-black text-[12px] leading-[18px] font-medium uppercase"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Add your contact number"
                  className="text-black text-[18px] leading-[24px] font-normal border-[#bababa] border-[1px] rounded-[10px] py-[18px] px-6 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="name"
                  className="text-black text-[12px] leading-[18px] font-medium uppercase"
                >
                  ROLE / DESIGNATION
                </label>
                <input
                  type="text"
                  id="looking-for"
                  placeholder="Select any one"
                  className="text-black text-[18px] leading-[24px] font-normal border-[#bababa] border-[1px] rounded-[10px] py-[18px] px-6 focus:outline-none"
                />
              </div>
              <div className="w-full h-[1px] bg-[#bababa] my-4" />
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="name"
                  className="text-black text-[12px] leading-[18px] font-medium uppercase"
                >
                  Upload Resume / RESUME LINK
                </label>
                <input
                  type="text"
                  id="resume-link"
                  placeholder="Add portfolio link"
                  className="text-black text-[18px] leading-[24px] font-normal border-[#bababa] border-[1px] rounded-[10px] py-[18px] px-6 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="name"
                  className="text-black text-[12px] leading-[18px] font-medium uppercase"
                >
                  Upload Resume / RESUME
                </label>
                <div className="relative">
                  {/* Hidden file input */}
                  <input
                    type="file"
                    id="resume"
                    className="hidden"
                    // onChange={handleFileChange}
                  />

                  {/* Custom Upload Button */}
                  <label
                    htmlFor="resume"
                    className="flex items-center space-x-2 text-rvs-green text-[18px] leading-[24px] font-semibold bg-rvs-green-light rounded-[10px] py-[18px] px-6 cursor-pointer"
                  >
                    {/* <FiUpload className="text-rvs-green text-[24px]" />{" "} */}
                    {/* Upload icon */}
                    <span>{fileName || "Click to upload document"}</span>{" "}
                    {/* Change text dynamically */}
                  </label>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-rvs-yellow hover:bg-rvs-yellow-dark text-black py-[18px] px-[58px] rounded-[30px] flex justify-center items-center gap-x-[10px] text-[18px] leading-none font-bold cursor-pointer"
                  onClick={handleSubmit}
                >
                  Submit application
                  <ArrowUpRight color="black" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Image
        src="/assets/home-left-line.svg"
        alt="hero-image"
        width={571}
        height={571}
        className="absolute top-[264px] left-[-100px] z-[0] w-[571px] h-[571px]"
      />
      <Image
        src="/assets/home-right-line.svg"
        alt="hero-image"
        width={571}
        height={571}
        className="absolute top-[760px] right-[-100px] z-0 w-[571px] h-[571px]"
      />

      <Footer />
    </>
  );
};

export default CareersPage;
