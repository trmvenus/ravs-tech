import Image from "next/image";

import Carousel from "@/components/Carousel";
import ArrowUpRight from "@/components/icons/ArrowUpRight";

const images = [
  "/assets/innovate.png",
  "/assets/innovate.png",
  "/assets/innovate.png",
  "/assets/innovate.png",
  "/assets/innovate.png",
  "/assets/innovate.png",
  "/assets/innovate.png",
  "/assets/innovate.png",
];

const Hero = () => {
  return (
    <div className="flex items-center flex-col justify-center bg-white py-10 sm:py-16 md:py-20 lg:py-[90px] px-5 sm:px-10 md:px-16 lg:px-24 xl:px-[238px] mt-[60px] md:mt-[80px] lg:mt-[100px] relative">
      <Image
        src="/assets/arrow-up-yellow.svg"
        alt="hero-image"
        width={45}
        height={34}
        className="w-8 h-6 md:w-10 md:h-8 lg:w-[45px] lg:h-[34px]"
      />
      <div className="main-section flex flex-col gap-y-5 md:gap-y-6 lg:gap-y-[30px] mt-6 md:mt-8 lg:mt-[36px] items-center relative z-10">
        <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight md:leading-none text-center">
          Where <span className="text-rvs-green">Technology</span> Meets
          Innovation
        </h1>
        <p className="text-black text-lg sm:text-xl md:text-2xl font-normal text-center">
          Bridging the gap between Ideas and Execution.{" "}
          <br className="hidden sm:block" />
          Accelerate your growth with technology.
        </p>
        <button className="bg-rvs-green hover:bg-rvs-green/[70%] text-white px-5 sm:px-6 md:px-[30px] py-3 sm:py-4 md:py-[18px] rounded-[30px] flex items-center gap-2 md:gap-[10px] text-center w-fit font-bold cursor-pointer text-sm md:text-base">
          Know more <ArrowUpRight color="white" />
        </button>
      </div>
      <Carousel images={images} />
      <Image
        src="/assets/home-left-line.svg"
        alt="hero-image"
        width={571}
        height={571}
        className="absolute top-[264px] left-[-100px] z-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[571px] lg:h-[571px] opacity-50 md:opacity-70 lg:opacity-100 hidden sm:block"
      />
      <Image
        src="/assets/home-right-line.svg"
        alt="hero-image"
        width={571}
        height={571}
        className="absolute top-[353px] right-[-100px] z-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[571px] lg:h-[571px] opacity-50 md:opacity-70 lg:opacity-100 hidden sm:block"
      />
    </div>
  );
};

export default Hero;
