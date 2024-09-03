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



const ServiceCard = ({index, title, icon}) => {

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
  </Tilt>
  )
}
const OtherCard = ({index, title}) => {
  return(
    <Tilt>
      <motion.div
      variants={fadeIn("top", "spring", index * 0.5, 0.74)}
      >
      <div
        options={{
          max: 40,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[5px] py-2 px-10 h-[60px] w-[60px] flex  ml-4 items-center flex-col'
      >
         <h3 className='text-white text-[13px] font-bold text-center'>
          {title}
        </h3>
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
      <p className={`${styles.sectionHeadText} ${isDarkMode ? '': 'text-black'} `}> ABOUT US</p>
      <div className=" border-b-4 border-fuchsia-600  w-[100px] inline-block rounded-lg "> </div>
     
      </h1>
      <p className={` ${styles.sectionSubText} ${isDarkMode ? '': 'text-black '}`}> Introduction <span className="text-purple-700 text-6xl">.</span></p>
      <div className="  block sm:flex gap-20">
      <motion.p 
       variants={fadeIn("", "", 0.1, 1)}
      className={`${isDarkMode ? 'text-secondary' : 'text-[#3a393a]'} mt-4 mb-5   text-[13px] sm:text-[17px] max-w-3xl leading-[30px]`}
      >
At o-dream, we specialize in comprehensive IT solutions, offering expertise in web development, native application development, and a range of IT services. Our capabilities extend beyond software development to include the delivery of IT equipment, maintenance of IT services, and other software-related offerings. Whether it's crafting efficient, interactive web and native applications or providing essential IT support and equipment, o-dream is dedicated to delivering excellence and innovation across all our services.</motion.p>
      <div className=" flex flex-wrap gap-5">
       {language.map((language, index) => (
        <OtherCard key={language.title} index={index} {...language}/>
       ))}

      </div>
      </div>
     
      <div className="mt-20 flex flex-wrap gap-10">
       {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
       ))}

      </div>
      
      

    </motion.div>
    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#skills'>
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
     
    
    </>
  )
}

export default SectionWrapper(About, "about") 