import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'am a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">

            Fresher! Worked on various technologies like Html, Css, JavaScript, React, Php, Java etc.
            Recently participated in "Techspectra'(24 hrs code) IIT-Delhi offline hackathon.
            Looking forward for opportunities!!
            Connect with me on: linkedin
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300"><FiArrowRight size={25} className="ml-1" /></span>
            </Link>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;