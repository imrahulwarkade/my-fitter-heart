'use client';
import React from "react";
import { Headphones } from "lucide-react";

const CTAButton = () => {
  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 shadow-lg w-fit">
      {/* Left Button */}
      <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-transparent text-white font-medium hover:bg-white/20 transition-all">
        <Headphones size={20} className="text-white" />
        Talk to an expert
      </button>

      {/* Right Button */}
      <button className="px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all">
        Buy Now
      </button>
    </div>
  );
};

export default CTAButton;
