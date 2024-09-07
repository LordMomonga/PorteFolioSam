import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../constants';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const TestimonialSlider = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = testimonials.length;

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative w-full h-80 md:h-96 overflow-hidden  ">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`flex justify-center   w-full h-full transition-opacity ${
              index === currentSlide ? "opacity-100 " : "opacity-0"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="object-cover w-80 md:w-76 rounded-xl shadow-gray-500 shadow-xl "
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex space-x-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full bg-gray-400 focus:outline-none ${
                index === currentSlide ? "bg-blue-500" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
      <div className="max-w-md mx-auto mt-4">
        <div className="text-center">
          <h3 className={`${isDarkMode ? '' : 'text-black'} text-xl font-bold`}>{testimonials[currentSlide].name}</h3>
          <p className={`  text-sm text-gray-600 `}>{testimonials[currentSlide].position}</p>
        </div>
        <p className={`${isDarkMode ? '' : 'text-[#3a393a]'}  mt-4`}>{testimonials[currentSlide].testimonial}</p>
      </div>
      <div className="flex justify-center mt-4">
        <motion.button
        whileHover={{ scale: 1.1 }}
          className={` ${isDarkMode ? 'bg-purple-500 ' : 'hover:bg-purple-200 text-black'} px-4 py-2  text-white rounded focus:outline-none`}
          onClick={handlePrevSlide}
        >
          Previous
        </motion.button>
        <motion.button
        whileHover={{ scale: 1.1 }}
          className={`${isDarkMode ? 'bg-purple-500 border-slate-500' : 'hover:bg-purple-200 text-black border-slate-700'}  px-4 py-2 text-white   rounded focus:outline-none ml-4`}
          onClick={handleNextSlide}
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};

export default TestimonialSlider;