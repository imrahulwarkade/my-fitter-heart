'use client';
import React, { useState } from "react";
import { Facebook, Instagram, Twitter, Plus, Minus } from "lucide-react";

const JoinUs = () => {
  const [openIndex, setOpenIndex] = useState(0); // "About Fittr Smart Ring" open by default

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "About Fittr Smart Ring",
      content:
        "Welcome to Fittr, your go-to destination for the best smart fitness ring brands in India. We pride ourselves on offering affordable fitness tracker rings that cater to all your health and wellness needs. At Fittr, we understand the importance of staying ahead in the fitness game, which is why we are the top fitness ring brand in India.",
    },
    {
      title: "Popular Searches",
      content: "Smart Fitness Ring | Fitness Ring Tracker | Health Tracking Ring | Activity Tracking Ring | Smart Ring with heart rate Monitor | Waterproof smart ring | Bluetooth fitness ring | Sleep Tracking smart ring",
    },
    {
      title: "Best fashionable smart ring online",
      content: "Fittr offers you the ideal combination of fashion and functionality for men, women to track your sleep, count your steps, monitor your workout session, heart rate, body temperature with precision. It syncs the data to your smartphone with high grade bluetooth connectivity.",
    },
    {
      title: "Shop online at Fittr with convenience",
      content: "Enjoy the shopping experience from where ever you are (Mumbai, Delhi, Pune, Bangalore, Chennai). An engaging and user-friendly interface will guide you through your purchasing experience. Comprehensive size charts, product information and high-resolution images help you make the right decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. Our easy policy gives you more power as a buyer.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#12161b] to-[#0C0F12] text-white py-20 px-6 md:px-20 relative">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-700 pb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left">
          Join us on our mission to make people fitter!
        </h2>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="bg-gray-700/40 hover:bg-gray-600/60 p-3 rounded-full transition"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="bg-gray-700/40 hover:bg-gray-600/60 p-3 rounded-full transition"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="bg-gray-700/40 hover:bg-gray-600/60 p-3 rounded-full transition"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Middle Section */}
      <div className="mt-10 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        {/* Logo & Locations */}
        <div>
          <h3 className="text-3xl font-semibold tracking-wide">HART</h3>
          <p className="text-gray-400 mt-3">India | Singapore | USA</p>

          <div className="mt-6">
            <h4 className="text-gray-300 font-medium mb-2">Certifications</h4>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#1c1f23] text-gray-300 px-4 py-1 rounded-full text-sm border border-gray-700">
                HIPAA
              </span>
              <span className="bg-[#1c1f23] text-gray-300 px-4 py-1 rounded-full text-sm border border-gray-700">
                GDPR
              </span>
              <span className="bg-[#1c1f23] text-gray-300 px-4 py-1 rounded-full text-sm border border-gray-700">
                DPDPA
              </span>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 md:gap-16">
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Become a Coach</a></li>
              <li><a href="#" className="hover:text-white">Help & Support</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Online Coaching</a></li>
              <li><a href="#" className="hover:text-white">Corporate Wellness</a></li>
              <li><a href="#" className="hover:text-white">Fitness & Nutrition Courses</a></li>
              <li><a href="#" className="hover:text-white">Weight Loss Diet Plan</a></li>
              <li><a href="#" className="hover:text-white">Diabetes Lifestyle Management</a></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">BMR Calculator</a></li>
              <li><a href="#" className="hover:text-white">Macro Calculator</a></li>
              <li><a href="#" className="hover:text-white">Body Fat Calculator</a></li>
              <li><a href="#" className="hover:text-white">1RM Calculator</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Warranty Policy</a></li>
              <li><a href="#" className="hover:text-white">Return & Refund</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="mt-16 border-t border-gray-800 pt-8 space-y-6">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-gray-700 pb-6">
            <button
              className="w-full flex items-center justify-between text-left"
              onClick={() => toggle(index)}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#1b1f23] border border-gray-700 p-2 rounded-full">
                  {openIndex === index ? (
                    <Minus size={16} className="text-gray-300" />
                  ) : (
                    <Plus size={16} className="text-gray-300" />
                  )}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </button>

            {openIndex === index && item.content && (
              <p className="text-gray-400 mt-4 ml-11 leading-relaxed">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default JoinUs;
