import Image from "next/image";
import React from "react";
import { Flame, Heart, Droplet, Activity, Dumbbell } from "lucide-react"; // icons

const Tracker = () => {
  return (
    <section className="w-full h-screen relative text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={"https://hartring.com/assets/wellbeing2-BUqbtpCk.png"}
        alt="wellness background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center max-md:items-center  md:px-20 space-y-6 mt-[10vh] md:mt-32 xl:mt-20 ">
        {/* Achievement Card (Top Right) */}
        <div className="absolute top-10 md:right-10 bg-[#1B1D1F]/80 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 max-w-sm shadow-md max-md:mx-[5%]">
          <div className="flex items-center gap-2 mb-1">
            <Flame size={20} className="text-green-400" />
            <p className="text-green-400 font-medium text-lg">Peak Achieved!</p>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Ready for more? Your health stats suggest you can push your limits.
          </p>
        </div>

        <div className="w-[80%] mx-auto mt-[22vh]  md:ms-12 md:mt-5xl:mt-[5rem] xl:w-[591px] xl:ms-5 2xl:mt-60   ">
          {/* Heading & Description */}
          <h1 className="text-4xl md:text-6xl font-semibold max-w-[600px] leading-tight text-center">
            Track your wellness journey
          </h1>
          <p className="text-gray-300 text-lg max-w-[600px]">
            It adapts to you, moves with you and tracks your performance
            effortlessly
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 md:mt-8 max-w-3xl">
          <div className="bg-[#1B1D1F]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col items-start">
            <Activity className="text-green-400 mb-2" />
            <p className="text-gray-300 text-sm">Running</p>
            <p className="text-white font-semibold text-lg">1.2 Km</p>
          </div>

          <div className="bg-[#1B1D1F]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col items-start">
            <Droplet className="text-blue-400 mb-2" />
            <p className="text-gray-300 text-sm">Calories</p>
            <p className="text-white font-semibold text-lg">286 kcal</p>
          </div>

          <div className="bg-[#1B1D1F]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col items-start">
            <Heart className="text-red-400 mb-2" />
            <p className="text-gray-300 text-sm">Heart Rate</p>
            <p className="text-white font-semibold text-lg">120 bpm</p>
          </div>

          <div className="bg-[#1B1D1F]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col items-start">
            <Dumbbell className="text-purple-400 mb-2" />
            <p className="text-gray-300 text-sm">Strain</p>
            <p className="text-white font-semibold text-lg">70</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracker;
