import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/skills'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {

  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
    document.documentElement.classList.toggle("dark");
  };


  return (
    <>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme}/>
      <Hero darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </>
  )
}

export default App
