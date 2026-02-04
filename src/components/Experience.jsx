import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaBuilding, FaGraduationCap, FaBook } from 'react-icons/fa'

const experiences = [
  {
    id: 'exp1',
    company: 'DXC Technology',
    title: 'Software Engineer',
    period: 'Nov 2024 – Current',
    location: 'CT, USA',
    bullets: [
      'Developed and enhanced backend modules using Java, Spring Boot, and Hibernate, improving system stability and reducing recurring production issues by 25% across core workflows.',
      'Built a high-availability Spring Boot + React application with MySQL, automating manual transaction processes and improving operational efficiency for 5+ internal teams.',
      'Containerized microservices with Docker and deployed them on Kubernetes, integrating CI/CD through Jenkins to reduce deployment failures by 30% and cut release time by 40%.',
      'Created Python and OpenAI-powered automation scripts for log analysis and deployment summarization, reducing manual review time by 35-45% and accelerating issue resolution.',
      'Optimized database performance using Hibernate caching and query tuning, improving API response times by 50%, and supported AWS deployments using Terraform for scalable infrastructure.'
    ]
  },
  {
    id: 'exp2',
    company: 'Infinite Infolab',
    title: 'Software Engineer',
    period: 'Aug 2020 – Dec 2023',
    location: 'India',
    bullets: [
      'Developed data-processing pipelines and analytics components using Python (Pandas/NumPy) for a Customer Intelligence Platform, improving data accuracy and delivering more reliable insights to business teams.',
      'Contributed to the migration of monolithic legacy applications to cloud-native microservices on AWS EKS while designing and implementing a Python-based Customer Intelligence & Analytics Platform (Pandas/NumPy, Power BI) with AI/ML-driven predictive insights, improving scalability, reducing downtime by 25%, and increasing customer retention by 18%.',
      'Built distributed microservices with FastAPI and Node.js backed by MongoDB and Redis, enabling high-volume data ingestion and reducing processing time for downstream analytics by 25-30%.',
      'Created interactive dashboards in React.js and implemented REST and GraphQL APIs, helping stakeholders monitor KPIs, forecasting metrics, and customer behavior trends in real time.',
      'Automated ETL workflows using Azure Data Factory and GCP pipelines, adding validation and error-handling logic that reduced manual reporting effort by 40%.'
    ]
  }
]

const education = [
  {
    id: 'edu1',
    institution: 'Sacred Heart University',
    degree: 'Master\'s, Computer Science',
    period: 'Jan 2024 – May 2025',
    location: 'Fairfield, CT, USA',
    description: 'Grade: 3.70 GPA',
    courses: ['Advanced Algorithms', 'Machine Learning', 'Distributed Systems', 'Cloud Computing']
  },
  {
    id: 'edu2',
    institution: 'Visvesvaraya Technological University',
    degree: 'Bachelor\'s, Computer Science',
    period: 'Aug 2016 – Aug 2020',
    location: 'Karnataka, INDIA',
    description: 'Grade: 7.79 CGPA',
    courses: ['Data Structures', 'Operating Systems', 'Database Management', 'Web Development']
  }
]

import { TRANSITIONS, VARIANTS } from '../lib/motion'

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-zinc-800 relative isolate">
      <div className="container px-6">
        <motion.div
          className="text-center mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={VARIANTS.revealUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Work <span className="text-[#5AB4C8]">Experience</span>
          </h2>
          <div className="h-1.5 w-20 bg-[#5AB4C8] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={VARIANTS.staggerContainer(0.2)}
        >
          {experiences.map((item) => (
            <motion.div
              key={item.id}
              variants={VARIANTS.revealUp}
              whileHover={{ x: 4 }}
              transition={TRANSITIONS.springGentle}
              className="group relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-[2.5rem] p-6 md:p-8 hover:border-zinc-700/50 hover:bg-zinc-900 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#5AB4C8]/0 group-hover:bg-[#5AB4C8]/50 transition-all rounded-l-3xl" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-[#5AB4C8] mb-2 flex items-center gap-2">
                    <FaBuilding className="text-zinc-500 group-hover:text-[#5AB4C8] transition-colors" size={16} /> {item.company}
                  </h3>
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                </div>

                <div className="flex flex-col items-start md:items-end gap-1.5">
                  <div className="inline-flex items-center gap-2 text-zinc-400 text-sm font-mono bg-zinc-800/50 px-3 py-1 rounded-full border border-zinc-700/30">
                    <FaCalendarAlt size={12} /> {item.period}
                  </div>
                  <div className="inline-flex items-center gap-2 text-zinc-500 text-sm">
                    <FaMapMarkerAlt size={12} /> {item.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-4">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4 text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed text-[15px]">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#5AB4C8]/60 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <div id="education" className="scroll-mt-32">
          <motion.div
            className="text-center mb-20 mt-40"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={VARIANTS.revealUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Education <span className="text-[#5AB4C8]">&</span> Learning
            </h2>
            <div className="h-1.5 w-20 bg-[#5AB4C8] mx-auto rounded-full" />
          </motion.div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto space-y-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={VARIANTS.staggerContainer(0.2)}
        >
          {education.map((item) => (
            <motion.div
              key={item.id}
              variants={VARIANTS.revealUp}
              whileHover={{ x: 4 }}
              transition={TRANSITIONS.springGentle}
              className="group relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/80 rounded-[2.5rem] p-6 md:p-8 hover:border-zinc-700/50 hover:bg-zinc-900 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#5AB4C8]/0 group-hover:bg-[#5AB4C8]/50 transition-all rounded-l-3xl" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-[#5AB4C8] mb-2 flex items-center gap-2">
                    <FaGraduationCap className="text-zinc-500 group-hover:text-[#5AB4C8] transition-colors" size={20} /> {item.institution}
                  </h3>
                  <h4 className="text-lg font-semibold text-white">
                    {item.degree}
                  </h4>
                </div>

                <div className="flex flex-col items-start md:items-end gap-1.5">
                  <div className="inline-flex items-center gap-2 text-zinc-400 text-sm font-mono bg-zinc-800/50 px-3 py-1 rounded-full border border-zinc-700/30">
                    <FaCalendarAlt size={12} /> {item.period}
                  </div>
                  <div className="inline-flex items-center gap-2 text-zinc-500 text-sm">
                    <FaMapMarkerAlt size={12} /> {item.location}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-zinc-300 font-medium text-lg border-l-2 border-[#5AB4C8]/30 pl-4">{item.description}</p>

                <div>
                  <h5 className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <FaBook size={10} /> Relevant Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2.5">
                    {item.courses.map(course => (
                      <span key={course} className="px-4 py-1.5 bg-zinc-800/50 text-zinc-400 text-xs font-medium rounded-lg border border-zinc-700/30 group-hover:border-[#5AB4C8]/20 transition-colors">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

