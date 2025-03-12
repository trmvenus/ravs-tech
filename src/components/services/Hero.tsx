import Image from "next/image";

const Hero = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <div className="flex items-center flex-col justify-center bg-white py-10 sm:py-16 md:py-20 lg:py-[90px] px-5 sm:px-10 md:px-16 lg:px-24 xl:px-[238px] mt-[60px] md:mt-[80px] lg:mt-[100px] relative">
      <p className="text-rvs-green text-sm md:text-[16px] leading-normal md:leading-[44px] font-bold uppercase">
        expert services
      </p>
      <div className="main-section flex flex-col gap-y-5 md:gap-y-6 lg:gap-y-[30px] mt-2 md:mt-4 lg:mt-[9px] items-center">
        <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight md:leading-none text-center">
          Aligning staffing solutions through innovation
        </h1>
        <div className="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 sm:gap-x-[10px] md:gap-x-[15px] lg:gap-x-[20px]">
          <button
            onClick={() => setActiveTab("staffing")}
            className={`px-4 sm:px-5 md:px-6 lg:px-[30px] py-3 sm:py-4 lg:py-[18px] rounded-[30px] flex items-center justify-center gap-[10px] text-center w-full sm:w-fit font-bold cursor-pointer text-sm md:text-base ${
              activeTab === "staffing"
                ? "bg-rvs-green text-white"
                : "bg-rvs-gray text-black"
            }`}
          >
            Staffing Solutions
          </button>
          <button
            onClick={() => setActiveTab("software")}
            className={`px-4 sm:px-5 md:px-6 lg:px-[30px] py-3 sm:py-4 lg:py-[18px] rounded-[30px] flex items-center justify-center gap-[10px] text-center w-full sm:w-fit font-bold cursor-pointer text-sm md:text-base ${
              activeTab === "software"
                ? "bg-rvs-green text-white"
                : "bg-rvs-gray text-black"
            }`}
          >
            Software Development
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center relative overflow-hidden mt-8 sm:mt-12 md:mt-16 lg:mt-20 z-10 rounded-br-[20px] sm:rounded-br-[30px] md:rounded-br-[40px]">
        <Image
          src={
            activeTab === "staffing"
              ? "/assets/staff-solution-bg.png"
              : "/assets/software-bg.png"
          }
          alt="bg"
          width={1250}
          height={520}
          className="w-full h-auto"
        />
      </div>
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
