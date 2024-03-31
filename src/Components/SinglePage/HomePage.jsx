import React from 'react';
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Projects from '../Projects/Projects';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const HomePage = () => {
  return (
    <div>
        <NavBar/>
       
        <Hero/>
        <About/>
        <Projects/>
        <ScrollToTop/>
        
    </div>
  )
}

export default HomePage