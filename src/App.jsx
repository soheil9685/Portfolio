import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/skills'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </>
  )
}

export default App
