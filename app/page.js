import AtGlance from "@/components/AtGlance/AtGlance";
import ChargeAnywhere from "@/components/ChargeAnywhere/ChargeAnywhere";
import FloatingBtn from "@/components/Common/FloatingBtn";
import Consumer from "@/components/Consumer/Consumer";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/Home/Home";
import JoinUs from "@/components/JoinUs/JoinUs";
import NavBar from "@/components/NavBar/NavBar";
import ParallaxEffect from "@/components/ParallaxEffect/ParallaxEffect";
import Testimonials from "@/components/Testimonials/Testimonials";
import Wellbeing from "@/components/Wellbeing/Wellbeing";
import React from "react";

const page = () => {
  return (
    <main className="w-full relative">
      <FloatingBtn />
      <NavBar />
      <Home />
      <ParallaxEffect />
      <Wellbeing />
      <ChargeAnywhere />
      <AtGlance />
      <Testimonials />
      <Footer />
      <Consumer />
      <JoinUs />
    </main>
  );
};

export default page;
