import React from "react";
import Slider from "react-slick";
import ProjectCard from "./ProjectCard";
import projectsList from "./ProjectList";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="Projects"
      className="bg-accent w-full h-auto  py-20 px-10 md:px-20 dark:bg-neutral-900"
    >
      <div className="w-full h-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl font-extrabold dark:text-white">
          My <span className="text-secondary">Work</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 font-semibold">
          Feel free to reach out to me via any of these platforms:
        </p>
      </div>

      <div className="relative w-full flex flex-col justify-center items-center mt-8">
        <div className="w-full md:w-4/5 flex justify-end items-end gap-x-4 py-4">
          <FaArrowLeft
            className="text-2xl cursor-pointer text-primary"
            onClick={() => sliderRef.current.slickPrev()}
          />
          <FaArrowRight
            className="text-2xl cursor-pointer text-primary"
            onClick={() => sliderRef.current.slickNext()}
          />
        </div>
        <div className="w-full md:w-4/5">
          <Slider ref={sliderRef} {...settings}>
            {projectsList.map((project) => (
              <div key={project.id} className="p-2">
                <ProjectCard singleProject={project} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
