import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaArrowDown } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden border-b border-zinc-800">
      <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* "Available for Work" pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800/80 rounded-full border border-zinc-700 mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-300 tracking-wide">Available for Work</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              Kiran Kumar<br />
              <span className="text-white">Chinnakkagari</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed">
              <span className="text-zinc-400">Building Scalable Modern</span> <br />
              <span className="text-[#5AB4C8]">Full Stack Applications</span>
            </h2>

            <p className="text-zinc-400 text-lg mt-6 font-medium">
              Software Engineer • AI/LLM Enthusiast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              className="px-8 py-3 bg-[#5AB4C8] text-zinc-950 rounded-lg font-semibold hover:bg-[#7ACDE1] transition-all hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(90,180,200,0.3)]"
              href="/resume.pdf"
              download
            >
              <FaDownload size={14} /> Download CV
            </a>
            <a
              className="px-8 py-3 border border-zinc-700/50 bg-zinc-900/50 text-zinc-300 rounded-lg font-semibold hover:bg-zinc-800 hover:text-white transition-all flex items-center gap-2"
              href="#projects"
            >
              Scroll Down <FaArrowDown size={12} />
            </a>
          </motion.div>
        </div>

        {/* Right Content - Avatar */}
        <div className="flex justify-center lg:justify-end relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]"
          >
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5AB4C8]/10 to-blue-500/10 rounded-full blur-[80px] -z-10" />

            {/* Circle Container */}
            <div className="relative w-full h-full rounded-full border-[8px] border-zinc-800/80 overflow-hidden shadow-2xl bg-zinc-900">
              <img
                src="/images/avatar_pixar.png"
                alt="Kiran avatar"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
