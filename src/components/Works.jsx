import React from 'react'
import { styles } from '../style'
import ChoiceContainer from './ChoiceContainer'
import { choicesData } from '../constants'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { SectionWrapper } from './hoc'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Works = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [activeChoice, setActiveChoice] = useState(choicesData[0]);

  const handleChoiceHover = (choice) => {
    setActiveChoice(choice);
  };
  return (
    <div className="mt-20 text-center text-[50px] bold  ">
      <p className={`   text-center ${isDarkMode ? '': 'text-black'}  `}> Projects </p>
      <div className=" border-b-4 border-fuchsia-600  w-[100px] inline-block rounded-lg "/>
      <div>
      <p className={`${isDarkMode ? 'text-secondary' : 'text-[#3a393a]'} text-[12px] sm:text-[16px] text-secondary mb-10 `}>My journey as a software engineer and 3D design enthusiast comes to life through a collection of creative solutions<br /> and captivating experiences that reflect my passion for innovation and problem-solving.</p>
       
      </div>
      <div className="flex   flex-wrap items-center justify-center  gap-5 md:gap-20 mt-20 " >
      <motion.div
        className={`${isDarkMode ? 'bg-purple-800' : 'bg-purple-100'} container w-fullcd.. md:w-1/2 flex flex-col items-center justify-center  border-gradient-violet  p-4 rounded-lg`}
        initial={{ x: '-100vw', opacity: 0 }} // Animation pour le contenu du modal
         animate={{ x: 0, opacity: 1 }} // Position normale avec une opacité de 1
         transition={{ duration: 0.5, ease: 'easeOut' }}
        exit={{ x: -100, opacity: 0 }}
      >
        <motion.img
          src={activeChoice.image}
          alt={`Image du choix ${activeChoice.id}`}
          className="w-[450px]  object-cover rounded-lg"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
        />
        <motion.div
          className="description-container p-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <p className={`${isDarkMode ? 'text-white': 'text-black'} text-[9px] sm:text-[15px]`}>{activeChoice.description}</p>
        </motion.div>
      </motion.div>
      <ChoiceContainer
        choices={choicesData}
        activeChoice={activeChoice}
        onChoiceHover={handleChoiceHover}
      />
      
      </div>



    </div>
  )
}

export default SectionWrapper(Works, 'works') 