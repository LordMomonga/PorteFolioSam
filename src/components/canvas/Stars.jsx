import React from 'react'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'
const Stars = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <footer className={`${isDarkMode ? 'bg-gray-200' : 'bg-[#252425]'} py-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        <p className={` ${isDarkMode ? 'text-gray-600' : 'text-white'} text-[13px] sm:text-[15px] `}>Contact: Kamisisamuel@odream.site</p>
          <p className={`  ${isDarkMode ? 'text-gray-600' : 'text-white'} text-[13px] sm:text-[15px]  cursor-pointer`}></p>
        </motion.div>
        <motion.ul
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </motion.ul>
      </div>
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className=" text-[13px] sm:text-[15px] text-gray-600">&copy; 2023 Odream . All rights reserved.</p>
      </motion.div>
    </footer>
  )
}

export default Stars