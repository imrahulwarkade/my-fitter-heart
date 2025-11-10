"use client";
import Bettery from "@/public/Icons/Svgs/Bettery";
import FitterRing from "@/public/Icons/Svgs/FitterRing";
import FloatingRing from "@/public/Icons/Svgs/FloatingRing";
import React from "react";

const WellbeingCard = ({
  id = 1,
  sno = "01.",
  title = "High Precision",
  desc = "Proximity to pulse points ensures unparalleled reliability and precision.",
}) => {
  return (
    <div className="relative top-[-25%] transform-top flex items-center justify-between flex-col md:flex-row h-[60vh] md:h-[338px] w-[700px] lg:w-[788px] 4xl:h-[468px] 4xl:w-[998px] bg-[#ffffff0f] rounded-4xl border border-[#FFFFFF66] backdrop-blur-2xl overflow-hidden">
      {/* Left Text Section */}
      <div className="pl-8 max-md:pt-4 md:pl-16 flex flex-col  justify-center w-[380px]">
        <p className="pb-[18px] 4xl:text-[28px] text-white text-[28px] font-normal leading-[136%] tracking-[-0.28px] opacity-40">
          {sno}
        </p>
        <h3 className="pb-2 4xl:text-[56px] 4xl:leading-[69px] text-white text-[28px] font-bold leading-[38.08px] tracking-[-0.01em] text-left">
          {title}
        </h3>
        <p className="4xl:text-[20px] 4xl:leading-[32px] text-[16px] font-normal leading-6 text-left text-[#9DABB2]">
          {desc}
        </p>
      </div>

      {/* Right Image Placeholder (You can add your Image here later) */}
      <div style={{scale : id==1 ? 1.3 : 1}} className="h-full w-full flex flex-1 justify-end items-end">
        {id === 3 ? <Bettery /> : id === 2 ? <FloatingRing /> : <FitterRing />}
      </div>
    </div>
  );
};

export default WellbeingCard;
