import React, { useState } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { FaGithub } from "react-icons/fa6";
import { BiPlayCircle } from "react-icons/bi";

const ProjectCard = ({ singleProject }) => {
  const { id, image, title, description, liveLink, githubLink } = singleProject;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ParallaxProvider>
      <div className="flex justify-center items-center">
        <div
          className="w-[550px] h-[400px] relative overflow-hidden bg-white rounded-lg  transition-transform transform hover:-translate-x-2 shadow-custom"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={singleProject.image}
            alt=""
            className="w-full h-auto object-cover rounded-t-lg"
          />
          {!isHovered && (
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 py-6">
              <h2 className="text-xl font-semibold mb-2">
                {singleProject.title}
              </h2>
            </div>
          )}
          <div
            className={`absolute inset-0 flex flex-col justify-center px-4 py-6 transition-transform duration-700 ${
              isHovered ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">
              {singleProject.title}
            </h2>
            <p className="text-gray-700 mb-4">{singleProject.description}</p>
            <div className="flex justify-center space-x-4">
              <a
                href={singleProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="  text-white rounded hover:bg-blue-600 transition-colors duration-300"
              >
                <BiPlayCircle size={25} />
              </a>

              <a
                href={singleProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white rounded hover:bg-gray-800 transition-colors duration-300"
              >
                <FaGithub className="" size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default ProjectCard;