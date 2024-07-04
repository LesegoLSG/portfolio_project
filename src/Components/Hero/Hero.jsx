import React, { useState, useEffect, useRef } from "react";
import ProfilePic4 from "../../Assets/ProfilePic4.png";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ElementOnScreen from "../Reusable/ElementOnScreen";
import ParticlesComponent from "../Animation/particles";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  const [isTyping, setIsTyping] = useState(false);

  const introRef = useRef(null);
  const introVisible = ElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    },
    introRef
  );

  useEffect(() => {
    if (introVisible && !isTyping) {
      setIsTyping(true);
    }
  }, [introVisible, isTyping]);

  const handleNavigateActive = (section) => {
    const homeSection = document.getElementById(section);

    if (homeSection) {
      const position = homeSection.offsetTop;
      scroll.scrollTo(position, {
        smooth: true,
        duration: 800,
        offset: -80,
      });
    }
  };

  return (
    <section
      id="Home"
      className="bg-accent dark:bg-neutral-900 w-full h-auto md:h-screen flex flex-col justify-center items-center pt-14 px-10 md:px-20"
    >
      {/* <ParticlesComponent id="particles" /> */}
      <div className="w-full h-auto flex flex-col md:flex-row-reverse justify-center items-center z-10">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-6/12 h-auto flex justify-center items-center p-6 mt-16 md:mt-0"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          <img
            className="w-60 md:w-96 h-auto rounded-full shadow-lg"
            src={ProfilePic4}
            alt="Lesego Mhlongo"
          />
        </motion.div>
        {/* Text Section */}
        <div
          className="w-full md:w-6/12 h-auto flex flex-col justify-center items-center p-6 text-center"
          ref={introRef}
        >
          <motion.p
            className="text-xl md:text-2xl font-semibold text-secondary dark:text-white"
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 2 }}
          >
            Hi there... I'm
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl font-bold my-1 dark:text-white"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 2 }}
          >
            Lesego Mhlongo
          </motion.h1>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-secondary my-1"
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 2 }}
          >
            Fullstack Developer
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl font-semibold my-1 dark:text-white"
            initial={{ rotateX: 360 }}
            whileInView={{ rotateX: 0 }}
            transition={{ duration: 2 }}
          >
            I'm skilled with experience in creating:
          </motion.p>
          <p className="text-xl md:text-2xl my-1 dark:text-white">
            {isTyping && (
              <Typewriter
                words={[
                  "responsive designs",
                  "web applications",
                  "mobile applications",
                  "and more",
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={150}
              />
            )}
          </p>
          <div className="w-full flex justify-center items-center mt-10">
            <button
              className="button-action"
              onClick={() => handleNavigateActive("Projects")}
            >
              My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
