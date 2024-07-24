import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { IoMdCloseCircleOutline, IoMdMenu } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import Logo1 from "../../Assets/Logo1.png";
import Logo2 from "../../Assets/Logo2.png";
import { IoLogoWhatsapp } from "react-icons/io5";
import ToggleMode from "../ToggleMode/ToggleMode";

const NavBar = ({ isDarkMode }) => {
  const [isNav, setIsNav] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = ["Home", "About", "Projects"];

  const handleNav = () => {
    setIsNav(!isNav);
  };

  const handleNavigateActive = (section) => {
    const homeSection = document.getElementById(section);

    if (homeSection) {
      const position = homeSection.offsetTop;
      scroll.scrollTo(position, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
      // Update active section
      setActiveSection(section);
      setIsNav(false);
    }
  };

  return (
    <header className="bg-white dark:bg-neutral-800 w-full fixed top-0 left-0 text-white shadow-lg flex justify-between lg:justify-around items-center h-14 z-20">
      <div className="flex items-center justify-center px-4">
        <img
          src={isDarkMode ? Logo2 : Logo1}
          width={120}
          onClick={() => handleNavigateActive("Home")}
          className="cursor-pointer"
        />
      </div>

      <div className="font-semibold text-sm lg:text-base hidden md:block">
        <ul className="mx-auto flex items-center gap-6 lg:gap-8 text-gray-400 dark:text-white cursor-pointer ">
          {sections.map((section) => (
            <li key={section}>
              <ScrollLink
                to={section}
                smooth={true}
                duration={500}
                onClick={() => handleNavigateActive(section)}
              >
                {section}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={handleNav}
        className="block md:hidden text-gray-300 dark:text-white fixed right-4 md:right-10 top-4 z-50"
      >
        {isNav ? (
          <IoMdCloseCircleOutline size={30} className="dark:text-white" />
        ) : (
          <IoMdMenu size={30} className="dark:text-white" />
        )}
      </div>

      <div
        className={
          isNav
            ? `text-gray-100 z-40 fixed left-0 top-[56px] w-full bg-secondary dark:bg-neutral-800 ease-in-out duration-500 shadow-xl`
            : "fixed left-[-100%]"
        }
      >
        <ul className=" py-8 text-3xl flex flex-col justify-center items-center  z-10 cursor-pointer">
          {sections.map((section) => (
            <li key={section} className="p-2">
              <ScrollLink
                to={section}
                smooth={true}
                duration={700}
                onClick={() => handleNavigateActive(section)}
              >
                {section}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex md:items-center">
        <button
          onClick={() => handleNavigateActive("Contact")}
          className="button-action"
        >
          Get in touch
        </button>
      </div>

      <div className="flex md:hidden justify-center w-full ">
        <button
          onClick={() => handleNavigateActive("Contact")}
          className="button-action"
        >
          Get in touch
        </button>
      </div>

      <div className="hidden md:flex fixed flex-col top-1/2 left-0">
        <ul>
          <li className="w-[160px] h-[40px] flex flex-col justify-center items-center ml-[-95px] hover:ml-[-10px] duration-300">
            <a
              className="bg-primary flex justify-center items-center w-full text-white rounded-r-lg"
              href="mailto:lesegomhlongo78@gmail.com"
            >
              <h4 className="mr-[20px] pr-8">Email</h4> <TfiEmail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[40px] flex flex-col justify-center items-center ml-[-95px] hover:ml-[-10px] duration-300">
            <a
              className="bg-primary flex justify-center items-center w-full text-white rounded-r-lg"
              href="https://www.facebook.com/lesego.mhlongo.3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="mr-[20px]">Facebook</h4>{" "}
              <IoLogoFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[40px] flex flex-col justify-center items-center ml-[-95px] hover:ml-[-10px] duration-300">
            <a
              className="bg-primary flex justify-center items-center w-full text-white rounded-r-lg"
              href="https://www.linkedin.com/in/lesego-mhlongo-081a82228"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="mr-[20px] pr-2">LinkedIn</h4>{" "}
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[40px] flex flex-col justify-center items-center ml-[-95px] hover:ml-[-10px] duration-300">
            <a
              className="bg-primary flex justify-center items-center w-full text-white rounded-r-lg"
              href="https://wa.me/0640373089"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="mr-[20px]">WhatsApp</h4>{" "}
              <IoLogoWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
