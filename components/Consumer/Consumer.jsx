import React from "react";
import { User, Briefcase, Phone, Mail, MapPin } from "lucide-react";

const Consumer = () => {
  return (
    <section className="w-full  text-white py-24 px-6 md:px-20 relative flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Consumer Protection
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-center max-w-3xl mt-6 leading-relaxed">
        In compliance with Consumer Protection (E-Commerce) Rules, 2020 and the
        Information Technology Act, 2000 and rules made thereunder, the details
        of the Grievance Officer and the Nodal Person are mentioned below:
      </p>

    <div className="w-full relative flex flex-col md:flex-row gap-12 justify-center items-center">
      {/* Card */}
      <div className="bg-[#161E24] mt-12 p-8 rounded-2xl shadow-md w-full max-w-md border border-gray-800">
        <h2 className="text-xl font-semibold mb-6">Nodal Person</h2>

        <ul className="space-y-4 text-gray-300">
          <li className="flex items-center gap-3">
            <User className="text-gray-400" size={20} />
            <span>Nisha</span>
          </li>
          <li className="flex items-center gap-3">
            <Briefcase className="text-gray-400" size={20} />
            <span>Corporate Lawyer</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="text-gray-400" size={20} />
            <span>08888003430</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="text-gray-400" size={20} />
            <span>support@fittr.care</span>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="text-gray-400 mt-1" size={20} />
            <span>
              7th Floor, Goodwill Byond, Next to WTC, Kharadi, Pune, Maharashtra
              - 411014
            </span>
          </li>
        </ul>
      </div>
      {/* Card */}
      <div className="bg-[#161E24] mt-12 p-8 rounded-2xl shadow-md w-full max-w-md border border-gray-800">
        <h2 className="text-xl font-semibold mb-6">Grievance Officer</h2>


        <ul className="space-y-4 text-gray-300">
          <li className="flex items-center gap-3">
            <User className="text-gray-400" size={20} />
            <span>Kamal Rao</span>
          </li>
          <li className="flex items-center gap-3">
            <Briefcase className="text-gray-400" size={20} />
            <span>Product Manager</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="text-gray-400" size={20} />
            <span>08888003430</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="text-gray-400" size={20} />
            <span>support@fittr.care</span>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="text-gray-400 mt-1" size={20} />
            <span>
            7th Floor, Goodwill Byond, Next to WTC, Kharadi, Pune, Maharashtra - 411014
            </span>
          </li>
        </ul>
      </div>
    </div>
    </section>
  );
};

export default Consumer;
