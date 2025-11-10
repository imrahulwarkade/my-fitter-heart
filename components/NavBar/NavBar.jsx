import React from "react";
import CTAButton from "../Common/CTAButton";
import Logo from '@/public/Icons/logo.svg';
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full px-[5%] md:px-[8%] flex items-center justify-between mt-5 md:mt-10">
      {/* Logo container */}
      <div className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md flex items-center justify-center">
        <Image
        src={Logo}
        alt="logo"
        width={30}
        height={30}
        className="w-[60px] md:w-[74px] h-auto "
        />
      </div>
      <CTAButton />
    </nav>
  );
};

export default NavBar;
