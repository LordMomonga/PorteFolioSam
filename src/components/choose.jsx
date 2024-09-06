// Tech.js
import React, { useContext } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Computer } from './Computer'
import { SectionWrapper } from './hoc'
import { styles } from '../style'
import { ThemeContext } from './ThemeContext'
import ComputerCanvas from './canvas/smallCPU'
import { motion } from 'framer-motion'
import { Accordion, AccordionItem } from "@nextui-org/react";
import Place from "../assets/place.png"
import { FaLocationArrow } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'

const Choose = () => {
  const defaultContent =
  " Nous sommes une équipe de  professionnels basée au Cameroun, précisément à Douala-Logpom, engagée à fournir des services informatiques de haute qualité. ";

  const { isDarkMode } = useContext(ThemeContext)
  return (
    <>
      <p className={`${styles.heroSubText} text-center mb-10 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        Pourquoi nous faire confiance ?
      </p>
      <div className='flex-col md:flex-row flex items-center justify-center '>
      <div>
     <ComputerCanvas />
     </div>
  
      </div>
     
    </>
  )
}

export default SectionWrapper(Choose, 'choose')
