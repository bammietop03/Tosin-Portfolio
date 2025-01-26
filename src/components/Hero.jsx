import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload, FaTiktok } from "react-icons/fa";
import tosyno from "../assets/images/tosyno.png";
import handleDownload from "../utils/download";

const Hero = () => {
  return (
    <section className="bg-gray-900 pt-10">
      <div className="container flex flex-col md:flex-row item-center  mx-auto max-w-7xl md:py-10 space-y-0 md:space-y-0">
        {/* Left Item */}
        <div className="flex flex-col space-y-3 md:w-1/2 items-center md:items-start mx-5 md:mx-0 md:mr-7 py-10 sm:px-6">
          <p className="text-blue-400 font-bold ">Data Analyst</p>

          <h1 className="text-white text-6xl font-bold text-center md:text-left">
            Hello I'm
          </h1>
          <h1 className="text-blue-400 text-6xl font-bold text-center md:text-left">
            Tosin Akinniyi
          </h1>
          <p className="text-white pl-5 md:pl-0 md:pr-6 text-center py-6 md:text-left">
            I am a data analyst passionate about leveraging data to enhance
            business operations. With my healthcare background, I excel at
            connecting healthcare services with business strategies to drive
            impactful outcomes.
          </p>
          <div className=" flex space-x-3">
            <button
              onClick={handleDownload}
              className="text-blue-400  px-4 md:px-6 py-2 rounded-3xl hover:bg-blue-400 hover:text-black flex border border-blue-400 mr-4"
            >
              Download CV <FaDownload className="mt-1 ml-2" />
            </button>
            <a
              href="https://github.com/AdebayoTosin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={35}
                color="#60a5fa"
                className="border p-2 border-blue-400 rounded-full hover:bg-gray-700 cursor-pointer"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/akinniyi-tosin-188183142"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={35}
                color="#60a5fa"
                className="border p-2 border-blue-400 rounded-full hover:bg-gray-700 cursor-pointer"
              />
            </a>
            <a
              href="https://www.tiktok.com/@techways_consult"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok
                size={35}
                color="#60a5fa"
                className="border p-2 border-blue-400 rounded-full hover:bg-gray-700 cursor-pointer"
              />
            </a>
          </div>
        </div>
        {/* Right Item */}
        <div className="w-1/2  ml-28 md:ml-0 md:pl-20">
          <img src={tosyno} alt="description" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
