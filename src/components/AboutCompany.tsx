import React from "react";
import Image from "next/image";
import illustration from "../../asset/illustration.jpg";

function AboutCompany() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-white to-green-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 animate-fadeIn">
          <div className="w-full lg:w-1/2 transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              src={illustration}
              alt="Company Illustration"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-800 leading-tight animate-slideInRight">
              Empowering Your{" "}
              <span className="text-green-600">Financial Future</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg animate-slideInUp delay-200">
              We are a newly established audit firm built on a foundation of
              extensive expertise and a commitment to excellence. Our partners
              bring over 13 years of experience working with leading
              international audit firms, providing deep industry knowledge and a
              global perspective.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg animate-slideInUp delay-400">
              Our mission is to help businesses navigate complex financial
              landscapes with clarity and confidence, ensuring transparency,
              compliance, and sustainable growth. With a strong focus on
              integrity, professionalism, and a client-centered approach, we are
              your trusted partners in achieving financial excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
