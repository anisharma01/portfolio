"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const projectData = [
    {
      title: "Alasso",
      description: "A Education platform which provides various study material for students studying in college and providing various assignments with solutions to help students.",
      technologies: ["React", "CSS", "Bootstrap"],
      githubLink: "https://github.com/anisharma01/Alasso",
      liveDemo: "https://alasso.study/",
      image: "/images/project1.png",
    },
    {
      title: "Agrismart",
      description: "Developed a Crop Recommendation tool to help selecting crop best suited for environment. Crop Selling & Bargaining System with Crop Recommendation. A platform facilitating Crop Selling, locating nearby markets with latest market price updates.",
      technologies: ["React", "Python", "AI/ML", "Node.js"],
      githubLink: "https://github.com/anisharma01/Asmart1",
      liveDemo: "https://asmart.vercel.app/",
      image: "/images/project2.png",
    },
    {
      title: "Eshopstride",
      description: "An E-commerse website providing service to build various application. Collaborated with the main developer team to optimize website performance, improving reliability and end-user experience by 80%. Strengthened understanding of client needs and refined technical skills through various hands-on project work.",
      technologies: ["Next.js", "TypeScript", "Node.js"],
      githubLink: "https://github.com/your-username/project3",
      liveDemo: "https://www.eshopstride.com/",
      image: "/images/project3.png",
    },
    {
      title: "Dashboard (Eshopstride)",
      description: "Developed a new Dashboard System for Eshopstride website, automating 90% of data management and analytics tasks. Optimized data retrieval processes to further enhance API response speed, resulting in a 30% Faster in average response time and improved overall system efficiency.",
      technologies: ["Next.js", "TypeScript", "API Intergration"],
      githubLink: "https://github.com/your-username/project4",
      liveDemo: "https://www.eshopstride.com/Dashboard_New",
      image: "/images/project4.png",
    },
    // Add more projects as needed
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const handleNext = () => {
    setCurrentProject((prevProject) =>
      prevProject === projectData.length - 1 ? 0 : prevProject + 1
    );
  };

  const handlePrev = () => {
    setCurrentProject((prevProject) =>
      prevProject === 0 ? projectData.length - 1 : prevProject - 1
    );
  };

  return (
    <div id="projects" className="min-h-screen bg-gray-300 dark:bg-gray-800 flex flex-col items-center p-5 pt-20">
      <div className="text-center mb-12 text-custom1 dark:text-custom5">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h2>
        <p className="max-w-lg mx-auto">A showcase of my work in web development...</p>
      </div>

      {/* Project Box Carousel */}
      <div className="relative w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentProject * 100}%)` }}
          >
            {projectData.map((project, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                style={{ minWidth: "100%" }}
              >
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col items-center md:h-[500px]">
                  {/* Project Image with Hover Effect */}
                  <div className="relative group w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-6 pl-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-50">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-left text-white">
                        {project.title}
                      </h3>
                      {/* Hide Description in Mobile View */}
                      <p className="text-left text-gray-300 mb-4 hidden md:block">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-custom3 text-custom1 dark:bg-custom2 dark:text-custom1 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links - Adjust to ensure they are visible */}
                      <div className="flex space-x-4 mt-2">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-300 transition-colors duration-300"
                        >
                          <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-300 transition-colors duration-300"
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next and Previous Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-custom3 dark:bg-custom2 text-white p-3 rounded-full shadow-lg hover:bg-gray-500 dark:hover:bg-gray-500 transition-all duration-300"
        >
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-custom3 dark:bg-custom2 text-white p-3 rounded-full shadow-lg hover:bg-gray-500 dark:hover:bg-gray-500 transition-all duration-300"
        >
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </button>
      </div>

      {/* Project Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {projectData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`w-4 h-4 rounded-full ${index === currentProject
                ? "bg-custom3 dark:bg-custom2"
                : "bg-gray-400 dark:bg-gray-600"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
