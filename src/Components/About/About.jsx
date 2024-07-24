import React, { useEffect, useState } from "react";
import AboutMeImage from "../../Assets/AboutMe.png";
import Journey from "./Journey";
import Skills from "./Skills";
import blobSvg from "../../Assets/blob.svg";
import { motion } from "framer-motion";

const About = () => {
  const [blobUrl, setBlobUrl] = useState("");

  useEffect(() => {
    // Read the SVG file as a string
    fetch(blobSvg)
      .then((response) => response.text())
      .then((data) => {
        // Encode the SVG file to base64
        const encodedData = btoa(data);
        // Construct the data URL
        const url = `url('data:image/svg+xml;base64,${encodedData}')`;
        // Set the blobUrl state
        setBlobUrl(url);
      })
      .catch((error) => console.error("Error fetching SVG file:", error));
  }, []);

  const containerVariants = {
    hidden: {
      scale: 0.3,
    },
    visible: {
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 1,
      },
    },
  };

  const containerVariantsText = {
    hidden: {
      y: 100,
    },
    visible: {
      y: 0,
      transition: {
        delay: 0.3,
        duration: 1,
      },
    },
  };

  return (
    <section
      id="About"
      className="bg-white dark:bg-neutral-800 w-full h-auto pt-20 px-10 md:px-20 overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
          <span className="text-secondary">About </span>Me
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 font-semibold">
          Discover the Story Behind a Developer
        </p>
      </div>
      {/* Main div */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center md:pt-10">
        {/* left or image div */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <img
            className=""
            src={AboutMeImage}
            style={{ width: "100%", maxWidth: "500px" }}
            alt="Lesego Mhlongo"
          />
        </motion.div>
        {/* Right div */}
        <div className="w-full md:w-1/2 md:pl-10 pt-10 md:pt-0">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Discover My<span className="text-secondary"> Story</span>
          </h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            variants={containerVariantsText}
            initial="hidden"
            whileInView="visible"
          >
            Welcome to my world of creativity and innovation. I'm{" "}
            <span className="italic">Lesego Mhlongo</span>, a passionate{" "}
            <span className="italic">fullstack developer</span> with a keen eye
            for detail and a drive for excellence. With a background in{" "}
            <span className="italic">Information technology</span>, I thrive on
            turning ideas into reality and crafting compelling stories through
            my work. From designing captivating user interfaces to developing
            robust backend solutions, I'm dedicated to delivering exceptional
            results that exceed expectations.
            <br />
            <br />
            Outside of work, you'll often find me exploring the latest trends in
            technology, seeking inspiration from nature, or immersing myself in
            the vibrant local cultures. Let's embark on a journey together where
            creativity knows no bounds and possibilities are endless.
          </motion.p>
        </div>
      </div>
      <Journey />
      <Skills />
    </section>
  );
};

export default About;
