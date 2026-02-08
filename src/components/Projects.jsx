import React from 'react'
import { motion, useInView } from 'framer-motion'
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
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const containerRef = React.useRef(null)
  const sectionRef = React.useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  // Auto-slide when section is in view
  React.useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROJECTS.length)
    }, 4000) // Slide every 4 seconds

    return () => clearInterval(interval)
  }, [isInView])

  // Scroll to the active card
  React.useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const cardWidth = 320 // Width of each card + gap
    const scrollPosition = currentIndex * cardWidth

    container.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    })
  }, [currentIndex])

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="headline-1 mb-4">Crafting the <span className="text-white/40 italic">Digital</span> Forge</h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto italic">A selection of my most ambitious architectural accomplishments.</p>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 hide-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PROJECTS.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className={`flex-shrink-0 w-[300px] snap-start glass-card !p-0 group perspective-1000 transition-all duration-500 ${idx === currentIndex ? 'ring-2 ring-sky-500/50 shadow-[0_0_30px_rgba(14,165,233,0.2)]' : ''
                  }`}
              >
                <div className="relative h-48 w-full overflow-hidden rounded-t-[2.5rem]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />

                  {/* Tech Badges */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map(t => (
                      <span key={t} className="liquid-glass px-2 py-0.5 rounded-full text-[9px] font-bold text-white/50 uppercase tracking-wider backdrop-blur-2xl">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight line-clamp-2">{p.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 h-16 overflow-hidden line-clamp-3">
                    {p.desc}
                  </p>

                  <div className="flex gap-3">
                    <a href="#" className="flex-1 btn btn-glass !py-2 !px-4 !text-xs group">
                      <FaGithub className="mr-1.5 opacity-50 group-hover:opacity-100" size={14} /> Code
                    </a>
                    <a href="#" className="flex-1 btn btn-primary !py-2 !px-4 !text-xs">
                      <FaExternalLinkAlt className="mr-1.5" size={10} /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {PROJECTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-sky-400' : 'w-1.5 bg-zinc-700 hover:bg-zinc-600'
                  }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
