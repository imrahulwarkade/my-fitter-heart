"use client";
import React, { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    id: "01",
    question: "What is the sizing kit process?",
    answer:
      "We have a convenient way to help you find the perfect fit: Physical Sizing Kit - For the most accurate fit, select our physical sizing kit.",
  },
  {
    id: "02",
    question: "How do I purchase an additional charging case?",
    answer:
      "Just reach out to our customer support team, and they'll assist you with ordering an extra HART Ring charging case. They'll ensure your request is handled quickly and smoothly!",
  },
  {
    id: "03",
    question: "How long does the HART Ring battery last?",
    answer:
      "The HART Ring has a super long-lasting battery, giving you up to 8 days of use on just one charge. So, you can wear it and track your health without worrying about recharging too often!",
  },
];

const FAQHeader = () => {
  const placeholderTexts = [
    "Search for Compatibility",
    "Search for Battery Life",
    "Search for Shipping Info",
    "Search for Warranty",
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = placeholderTexts[textIndex];
    const typingSpeed = deleting ? 40 : 100;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (deleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!deleting && charIndex === currentText.length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setTextIndex((prev) => (prev + 1) % placeholderTexts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, textIndex]);
// bg-[#0C0F12]
  return (
    <section className="w-full  text-white py-24 px-6 md:px-20 flex flex-col items-center justify-center space-y-10">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center">
        Frequently asked questions
      </h1>

      {/* Search Bar */}
      <div className="relative w-full max-w-2xl">
        <input
          type="text"
          placeholder={displayText || " "}
          className="w-full bg-[#121518] text-gray-300 rounded-full py-4 pl-6 pr-28 outline-none border border-[#1f2428] placeholder-gray-500 focus:ring-2 focus:ring-gray-600 transition"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-b from-white to-gray-300 text-black font-medium rounded-full px-6 py-2 shadow-md hover:scale-105 transition">
          Search
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <FAQHeader />
      <footer className="w-full max-w-[1090px] text-white py-20 px-[5%] md:px-[8%] relative mx-auto">
        <div className=" mx-auto space-y-10">
          {faqs.map((faq, index) => (
            <div key={faq.id}>
              <div
                className="flex items-start justify-between cursor-pointer py-6 border-t border-gray-700"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start gap-4">
                  <span className="text-gray-400 font-medium w-8">
                    {faq.id}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold leading-tight">
                    {faq.question}
                  </h3>
                </div>
                <button className="shrink-0 bg-white text-black rounded-full p-2">
                  {openIndex === index ? (
                    <Minus size={20} strokeWidth={2} />
                  ) : (
                    <Plus size={20} strokeWidth={2} />
                  )}
                </button>
              </div>

              {openIndex === index && faq.answer && (
                <p className="text-gray-400 ml-12 mt-2 text-sm md:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}

          <div className="pt-10 text-center">
            <button className="border border-gray-600 rounded-full px-8 py-3 text-sm font-medium hover:bg-white hover:text-black transition">
              View all FAQ’s →
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
