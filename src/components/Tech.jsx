import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from './hoc'
import { technologies } from '../constants'
import { styles } from '../style'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
const Tech = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <>
    <p className={`${styles.heroSubText} text-center mb-10 ${isDarkMode ? '': 'text-black'}`}>My skills</p>
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-15">
  
      {technologies.map((technology) => (
        <div className="w-28 h-28 " key={technology.name}> 
        <BallCanvas icon={ technology.icon } /></div>
      ))}
    </div></>
  )
}

export default SectionWrapper(Tech, "skills") 