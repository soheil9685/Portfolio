import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/skills'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default App
