import React from "react";
import Headshot from "../assets/headshot.png";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-800 to-gray-600 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front-End Web Developer.
          </h2>
          <p className="text-white py-4 max-w-md">
            with 9+ Years Experience <span className="font-bold px-2">|</span>
            Located in Perrysburg, OH
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={Headshot}
            alt="my headshot"
            className="rounded-2xl mx-auto w-2/3 md:w-full shadow-xl shadow-gray-850"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
