"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMapMarkerAlt, faBirthdayCake, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const sections = {
  aboutMe: "aboutMe",
  myWork: "myWork",
  myExperience: "myExperience",
};

export default function About() {
  const [activeSection, setActiveSection] = useState(sections.aboutMe);

  const handleSectionChange = (section: any) => {
    setActiveSection(section);
  };

  return (
    <div id="about" className="py-20 min-h-screen bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 flex flex-col items-center">
      <div className="max-w-6xl w-full space-y-12">
        {/* About Me Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Box */}
          <div className="flex-1 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg">
              {/* Add your paragraph about yourself here */}
              Hi, I'm Anish!
              I'm a web developer with experience in building scalable, efficient applications <span className="text-custom1 dark:text-custom2">using</span> Python, Next.js, and Tailwind CSS. I love solving complex problems through code, always aiming to optimize performance and functionality. Outside of work, I’m constantly <span className="text-custom1 dark:text-custom2">learning</span> new tools and techniques to stay ahead in the fast-evolving tech landscape. Let’s build something amazing <span className="text-custom1 dark:text-custom2">together</span>!
            </p>
          </div>

          {/* Right Box */}
          <div className="flex-1 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">My Info</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-3 text-custom3 dark:text-custom2" />
                Anish Sharma
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-custom3 dark:text-custom2" />
                Email: anishsharma1498@gmail.com
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-custom3 dark:text-custom2" />
                Address: Chandigarh, India
              </p>
              {/* <p className="flex items-center">
                <FontAwesomeIcon icon={faBirthdayCake} className="mr-3 text-custom3 dark:text-custom2" />
                Age: 25
              </p> */}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex flex-col md:flex-row bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>Software Developer Engineer Internship @Eshopstride (May 2024 - August 2024)</li>
              <li>Alasso developer (2022 - Present)</li>
            </ul>
          </div>
          <a
            href="#projects"
            onClick={() => handleSectionChange(sections.myWork)}
            className="flex text-xl items-center justify-center bg-custom3 dark:bg-custom2 text-custom1 p-3 px-5 m-auto my-5 rounded-full border border-custom3 dark:border-custom2 hover:bg-gray-600 transition-all duration-300"
          >
            Projects
            <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
          </a>
        </div>

        {/* Skills and Courses Section */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="max-h-60 overflow-y-auto grid grid-cols-2 gap-3">
              {["C++", "JavaScript", "React", "Next.js", "Node.js", "Python-ML", "API", "Postman", "Tailwind", "Bootstrap"].map(skill => (
                <div key={skill} className="text-custom1 bg-custom3 dark:bg-custom2 p-3 m-3 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Courses & Certifications</h2>
            <div className="max-h-60 overflow-y-auto space-y-4 border-l-2 border-custom3 dark:border-custom2 pl-4">
              {["Introduction to Programming through C++ (NPTEL)", "Developing AI Applications with Python and Flask", "Introduction to Web Development with HTML, CSS, JavaScript", "Build Dynamic User Interfaces (UI) for Websites", "Introduction to Computer Vision and Image Processing", "Introduction to Cybersecurity Tools & Cyberattacks"].map(course => (
                <div key={course} className="text-lg">
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
