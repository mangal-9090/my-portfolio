import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from "react-scroll"

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const links =[
        {
            id:1,
            link:"home"
        },
        {
            id:2,
            link:"about"
        },
        {
            id:3,
            link:"portfolio"
        },
        {
            id:4,
            link:"skills"
        },
        {
            id:5,
            link:"contact"
        },
    ] 

    return (
        <div className='flex justify-between items-center w-full h-16 md:h-20 px-4 text-white bg-black fixed z-50'>
            <div>
                <h1 className='text-3xl md:text-5xl font-signature ml-2'>Karan</h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({id, link}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-white hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
            </ul>

            <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-50 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={24} />: <FaBars size={24} />}
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 transform transition-transform duration-300 ease-in-out ${nav ? 'translate-x-0' : '-translate-x-full'} md:hidden z-40`}>
                <ul className='flex flex-col justify-center items-center h-full'>
                    {links.map(({id, link}) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-4 text-2xl md:text-4xl hover:text-white transition-colors duration-200'>
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavBar