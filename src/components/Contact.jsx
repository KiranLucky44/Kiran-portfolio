import React from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-12 relative overflow-hidden">
      <div className="container px-6">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="card p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-zinc-400 mb-6 leading-relaxed">Reach out via email or phone. I'm open to new opportunities and collaborations.</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a className="flex items-center gap-3 px-4 py-2 bg-zinc-800/50 rounded-lg border border-zinc-700/50 hover:bg-zinc-800 hover:border-zinc-500 transition-all group" href="mailto:kirankumarc477@gmail.com">
                <FaEnvelope className="text-zinc-400 group-hover:text-[#5AB4C8] transition-colors" />
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white">kirankumarc477@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 px-4 py-2 bg-zinc-800/50 rounded-lg border border-zinc-700/50 hover:bg-zinc-800 transition-all cursor-default">
                <FaPhone className="text-zinc-400" />
                <span className="text-sm font-medium text-zinc-300">203-290-8063</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium hover:underline decoration-[#5AB4C8]/30 underline-offset-4" href="https://github.com/KiranLucky44/" target="_blank" rel="noopener noreferrer">
                <FaGithub size={18} /> GitHub
              </a>
              <a className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium hover:underline decoration-blue-500/30 underline-offset-4" href="https://www.linkedin.com/in/kiran-kumar-977202182" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-end">
            <a className="px-5 py-3 bg-white text-black rounded-md font-semibold" href="/resume.pdf" download>Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  )
}
