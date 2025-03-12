"use client";

import Hero from "@/components/services/Hero";
import Service from "@/components/services/Service";
import Footer from "@/components/services/Footer";
import { useState } from "react";
const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState<string>("staffing");
  return (
    <>
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
      <Service activeTab={activeTab} />
      {/* <About />
      <GetTouch /> */}
      <Footer activeTab={activeTab} />
    </>
  );
};

export default ServicesPage;
