import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-900">
        <div className="container flex justify-between mx-auto max-w-7xl h-24 items-center px-6    ">
          <a href="/" className="text-3xl font-bold text-white">
            <span>Tosin</span>
            <span className="text-blue-400">.</span>
          </a>
          <div className="hidden md:flex space-x-12">
            <a
              href="/"
              className="font-medium text-blue-400 border-spacing-2 border-b-2 border-blue-400 pb-1"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white font-medium hover:text-blue-400 hover:border-spacing-2 hover:border-b-2 border-blue-400 pb-1"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-white font-medium hover:text-blue-400 hover:border-spacing-2 hover:border-b-2 border-blue-400 pb-1"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className=" text-white font-medium hover:text-blue-400 hover:border-spacing-2 hover:border-b-2 border-blue-400 pb-1"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-white font-medium hover:text-blue-400 hover:border-spacing-2 hover:border-b-2 border-blue-400 pb-1"
            >
              Contact
            </a>
          </div>
          <a
            href="#contact"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <button className="bg-blue-400  px-4 py-2 rounded-lg hover:bg-blue-500">
              Hire me
            </button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
