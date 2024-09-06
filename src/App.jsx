import { BrowserRouter } from 'react-router-dom'
import{ About, Contact,  Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { ThemeContext } from './components/ThemeContext';
import { useContext } from 'react';
const App = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <BrowserRouter>
    
     <div className={` relative   ${isDarkMode ? 'bg-[#121212]' : 'bg-[#bababa]'}`}>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />

      </div>
      <About />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
     
     </div>
    </BrowserRouter>
   
  )
}

export default App
