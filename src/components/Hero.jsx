import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import Design from './Design'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Hero = () => {
  const [text, setText] = useState('O-Dream');
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const textArray = ['O-Dream', 'the futur'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % textArray.length;
      setText(textArray[currentIndex]);
    }, 5000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);  

  return (
    
    <section className="relative w-full h-screen mx-auto ">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className={`w-5 h-5 rounded-full ${isDarkMode ? 'bg-secondary': 'bg-purple-500'}`}/>
          <div className={ `w-1 sm:h-80 h-40 ${isDarkMode ? 'bg-gradient-to-t': ''} from-gray-200 via-gray-400 to-gray-600`}/>
        
        </div>
        <div>
        <h1 className={`${styles.heroHeadText} ${isDarkMode ? 'text-white' : 'text-black'} `}> Hi, we are <motion.span 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.2 }}
        className={`${isDarkMode ? 'bg-gradient-to-tr text-purple-400': 'text-purple-600'}  rounded-lg `}>{text}</motion.span></h1>
        <p className={` ${styles.heroSubText} mt-2 ${isDarkMode ? 'text-white' : 'text-black'} `}>we help you throught your IT immersion<br className=" sm:block hidden"/> </p>
        
        </div>
       
        
     
      <Design />
      
      </div>
      <ComputersCanvas />
      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
     
    </section>
    
  )
}

export default Hero