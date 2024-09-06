import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ThemeContext } from './ThemeContext';
import ComputerCanvas from './canvas/smallCPU';
import { SectionWrapper } from './hoc';
import './progress.css';
import Personnage from './canvas/Personnage';
const Choose = () => {
  const { isDarkMode } = useContext(ThemeContext);

  // State pour les trois compétences
  const [webDevValue, setWebDevValue] = useState(0);
  const [designValue, setDesignValue] = useState(0);
  const [maintenanceValue, setMaintenanceValue] = useState(0);

  // Effet pour animer les barres de progression
  useEffect(() => {
    const interval = setInterval(() => {
      setWebDevValue((v) => (v >= 90 ? 90 : v + 10)); // Compétence web development (90%)
      setDesignValue((v) => (v >= 85 ? 85 : v + 10)); // Compétence design (85%)
      setMaintenanceValue((v) => (v >= 80 ? 80 : v + 10)); // Compétence maintenance (80%)
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p className={`${styles.heroSubText} text-center mb-10 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        Pourquoi nous faire confiance ?
      </p>

      <div className="items-center flex-wrap justify-center md:justify-between flex ">
        <div className="z-0">
          <Personnage />
        </div>

        <motion.div 
         initial={{ x: '-100vw', opacity: 0 }} // Animation pour le contenu du modal
         animate={{ x: 0, opacity: 1 }} // Position normale avec une opacité de 1
         transition={{ duration: 0.5, ease: 'easeOut' }}
        className=" z-50 flex w-full md:w-[50%] flex-col items-center justify-center space-y-8">
          {/* Barre de progression pour le développement web */}
          <div className="w-full max-w-[400px]">
            <p className={`${isDarkMode ? 'text-white' : 'text-black'} mb-2`}>Développement Web</p>
            <div className="progress-bar-container">
              <motion.div
                className="progress-bar"
                initial={{ width: '0%' }}
                animate={{ width: `${webDevValue}%` }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundColor: '#435dee',
                }}
              />
              <span className=" text-white text-sm font-bold">{webDevValue}% hexo</span>
            </div>
          </div>

          {/* Barre de progression pour le design */}
          <div className="w-full max-w-[400px]">
            <p className={`${isDarkMode ? 'text-white' : 'text-black'} mb-2`}>Design</p>
            <div className="progress-bar-container">
              <motion.div
                className="progress-bar"
                initial={{ width: '0%' }}
                animate={{ width: `${designValue}%` }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundColor: '#865686',
                }}
              />
              <span className="progress-value">{designValue}%</span>
            </div>
          </div>

          {/* Barre de progression pour la maintenance informatique */}
          <div className="w-full max-w-[400px]">
            <p className={`${isDarkMode ? 'text-white' : 'text-black'} mb-2`}>Maintenance Informatique</p>
            <div className="progress-bar-container">
              <motion.div
                className="progress-bar"
                initial={{ width: '0%' }}
                animate={{ width: `${maintenanceValue}%` }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundColor: '#5ae979',
                }}
              />
              <span className="progress-value">{maintenanceValue}%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Choose, 'choose');
