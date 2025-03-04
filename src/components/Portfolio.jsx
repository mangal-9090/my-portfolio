import React from 'react';
import S1 from "../assets/portfolio/S1.png";
import S2 from "../assets/portfolio/S2.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: S1,
      demoUrl: 'http://localhost/wev1/',
      repoUrl: 'https://github.com/mangal-9090/my-college-erp-project',
    },
    {
      id: 2,
      src: S2,
      demoUrl: 'http://localhost/Hotel-Management-System-main/index.php',
      repoUrl: 'https://github.com/mangal-9090/Hotel-Management-System-main',
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-4 md:py-6 text-lg md:text-xl">Check out some of my work here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, demoUrl, repoUrl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden bg-gray-900">
              <div className="relative w-full h-48 md:h-64 overflow-hidden">
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-center flex-wrap p-4">
                <button
                  className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-600 rounded-md text-sm md:text-base"
                  onClick={() => window.open(demoUrl, '_blank')}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-600 rounded-md text-sm md:text-base"
                  onClick={() => window.open(repoUrl, '_blank')}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;