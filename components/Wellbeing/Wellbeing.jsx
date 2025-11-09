import React from "react";
import WellbeingCard from "../Common/WellbeignCard";

const Wellbeing = () => {
  return (
    <section className="w-full relative bg-[#0B0E10]">
      <div className="w-full h-screen pt-[16%]  lg:pt-[12%] xl:pt-[8%] 4xl:pt-[6%] sticky inset-0  top-0">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center w-full leading-[70px] flex-1 px-[10%]">
          <h2 className="text-[56px] text-white font-bold font-Manrope pb-5 4xl:text-[68px] 4xl:leading-[81px] text-center">
            Wellbeing, comfortably yours
          </h2>
          <p className="w-[572px] text-center font-Manrope text-[20px] font-normal leading-7 tracking-[.1px] text-[#9dabb2]">
            Get actionable insights and implement them into your life to enhance
            your fitness and holistic well-being.
          </p>
        </div>
        <div className="w-full relative flex justify-center items-center pt-[60px]">
          <WellbeingCard id={1} sno={"01"} title="High Precision" desc="Proximity to pulse points ensures unparalleled reliability and precision" />
        </div>
      </div>
      <div className="w-full h-screen  top-0 sticky rounded-4xl overflow-hidden ">
        <div className="absolute w-full flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-[15%]">
          <WellbeingCard id={2} sno={"02"} title="Effortless Comfort" desc="Proximity to pulse points ensures unparalleled reliability and precision"/>
        </div>
      </div>
      <div className="w-full h-screen  top-0 sticky rounded-4xl overflow-hidden">
        <div className="absolute w-full flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-[7%]">
          <WellbeingCard id={3} sno={"03"} title="Bettery For Days" desc="Proximity to pulse points ensures unparalleled reliability and precision" />
        </div>
      </div>
    </section>
  );
};

export default Wellbeing;
