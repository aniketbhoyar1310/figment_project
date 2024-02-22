import React from "react";
import { useTheme } from "../Context/ThemeContext";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Switcher = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    
    <div className="float-start">
        <button
          className={`p-1 rounded-full ${
            isDarkMode ? "bg-white text-gray-800" : "bg-gray-800 text-white"
          }`}
          onClick={toggleTheme}
        >
          {isDarkMode ? <CiLight /> : <MdDarkMode />}
        </button>
      </div>
    
  );
};

export default Switcher;
