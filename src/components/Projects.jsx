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
    <section id="projects" className="py-20 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="headline-1 mb-4">Crafting the <span className="text-white/40 italic">Digital</span> Forge</h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto italic">A selection of my most ambitious architectural accomplishments.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="glass-card !p-0 group perspective-1000"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />

                {/* Holographic Tech Badges */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="liquid-glass px-3 py-1 rounded-full text-[10px] font-bold text-white/50 uppercase tracking-widest backdrop-blur-3xl border-white/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{p.title}</h3>
                <p className="text-zinc-500 leading-relaxed mb-8 h-20 overflow-hidden line-clamp-3">
                  {p.desc}
                </p>

                <div className="flex gap-4">
                  <a href="#" className="flex-1 btn btn-glass group">
                    <FaGithub className="mr-2 opacity-50 group-hover:opacity-100" size={16} /> Code
                  </a>
                  <a href="#" className="flex-1 btn btn-primary">
                    <FaExternalLinkAlt className="mr-2" size={12} /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
