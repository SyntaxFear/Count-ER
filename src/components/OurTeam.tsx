import React from "react";
import Image from "next/image";
import me from "../../asset/me.jpg";

function OurTeam() {
  return (
    <section
      id="team"
      className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-gray-800 text-center animate-fadeIn">
          Our <span className="text-blue-600">Team</span>
        </h2>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 animate-fadeIn">
          <div className="w-full lg:w-2/3">
            <h3 className="text-3xl font-bold mb-4 text-gray-800 animate-slideInLeft">
              Giorgi Shavgulidze
            </h3>
            <h4 className="text-xl text-blue-600 mb-6 animate-slideInLeft delay-100">
              Managing Partner
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

        {/* New section with two columns */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="animate-fadeIn">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Founders</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Giorgi Shavgulidze</li>
              <li>Giorgi Gikashvili</li>
            </ul>
          </div>
          <div className="animate-fadeIn">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Managing Partner
            </h3>
            <p className="text-gray-600">Giorgi Shavgulidze</p>
          </div>
        </div>

        {/* New contact information section */}
        <div className="mt-20 animate-fadeIn" id="contact">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-gray-800 text-center animate-fadeIn ">
            <span className="text-blue-600"> Contact</span> US
          </h2>
       <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
  <a href="tel:+995555764364" className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50 hover:scale-105 cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:rotate-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
    <span className="text-gray-700 transition-colors duration-300 hover:text-blue-600">
      +995 555 764 364
    </span>
  </a>
  <a href="mailto:gshavgulidze@maz.ge" className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50 hover:scale-105 cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:rotate-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
    <span className="text-gray-700 transition-colors duration-300 hover:text-blue-600">
      gshavgulidze@maz.ge
    </span>
  </a>
</div>

        </div>
      </div>
    </section>
  );
}

export default OurTeam;
