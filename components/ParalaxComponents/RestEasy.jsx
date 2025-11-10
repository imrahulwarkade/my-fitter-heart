import Image from "next/image";
import React from "react";
import { AlertTriangle } from "lucide-react"; // optional for alert icon

const RestEasy = () => {
  return (
    <section className="w-full h-screen relative text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://hartring.com/assets/rest-easy2-Cz6_U_DB.png"
        alt="rest easy"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col md:justify-center px-10 md:px-20 mt-[10vh] md:mt-32 xl:mt-20">
        {/* Heading */}
        <div className="text-4xl md:text-6xl font-semibold leading-tight max-w-[600px] max-md:mt-4">
          <h2>Rest easy, power up your mornings</h2>
        </div>

        {/* Timer (bottom right) */}
        <div className="absolute max-md:top-1/2 max-md:-translate-y-1/2  mg:bottom-20 right-16 text-gray-200">
          <p className="text-5xl font-semibold tracking-wide">
            5<span className="text-4xl align-top">h</span>{" "}
            <span className="text-5xl font-semibold">20</span>
            <span className="text-4xl align-top">m</span>
          </p>
        </div>

        {/* Info Card */}
        <div className="w-[290px] absolute bottom-[10%] right-[10%] lg:right-[20%] xl:bottom-[20%] xl:right-[25%] md:w-[360px] xl:w-[320px] md:py-6 xl:px-3 xl:rounded-3xl flex flex-col justify-center items-center bg-[#1B1D1F]/80 backdrop-blur-md border border-white/10 rounded-xl px-6 py-5 max-w-md">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle size={20} className="text-red-400" />
            <p className="text-red-400 font-medium text-lg">
              Low sleep score detected
            </p>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            This could affect your overall productivity throughout the day. Try
            taking up lighter tasks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RestEasy;
