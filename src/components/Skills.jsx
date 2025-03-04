import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import bootstrap from "../assets/bootstrap.png"
import php from "../assets/php.png"
import vite from "../assets/vite.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import node from "../assets/node.png"
import firebase from "../assets/firebase.png"
import java from "../assets/java.png"
import mysql from "../assets/mysql.png"

const Skills = () => {
    const techs = [
        {
            id:1,
            src: html,
            title:'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: css,
            title:'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: javascript,
            title:'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: reactImage,
            title:'React',
            style: 'shadow-blue-600'
        },
        {
            id:5,
            src: bootstrap,
            title:'Bootstrap',
            style: 'shadow-purple-600'
        },
        {
            id:6,
            src: php,
            title:'PHP',
            style: 'shadow-purple-400'
        },
        {
            id:7,
            src: vite,
            title:'Vite',
            style: 'shadow-indigo-400'
        },
        {
            id:8,
            src: github,
            title:'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id:9,
            src: tailwind,
            title:'Tailwind css',
            style: 'shadow-blue-400'
        },
        {
            id:10,
            src: node,
            title:'Node js',
            style: 'shadow-green-400'
        },
        {
            id:11,
            src: firebase,
            title:'Firebase',
            style: 'shadow-yellow-500'
        },
        {
            id:12,
            src: java,
            title:'Java',
            style: 'shadow-orange-500'
        },
        {
            id:13,
            src: mysql,
            title:'MySQL',
            style: 'shadow-orange-500'
        },
    ]

    return (
        <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full min-h-screen py-16'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
                <div>
                    <p className='text-3xl md:text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                    <p className='py-4 md:py-6 text-lg md:text-xl'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 text-center py-8 px-4 sm:px-0'>
                    {techs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style} transition-all`}>
                            <img src={src} alt="" className='w-16 sm:w-20 mx-auto' />
                            <p className='mt-2 md:mt-4 text-sm md:text-base'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills