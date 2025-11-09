import React from "react";
import Image from "next/image";

const PersonalAi = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://hartring.com/assets/diet-tool-CvT_xA1u.png"
        alt="Your personal AI nutritionist"
        fill
        className="object-cover object-right"
        priority
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-16 w-full max-w-6xl text-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl drop-shadow-lg">
          Your personal AI <br /> nutritionist
        </h1>

        {/* Subtext */}
        <p className="mt-3 text-lg text-gray-200 max-w-md">
          Calories, Macros and micro breakdown
        </p>

        {/* Nutri Info Cards */}
        <div className="mt-8 flex flex-col gap-4">
          {/* "Here is your Nutri Score" small card */}
          <div className="bg-black/60 backdrop-blur-md rounded-2xl px-6 py-3 w-[280px] flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-500" />
            <p className="text-sm font-medium text-gray-100">
              Here is your Nutri Score
            </p>
          </div>

          {/* Main Nutri Score Card */}
          <div className="bg-black/70 backdrop-blur-md rounded-2xl p-6 w-[340px]">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-lg font-semibold">Nutri Score</p>
                <p className="text-sm text-gray-400">For the day</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-green-400">08</p>
                <p className="text-green-400 text-sm font-medium">Excellent</p>
              </div>
            </div>

            {/* Macronutrient Breakdown */}
            <div className="flex justify-between text-sm text-gray-300 mt-3 pt-3 border-t border-gray-700/50">
              <p>Carbs: <span className="text-white font-medium">50%</span></p>
              <p>Protein: <span className="text-white font-medium">20%</span></p>
              <p>Fats: <span className="text-white font-medium">30%</span></p>
            </div>
          </div>
        </div>

        {/* Floating Food Card (positioned right for balance) */}
        <div className="absolute right-10 top-1/3 bg-black/70 backdrop-blur-md rounded-2xl p-5 w-[260px]">
          <div className="flex items-center justify-between mb-1">
            <p className="font-medium text-white">Quinoa salad</p>
            <div className="flex items-center gap-1 bg-green-900/40 rounded-full px-2 py-[2px] text-green-400 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2v20m10-10H2"
                />
              </svg>
              <span>8</span>
            </div>
          </div>
          <p className="text-gray-200 text-sm mt-1">
            <span className="font-medium text-white">220 Kcal</span> • C:14g •
            P:14g • F:14g
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalAi;
