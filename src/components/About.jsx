import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                Computer Science final year student with solid grounding in cs fundamentals.I cleared my high school with a score of 84% and my intermediate class with a score of 92.6%.
                Worked as a web developer intern at 'CodSoft' where I had made completed 3 task.
                Recently I had participated in 'Techspectra'(24 hrs code) IIIT-Delhi Hackathon where my team had worked to build a A.I based Grievance Lodging Complaint System.
                
            </p>

            <br />

            <p className='text-xl'>
            I also worked on various projects like A.I desktop assistant, Personal portfolio website, Erp portal for college and a educational website.
            Looking forward to work on industry level projects.

            </p>
        </div>

    </div>
  )
}

export default About