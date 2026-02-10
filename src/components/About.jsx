import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 pb-10 relative overflow-hidden scroll-mt-16">
      <div className="container relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Title & Intro */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="headline-2 mb-8"
            >
              The Story <br />
              <span className="text-white/40 italic">Behind the Code</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-xl text-zinc-400"
            >
              <p>
                I'm <span className="text-white font-bold">Kiran Kumar</span>, a Software Engineer with <span className="text-sky-400 font-bold">4+ years</span> of experience building robust, scalable systems.
              </p>
              <p className="text-lg">
                My passion lies in bridging the gap between <span className="text-white font-semibold">complex backend logic</span> and <span className="text-white font-semibold">seamless user experiences</span>.
              </p>
              <p className="text-lg text-zinc-400">
                Currently, I'm specializing in cloud-native architectures and exploring the frontiers of <span className="text-white font-semibold">Generative AI</span> to build the next generation of intelligent Agentic applications.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Glass Stats & Details */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card md:col-span-2 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-6xl font-bold text-sky-400 tracking-tighter">4+</div>
                <div className="liquid-glass px-4 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest text-white/40">Established Experience</div>
              </div>
              <p className="text-zinc-500 text-sm">Four years of engineering excellence in high-availability environments.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="liquid-glass rounded-[2rem] p-8"
            >
              <div className="text-3xl font-bold text-sky-400 mb-2">4+</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Projects Sculpted</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="liquid-glass rounded-[2rem] p-8"
            >
              <div className="text-3xl font-bold text-sky-400 mb-2">100%</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Client Delivery</div>
            </motion.div>

            <div className="md:col-span-2 mt-4 pt-10 border-t border-white/5 flex flex-wrap gap-12">
              <div>
                <span className="block text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-3">Location</span>
                <span className="text-lg font-medium text-white">New Haven, CT</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-3">Email</span>
                <a href="mailto:kirankumarc477@gmail.com" className="text-lg font-medium text-white hover:text-white/60 transition-colors">
                  kirankumarc477@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sky-500/5 blur-[150px] rounded-full -z-10" />
    </section>
  )
}

