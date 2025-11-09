import React from "react";
import Image from "next/image";

const StayOnTop = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://hartring.com/assets/stayon2-CIu07Kiw.png"
        alt="Stay on top of your health"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-16 w-full max-w-6xl text-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-xl drop-shadow-lg">
          Stay on top of your health through the day
        </h1>

        {/* Cards container */}
        <div className="mt-10 flex flex-col gap-4">
          {/* Stress Card */}
          <div className="bg-black/70 backdrop-blur-md rounded-2xl p-6 w-[320px]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
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
                      d="M12 6v6l4 2"
                    />
                  </svg>
                </div>
                <p className="font-medium">Stress</p>
              </div>
              <p className="text-sm text-gray-300">12:00 PM</p>
            </div>
            <div className="text-5xl font-semibold">70</div>
            <p className="text-sm text-gray-400">(55–75)</p>
            <p className="mt-2 text-lg font-medium text-gray-200">Stressed</p>
          </div>

          {/* Alert Card */}
          <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 w-[340px] border border-orange-500/40">
            <p className="text-orange-400 font-semibold mb-1 flex items-center gap-2">
              <span className="text-lg">🚀</span> High stress detected
            </p>
            <p className="text-gray-200 text-sm leading-relaxed">
              High stress score suggests increased pressure. Remember to take
              breaks and practice deep breathing exercises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayOnTop;
