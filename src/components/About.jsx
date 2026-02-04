import React from 'react'
import { motion } from 'framer-motion'

import { TRANSITIONS, VARIANTS } from '../lib/motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative border-b border-zinc-800">
      <div className="container px-6">
        <motion.div
          className="text-center mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={VARIANTS.revealUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">About Me</h2>
          <div className="h-1.5 w-20 bg-[#5AB4C8] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={VARIANTS.revealUp}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5AB4C8]/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="text-xl md:text-2xl text-zinc-400 leading-relaxed space-y-8 mb-16 relative z-10">
            <p>
              I'm <span className="text-white font-bold tracking-tight">Kiran Kumar</span>, a Software Engineer with <span className="text-[#5AB4C8] font-bold">4 years</span> of experience building robust,
              scalable systems. My passion lies in bridging the gap between <span className="text-white font-semibold">complex backend logic</span> and <span className="text-white font-semibold">seamless user experiences</span>.
            </p>
            <p className="text-lg md:text-xl">
              Currently, I'm specializing in cloud-native architectures and exploring the frontiers of <span className="text-[#5AB4C8] font-semibold italic">Generative AI</span> to build the next generation of intelligent applications.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={VARIANTS.staggerContainer(0.1)}
          >
            {[
              { label: 'Years of Experience', value: '4+' },
              { label: 'Projects Completed', value: '4+' },
              { label: 'Client Satisfaction', value: '100%' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={VARIANTS.revealUp}
                whileHover={{ y: -5, borderColor: 'rgba(90, 180, 200, 0.4)' }}
                className="bg-zinc-950/40 border border-zinc-800 rounded-2xl p-8 text-center transition-all duration-300 group"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#5AB4C8] mb-3 group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                <div className="text-[11px] text-zinc-500 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-10 border-t border-zinc-800/50">
            <div className="text-center md:text-left">
              <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Location</span>
              <span className="text-xl font-bold text-white tracking-tight">New Haven, CT</span>
            </div>
            <div className="text-center md:text-right">
              <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Email</span>
              <a href="mailto:kirankumarc477@gmail.com" className="text-xl font-bold text-white hover:text-[#5AB4C8] transition-all decoration-[#5AB4C8]/30 underline decoration-2 underline-offset-8 hover:decoration-[#5AB4C8]">
                kirankumarc477@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

