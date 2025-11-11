"use client";
import React, { useEffect, useRef, useState } from "react";
import SeelkCase from "@/public/Icons/Svgs/SeelkCase";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ChargeAnywhere = () => {
  const container = useRef(null);
  const [at, setAt] = useState(29);
  useEffect(() => {
    const obj = { count: 29 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "120% top",
        pin: true,
        scrub: true,
        // ease: "power2.out",
      },
    });
    tl.to(obj, {
      count: 1,
      onUpdate: () => {
        setAt(Math.floor(obj.count));
      },
    }).to(obj, {
      count: 29,
      onUpdate: () => {
        setAt(Math.floor(obj.count));
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <section ref={container} className="w-full min-h-[120vh] relative ">
      <div className="w-full  pt-[16%] lg:pt-[12%] xl:pt-[8%] 4xl:pt-[6%] inset-0">
        <div className="flex flex-col items-center justify-center w-full leading-[70px] flex-1 px-[10%]">
          <h2 className="text-white font-semibold font-Manrope mb-5 sm:mb-10 font-manrope text-xl sm:text-[28px] leading-[136%] tracking-[-0.01em] text-center">
            Charge Anywhere,{" "}
            <span className="block md:inline">Anytime—Wire-Free!</span>
          </h2>
          <p className="text-lg hidden md:block font-semibold sm:text-xl text-[#71777b] font-manrope font-regular sm:text-[28px] leading-[136%] tracking-[-0.01em] text-center">
            Power up your Fittr Ring with the portable, sleek case—no outlets
            required!
          </p>
        </div>

        <div className="w-full relative flex justify-center items-center pt-[60px]">
          <div className="drop-shadow-[0_0_35px_rgba(255,255,255,0.15)] absolute top-[20vh] lg:relative lg:top-[unset] w-full max-w-[80vw] sm:max-w-[60vw] md:max-w-[50vw] lg:max-w-[35vw]">
            <SeelkCase at={at} />
            <p className="text-lg md:hidden font-semibold sm:text-xl text-[#71777b] font-manrope font-regular sm:text-[28px] leading-[136%] tracking-[-0.01em] text-center">
              Power up your Fittr Ring with the portable, sleek case—no outlets
              required!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChargeAnywhere;
