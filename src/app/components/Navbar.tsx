"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faTimes, faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar bg-gray-700 dark:bg-custom1 p-4 px-4 md:px-20 fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Profile Picture and Name */}
        <div className="flex items-center text-white font-bold">
          <img
            src="/images/profile.jpg"
            alt="Profile Picture"
            className="w-10 h-10 rounded-full mr-2"
          />
          <a 
            href="#home" 
            className="text-lg md:text-xl font-thin border-r-2 border-b-1 border-custom3 dark:border-custom2 pr-2 pb-2 rounded-br-lg hidden md:block"
          >
            A N I S H _ S H A R M A
          </a>
        </div>

        {/* Right: Dark Mode Toggle and Hamburger Menu */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <label className="dark-mode-switch flex items-center">
            <FontAwesomeIcon
              icon={faSun}
              size="lg"
              className={`icon ${darkMode ? 'text-gray-800' : 'text-gray-400'}`}
            />
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="sr-only"
            />
            <span className="slider"></span>
            <FontAwesomeIcon
              icon={faMoon}
              size="lg"
              className={`icon ${darkMode ? 'text-gray-400' : 'text-gray-900'}`}
            />
          </label>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 z-30"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Sliding Navigation Links */}
        <div
          className={`fixed top-0 right-0 h-full bg-custom1 dark:bg-gray-900 transition-transform duration-500 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            } z-20 flex flex-col items-center justify-center space-y-4 w-64`}
        >
          <a
            href="#home"
            onClick={toggleMenu}
            className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 text-lg py-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 text-lg py-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 text-lg py-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 text-lg py-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-5 px-6 bg-custom3 dark:bg-custom2 text-custom1 rounded-full shadow-lg transition-transform transform hover:scale-110 z-30"
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </button>
      )}
    </nav>
  );
}
