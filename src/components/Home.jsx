import React from 'react'
import HeroImage from "../assets/heroImage.png"
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div name="home" className='min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-8 md:gap-0 pt-20 md:pt-0'>
            <div className='flex flex-col justify-center h-full text-center md:text-left space-y-6'>
                <h2 className='text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight'>
                    I'am a Full Stack Developer
                </h2>

                <p className='text-gray-500 max-w-md text-sm sm:text-base md:text-lg leading-relaxed'>
                    Fresher! Worked on various technologies like Html, Css, JavaScript, React, Php, Java etc.
                    Recently participated in "Techspectra'(24 hrs code) IIT-Delhi offline hackathon.
                    Looking forward for opportunities!!
                    Connect with me on: linkedin 
                </p>

                <div className='flex justify-center md:justify-start pt-4'>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-4 sm:px-6 py-2 sm:py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-200'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'><FiArrowRight size={20} className='ml-1' /></span>
                    </Link>
                </div>
            </div>

            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <div className='relative w-full max-w-md'>
                    <img 
                        src={HeroImage} 
                        alt="my profile" 
                        className='rounded-2xl w-full h-auto object-contain shadow-lg shadow-gray-500/20 hover:scale-105 transition-transform duration-300' 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home