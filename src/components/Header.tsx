"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../asset/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Our Team", href: "#team" },
    { name: "About Company", href: "#about" },
  ];

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={logo} alt="Logo" width={140} height={50} />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="text-gray-800 hover:text-blue-400 transition duration-300 ease-in-out font-semibold text-lg">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-blue-400 focus:outline-none transition duration-300 ease-in-out"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-indigo-600 hover:bg-gray-50 transition duration-300 ease-in-out">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
