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
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoUrl, repoUrl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              {/* Responsive image loading */}
              <img
                src={src}
                alt=""
                className="w-full h-auto object-cover rounded-t-lg duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center py-4 px-6">
                <button
                  className="w-full sm:w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 text-center"
                  onClick={() => window.open(demoUrl, '_blank')}
                >
                  Demo
                </button>
                <button
                  className="w-full sm:w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 text-center"
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