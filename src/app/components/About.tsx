"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMapMarkerAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "../context/ThemeContext";

const sections = {
  aboutMe: "aboutMe",
  myWork: "myWork",
  myExperience: "myExperience",
};

export default function About() {
  const { theme } = useTheme();
  const darkMode = theme === "dark";
  const [activeSection, setActiveSection] = useState(sections.aboutMe);

  const handleSectionChange = (section: any) => {
    setActiveSection(section);
  };

  return (
    <div id="about" className={`py-20 min-h-screen ${darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-300 text-gray-800"} flex flex-col items-center`}>
      <div className="max-w-6xl w-full space-y-12">
        {/* About Me Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Box */}
          <div className={`${darkMode ? "bg-gray-700" : "bg-white"} flex-1 p-6 rounded-lg shadow-md`}>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg">
              Hi, I&apos;m Anish! I&apos;m a web developer with experience in building scalable, efficient applications <span className="text-custom1">using</span> Python, Next.js, and Tailwind CSS. I love solving complex problems through code, always aiming to optimize performance and functionality. Outside of work, I&apos;m constantly <span className="text-custom1">learning</span> new tools and techniques to stay ahead in the fast-evolving tech landscape. Let&apos;s build something amazing <span className="text-custom1">together</span>!
            </p>
          </div>

          {/* Right Box */}
          <div className={`${darkMode ? "bg-gray-700" : "bg-white"} flex-1 p-6 rounded-lg shadow-md`}>
            <h2 className="text-3xl font-bold mb-6">My Info</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-3 text-custom3" />
                Anish Sharma
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-custom3" />
                Email: anisharma1498@gmail.com
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-custom3" />
                Address: Chandigarh, India
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className={`flex flex-col md:flex-row ${darkMode ? "bg-gray-700" : "bg-white"} p-6 rounded-lg shadow-md flex items-center justify-between`}>
          <div>
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>Intern Software Developer Engineer @Eshopstride (May 2024 - August 2024)</li>
              <li>Alasso developer (2022 - Present)</li>
            </ul>
          </div>
          <a
            href="#projects"
            onClick={() => handleSectionChange(sections.myWork)}
            className="flex text-xl items-center justify-center bg-custom3 text-custom1 p-3 px-5 m-auto my-5 rounded-full border border-custom3 hover:bg-gray-600 transition-all duration-300"
          >
            Projects
            <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
          </a>
        </div>

        {/* Skills and Courses Section */}
        <div className={`${darkMode ? "bg-gray-700" : "bg-white"} p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8`}>
          {/* Skills */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="max-h-60 overflow-y-auto grid grid-cols-3 gap-3">
              {["C++", "JavaScript", "React", "Next.js", "Node.js", "Python-ML", "EmailJs", "API", "Git/Github", "Postman", "Tailwind", "MUI", "Bootstrap"].map(skill => (
                <div key={skill} className="text-custom1 bg-custom3 p-2 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Courses & Certifications</h2>
            <div className="max-h-60 overflow-y-auto space-y-4 border-l-2 border-custom3 pl-4">
              {[
                "Introduction to Programming through C++ (NPTEL)",
                "Developing AI Applications with Python and Flask",
                "Introduction to Web Development with HTML, CSS, JavaScript",
                "Build Dynamic User Interfaces (UI) for Websites",
                "Introduction to Computer Vision and Image Processing",
                "Introduction to Cybersecurity Tools & Cyberattacks"
              ].map((course, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input type="radio" name="courses" className="form-radio text-custom3" />
                  <span className="text-lg">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
