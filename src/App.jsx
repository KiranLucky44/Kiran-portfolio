import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import GlowBackground from './components/GlowBackground'
import './index.css'

export default function App() {
  console.log('App.jsx render')
  return (
    <div>
      <Header />
      <GlowBackground />
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
  )
}
