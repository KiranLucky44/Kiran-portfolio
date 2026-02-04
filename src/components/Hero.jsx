import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaDownload, FaArrowDown } from 'react-icons/fa'
import { TRANSITIONS, VARIANTS } from '../lib/motion'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden border-b border-zinc-800">
      <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={VARIANTS.staggerContainer(0.12, 0.2)}
          className="flex flex-col items-start z-10 lg:pl-12"
          style={{ y, opacity }}
        >
          <motion.div variants={VARIANTS.heroText}>
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

          <motion.div variants={VARIANTS.heroText} className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed">
              <span className="text-zinc-400">Building Scalable Modern</span> <br />
              <span className="text-[#5AB4C8]">Full Stack Applications</span>
            </h2>

            <p className="text-zinc-400 text-lg mt-6 font-medium">
              Software Engineer • AI/LLM Enthusiast
            </p>
          </motion.div>

          <motion.div variants={VARIANTS.heroText} className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-[#5AB4C8] text-zinc-950 rounded-lg font-semibold hover:bg-[#7ACDE1] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(90,180,200,0.3)]"
              href="/resume.pdf"
              download
            >
              <FaDownload size={14} /> Download CV
            </motion.a>
            <motion.a
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', translateY: -2 }}
              className="px-8 py-3 border border-zinc-700/50 bg-zinc-900/50 text-zinc-300 rounded-lg font-semibold hover:text-white transition-all flex items-center gap-2"
              href="#projects"
            >
              Scroll Down <FaArrowDown size={12} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Content - Avatar */}
        <div className="flex justify-center lg:justify-center relative z-10 lg:-translate-x-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...TRANSITIONS.springGentle, delay: 0.4 }}
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
            className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]"
          >
            {/* Glow effect behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5AB4C8]/10 to-blue-500/10 rounded-full blur-[80px] -z-10" />

            {/* Circle Container with double border effect */}
            <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-[#5AB4C8]/40 to-transparent shadow-2xl">
              <div className="w-full h-full rounded-full border-[12px] border-zinc-900 overflow-hidden bg-zinc-900 shadow-inner">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: TRANSITIONS.ease }}
                  src="/images/hero_image.jpg"
                  alt="Kiran avatar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

