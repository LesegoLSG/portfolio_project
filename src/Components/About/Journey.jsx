import React from "react";
import { motion } from "framer-motion";
import { CiCalendarDate } from "react-icons/ci";
import Lottie from "lottie-react";

import GraduationAnimation from "./GraduationAnimation.json";
import EducationAnimation from "./EducationAnimation.json";
import CallCenter from "./CallCentre.json";
import ITSupport from "./ITSupport.json";
import Coding from "./Coding.json";

const Journey = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
      },
    },
  };

  return (
    <div className=" ">
      <div className="w-full h-auto flex justify-center items-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
          My <span className="text-secondary"> Journey </span>{" "}
        </h1>
      </div>

      {/* Timeline */}

      <div className=" relative w-full md:w-[80%] mx-auto px-0 flex flex-col space-y-8">
        <div className="absolute z-0 w-2 h-full bg-primary shadow-md inset-0 left-11 md:mx-auto md:right-0 md:left-0"></div>

        {/* first container 1 */}
        <div className="relative z-10">
          <Lottie animationData={Coding} className="timeline-img" />
          <motion.div
            className="timeline-container"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            <div className="timeline-pointer" aria-hidden="true"></div>
            <div className="bg-white p-6 rounded-md shadow-custom dark:bg-neutral-800">
              <div className="flex justify-start items-center">
                <CiCalendarDate className="" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  2023/06-2024/06
                </p>
              </div>
              <h1 className="text-lg font-bold dark:text-white">
                Tshimologong Pricint (Wits University)
              </h1>
              <p className="text-paragraph dark:text-gray-300">
                Interned for Fullstack Software Development, collaborated on
                projects, and gained hands-on experience in web development
                technologies.
              </p>
            </div>
          </motion.div>
        </div>

        {/* first container 2 */}
        <div className="relative z-10">
          <Lottie animationData={ITSupport} className="timeline-img" />
          <motion.div
            className="timeline-container timeline-container-left"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            <div
              className="timeline-pointer timeline-pointer-left"
              aria-hidden="true"
            ></div>
            <div className="bg-white p-6 rounded-md shadow-custom dark:bg-neutral-800">
              <div className="flex justify-start items-center">
                <CiCalendarDate />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  2023/06-2023/07
                </p>
              </div>
              <h1 className="text-lg font-bold dark:text-white">
                Gauteng Department Of Education (GDE)
              </h1>
              <p className="text-paragraph dark:text-gray-300">
                Working in IT support role, provided technical assistance and
                troubleshooting solutions to enhance educational technology
                infrastructure.
              </p>
            </div>
          </motion.div>
        </div>

        {/* first container 3 */}
        <div className="relative z-10">
          <Lottie
            animationData={GraduationAnimation}
            className="timeline-img"
          />
          <motion.div
            className="timeline-container"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            <div className="timeline-pointer" aria-hidden="true"></div>
            <div className="bg-white p-6 rounded-md shadow-custom dark:bg-neutral-800">
              <div className="flex justify-start items-center">
                <CiCalendarDate />
                <p className="text-sm text-gray-700 dark:text-gray-300 ">
                  2017/02-2021/12
                </p>
              </div>
              <h1 className="text-lg font-bold dark:text-white">
                University Of Johannesburg (UJ)
              </h1>
              <p className="text-paragraph dark:text-gray-300">
                Obtained BSc in Computer Science & Informatics, honed
                problem-solving skills and gained practical experience in
                software development projects.
              </p>
            </div>
          </motion.div>
        </div>

        {/* first container 4 */}
        <div className="relative z-10">
          <Lottie animationData={CallCenter} className="timeline-img" />
          <motion.div
            className="timeline-container timeline-container-left"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            <div
              className="timeline-pointer timeline-pointer-left"
              aria-hidden="true"
            ></div>
            <div className="bg-white p-6 rounded-md  shadow-custom dark:bg-neutral-800">
              <div className="flex justify-start items-center">
                <CiCalendarDate />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  2016/02-2017/02
                </p>
              </div>
              <h1 className="text-lg font-bold dark:text-white">
                Miway Insurance (Learnership)
              </h1>
              <p className="text-paragraph dark:text-gray-300">
                As a client service consultant apprentice, obtained Financial
                Advisory and Intermediary Act (FAIS) Level 4 qualification.
              </p>
            </div>
          </motion.div>
        </div>

        {/* first container 5 */}
        <div className="relative z-10">
          <Lottie animationData={EducationAnimation} className="timeline-img" />
          <motion.div
            className="timeline-container"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            <div className="timeline-pointer " aria-hidden="true"></div>
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-md shadow-custom">
              <div className="flex justify-start items-center">
                <CiCalendarDate />
                <p className="text-sm text-gray-700 dark:text-gray-300 ">
                  2011-2015
                </p>
              </div>
              <h1 className="text-lg font-bold dark:text-white">
                Moletsane Secondary School
              </h1>
              <p className="text-paragraph dark:text-gray-300">
                Completed my secondary school with a bachelor pass through smart
                work and dedication
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
