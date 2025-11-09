"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import RestEasy from "../ParalaxComponents/RestEasy";
import Tracker from "../ParalaxComponents/Tracker";
import StayOnTop from "../ParalaxComponents/StayOnTop";
import FindOut from "../ParalaxComponents/FindOut";
import PersonalAi from "../ParalaxComponents/PersonalAi";

gsap.registerPlugin(ScrollTrigger);

const ParallaxEffect = () => {
  useEffect(() => {
    gsap.fromTo(
      ".card1",
      { scale: 1 },
      {
        scale: 0.96,
        scrollTrigger: {
          trigger: ".card1",
          start: "bottom bottom",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".card2",
      { scale: 1 },
      {
        scale: 0.96,
        scrollTrigger: {
          trigger: ".card2",
          start: "bottom bottom",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".card3",
      { scale: 1 },
      {
        scale: 0.96,
        scrollTrigger: {
          trigger: ".card3",
          start: "bottom bottom",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".card4",
      { scale: 1 },
      {
        scale: 0.96,
        scrollTrigger: {
          trigger: ".card4",
          start: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="w-full ">
      {/* Sticky Section first */}
      <div className="w-full h-screen  top-0 sticky rounded-4xl overflow-hidden card1">
        <RestEasy />
      </div>
      <div className="w-full h-screen  top-0 sticky rounded-4xl overflow-hidden card2">
        <Tracker />
      </div>
      <div className="w-full h-screen  top-0 sticky rounded-4xl overflow-hidden card3">
        <StayOnTop />
      </div>
      <div className="w-full h-screen  top-0 sticky rounded-4xl overflow-hidden card4">
        <FindOut />
      </div>
      <div className="w-full h-screen  top-0 sticky rounded-4xl overflow-hidden">
        <PersonalAi />
      </div>
    </section>
  );
};

export default ParallaxEffect;
