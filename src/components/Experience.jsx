import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaBuilding, FaGraduationCap } from 'react-icons/fa'

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

export default function Experience() {
  return (
    <section id="experience" className="pt-10 pb-10 relative scroll-mt-16">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="headline-1 mb-4">Chronicles <span className="text-white/40 italic">of</span> Growth</h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto italic">My professional journey and academic foundation.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience Column */}
          <div className="space-y-8">
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/30 font-bold mb-8 flex items-center gap-4">
              Professional <span className="h-px bg-white/10 flex-grow" />
            </h3>
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="glass-card !p-6 md:!p-10"
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                    <div className="text-sky-400 font-medium">{exp.company}</div>
                  </div>
                  <div className="liquid-glass px-3 py-1 rounded-full text-[10px] font-bold text-white/50 uppercase tracking-wider">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-zinc-400 flex items-start gap-3 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50 mt-1.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <h3 className="text-xs uppercase tracking-[0.3em] text-white/30 font-bold mb-8 flex items-center gap-4">
              Education <span className="h-px bg-white/10 flex-grow" />
            </h3>
            {education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="liquid-glass rounded-[2rem] p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/30">
                    <FaGraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                    <div className="text-sm text-sky-400">{edu.degree}</div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-zinc-400 font-medium italic">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map(course => (
                      <span key={course} className="px-3 py-1 rounded-lg bg-white/5 text-[10px] font-bold text-white/40 uppercase tracking-wider">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-500 font-medium mt-8 pt-6 border-t border-white/5">
                  <span className="flex items-center gap-2"><FaCalendarAlt size={10} /> {edu.period}</span>
                  <span className="flex items-center gap-2"><FaMapMarkerAlt size={10} /> {edu.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

