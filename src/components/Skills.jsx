import React from 'react'
import { motion } from 'framer-motion'
import {
  FaCode, FaLaptopCode, FaServer, FaCloud, FaBrain, FaTools,
  FaJava, FaJs, FaPython, FaReact, FaAngular, FaAws, FaDocker, FaJenkins,
  FaGitAlt, FaJira, FaNetworkWired, FaGlobe, FaSync, FaLink, FaDatabase,
  FaLeaf, FaProjectDiagram, FaShip, FaCogs, FaRobot, FaPaperPlane, FaLayerGroup,
  FaMicrochip, FaBolt, FaSearch
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: FaCode,
    skills: [
      { name: 'Java', icon: FaJava, color: '#FF9800' },
      { name: 'JavaScript', icon: FaJs, color: '#FACC15' },
      { name: 'TypeScript', icon: FaCode, color: '#3178C6' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'C/C++', icon: FaCode, color: '#00599C' }
    ]
  },
  {
    title: 'Frontend',
    icon: FaLaptopCode,
    skills: [
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'Redux', icon: FaLayerGroup, color: '#764ABC' },
      { name: 'Next.js', icon: FaReact, color: '#F8FAFC' },
      { name: 'Angular', icon: FaAngular, color: '#DD0031' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' }
    ]
  },
  {
    title: 'Backend',
    icon: FaServer,
    skills: [
      { name: 'Spring Boot', icon: FaLeaf, color: '#4ADE80' },
      { name: 'Microservices', icon: FaNetworkWired, color: '#94A3B8' },
      { name: 'Hibernate', icon: FaDatabase, color: '#788896' },
      { name: 'REST APIs', icon: FaGlobe, color: '#0EA5E9' },
      { name: 'Express', icon: FaServer, color: '#F8FAFC' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    skills: [
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Azure', icon: FaCloud, color: '#0078D4' },
      { name: 'Docker', icon: FaDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: FaShip, color: '#326CE5' },
      { name: 'Jenkins', icon: FaJenkins, color: '#D24939' },
      { name: 'Terraform', icon: FaCogs, color: '#7B42BC' },
      { name: 'CI/CD', icon: FaSync, color: '#0EA5E9' }
    ]
  },
  {
    title: 'AI & ML',
    icon: FaBrain,
    skills: [
      { name: 'LangChain', icon: FaLink, color: '#4ADE80' },
      { name: 'Hugging Face', icon: FaRobot, color: '#FACC15' },
      { name: 'OpenAI API', icon: FaBrain, color: '#10A37F' },
      { name: 'LLM', icon: FaMicrochip, color: '#A020F0' },
      { name: 'VectorDB', icon: FaDatabase, color: '#00C853' },
      { name: 'FAISS', icon: FaBolt, color: '#FFD600' }
    ]
  },
  {
    title: 'Databases & Tools',
    icon: FaTools,
    skills: [
      { name: 'MySQL', icon: FaDatabase, color: '#3178C6' },
      { name: 'PostgreSQL', icon: FaDatabase, color: '#38BDF8' },
      { name: 'MongoDB', icon: FaDatabase, color: '#47A248' },
      { name: 'Cassandra', icon: FaDatabase, color: '#1287B1' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'Jira', icon: FaJira, color: '#0052CC' },
      { name: 'Maven', icon: FaProjectDiagram, color: '#C71A36' },
      { name: 'Postman', icon: FaPaperPlane, color: '#FF6C37' }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="pt-10 pb-10 relative scroll-mt-20">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="headline-2 mb-4">Skills Across <span className="text-white/40 italic">theStack</span></h2>
          <p className="text-zinc-500 max-w-lg text-lg text-center lg:text-left">A curated selection of tools and technologies I use to bring ideas to life.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center text-white/70">
                  <category.icon size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-2 border-white/5 transition-colors cursor-default"
                  >
                    <skill.icon size={14} style={{ color: skill.color }} />
                    <span className="text-xs font-medium text-white/90">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


