import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-2">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold">Mhlongo Lesego</p>
          <p className="text-sm">Software Developer</p>
        </div>
        <div>
          <ul className="flex space-x-4 flex-wrap">
            <li>
              <a
                href="https://github.com/LesegoLSG"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lesego-mhlongo-081a82228"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/0640373089"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                WhatsApp
              </a>
            </li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
