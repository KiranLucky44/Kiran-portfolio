import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="headline-1 mb-8">Let's Build the <br /><span className="text-white/40 italic">Future</span></h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto italic">Let's build something extraordinary together. I'm open to new opportunities and collaborations.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 !p-12 md:!p-20"
        >
          <div className="flex-grow space-y-12">
            <div className="flex flex-col gap-6">
              <a href="mailto:kirankumarc477@gmail.com" className="group">
                <span className="block text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-2">Primary Portal</span>
                <span className="text-2xl md:text-3xl font-bold text-white group-hover:text-white/60 transition-colors flex items-center gap-4">
                  <FaEnvelope size={20} className="text-white/20" /> kirankumarc477@gmail.com
                </span>
              </a>
              <div className="group">
                <span className="block text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-2">Direct Terminal</span>
                <span className="text-2xl md:text-3xl font-bold text-white flex items-center gap-4">
                  <FaPhone size={20} className="text-white/20" /> 203-290-8063
                </span>
              </div>
            </div>

            <div className="flex gap-8">
              <a href="https://github.com/KiranLucky44/" target="_blank" rel="noopener noreferrer" className="liquid-glass p-4 rounded-2xl text-white/40 hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kiran-kumar-977202182" target="_blank" rel="noopener noreferrer" className="liquid-glass p-4 rounded-2xl text-white/40 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <a href="/resume.pdf" download className="btn btn-primary !px-12 !py-5 !text-lg rounded-3xl">
              Secure the CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Focal Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full -z-10" />
    </section>
  )
}
