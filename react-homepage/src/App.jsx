import { useState } from 'react'
import  Navbar  from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/hero'
import Services from './components/Service'
import About from './components/About'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
            <Services/>
          
      <Footer/>

          </>
  )
}

export default App
