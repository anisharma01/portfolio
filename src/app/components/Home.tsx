"use client";

import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faComments } from "@fortawesome/free-solid-svg-icons"; // Import faComments from the solid icons

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => setIsHovered(true);
  const handleLeave = () => setIsHovered(false);

  return (
    <div
      id="home"
      className="min-h-screen grid grid-cols-1 md:grid-cols-7 gap-8 items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-4 md:p-8 transition-colors duration-500 ease-in-out"
    >
      {/* Left side: Social Icons + Text Section */}
      <div className="md:col-span-5 flex flex-col justify-center items-start space-y-8 m-5 md:ml-10">
        {/* Typewriter Section */}
        <h1 className="text-3xl md:text-5xl font-bold text-left fade-in">
          Hey there!, This is Anish Sharma.
        </h1>
        <div className="text-xl md:text-2xl font-medium mt-4 text-left fade-in">
          <span>I am a Software Developer with expertise in </span>
          <div className="ml-2 inline-block text-custom3 dark:text-custom2">
            <Typewriter
              options={{
                strings: ["MERN", "Next.js", "UI/UX Design"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </div>
        </div>

        {/* Get to Know Me Button */}
        <a
          href="#about"
          className="text-xl px-4 py-2 bg-custom3 hover:bg-custom1 hover:text-custom3 dark:bg-custom2 text-black rounded-full dark:hover:bg-custom1 darkhover:text-custom2 hover:text-black transition-transform transform hover:scale-110 duration-300 flex items-center"
        >
          Get to Know Me
          <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
        </a>
      </div>

      {/* Right side: Resume Thumbnail */}
      <div className="md:col-span-2 flex flex-col items-center relative">
        <div
          className="relative overflow-hidden cursor-pointer"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <img
            src="/images/resume_thumbnail.png" // Adjust the path if needed
            alt="Resume Thumbnail"
            className={`rounded-lg border-b-2 border-r-2 border-custom3 dark:border-custom2 shadow-lg w-48 h-48 object-cover transition-transform duration-300 ${isHovered ? 'filter blur-sm' : ''}`}
          />
          <div className={`absolute inset-0 flex items-center justify-center text-2xl font-bold ${isHovered ? 'hidden' : 'text-black shadow-lg'}`}>
            Resume
          </div>
          {isHovered && (
            <a
              href="/docs/resume.pdf" // Link to the resume PDF
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 text-white text-lg font-semibold transition-opacity duration-300"
            >
              View Resume
            </a>
          )}
        </div>

        {/* Simple Get in Touch Button */}
        <a
          href="#contact"
          className="mt-6 text-xl flex items-center text-custom3 dark:text-custom2 transition-transform transform hover:scale-110 duration-300"
        >
          Get in Touch
          <FontAwesomeIcon icon={faComments} className="ml-2" /> {/* Chat icon */}
        </a>
      </div>

      {/* Fixed Social Icons Section */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 px-3 py-4 rounded-lg border-b-2 border-r-1 border-custom3 dark:border-custom2 shadow-lg hidden md:flex">
        <a href="https://www.linkedin.com/in/anish-sharma-863048231/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-blue-700 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-transform transform hover:scale-110" />
        </a>
        <a href="https://github.com/anisharma01" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" className="text-black dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 transition-transform transform hover:scale-110" />
        </a>
        <a href="https://www.instagram.com/anisharma.xe" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="text-pink-500 dark:text-pink-300 hover:text-pink-300 dark:hover:text-pink-200 transition-transform transform hover:scale-110" />
        </a>
      </div>
    </div>
  );
}
