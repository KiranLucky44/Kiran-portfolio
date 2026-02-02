import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Avatar from './assets/avatar.svg'

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold">
              Building Scalable Modern Websites for the future
            </motion.h1>

            <p className="muted mt-4">Hello! I'm Kiran — Software Engineer • Full Stack Developer • AI & Generative AI Engineer</p>

            <div className="mt-6 flex gap-4">
              <a className="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold" href="#">Download CV</a>
              <a className="px-4 py-2 pill" href="#contact">Scroll Down</a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="card p-6">
              <img src={Avatar} alt="avatar" className="avatar-img" />
            </div>
          </div>
        </section>

        <section id="about" className="py-8">
          <div className="card p-6">
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="muted mt-3">I am a Java Full Stack Developer with 3.5+ years of experience building scalable backend systems, enterprise applications, and AI-driven workflows. Skilled in Java, Spring Boot, React, Python, microservices, and Generative AI automation.</p>
          </div>
        </section>

        <section id="skills" className="py-8">
          <h3 className="text-2xl font-bold mb-4">Skills & TechStack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {['Java','React','Python','Node.js','OpenAI','Docker','AWS','MySQL'].map((s)=> (
              <div key={s} className="p-3 card text-sm">{s}</div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-8">
          <h3 className="text-2xl font-bold mb-4">Projects</h3>
          <div className="space-y-4">
            <div className="card p-4">AI Ticket Classifier — Automation using OpenAI APIs for ticket classification and log summarization.</div>
            <div className="card p-4">Sales Forecast Dashboard (MERN + ML) — Sales prediction system using Holt-Winters ML model.</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
