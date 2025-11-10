"use client";
import React, { useState, useRef, useEffect } from "react";
import ScrollLeft from "@/public/Icons/rounded-arrow-left.svg";
import ScrollRight from "@/public/Icons/rounded-arrow-right.svg";
import Image from "next/image";

const testimonials = [
  {
    name: "Jaime Vandenberg, 28",
    title: "Miss World Canada, Miss World contestant 2023",
    text: "“I love my HART ring, it looks very stylish and is very comfortable to wear daily.”",
    img: "/Images/jamie.png",
    imageOnTop: true,
  },
  {
    name: "Nusier Yassin, 33",
    title: "Entrepreneur, Creator",
    text: "“Congrats to JC and team for this amazing product, it's quite impressive, the metrics are accurate, the app interface is smooth and is definitely more convenient than a band while sleeping.”",
    img: "/Images/nusier.png",
    imageOnTop: false,
  },
  {
    name: "Revant Himmatsinghka, 32",
    title: "Influencer, Change Maker",
    text: "“The best thing about the ring is that I don't have to remember to charge it. Charge it once and it easily lasts 8-10 days and the metrics are pretty accurate.”",
    img: "/Images/revant.png",
    imageOnTop: true,
  },
  {
    name: "Bandagee Kalra, 31",
    title: "Entrepreneur, Creator",
    text: "“If you're someone who hates wearing fitness watches to sleep, then you must get HART ring. I've been sleeping better because I can finally wear a tracker while sleeping!”",
    img: "/Images/banda.png",
    imageOnTop: false,
  },
  {
    name: "Rakesh Roshan, 74",
    title: "Film producer, Actor, Director",
    text: "I've been using HART ring to track my sleep, steps, my resting heart rate and my HRV. It's helping me to stay on track and improve my health.",
    img: "/Images/rakesh.png",
    imageOnTop: true,
  },
  {
    name: "Puja Tomar, 24",
    title: "UFC fighter",
    text: "I've been using the HART ring to track my activity and recovery primarily. As an athlete, it helps me give very good insights about my RHR and my VO2max which helps me to push myself further.",
    img: "/Images/puja.png",
    imageOnTop: false,
  },
];

const Testimonials = () => {
  const [currentTestimonials, setCurrentTestimonials] = useState(testimonials);
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  // Detect mobile width
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;
  const scrollWidth = isMobile ? 384 : 384 * 2; // 1 card in mobile, 2 in desktop

  const scrollToLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollWidth,
        behavior: "smooth",
      });

      setTimeout(() => {
        setCurrentTestimonials((prev) => {
          const newArray = [...prev.slice(1), prev[0]];
          return newArray;
        });

        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollLeft = 0;
        }
      }, 400);
    }
  };

  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      setCurrentTestimonials((prev) => {
        const newArray = [prev[prev.length - 1], ...prev.slice(0, -1)];
        return newArray;
      });

      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: scrollWidth,
            behavior: "smooth",
          });
        }
      }, 50);
    }
  };

  const startAutoScroll = () => {
    scrollIntervalRef.current = setInterval(scrollToLeft, 4000);
  };

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const handleManualScrollLeft = () => {
    stopAutoScroll();
    scrollToLeft();
    setTimeout(startAutoScroll, 5000);
  };

  const handleManualScrollRight = () => {
    stopAutoScroll();
    scrollToRight();
    setTimeout(startAutoScroll, 5000);
  };
// bg-[#0B0F14]
  return (
    <section className="w-full  text-white py-16 px-6 md:px-20 overflow-x-hidden">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          There's a HART for everyone
        </h2>
        <p className="text-gray-400 text-lg">
          Entrepreneur or an Athlete, busy mom or content creator! HART is there
          to support you!
        </p>
      </div>

      <div className="w-full relative">
        <button
          className="absolute top-1/2 left-0 -translate-y-1/2 backdrop-blur-3xl rounded-full z-10"
          onClick={handleManualScrollLeft}
        >
          <Image
            loading="lazy"
            src={ScrollLeft}
            alt="Arrow Left"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full"
          />
        </button>

        <div
          ref={scrollContainerRef}
          className="hidescroller w-full flex flex-row items-center gap-10 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {currentTestimonials.map((testimonial, id) => (
            <div
              key={`testimonial-${id}-${testimonial.name}`}
              className=" rounded-3xl overflow-hidden shrink-0 w-full max-w-[384px]"
              
            >
              {testimonial.imageOnTop && (
                <div className="relative rounded-3xl overflow-hidden h-[375px]">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-gray-400 mb-3">
                  {testimonial.title}
                </p>
                <p className="text-gray-300 text-[15px] leading-relaxed">
                  {testimonial.text}
                </p>
              </div>

              {!testimonial.imageOnTop && (
                <div className="relative rounded-3xl overflow-hidden h-[375px] mt-12">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className="absolute top-1/2 right-0 -translate-y-1/2 backdrop-blur-3xl rounded-full z-10"
          onClick={handleManualScrollRight}
        >
          <Image
            loading="lazy"
            src={ScrollRight}
            alt="Arrow Right"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full"
          />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
