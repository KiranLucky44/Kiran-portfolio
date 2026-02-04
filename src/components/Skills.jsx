import React from 'react'
import { motion } from 'framer-motion'
import {
  FaCode, FaLaptopCode, FaServer, FaCloud, FaBrain, FaTools,
  FaJava, FaJs, FaPython, FaReact, FaAngular, FaAws, FaDocker, FaJenkins,
  FaGitAlt, FaJira, FaNetworkWired, FaGlobe, FaSync, FaLink, FaDatabase,
  FaLeaf, FaProjectDiagram, FaShip, FaCogs, FaRobot, FaPaperPlane, FaLayerGroup
} from 'react-icons/fa'

// Using purely FontAwesome (Fa) icons for safety with react-icons@4.11.0
const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: FaCode,
    skills: [
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
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
      { name: 'Next.js', icon: FaReact, color: '#FFFFFF' },
      { name: 'Angular', icon: FaAngular, color: '#DD0031' }
    ]
  },
  {
    title: 'Backend',
    icon: FaServer,
    skills: [
      { name: 'Spring Boot', icon: FaLeaf, color: '#6DB33F' },
      { name: 'Microservices', icon: FaNetworkWired, color: '#64748B' },
      { name: 'Hibernate', icon: FaDatabase, color: '#59666C' },
      { name: 'REST APIs', icon: FaGlobe, color: '#38BDF8' },
      { name: 'Express', icon: FaServer, color: '#FFFFFF' }
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
      { name: 'LangChain', icon: FaLink, color: '#22C55E' },
      { name: 'Hugging Face', icon: FaRobot, color: '#FFD21E' },
      { name: 'OpenAI API', icon: FaBrain, color: '#10A37F' }
    ]
  },
  {
    title: 'Databases & Tools',
    icon: FaTools,
    skills: [
      { name: 'MySQL', icon: FaDatabase, color: '#4479A1' },
      { name: 'PostgreSQL', icon: FaDatabase, color: '#336791' },
      { name: 'MongoDB', icon: FaDatabase, color: '#47A248' },
      { name: 'Cassandra', icon: FaDatabase, color: '#1287B1' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'Jira', icon: FaJira, color: '#0052CC' },
      { name: 'Maven', icon: FaProjectDiagram, color: '#C71A36' },
      { name: 'Postman', icon: FaPaperPlane, color: '#FF6C37' }
    ]
  }
]

import { TRANSITIONS, VARIANTS } from '../lib/motion'

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative border-b border-zinc-800 bg-zinc-950">
      <div className="container px-6">
        <motion.div
          className="text-center mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={VARIANTS.revealUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 text-center">Skills & Tools</h2>
          <div className="h-1.5 w-20 bg-[#5AB4C8] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={VARIANTS.staggerContainer(0.12)}
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              variants={VARIANTS.revealUp}
              whileHover={{ y: -5 }}
              transition={TRANSITIONS.springGentle}
              className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-[2rem] p-6 hover:border-zinc-700/50 hover:bg-zinc-900 transition-all duration-500 group"
            >

              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2.5 rounded-xl bg-zinc-800/80 text-[#5AB4C8] group-hover:bg-[#5AB4C8] group-hover:text-zinc-950 transition-all duration-500 shadow-lg">
                  <category.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map(skill => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    className="flex items-center gap-2 px-2.5 py-2 bg-zinc-950/50 border border-zinc-800/50 rounded-xl hover:border-zinc-700 transition-all group/skill overflow-hidden"
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Brand-colored Glow */}
                      <div
                        className="absolute inset-0 blur-md opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ backgroundColor: skill.color, scale: 1.5, opacity: 0.1 }}
                      />
                      <motion.div
                        whileHover={{
                          filter: 'brightness(1.06) saturate(1.06)',
                          transition: { duration: 0.2 }
                        }}
                        style={{
                          color: skill.color,
                          filter: `drop-shadow(0 0 8px ${skill.color}1A)` // ~10% opacity glow
                        }}
                      >
                        <skill.icon size={18} />
                      </motion.div>
                    </div>
                    <span className="text-xs font-semibold text-zinc-400 group-hover/skill:text-zinc-200 transition-colors truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


