import React from "react";
import { motion } from "framer-motion";
import ReactLogo from "../../Assets/ReactLogo.png";
import java from "../../Assets/java.webp";
import springboot from "../../Assets/springboot.png";
import SQL from "../../Assets/SQL.png";
import tailwind from "../../Assets/tailwind.png";
import typescript from "../../Assets/typescript.png";
import Git_Github from "../../Assets/Git_Github.png";
import Vite from "../../Assets/Vite.png";
import Firebase from "../../Assets/Firebase.png";
import Amazon from "../../Assets/Amazon.png";

const Skills = () => {
  const skillItems = [
    { icon: ReactLogo, name: "React" },
    { icon: java, name: "Java" },
    { icon: springboot, name: "Spring Boot" },
    { icon: SQL, name: "SQL" },
    { icon: tailwind, name: "Tailwind CSS" },
    { icon: typescript, name: "TypeScript" },
    { icon: Git_Github, name: "Git & Github" },
    { icon: Vite, name: "Vite" },
    { icon: Firebase, name: "Firebase" },
    { icon: Amazon, name: "Amazon Web Service" },
  ];

  return (
    <div className="my-10 md:my-20 flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          My <span className="text-secondary">Skills</span>
        </h1>
      </div>

      <div className="w-full md:w-[80%] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
        {skillItems.map((skill, index) => (
          <SkillCard
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ icon, name, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      variants={cardVariants}
      className="flex flex-col items-center justify-center bg-accent dark:bg-neutral-800 shadow-custom p-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
    >
      <img src={icon} alt={name} className="w-16 h-16 mb-2" />
      <p className="text-base font-medium text-gray-800 dark:text-white">
        {name}
      </p>
    </motion.div>
  );
};

export default Skills;
