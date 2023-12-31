'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

import profilePic from 'public/profile.png';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoTelegram, BiLogoGmail } from "react-icons/bi";
import html from 'public/html.png';
import css from 'public/css.png';
import bootstrap from 'public/bootstrap.png';
import js from 'public/js.png';
import sql from 'public/sql.png';
import react from 'public/react.png';
import tailwind from 'public/tailwind.png';
import php from 'public/php.png';
import github from 'public/github.png';
import linux from 'public/linux.png';

import ScrollToTopButton from "./ScrollToTopButton.js";


export default function Home() {

  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
      alt: html,
      skillPercentage: 80,
      percentageWidth: 260,
      bgSkill: 'bg-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
      alt: css,
      skillPercentage: 60,
      percentageWidth: 195,
      bgSkill: 'bg-blue-500'
    },
    {
      id: 3,
      src: js,
      title: 'Javascript',
      style: 'shadow-yellow-500',
      alt: js,
      skillPercentage: 70,
      percentageWidth: 227.5,
      bgSkill: 'bg-yellow-500'
    },
    {
      id: 4,
      src: bootstrap,
      title: 'Boostrap',
      style: 'shadow-purple-900',
      alt: bootstrap,
      skillPercentage: 60,
      percentageWidth: 195,
      bgSkill: 'bg-purple-900'
    },
    {
      id: 5,
      src: react,
      title: 'React JS',
      style: 'shadow-cyan-500',
      alt: react,
      skillPercentage: 60,
      percentageWidth: 195,
      bgSkill: 'bg-cyan-500'
    },
    {
      id: 6,
      src: tailwind,
      title: 'TailwindCSS',
      style: 'shadow-teal-500',
      alt: tailwind,
      skillPercentage: 65,
      percentageWidth: 211.25,
      bgSkill: 'bg-teal-500'
    },
    {
      id: 7,
      src: github,
      title: 'GitHub',
      style: 'shadow-black',
      alt: github,
      skillPercentage: 50,
      percentageWidth: 162.5,
      bgSkill: 'bg-black'
    },
    {
      id: 8,
      src: php,
      title: 'PHP',
      style: 'shadow-purple-500',
      alt: github,
      skillPercentage: 70,
      percentageWidth: 227.5,
      bgSkill: 'bg-purple-500'
    },
    {
      id: 9,
      src: sql,
      title: 'SQL',
      style: 'shadow-blue-500',
      alt: github,
      skillPercentage: 60,
      percentageWidth: 195,
      bgSkill: 'bg-blue-500'
    },
    {
      id: 10,
      src: linux,
      title: 'Linux',
      style: 'shadow-yellow-500',
      alt: github,
      skillPercentage: 60,
      percentageWidth: 195,
      bgSkill: 'bg-yellow-500'
    }, 
  ]

  return (
    <>
      <main className='bg-whtie px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-sans'>OUDOMREACH.</h1>
            <ul className='flex items-center'>
              {/* <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
              </li> */}
              <li>
                <a className='bg-purple-600 text-white px-4 py-2 rounded ml-8' >
                  <Link href="#exp" >
                    Experience
                  </Link>
                </a>
              </li>
              <li>
                <a className='bg-purple-600 text-white px-4 py-2 rounded ml-8' >
                  <Link href="#skills" >
                    Skills
                  </Link>
                </a>
              </li>
              <li>
                <a className='bg-purple-600 text-white px-4 py-2 rounded ml-8' >
                  <Link href="./#aboutme" >
                    About Me
                  </Link>
                </a>
              </li>
              <li>
                <a className='bg-purple-600 text-white px-4 py-2 rounded ml-8'>
                  <Link href="./resume.pdf" alt="resume" target="_blank" download>
                    Download CV
                  </Link>
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center justify-center p-10 lg:flex-row">
            <div className="lg:w-1/2 lg:order-2">
              <div className="relative mx-auto bg-purple-600 rounded-full w-80 h-80 mt-20 overflow-hidden">
                <Image 
                  src={profilePic}
                  layout="fill"
                  objectFit="cover"
                  alt="Profile"
                />
              </div>
            </div>
            <div className="lg:w-1/2 lg:order-1">
              <h2 className="text-5xl py-2 font-medium">
                <span className="text-purple-600">Oudomreach</span>
                <br />
                <span>CHYPHALLA</span>
              </h2>
              <h3 className="text-md py-5 pt-6">
                Just a teenage boy with passions, and curious about everythings.<br />
                Passionate in Tech, Software, Hardware, Programming, etc with tech relate. 
              </h3>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <h1 className="text-3xl text-purple-600 text-center border-b-2 border-purple-600 inline-block">Let's connect</h1>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-purple-600">
            {/* <AiFillFacebook />
            <AiFillInstagram /> */}
            <span className="cursor-pointer">
              <a href="https://www.linkedin.com/in/oudomreach-chyphalla-4b64691ba/" target="_blank">
                <AiFillLinkedin />
              </a>
            </span>
            <span className="cursor-pointer">
              <a href="https://t.me/khorkoo" target="_blank">
                <BiLogoTelegram />
              </a>
            </span>
            <span className="cursor-pointer">
              <a href="https://github.com/Oudomreach" target="_blank">
                <AiFillGithub />
              </a>
            </span>
          </div>
          
        </section>
        {/* About Me */}
        <section>
          <div id="aboutme">
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col'>
              <span>
                <h1 className="text-3xl text-purple-600 font-semibold border-b-2 border-purple-600 inline uppercase">About Me</h1>
              </span>
              <div>
                <span>
                  <p className="mt-3">
                    I have almost 2 years experience with private company working with System Admin,Database Admin, Infra, Helpdesk, Software Support, Web Maintainence.
                    Also involve with management work on new system, new feature etc... <br />
                    I mainly on System Admin & Web maintainence on implement some feature on system.
                    <br />
                    Currently improve myselft in programming hoping to be a full stack dev one day.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Skills */}
        <section>
          <div id="skills">
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col'>
                <div>
                    <h2>
                        <span className="text-3xl text-purple-600 font-semibold border-b-2 border-purple-600 inline uppercase">Skills</span> 
                        <p className="py-4">i am basic in: </p>
                    </h2>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                  {techs.map((tech) => 
                    <div key={tech.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}>
                        <Image src={tech.src} className="w-20 text-purple-600 mx-auto" alt={tech.alt} />
                        <p className="mt-4">{tech.title}</p>
                        {/* Percentage Bar */}
                        {/* <div class="w-full bg-gray-200 rounded-full ">
                          <div class={`${tech.bgSkill} text-xs leading-none py-1 text-center text-white rounded-full`} style={{width: tech.percentageWidth}}>{tech.skillPercentage}%</div>
                        </div> */}
                    </div>
                  )}
                </div>
            </div>
          </div>
        </section>
        {/* Experience */}
        <section>
          <div id="exp" className="max-w-screen-lg mx-auto p-4 flex flex-col">
            <div>
              <span>
                <h1 className="text-3xl text-purple-600 font-semibold border-b-2 border-purple-600 inline uppercase">Experience</h1>
                <p className="py-4">And here is what i do before</p>
              </span>
            </div>
            
            <div class="text-left p-4 bg-blue-50 rounded-lg shadow-lg hover:scale-105 duration-500 ">
              <h1 class="text-2xl text-purple-600 font-semibold mb-1">Forte Life Assurance</h1>
              <h3 class="text-base text-gray-600 italic mb-4">Officer IT &amp; MIS</h3>
              <ul class="list-disc list-inside text-sm">
                <li>Maintain Web Application &amp; System</li>
                <li>Administer Network &amp; Configure network to work smoothly</li>
                <li>Provide overall support to all users in internal and other system applications such as Channel Portal, Core System</li>
                <li>Set up workstations for new staff and backup everything for staff resignations</li>
                <li>Manage company's workstations, IT assets, and inventory updating</li>
                <li>Involve with new services and company's systems</li>
                <li>Perform on-time general troubleshooting of networks together with the team</li>
              </ul>
            </div>
          </div>
        </section>
        <ScrollToTopButton />
      </main>
      {/* Footer */}
      <section>
        <div className="bg-purple-600 flex items-center justify-center">
          <div className="py-3 mt-3">
              <div className="flex items-center justify-center">
                <span className="text-white">
                  <a href="mailto:oudomreach001@gmail.com@gmail.com" className="flex items-center">
                    <BiLogoGmail className="text-3xl" />
                    <span className="text-white ml-2">Contact Me</span>
                  </a>
                </span>
              </div>
            <p className="text-white mt-3">© Oudomreach CHYPHALLA</p>
          </div>
        </div>
      
      </section>
      {/* <ScrollUp /> */}
    </>
  )
}
