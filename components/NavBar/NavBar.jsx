import React from "react";
import CTAButton from "../Common/CTAButton";

const NavBar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full px-[5%] md:px-[8%] flex items-center justify-between mt-12">
      {/* Logo container */}
      <div className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1349 231"
          className="w-32 md:w-44 h-auto"
          fill="none"
        >
          <path
            d="M287 43V206.5"
            stroke="white"
            strokeWidth="30"
            strokeLinecap="round"
          />
          <path
            d="M17.5 43L17.5 100"
            stroke="white"
            strokeWidth="30"
            strokeLinecap="round"
          />
          <path
            d="M1171 215.5V133C1171 83.2944 1211.29 43 1261 43H1333.5H1038.5"
            stroke="white"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M724.5 206.5V93C724.5 65.3858 746.886 43 774.5 43H865.5L914.62 43.5428C938.794 43.8099 959.534 60.8403 964.5 84.5V84.5"
            stroke="white"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M724.5 129H882.848C921.417 129 957.169 149.201 977.071 182.239L995 212"
            stroke="white"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M285.5 129H127.152C88.5829 129 52.8309 149.201 32.9285 182.239L15 212"
            stroke="white"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M359.5 210L454.607 70.3838C477.803 36.3325 527.871 35.9381 551.6 69.6199L650.5 210"
            stroke="white"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <CTAButton />
    </nav>
  );
};

export default NavBar;
