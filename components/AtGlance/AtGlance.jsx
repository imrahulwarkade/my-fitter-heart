"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Glance from "@/public/Icons/Svgs/Glance";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AtGlance = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate each .fromLeft element independently
    gsap.utils.toArray(".fromLeft").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // when element enters the viewport
            // toggleActions: "play none none reverse",
            // markers: true,
          },
        }
      );
    });

    // Animate each .fromRight element independently
    gsap.utils.toArray(".fromRight").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            // toggleActions: "play none none reverse",
            // markers: true,
          },
        }
      );
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full py-10 text-white fitter lg:grid grid-cols-3 px-[5%] md:px-[8%] glance">
      {/* LEFT SECTION (Desktop Only) */}
      <div className="hidden lg:flex flex-col gap-12 text-white">
        {/* Name */}
        <div className="fromLeft">
          <h4 className="text-sm text-gray-400 font-medium">Name</h4>
          <p className="text-lg mt-2">HART Smart Fitness Tracker Ring</p>
        </div>

        {/* Features */}
        <div className="fromLeft">
          <h4 className="text-sm text-gray-400 font-medium">Features</h4>
          <p className="text-base mt-2 text-gray-300 leading-relaxed">
            Real-Time Heart Rate Monitor, Blood Oxygen Level, Body Recovery,
            Body Temperature, Sleep, Stress, Step Counter, Calories Burnt,
            Activity Tracking, VO2 Max, Recovery and Strain
          </p>
        </div>

        {/* Size */}
        <div className="fromLeft">
          <h4 className="text-sm text-gray-400 font-medium">Size</h4>
          <p className="text-lg mt-2">6, 7, 8, 9, 10, 11, 12, 13</p>
        </div>

        {/* Color */}
        <div className="fromLeft">
          <h4 className="text-sm text-gray-400 font-medium">Color</h4>
          <p className="text-lg mt-2 text-gray-300 leading-relaxed">
            Gunmetal Black, Sterling Gold, Frost Silver
          </p>
        </div>

        {/* Battery */}
        <div className="fromLeft">
          <h4 className="text-sm text-gray-400 font-medium">Battery</h4>
          <p className="text-lg mt-2 text-gray-300 leading-relaxed">
            Rechargeable 24 mAh non-replaceable LiPo battery
          </p>
        </div>

        <div className="fromLeft">
          <h4 className="text-sm text-gray-400 font-medium">MARKETED BY</h4>
          <p className="text-lg mt-2 text-gray-300 leading-relaxed">
            FITTR Life Care Private Limited
          </p>
        </div>

        <div className="fromLeft">
          <h4 className="text-sm text-gray-400 font-medium">BRAND</h4>
          <p className="text-lg mt-2 text-gray-300 leading-relaxed">
            FITTR HART
          </p>
        </div>
      </div>

      {/* CENTER SECTION */}
      <div className="w-full relative h-fit">
        <h2 className="text-[68px] font-bold leading-[120%] tracking-[-2.04px] pb-2 text-center text-white lg:hidden">
          At a Glance
        </h2>
        <Glance />
        <div className="w-fit mx-auto">
          <h2 className="text-[68px] font-bold leading-[120%] tracking-[-0.01em] text-center text-white hidden lg:flex">
            At a <br /> Glance
          </h2>
        </div>
        <p className="text-base pb-6 lg:text-3xl text-center text-white">
          Specifications
        </p>
        <div className="w-full flex justify-center pb-6">
          <button className="inline-flex items-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 _btn_15n87_1 w-[178px] h-[72px] text-black font-semibold text-[16px] gap-3 justify-center bg-white rounded-[88px]">
            Buy Now
          </button>
        </div>
      </div>

      {/* RIGHT SECTION (Desktop Only) */}
      <div className="hidden lg:flex flex-col gap-12 text-white items-end text-right">
        <div className="fromRight">
          <h4 className="text-sm text-gray-400 font-medium">
            What's in The Box
          </h4>
          <p className="text-base mt-2 text-gray-300 leading-relaxed">
            1 Unit Smart Ring, 1 Unit USB Cable, 1 Unit Charging Case, 1 Unit
            Instruction Manual
          </p>
        </div>

        <div className="fromRight">
          <h4 className="text-sm text-gray-400 font-medium">Certifications</h4>
          <p className="text-base mt-2 text-gray-300 leading-relaxed">
            5ATM Water Resistant, CE, EU RoHS, FCC, REACH, CP65, BIS
          </p>
        </div>

        <div className="fromRight">
          <h4 className="text-sm text-gray-400 font-medium">Connectivity</h4>
          <p className="text-lg mt-2">Low powered BLE</p>
        </div>

        <div className="fromRight">
          <h4 className="text-sm text-gray-400 font-medium uppercase tracking-wide">
            Water Resistant
          </h4>
          <p className="text-lg mt-2">Yes (50 mtr)</p>
        </div>

        <div className="fromRight">
          <h4 className="text-sm text-gray-400 font-medium">Material</h4>
          <p className="text-lg mt-2 font-semibold">Titanium</p>
        </div>

        <div className="fromRight">
          <h4 className="text-sm text-gray-400 font-medium">
            PACKAGED AND IMPORTED BY
          </h4>
          <p className="text-lg mt-2 font-semibold">
            Fittr Life Care Pvt Ltd, 7th Floor, Goodwill Byond, Next to WTC,
            Kharadi, Pune, Maharashtra - 411014
          </p>
        </div>

        <div className="fromRight">
          <h4 className="text-sm text-gray-400 font-medium">
            COUNTRY OF ORIGIN
          </h4>
          <p className="text-lg mt-2 font-semibold">China</p>
        </div>
      </div>

      {/* MOBILE ACCORDIONS */}
      <div className="max-w-5xl mx-auto px-4 lg:hidden">
        <Accordion title="Product Specification">
          <SpecRow
            label="Dimension"
            value="6, 8, 9, 10, 11, 12, 13 mm (varies with size)"
          />
          <SpecRow label="Weight" value="2.4–3.6 g (varies with size)" />
          <SpecRow label="Material" value="Titanium" />
          <SpecRow label="Size" value="6, 7, 8, 9, 10, 11, 12, 13" />
          <SpecRow label="Connectivity" value="Low powered BLE" />
          <SpecRow
            label="Battery"
            value="Rechargeable 24 mAh non-replaceable LiPo battery (Lasts up to 8 days on a full charge)"
          />
        </Accordion>

        <Accordion title="Features">
          <p className="text-gray-400">
            Real-Time Heart Rate Monitor, Blood Oxygen Level, Body Recovery,
            Body Temperature, Sleep, Stress, Step Counter, Calories Burnt,
            Activity Tracking, VO2 Max, Recovery and Strain
          </p>
        </Accordion>

        <Accordion title="Other Details">
          <div className="space-y-6 mt-4">
            <SpecRow
              label="What's in The Box"
              value="1 Unit Smart Ring, 1 Unit USB Cable, 1 Unit Charging Case, 1 Unit Instruction Manual"
            />
            <SpecRow
              label="Certifications"
              value="5ATM Water Resistant, CE, EU RoHS, FCC, REACH, CP65, BIS"
            />
            <SpecRow label="Country of Origin" value="China" />
            <SpecRow
              label="Packaged and Imported By"
              value="FittR Life Care Pvt Ltd, 7th Floor, Goodwill Byond, Next to WTC, Kharadi, Pune, Maharashtra - 411014"
            />
            <SpecRow
              label="Marketed By"
              value="FITTR Life Care Private Limited"
            />
            <SpecRow label="Brand" value="FITTR HART" />
          </div>
        </Accordion>
      </div>
    </section>
  );
};

/* ------------------------ Components ------------------------ */
const SpecRow = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
    <span className="text-gray-300 font-medium">{label}</span>
    <span className="text-gray-400 max-w-lg text-right sm:text-left">
      {value}
    </span>
  </div>
);

// Animated Accordion Component
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-700 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-semibold">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-xl"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-3 pb-4 text-gray-400">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AtGlance;
