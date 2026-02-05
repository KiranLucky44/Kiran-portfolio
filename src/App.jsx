import React from 'react'
import './index.css'
import { motion } from 'framer-motion'
import GlowBackground from './components/GlowBackground'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { VARIANTS } from './lib/motion'

export default function App() {
  return (
    <div className="relative isolate overflow-hidden bg-[#020202]">
      <Header />
      <GlowBackground />
      <div className="relative z-10">
        <Hero />
        <main>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

