import React from "react";
import Image from "next/image";
import me from "../../asset/me.jpg";

function OurTeam() {
  return (
    <section
      id="team"
      className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-white to-green-50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-gray-800 text-center animate-fadeIn">
          Our <span className="text-green-600">Team</span>
        </h2>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 animate-fadeIn">
          <div className="w-full lg:w-2/3">
            <h3 className="text-3xl font-bold mb-4 text-gray-800 animate-slideInLeft">
              Giorgi Shavgulidze
            </h3>
            <h4 className="text-xl text-green-600 mb-6 animate-slideInLeft delay-100">
              Founder & Managing Partner
            </h4>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed animate-slideInUp delay-200">
                Giorgi Shavgulidze brings nearly 15 years of expertise in the
                auditing and consulting sectors. As the founder and managing
                partner of Maz and Partners, he combines his extensive
                experience with a vision for delivering top-tier audit and
                advisory services.
              </p>
              <p className="text-gray-600 leading-relaxed animate-slideInUp delay-300">
                Before founding Maz and Partners, Giorgi was the Head of the
                Audit Department at UHY LLC, where he joined the team in 2018.
                Throughout his career, he has successfully managed a wide range
                of projects, including financial due diligence, group reporting,
                SOX compliance, and financial audits.
              </p>
              <p className="text-gray-600 leading-relaxed animate-slideInUp delay-400">
                His diverse project management experience spans industries such
                as Banking & Finance, Construction & Real Estate, Food &
                Beverage, Energy & Utilities, Engineering & Industrial,
                High-tech, Electronics & IT, Hospitality, Tourism & Leisure,
                Media & Communications, and the Not-for-Profit sector.
              </p>
              <p className="text-gray-600 leading-relaxed animate-slideInUp delay-500">
                Giorgi began his professional journey at KPMG Georgia, where he
                spent about eight years honing his skills as an auditor. As a
                dedicated leader in the field, Giorgi continues to drive
                innovation and excellence, leveraging his extensive industry
                knowledge to guide Maz and Partners toward success.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src={me}
              alt="Giorgi Shavgulidze"
              width={400}
              height={400}
              layout="responsive"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
