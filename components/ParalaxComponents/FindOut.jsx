import React from "react";
import Image from "next/image";

const FindOut = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://hartring.com/assets/bio-age-DF05f9nM.png"
        alt="Find out your biological age"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-16 w-full max-w-6xl text-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl drop-shadow-lg">
          Find out your <br /> biological age
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-lg text-gray-300 max-w-md">
          It adapts to you, moves with you and tracks your performance
          effortlessly.
        </p>

        {/* Cards */}
        <div className="mt-8 flex md:flex-wrap gap-4">
          {/* Biological Age */}
          <div className="bg-[#1b1d1f]/80 backdrop-blur-md rounded-2xl p-5 w-full max-w-[180px] flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-green-900/40 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <p className="font-medium">Biological Age</p>
            </div>
            <p className="text-4xl font-semibold">50</p>
          </div>

          {/* Actual Age */}
          <div className="bg-[#1b1d1f]/80 backdrop-blur-md rounded-2xl p-5 w-full max-w-[180px] flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-indigo-900/40 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10m-10 4h10m-8 4h6m-6-8h6m-9 8h10a2 2 0 002-2V7a2 2 0 00-2-2h-3m-4 0H8a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="font-medium">Actual Age</p>
            </div>
            <p className="text-4xl font-semibold">59</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-6 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Buy Now
        </button>

        {/* Aging Rate Card */}
        <div className="mt-6 bg-[#1b1d1f]/70 backdrop-blur-md rounded-2xl p-4 w-[300px] border border-green-500/40">
          <p className="text-green-400 font-semibold mb-1 flex items-center gap-2">
            <span className="text-lg">🔥</span> 0.85 times slower
          </p>
          <p className="text-gray-200 text-sm leading-relaxed">
            You are aging at a slower pace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FindOut;
