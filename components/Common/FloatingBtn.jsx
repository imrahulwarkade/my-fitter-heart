import Image from "next/image";
import React from "react";

const FloatingBtn = () => {
  return (
    <button className="size-[38px] rounded-full overflow-hidden fixed z-50 bottom-8 right-8">
      <Image
        src="/Icons/headset.png"
        alt="headset"
        fill
        className="object-cover"
      />
    </button>
  );
};

export default FloatingBtn;
