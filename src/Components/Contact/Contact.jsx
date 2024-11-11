import React from "react";
import { FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import ContactAnimation from "../Animation/ContactAnimation.json";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="bg-gray-100 py-16 dark:bg-neutral-800 " id="Contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Get <span className="text-secondary">in touch</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 font-semibold">
            Feel free to reach out to me via any of these platforms:
          </p>
        </div>
        <div className="w-full h-auto flex justify-center items-center">
          <Lottie animationData={ContactAnimation} className="w-72 h-72" />
        </div>
        <motion.div
          className="mt-12 flex justify-center space-x-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.a
            href="mailto:lesegomhlongo78@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary "
            variants={itemVariants}
          >
            <TfiEmail className="text-4xl hover:scale-150  transition duration-300" />
          </motion.a>

          <motion.a
            href="https://wa.me/0640373089"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary "
            variants={itemVariants}
          >
            <FaWhatsapp className="text-4xl hover:scale-150   transition duration-300" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/lesego.mhlongo.3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary "
            variants={itemVariants}
          >
            <FaFacebook className="text-4xl hover:scale-150   transition duration-300" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/lesego-mhlongo-081a82228"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary "
            variants={itemVariants}
          >
            <FaLinkedin className="text-4xl hover:scale-150   transition duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
