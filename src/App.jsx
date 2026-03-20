import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Global Background Atmosphere */}
      <div className="global-bg-elements">
        <motion.div 
          className="bg-orb orb-1"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="bg-orb orb-2"
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="bg-orb orb-3"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Decorative Rings */}
        {[...Array(4)].map((_, i) => (
          <motion.div 
            key={`ring-${i}`}
            className={`bg-ring ring-${i + 1}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.2, delay: 0.2 * i, type: "spring" }}
          />
        ))}
      </div>

      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
