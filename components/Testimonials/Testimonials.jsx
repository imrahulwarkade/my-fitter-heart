import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full bg-[#0B0F14] text-white py-16 px-6 md:px-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          There’s a HART for everyone
        </h2>
        <p className="text-gray-400 text-lg">
          Entrepreneur or an Athlete, busy mom or content creator! HART is there
          to support you!
        </p>
      </div>

      {/* Testimonials Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Card */}
        <div className="bg-[#141A21] rounded-2xl overflow-hidden max-w-sm shadow-lg">
          <div className="relative">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Testimonial 1"
              className="w-full object-cover"
            />
            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#1E242B] text-white rounded-full p-3 text-xl opacity-80 hover:opacity-100">
              &#8592;
            </button>
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-lg">Jaime Vandenberg, 28</h3>
            <p className="text-sm text-gray-400 mb-3">
              Miss World Canada, Miss World contestant 2023
            </p>
            <p className="text-gray-300 text-[15px] leading-relaxed">
              “I love my HART ring, it looks very stylish and is very
              comfortable to wear daily.”
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#141A21] rounded-2xl overflow-hidden max-w-sm shadow-lg">
          <div className="relative">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Testimonial 2"
              className="w-full object-cover"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1E242B] text-white rounded-full p-3 text-xl opacity-80 hover:opacity-100">
              &#8594;
            </button>
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-lg">
              Revant Himmatsinghka, 32
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Influencer, Change Maker
            </p>
            <p className="text-gray-300 text-[15px] leading-relaxed">
              “The best thing about the ring is that I don’t have to remember to
              charge it. Charge it once and it easily lasts 8–10 days and the
              metrics are pretty accurate.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
