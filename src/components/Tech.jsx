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

const Tech = () => {
  const defaultContent =
  " Nous sommes une équipe de  professionnels basée au Cameroun, précisément à Douala-Logpom, engagée à fournir des services informatiques de haute qualité. ";

  const { isDarkMode } = useContext(ThemeContext)
  return (
    <>
      <p className={`${styles.heroSubText} text-center mb-10 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        À propos de notre groupe
      </p>
      <div className='flex-col md:flex-row flex items-center justify-center '>
      <div>
     <ComputerCanvas />
     </div>
     <motion.div
       initial={{ x: '-100vw', opacity: 0 }} // Animation pour le contenu du modal
       animate={{ x: 0, opacity: 1 }} // Position normale avec une opacité de 1
       transition={{ duration: 0.5, ease: 'easeOut' }}
     className='text-center  px-5 py-3 rounded-md bg-gray-950 w-full md:w-[50%] '>
      <h1 className='text-2xl font-bold mb-4'></h1>
      <p className='text-2xl text-violet-500 '>O-Dream
      </p>
      <Accordion className='flex flex-col gap-3 p-4 '>
      <AccordionItem key="1" aria-label="Accordion 1" title=" Localisation"   className='bg-gray-900 rounded-lg  shadow-lg md:p-3 p-1 text-[12px] md:text-[16px] relative'>
       <div className=''> {defaultContent} <img src={Place} className='w-50 h-50 mt-5 float-left mr-4 mb-2   '/> <button className='absolute bg-violet-500 px-5 py-2 rounded-md bottom-[30%] left-[45%]'>voir</button></div>
        
      </AccordionItem>
      <AccordionItem key="2" aria-label="goals" title=" Objectifs "   className='bg-gray-900 rounded-lg shadow-lg text-center md:p-3 p-1 text-[12px] md:text-[16px]'>
 
 <div className='text-start'>
 <ul className=" list-disc list-inside ml-4 flex flex-col justify-start  gap-2">
    <li>Offrir des solutions personnalisées</li>
    <li>Aider à la transformation digitale</li>
    <li>Proposer des services créatifs d'infographie</li>
    <li>Garantir des solutions complètes</li>
    <li>Innover constamment</li>
    <li>Accélérer la croissance des clients</li>
    <li>Promouvoir l'accessibilité technologique</li>
  </ul>
  </div>    
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Pourquoi devriez-vous nous choisir"   className='bg-gray-900 rounded-lg shadow-lg md:p-3 p-1 text-[12px] md:text-[16px]'>
      <p className='mb-2 font-bold'>Pourquoi nous choisir ?</p>
  <ul className="list-disc list-inside ml-4 space-y-2 text-start">
    <li><strong>Expertise diversifiée</strong> : Nous offrons une gamme complète de services, allant du développement d'applications web et mobiles à l'infographie et la maintenance informatique. Vous trouverez tout ce dont vous avez besoin en un seul endroit.</li>
    <li><strong>Solutions personnalisées</strong> : Chaque entreprise est unique. C'est pourquoi nous créons des solutions sur mesure qui répondent spécifiquement à vos besoins et vous aident à atteindre vos objectifs rapidement et efficacement.</li>
    <li><strong>Innovation à la pointe</strong> : Nous restons constamment à jour avec les dernières tendances technologiques pour garantir que vous bénéficiez toujours des solutions les plus modernes, performantes et sûres.</li>
    <li><strong>Service client exceptionnel</strong> : Nous sommes engagés à offrir un service client impeccable, avec une disponibilité constante pour répondre à vos questions et résoudre vos problèmes.</li>
    <li><strong>Rapport qualité-prix</strong> : Nous offrons des services de haute qualité à des prix compétitifs, vous assurant ainsi un excellent retour sur investissement.</li>
    <li><strong>Accompagnement continu</strong> : Nous ne nous arrêtons pas après la livraison de votre projet. Nous vous accompagnons à chaque étape de votre croissance pour assurer que vos solutions restent à jour et performantes.</li>
    <li><strong>Proximité et engagement local</strong> : Basés à Douala, nous comprenons les besoins spécifiques des entreprises locales et nous nous engageons à soutenir l'économie régionale en offrant des services adaptés aux réalités locales.</li>
  </ul>
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="Nos références"   className='bg-gray-900 rounded-lg shadow-lg md:p-3 p-1 text-[12px] md:text-[16px]'>
      <p className='mb-2 font-bold'>Vous pouvez nous contacter</p>
 
      </AccordionItem>
    </Accordion>
    </motion.div>
      </div>
     
    </>
  )
}

export default SectionWrapper(Tech, 'skills')
