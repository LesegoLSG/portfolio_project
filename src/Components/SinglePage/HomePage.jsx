import React from "react";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import { ParallaxProvider } from "react-scroll-parallax";
import ToggleMode from "../ToggleMode/ToggleMode";

const HomePage = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <ParallaxProvider>
      <div>
        <NavBar isDarkMode={isDarkMode} />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <ScrollToTop />
        <ToggleMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default HomePage;
