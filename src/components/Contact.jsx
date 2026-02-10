import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="pt-10 pb-0 relative overflow-hidden">
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
          className="glass-card max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 !p-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-auto">
            <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
              <a href="mailto:kirankumarc477@gmail.com" className="group">
                <span className="block text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Primary Portal</span>
                <span className="text-lg font-bold text-white group-hover:text-white/60 transition-colors flex items-center gap-3 justify-center md:justify-start">
                  <FaEnvelope size={16} className="text-white/20" /> kirankumarc477@gmail.com
                </span>
              </a>
              <a href="tel:2032908063" className="group">
                <span className="block text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Direct Terminal</span>
                <span className="text-lg font-bold text-white group-hover:text-white/60 transition-colors flex items-center gap-3 justify-center md:justify-start">
                  <FaPhone size={16} className="text-white/20" /> 203-290-8063
                </span>
              </a>
            </div>

            <div className="h-px w-full md:w-px md:h-16 bg-white/10" />

            <div className="flex gap-4">
              <a href="https://github.com/KiranLucky44/" target="_blank" rel="noopener noreferrer" className="liquid-glass p-3 rounded-xl text-white/40 hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/kiran-kumar-977202182" target="_blank" rel="noopener noreferrer" className="liquid-glass p-3 rounded-xl text-white/40 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <a href="/resume.pdf" download className="btn btn-primary !px-8 !py-3 !text-sm rounded-xl whitespace-nowrap">
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
