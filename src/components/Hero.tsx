import React from "react";
import Image from "next/image";
import heroImage from "../../asset/hero.jpg";
import Link from "next/link";

function Hero() {
  return (
    <section className="relative h-[90vh] p-4 sm:p-6 md:p-8 pt-10">
      <div className="absolute top-10 left-4 right-4 bottom-4 sm:left-6 sm:right-6 sm:bottom-6 md:left-8 md:right-8 md:bottom-8 rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={heroImage}
          alt="MAZ AND PARTNERS background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="rounded-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70 rounded-3xl"></div>
      </div>
      <div className="relative z-10 flex flex-col justify-center min-h-screen text-white p-4 sm:p-6 md:p-8 lg:p-12 max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-2 text-green-400">
          MAZ AND PARTNERS
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Transforming Business
          <br />
          <span className="text-green-400">Through Financial Expertise</span>
        </h1>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-2xl max-w-3xl font-light">
          Comprehensive financial solutions tailored for modern businesses. Our
          expert services in Audit, Tax, and Advisory drive your success and
          empower growth.
        </p>
   <div className="flex flex-col sm:flex-row gap-4 items-start">
  <Link
    href={"#about"}
    className="w-auto bg-green-500 hover:bg-green-600 transition-all text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl"
  >
    Company
  </Link>
  <Link
    href={"#team"}
    className="w-auto bg-transparent border-2 border-white hover:bg-white hover:text-green-800 transition-all text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold"
  >
    Team
  </Link>
</div>

      </div>
    </section>
  );
}

export default Hero;
