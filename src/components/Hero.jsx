import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaDownload, FaArrowDown } from 'react-icons/fa'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="container relative z-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Content (Text) */}
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start mt-2 md:mt-0"
        >
          <div className="liquid-glass px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4 border-white/10 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Work
          </div>

          <h1 className="headline-1 mb-8">
            Design <br />
            <span className="text-white/40 italic">Meets</span> <br />
            Engineering
          </h1>

          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-medium text-white-400 leading-tight">
              Kiran Kumar <span className="text-white">Chinnakkagari</span>
            </h2>
            <p className="text-zinc-500 text-lg mt-4">
              Building Scalable Modern Full Stack Applications <br />
              <span className="text-white font-bold">Software Engineer • AI/LLM Enthusiast</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="/resume.pdf" download className="btn btn-primary">
              <FaDownload className="mr-2" size={14} /> Download CV
            </a>
            <a href="#projects" className="btn btn-glass">
              Scroll Down <FaArrowDown className="ml-2" size={12} />
            </a>
          </div>
        </motion.div>

        {/* Right Content (Avatar) */}
        <div className="flex justify-center items-center">
          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [-1, 1, -1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-80 h-[450px] md:w-[400px] md:h-[550px] group"
          >
            {/* Main Glass Card for Image */}
            <div className="glass-card w-full h-full p-0 relative overflow-hidden">
              <img
                src="/images/hero_image.jpg"
                alt="Kiran avatar"
                className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />

              {/* Internal Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Float Overlay Info (Zero content change but styled as glass) */}
              <div className="absolute bottom-10 left-8 right-8 liquid-glass p-6 rounded-3xl backdrop-blur-3xl border-white/20">
                <div className="text-white font-bold text-xl mb-1">Kiran Kumar</div>
                <div className="text-white/40 text-sm font-medium">Full Stack Architect</div>
              </div>
            </div>

            {/* Decorative Glow behind */}
            <div className="absolute -inset-4 bg-sky-500/10 blur-[80px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full -z-10"
      />
    </section>
  )
}

