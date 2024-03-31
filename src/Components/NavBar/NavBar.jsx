import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { IoMdCloseCircleOutline,IoMdMenu  } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import logos from '../../Assets/logos.png';


const NavBar = () => {
    const [isNav,setIsNav] = useState(false);
    const [activeSection, setActiveSection] = useState('hero'); 

    const sections = ['Home', 'About', 'Projects'];

    const handleNav = () =>{
        setIsNav(!isNav);
    }

      //Method to change the color of the selected link
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
         
        }
    };
    
  return (
    <header className="bg-white w-full fixed top-0 left-0 text-white shadow-lg flex justify-between lg:justify-around items-center h-14">
        
        <div className="flex items-center justify-center">
            <img src={logos} width={120}/>
        </div>

        <div className="font-semibold text-sm lg:text-base hidden md:block">
            <ul className="mx-auto flex items-center gap-6 lg:gap-8 text-gray-400 cursor-pointer">
                {sections.map((section) =>(
                    <li key={section}>
                        <ScrollLink
                        to={section}
                        smooth={true}
                        duration={500}
                        onClick={() =>handleNavigateActive(section)}>
                            {section}
                        </ScrollLink>

                    </li>
                ))
                }
                
            </ul>
        </div>
        
        <div onClick={handleNav} className="block md:hidden text-gray-300 fixed right-10 top-4 z-50">
            {isNav ? <IoMdCloseCircleOutline size={30}/> : <IoMdMenu  size={30}/>}
        </div>

        <div className={isNav ? `text-gray-100 z-40 fixed left-0 top-[56px] w-full bg-red-200 ease-in-out duration-500`
                                : 'fixed left-[-100%]'}>
                <ul className="p-8 text-xl ml-20 z-10 cursor-pointer">
                        {sections.map((section) =>(
                            <li key={section} className="p-2">
                                <ScrollLink
                                to={section}
                                smooth={true}
                                duration={500}
                                onClick={() =>handleNavigateActive(section)}>
                                    {section}
                                
                                </ScrollLink>

                            </li>
                        ))
                        }
                </ul>
        </div>

        <button className=" text-sm border lg:text-base border-black rounded-full text-black font-bold px-4 mr-24 md:mr-2 py-1">Get in touch</button>

        <div className="hidden md:flex fixed flex-col top-1/2 left-0">
            <ul>
                 <li className="w-[160px] h-[40px] flex flex-col justify-center items-center ml-[-95px]  hover:ml-[-10px] duration-300">
                    <a className="bg-blue-600 flex justify-center items-center w-full text-white rounded-r-lg" href="/">
                        <h4 className="mr-[20px] pr-8">Email</h4> <TfiEmail  size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[40px] flex flex-col justify-center items-center ml-[-95px]  hover:ml-[-10px] duration-300">
                    <a className="bg-red-600 flex justify-center items-center w-full text-white rounded-r-lg" href="/">
                        <h4 className="mr-[20px]">Facebook</h4> <IoLogoFacebook size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[40px] flex flex-col justify-center items-center ml-[-95px]  hover:ml-[-10px] duration-300">
                    <a className="bg-gray-600 flex justify-center items-center w-full text-white rounded-r-lg" href="/">
                        <h4 className="mr-[20px] pr-2">LinkedIn</h4> <FaLinkedin  size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[40px] flex flex-col justify-center items-center ml-[-95px]  hover:ml-[-10px] duration-300">
                    <a className="bg-purple-600 flex justify-center items-center w-full text-white rounded-r-lg" href="/">
                        <h4 className="mr-[20px]">WhatsApp</h4> <IoLogoFacebook size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default NavBar