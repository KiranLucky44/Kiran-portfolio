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
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript', icon: FaJs },
      { name: 'TypeScript', icon: FaCode },
      { name: 'Python', icon: FaPython },
      { name: 'C/C++', icon: FaCode }
    ]
  },
  {
    title: 'Frontend',
    icon: FaLaptopCode,
    skills: [
      { name: 'React.js', icon: FaReact },
      { name: 'Redux', icon: FaLayerGroup },
      { name: 'Next.js', icon: FaReact },
      { name: 'Angular', icon: FaAngular }
    ]
  },
  {
    title: 'Backend',
    icon: FaServer,
    skills: [
      { name: 'Spring Boot', icon: FaLeaf },
      { name: 'Microservices', icon: FaNetworkWired },
      { name: 'Hibernate', icon: FaDatabase },
      { name: 'REST APIs', icon: FaGlobe },
      { name: 'Express', icon: FaServer }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    skills: [
      { name: 'AWS', icon: FaAws },
      { name: 'Azure', icon: FaCloud },
      { name: 'Docker', icon: FaDocker },
      { name: 'Kubernetes', icon: FaShip },
      { name: 'Jenkins', icon: FaJenkins },
      { name: 'Terraform', icon: FaCogs },
      { name: 'CI/CD', icon: FaSync }
    ]
  },
  {
    title: 'AI & ML',
    icon: FaBrain,
    skills: [
      { name: 'LangChain', icon: FaLink },
      { name: 'Hugging Face', icon: FaRobot },
      { name: 'OpenAI API', icon: FaBrain }
    ]
  },
  {
    title: 'Databases & Tools',
    icon: FaTools,
    skills: [
      { name: 'MySQL', icon: FaDatabase },
      { name: 'PostgreSQL', icon: FaDatabase },
      { name: 'MongoDB', icon: FaDatabase },
      { name: 'Cassandra', icon: FaDatabase },
      { name: 'Git', icon: FaGitAlt },
      { name: 'Jira', icon: FaJira },
      { name: 'Maven', icon: FaProjectDiagram },
      { name: 'Postman', icon: FaPaperPlane }
    ]
  }
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-20 relative border-b border-zinc-800 bg-zinc-950">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills & Technologies</h2>
          <div className="h-1 w-16 bg-[#5AB4C8] mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={item}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-zinc-800/50 text-[#5AB4C8] group-hover:bg-[#5AB4C8] group-hover:text-zinc-950 transition-colors">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map(skill => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors"
                  >
                    <skill.icon className="text-zinc-400 group-hover:text-[#5AB4C8] transition-colors" size={18} />
                    <span className="text-sm font-medium text-zinc-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
