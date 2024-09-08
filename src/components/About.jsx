import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from './hoc'
import { language } from '../constants'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { FaPlus } from 'react-icons/fa'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const ServiceCard = ({index, title, icon, content}) => {
  const [estModalOuvert, setEstModalOuvert] = useState(false);


  return(
    <Tilt className='xs:w-[240px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 40,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[240px]  flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
    <motion.span 
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
    className='flex justify-center  mt-2 cursor-pointer  text-gray-300  rounded-md font-bold items-center gap-2'  onClick={() => setEstModalOuvert(true)}  >< FaPlus/> More</motion.span>
 
 {estModalOuvert && (
        <motion.div 
        initial={{ y: '100vw', opacity: 50 }} // Animation pour le contenu du modal
           animate={{ y: 0, opacity: 1 }} // Position normale avec une opacité de 1
           transition={{ duration: 0.5, ease: 'easeOut' }} 
        className="fixed inset-0 bg-gray-800  rounded-2xl  flex justify-center items-center z-[100]">
         <p className='px-2 text-center'>
         {content}
         </p>
         <motion.button
         whileHover={{ scale: 1.2 }}
         onClick={() => setEstModalOuvert(false)} className="mt-4 flex items-center gap-2 bg-violet-500 text-white py-2 px-4 rounded-md absolute bottom-2">
             <FaTimes /> 
            </motion.button>
        </motion.div>
      )}
  </Tilt>

  )
}
const OtherCard = ({index, title}) => {
  return(
    <Tilt>
      <motion.div
      variants={fadeIn("top", "spring", index * 0.5, 0.74)}
      >
     <div className="flex flex-wrap justify-center gap-4">
  <div
    options={{
      max: 40,
      scale: 1,
      speed: 450,
    }}
    className='bg-white rounded-lg py-2 px-4 sm:px-6 lg:px-10 h-auto w-full max-w-[250px] flex items-center flex-col'
  >
    <h3 className='text-black text-[13px] sm:text-[16px] font-bold text-center'>
      {title}
    </h3>
  </div>
</div>


      </motion.div>

    </Tilt>
  )
}

const About = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <>
    <motion.div variants={textVariant()}>
      <h1 className="text-center">
      <p className={`${styles.sectionHeadText} ${isDarkMode ? 'text-white': 'text-gray-700'} `}> Nos Services</p>
      <div className=" border-b-4 border-fuchsia-600  w-[100px] inline-block rounded-lg "> </div>
     
      </h1>
      <p className={` ${styles.sectionSubText} ${isDarkMode ? '': 'text-black '}`}> what we provide <span className="text-purple-700 text-6xl">.</span></p>
      <div className="  block sm:flex gap-20">
      
      
      </div>
     
      <div className="mt-20 flex flex-wrap justify-center gap-10">
       {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>

       ))}

      </div>
      
      

    </motion.div>
   
     
    
    </>
  )
}

export default SectionWrapper(About, "about") 