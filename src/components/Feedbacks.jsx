import React from 'react'
import { styles } from '../style'
import TestimonialSlider from './TestimonialSlieder'
import { SectionWrapper } from './hoc'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


const Feedbacks = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
       <div className="mt-20 text-center text-[50px] bold  ">
      <p className={` text-3xl md:text-5xl mb-2 ${isDarkMode ? '': 'text-black'} `}> Testimoniales </p>
      <p className={`${isDarkMode ? 'text-secondary' : 'text-[#3a393a]'}  text-[13px] sm:text-[16px] text-secondary mb-10`}>Discover what my clients have to say about our collaborative journey here - <br/> a testament to the positive impact of my web development expertise and dedication to delivering exceptional results</p>
      </div>
      <TestimonialSlider />

    </div>
    
  )
}

export default SectionWrapper(Feedbacks, 'Testimoni') 