import React from 'react';
import { motion } from 'framer-motion';
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


const ChoiceContainer = ({ choices, activeChoice, onChoiceHover }) => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="choice-container flex flex-col space-y-4 text-secondary secondary p-5 ">
      {choices.map((choice) => (
        <motion.div
          key={choice.id}
          className={`choice  px-5 sm:p-2 cursor-pointer  rounded-lg  ${choice === activeChoice ? 'border-4 border-violet-400' : ` ${isDarkMode ? ' border-gray-300' : 'border-[#575757]'} `} border`}
          whileHover={{ scale: 1.2 }}
          onClick={() => onChoiceHover(choice)}
        >
          <p className={`${isDarkMode ? 'text-white' : 'text-black'} text-[10px] sm:text-[20px]`}>{choice.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ChoiceContainer;