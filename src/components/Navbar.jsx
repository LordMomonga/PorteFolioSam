import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets'
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import Oimage from '../assets/OD.png'


const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false);
  const [isWhite, setIsWhite] = useState(false);

  const handleClick = () => {
    setIsWhite(!isWhite);
  };

  return (
    <nav className={`${styles.paddingX} w-full items-center py-5 fixed top-o z-20 ${isDarkMode ? 'bg-[#121212]' : 'bg-[#bababa]'} `}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        <Link to="/" className="flex items-center gap-2" onClick={() => {
          setActive("");
          window.scrollTo(0, 0)
        }}>
          <img src={Oimage} alt="logo" className="w-[50px] rounded-md " />
          <p className={` text-[18px] font-bold cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}> O -Dream</p>


        </Link>
        <button 
        onClick={toggleTheme}
       
        ><Brightness1Icon 
        onClick={handleClick}
        className={` rounded-full ${
          isWhite ? 'bg-black' : 'bg-white'}`} /></button>
        <ul className=" list-none hidden sm:flex flex-row gap-10">
       
          {navLinks.map((nav) => (
            <li
            key={nav.id}
            className={`${ active === nav.title ? `${isDarkMode ? 'text-white' : 'text-[#846d83]'}` : `${isDarkMode ? 'text-secondary' : 'text-black'}` } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? close : menu} alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer" 
            onClick={() => setToggle(!toggle)}/>
            
            <div className= {`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute mx-4 my-2 min-w-[140px] right-0 top-20 z-10 rounded`}>
            <ul className=" list-none flex  justify-end items-start flex-col gap-4">
          {navLinks.map((nav) => (
            <li
            key={nav.id}
            className={`${ active === nav.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
            onClick={() => {
              setToggle(!toggle)
              setActive(nav.title)}}
            >
              <a href={`/#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

        </ul>
       
            </div>
          
           
        </div>
       
      </div>
      
    </nav>
  )
}

export default Navbar