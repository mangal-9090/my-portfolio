import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto min-h-screen py-16'>
            <div className='pb-8'>
                <p className='text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-4 md:py-6 text-lg md:text-xl'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/bwngojla" method='POST' className='flex flex-col w-full md:w-1/2 gap-4'>
                    <input 
                        type="text" 
                        name='name' 
                        placeholder='Enter your name' 
                        className='p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300' 
                    />
                    <input 
                        type="email" 
                        name='email' 
                        placeholder='Enter your email' 
                        className='p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300' 
                    />
                    <textarea 
                        name="message" 
                        placeholder='Enter your message' 
                        rows="6" 
                        className='p-3 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300 resize-none'
                    ></textarea>
                    <button 
                        className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-105 duration-300 transition-transform w-full md:w-auto justify-center'
                    >
                        Let's talk
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact