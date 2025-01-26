import React from "react";
import Slider from "react-slick";
import { FaGithub } from "react-icons/fa";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {/* First slide */}
        <div className="p-5 md:p-20">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full">
            {/* Text section */}
            <div className="text-white md:pr-4">
              <h1 className="text-7xl font-bold text-blue-400 mb-6">01</h1>
              <h2 className="text-3xl font-semibold">Bellabeat Project</h2>
              <p className="my-6 text-gray-400">
                This project focus on how to improve the marketing strategy of
                bellabeat products by using data to gain insight on how users
                use non bellabeat smart device, which will unlock new growth
                opportunity for the company to ensure the stakeholders make best
                and inform decisions through our recommendations using R
                programming.
              </p>
              <hr className="border-blue-400 my-5" />
              <div className="flex space-x-4">
                <a
                  href="https://github.com/AdebayoTosin/Tiktok_Followers_increase_Analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={37}
                    className="p-2 rounded-full bg-slate-700 hover:bg-blue-600"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="p-5 md:p-20">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full">
            {/* Text section */}
            <div className="text-white md:pr-4">
              <h1 className="text-7xl font-bold text-blue-400 mb-6">02</h1>
              <h2 className="text-3xl font-semibold">
                Tiktok Follower Increase Analysis
              </h2>
              <p className="my-6 text-gray-400">
                This project focus on Analysis of my tiktok page
                @techway_consult link here. I extracted and analyzed performance
                data from my TikTok page using Power BI. The analysis involved
                transforming raw data into interactive dashboards, tracking key
                metrics such as follower growth, engagement rates, video views,
                and audience demographics. The insights derived helped in
                understanding content performance, audience behavior, and
                overall engagement trends, enabling data-driven decisions to
                optimize content strategy.
              </p>
              <hr className="border-blue-400 my-5" />
              <div className="flex space-x-4">
                <a
                  href="https://github.com/AdebayoTosin/Tiktok_Followers_increase_Analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={37}
                    className="p-2 rounded-full bg-slate-700 hover:bg-blue-600"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Third slide */}
        <div className="p-5 md:p-20">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full">
            {/* Text section */}
            <div className="text-white md:pr-4">
              <h1 className="text-7xl font-bold text-blue-400 mb-6">03</h1>
              <h2 className="text-3xl font-semibold">Films Data Exploration</h2>
              <p className="my-6 text-gray-400">
                In this project, I will apply my SQL skills to perform
                exploratory data analysis on the "inidata" database, which
                contains the following tables; films, people, reviews, and
                roles. The project will focus on retrieving, filtering, and
                analyzing data to answer real-life business questions related to
                the film industry.
              </p>
              <hr className="border-blue-400 my-5" />
              <div className="flex space-x-4">
                <a
                  href="https://github.com/AdebayoTosin/films_data_exploraton"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={37}
                    className="p-2 rounded-full bg-slate-700 hover:bg-blue-600"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
