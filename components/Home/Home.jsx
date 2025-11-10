"use client";
import React, { useState, useEffect } from "react";
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    {
      src: "https://cdn2.fittr.com/videos/hart-ring/sleep-hart-smart-ring-2.mp4",
      objectPosition: "40% 50%",
      title: "Track Stress.\nStay in Control.",
      description:
        "See how stress impacts your body, and learn when to slow down before it slows you down.",
    },
    {
      src: "https://cdn2.fittr.com/videos/hart-ring/swimming-hart-smart-ring-2.mp4",
      objectPosition: "80% 50%",
      title: "No limits.\nNot even water.",
      description:
        "Swim with confidence. Our waterproof design tracks your activity even in the pool.",
    },
    {
      src: "https://cdn2.fittr.com/videos/hart-ring/stress-hart-smart-ring-2.mp4",
      objectPosition: "45% 75%",
      title: "Stay Close.\nEven from Far.",
      description:
        "Share key health insights with loved ones — so you can look out for each other, wherever you are.",
    },
    {
      src: "https://cdn2.fittr.com/videos/hart-ring/mother-hart-smart-ring-2.mp4",
      objectPosition: "62% 75%",
      title: "Track every heartbeat.\nEven while you sleep.",
      description:
        "Get comprehensive sleep analysis and heart rate monitoring throughout the night.",
    },
  ];


  useEffect(() => {
    const tl = gsap.timeline();
    const elements = ['line', 'desc', 'buy'].map(id => `#${id}-${currentVideo}`);
    
    elements.forEach((element, index) => {
      tl.fromTo(element,
      {
        opacity: 0,
        x: -10
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out"
      },
      index * 0.2 
      );
    });
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="w-full h-screen relative ">
      {/* Video Background */}
      {videos.map((video, index) => (
        <video
          key={index}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideo ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: video.objectPosition }}
          src={video.src}
          playsInline
          muted
          autoPlay
          loop
          controls={false}
          controlsList="nodownload nofullscreen noremoteplayback disablepictureinpicture"
          disablePictureInPicture
        />
      ))}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Text Cards - Only show the current one */}
      {videos.map((video, index) => (
        <div
          key={index}
          className={`absolute inset-0 mx-[5%] md:mx-[8%] mt-24 z-5 flex items-start justify-center md:items-center md:justify-start px-5 md:px-24 transition-all duration-1000 ${
            index === currentVideo
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`flex flex-col gap-2 bg-[#00000085] rounded-2xl p-5 md:p-10 absolute ${
              index % 2 === 0 ? "right-0" : "left-0"
            }`}
          >
            <div id={`line-${index}`}>
              {video.title.split("\n").map((line, lineIndex) => (
                <p
                  key={lineIndex}
                  className="text-white text-2xl md:text-4xl font-bold tracking-tight"
                >
                  {line}
                </p>
              ))}
            </div>
            <p id={`desc-${index}`} className="text-white/80 text-sm md:text-xl mt-4 max-w-lg">
              {video.description}
            </p>
            <div id={`buy-${index}`} className="flex gap-4 mt-8">
              <a href="/product-page">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-white text-gray-900 py-3 px-8 rounded-full hover:bg-gray-200 transition-all">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Home;
