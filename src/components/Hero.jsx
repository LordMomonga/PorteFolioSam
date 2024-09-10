import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import Design from './Design';
import { ThemeContext } from './ThemeContext';
import OD from '../assets/OD.png';
import { Tilt } from 'react-tilt';
import { FaLinkedin, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';
import { fadeIn } from '../utils/motion';

const Hero = () => {
  const animationSecousse = {
    animate: {
      x: [0, -5, 5, -5, 0], // Tremblement de gauche à droite
      transition: {
        duration: 0.6, // Durée de chaque cycle de tremblement
        repeat: Infinity, // Répéter l'animation infiniment
        repeatType: 'loop', // Boucle continue
        delay: 0.5, // Délai de 2 secondes avant de démarrer
        repeatDelay: 0.5, // Intervalle de 2 secondes entre chaque secousse
      },
    },
  };
  
  const [texte, setTexte] = useState('O-Dream');
  const { isDarkMode } = useContext(ThemeContext);
  const [estModalOuvert, setEstModalOuvert] = useState(false);
  
  const fermerModal = () => {
    setEstModalOuvert(false);
  };

  useEffect(() => {
    const tableauTexte = ['O-Dream', 'futur'];
    let indexActuel = 0;

    const intervalle = setInterval(() => {
      indexActuel = (indexActuel + 1) % tableauTexte.length;
      setTexte(tableauTexte[indexActuel]);
    }, 5000);

    return () => clearInterval(intervalle);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className={`w-5 h-5 rounded-full ${isDarkMode ? 'bg-secondary' : 'bg-purple-500'}`} />
          <div className={`w-1 sm:h-80 h-40 ${isDarkMode ? 'bg-gradient-to-t' : ''} from-gray-200 via-gray-400 to-gray-600`} />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
            Hey, we are <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`${isDarkMode ? 'bg-gradient-to-tr text-purple-400' : 'text-purple-600'} rounded-lg`}>
              {texte}
            </motion.span>
          </h1>
          <p className={`${styles.heroSubTex} mt-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Nous vous accompagnons dans votre immersion informatique<br className="sm:block hidden" />
          </p>
          <motion.button 
           whileHover={{ scale: 1.2 }}
           whileTap={{ scale: 0.8 }}
           style={{ x: 100 }}
           variants={animationSecousse}
           animate="animate" 
           onClick={() => setEstModalOuvert(true)}  
           className="bg-violet-500 z-[100] text-[15px] mt-5 md:mt-2 py-1 font-bold md:py-2 rounded-md px-5 absolute left-10">
            Intro
          </motion.button>
        </div>
        <motion.div 
         initial={{ x: " calc(100vw - 50%)" }}
         animate={{ x: "calc(50%)" }}
        className="flex gap-2 text-[15px] md:text-[25px] z-50 ml-0 md:ml-[10%] ">
        <motion.a
        whileHover={{scale:1.2}}
        > <FaLinkedin /></motion.a> 
        <motion.a
        href='https://www.facebook.com/profile.php?id=61565592841566&mibextid=LQQJ4d'
  whileHover={{scale:1.2}}
  target="_blank"
        ><FaFacebookSquare /></motion.a>  
        <motion.a
        href='https://wa.me/237690364646'
         whileHover={{scale:1.2}}
         target="_blank"
        ><FaWhatsapp /></motion.a>  
        </motion.div>
        <Design />
      </div>
      <ComputersCanvas />
     
      {/* Modal */}
      {estModalOuvert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100]">
          <motion.div
           initial={{ x: '-100vw', opacity: 0 }} // Animation pour le contenu du modal
           animate={{ x: 0, opacity: 1 }} // Position normale avec une opacité de 1
           transition={{ duration: 0.5, ease: 'easeOut' }} // Durée de l'animation et type d'easing
           className={`bg-gray-900 p-8 rounded-lg shadow-lg max-w-lg w-full bg-cover bg-center bg-no-repeat`}  
           style={{ backgroundImage: `url(${OD})`, backgroundSize: '35%' }}>
            
            <h2 className="text-2xl mb-4 text-white text-center">
              Bienvenue chez <span className='text-2xl text-violet-500 font-bold '>O-Dream</span> !
            </h2>
            <p className='text-white'>
              Chez O-Dream, nous sommes spécialisés dans les solutions informatiques complètes, en offrant une expertise dans :
            </p>
            <ul className='text-white list-disc ml-5 mt-2 mb-5 '>
              <li className='mb-2'>Développement web et développement d'applications natives</li>
              <li className='mb-2'>Services de design</li>
              <li className='mb-2'>Divers services informatiques</li>
              <li className='mb-2'>Livraison de matériel informatique</li>
              <li className='mb-2'>Maintenance des services informatiques</li>
              <li className='mb-2'>Autres offres liées aux logiciels</li>
            </ul>
            <p className='text-white'>
              Que ce soit pour la création d'applications web et natives interactives ou la fourniture de services et de matériel informatique, O-Dream est dédiée à offrir l'excellence et l'innovation à travers tous nos services.
            </p>
            <button onClick={() => setEstModalOuvert(false)} className="mt-4 bg-violet-500 text-white py-2 px-4 rounded-md">
              Fermer
            </button>
          </motion.div>
        </div>
      )}
     <div className='flex justify-center '>
      {/* Conteneur parent */}
      <a href='#about'> <div className='h-20 md:h-20 w-8 md:w-10 border-4 border-gray-500 rounded-3xl absolute top-[80%] md:top-[85%]'>
        {/* Cercle animé avec Framer Motion */}
        <motion.div
          className='flex justify-center py-1'
          initial={{ y: 0 }} // Position initiale
          animate={{ y: [0, 49, 0] }} // 56px = 100% de la hauteur de h-20 (80px - padding/margin)
          transition={{
            repeat: Infinity, // Animation infinie
            repeatType: 'reverse', // Va-et-vient
            duration: 1.2, // Durée du mouvement complet (aller-retour)
            ease: 'easeInOut',
          }}
        >
          <div className='w-5 h-5 rounded-full bg-gray-500' />
        </motion.div>
      </div></a>
    </div>
    </section>
  );
};

export default Hero;
