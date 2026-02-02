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

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative border-b border-zinc-800">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-16 bg-[#5AB4C8] mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PROJECTS.map((p, idx) => (
            <motion.article
              key={p.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg flex flex-col group hover:border-zinc-700 transition-all"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Image Area */}
              <div className="w-full h-48 relative overflow-hidden bg-zinc-800">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">{p.title}</h3>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-grow">
                  {p.desc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800 rounded-full border border-zinc-700/50">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors">
                    <FaGithub size={16} /> Code
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-zinc-950 bg-[#5AB4C8] rounded-lg hover:bg-[#7ACDE1] transition-colors">
                    <FaExternalLinkAlt size={14} /> Demo
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
