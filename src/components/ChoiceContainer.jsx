import React from 'react';
import { motion } from 'framer-motion';
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { useState, useEffect   } from 'react';

const ChoiceContainer = ({ choices, activeChoice, onChoiceHover }) => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Add a listener for changes to the screen size
      const mediaQuery = window.matchMedia("(max-width: 500px)");
  
      // Set the initial value of the `isMobile` state variable
      setIsMobile(mediaQuery.matches);
  
      // Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
  
      // Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      // Remove the listener when the component is unmounted
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);

  return (
    <div className="choice-container flex gap-2 md:flex-col md:space-y-4 text-secondary secondary p-1 md:p-5 md:w-[40%] ">
      {choices.map((choice) => (
        <motion.div
          key={choice.id}
          className={`choice  px-3 sm:p-2 cursor-pointer  rounded-lg  ${choice === activeChoice ? 'border-1 md:border-violet-400 text-center' : ` ${isDarkMode ? ' border-gray-300' : 'border-[#575757]'} `} border`}
          whileHover={{ scale: 1.1 }}
           
          onClick={() => onChoiceHover(choice)}
        >
          <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-[10px] sm:text-[20px]`}>{isMobile ? choice.id : choice.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ChoiceContainer;