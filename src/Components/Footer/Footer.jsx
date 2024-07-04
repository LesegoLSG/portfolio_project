import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold">Your Name</p>
          <p className="text-sm">Software Developer</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors duration-300">GitHub</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors duration-300">LinkedIn</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors duration-300">Twitter</a>
            </li>
            {/* Add more social media links as needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
