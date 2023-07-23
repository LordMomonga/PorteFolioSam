import React from 'react'
import { useState } from 'react';
import { styles } from '../style'
import { motion } from 'framer-motion'
import { SectionWrapper } from './hoc';
import emailjs from '@emailjs/browser'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
//service_tn3tgiq
//template_kgik6ue
//XLYNbpt0RTQb5GZTu
const Contact = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your own service ID and template ID from EmailJS
    const serviceID = 'service_tn3tgiq';
    const templateID = 'template_kgik6ue';
    const userID = 'XLYNbpt0RTQb5GZTu';

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (response) => {
        console.log('Form submitted successfully!', response);
        // Add any success message or redirect to a thank-you page here
      },
      (error) => {
        console.error('Form submission failed:', error);
        // Add error handling here, show an error message to the user, etc.
      }
    );
  };
  return (
    <>
    <div>
       <div className="mt-20 text-center text-[50px] bold  ">
      <p className={`${styles.heroHeadText} ${isDarkMode ? '': 'text-black'}`}> Contact me </p></div>

    </div>
    <motion.form
      className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 max-w-sm mx-auto mt-5"
      onSubmit={handleSubmit}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <motion.label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Name:
        </motion.label>
        <motion.input
          className="shadow appearance-none border-none rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
      </div>
      <div className="mb-4">
        <motion.label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Email:
        </motion.label>
        <motion.input
          className="shadow appearance-none border-none rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="you@example.com"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
      </div>
      <div className="mb-6">
        <motion.label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="message"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Message:
        </motion.label>
        <motion.textarea
          className="shadow appearance-none border-none rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Your message here"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        ></motion.textarea>
      </div>
      <motion.div
        className="flex items-center justify-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.button
          className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Send
        </motion.button>
      </motion.div>
    </motion.form>
    </>
  )
}

export default SectionWrapper(Contact,'contact')