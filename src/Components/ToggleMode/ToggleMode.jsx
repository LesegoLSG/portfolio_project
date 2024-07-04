import React from "react";
import "./Toggle.css";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ToggleMode = ({ isDarkMode, setIsDarkMode }) => {
  return (
    // <div className="toggle-container">
    //   <input
    //     type="checkbox"
    //     id="check"
    //     className="toggle"
    //     onChange={() => setIsDarkMode(!isDarkMode)}
    //     checked={isDarkMode}
    //   />
    //   <label htmlFor="check">Dark Mode</label>
    // </div>
    <div className="flex justify-center items-center fixed bottom-28 right-0 pr-2">
      {isDarkMode ? (
        <MdLightMode
          onClick={() => setIsDarkMode(false)}
          className="text-white cursor-pointer"
          size={30}
        />
      ) : (
        <MdDarkMode
          onClick={() => setIsDarkMode(true)}
          className="text-black cursor-pointer"
          size={30}
        />
      )}
    </div>
  );
};

export default ToggleMode;
