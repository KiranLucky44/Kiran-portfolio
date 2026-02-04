import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const PROJECTS = [
  {
    title: 'AI Interview Agent',
    desc: 'Production-grade AI agent using RAG to simulate intelligent, adaptive interviews personalized to candidate resumes and job descriptions.',
    tech: ['RAG', 'Python', 'OpenAI', 'Vector DB', 'React'],
    image: '/images/ai_interview_agent.png',
  },
  {
    title: 'AI-Powered Document Query Assistant',
    desc: 'Built using RAG (Retrieval-Augmented Generation) and LangChain to enable intelligent document querying with natural language processing capabilities.',
    tech: ['LangChain', 'Python', 'OpenAI API', 'Vector DB'],
    image: '/images/ticket_classifier.png',
  },
  {
    title: 'Sales Forecast Dashboard',
    desc: 'Full-stack MERN application featuring real-time analytics, interactive charts, and predictive modeling for sales forecasting.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Chart.js'],
    image: '/images/sales_dashboard.png',
  },
  {
    title: 'Movie Hunger',
    desc: 'Dynamic movie discovery platform with advanced search, filtering, and user review system built with React and PHP/MySQL backend.',
    tech: ['React', 'PHP', 'MySQL', 'REST API'],
    image: '/images/movie_hunger.png',
  }
]

import { TRANSITIONS, VARIANTS } from '../lib/motion'

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative border-b border-zinc-800">
      <div className="container px-6">
        <motion.div
          className="text-center mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={VARIANTS.revealUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Featured Projects</h2>
          <div className="h-1.5 w-20 bg-[#5AB4C8] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={VARIANTS.staggerContainer(0.15)}
        >
          {PROJECTS.map((p, idx) => (
            <motion.article
              key={p.title}
              variants={VARIANTS.revealUp}
              whileHover={{
                y: -6,
                transition: TRANSITIONS.spring
              }}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col hover:border-zinc-700/50 hover:shadow-[#5AB4C8]/5 transition-colors duration-500"
            >
              {/* Image Area */}
              <div className="w-full h-52 relative overflow-hidden bg-zinc-800">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: TRANSITIONS.ease }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#5AB4C8] transition-colors">{p.title}</h3>
                </div>

                <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-grow">
                  {p.desc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-zinc-400 bg-zinc-800/50 rounded-lg border border-zinc-700/30 group-hover:border-[#5AB4C8]/20 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-[12px] font-bold text-white bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700 rounded-xl transition-all shadow-lg"
                  >
                    <FaGithub size={16} /> Code
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-[12px] font-bold text-zinc-950 bg-[#5AB4C8] hover:bg-[#7ACDE1] rounded-xl transition-all shadow-lg shadow-[#5AB4C8]/20"
                  >
                    <FaExternalLinkAlt size={14} /> Live
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

