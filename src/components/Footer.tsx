"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../asset/logo.png"; // Make sure to update this path to your actual logo file

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div
          className="mb-4 md:mb-0"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            src={logo}
            alt="Company Logo"
            width={120}
            height={40}
            className="brightness-0 invert cursor-pointer"
          />
        </div>

        {/* Links */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-wrap justify-center space-x-6">
            <li>
              <Link
                href="#about"
                className="hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                About Company
              </Link>
            </li>
            <li>
              <Link
                href="#team"
                className="hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Contact US
              </Link>
            </li>
          </ul>
        </nav>

        {/* All rights reserved */}
        <div className="text-xs text-gray-400">
          © {new Date().getFullYear()} Maz and Partners. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
