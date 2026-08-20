import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  )
}

export default App
