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

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-zinc-800">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="border-b-4 border-[#5AB4C8]">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#5AB4C8] mb-2 flex items-center gap-2">
                    <FaBuilding size={18} /> {item.company}
                  </h3>
                  <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                    {item.title}
                  </h4>
                </div>

                <div className="text-right flex flex-col items-start md:items-end gap-1">
                  <div className="inline-flex items-center gap-2 text-zinc-400 text-sm font-mono">
                    <FaCalendarAlt size={14} /> {item.period}
                  </div>
                  <div className="inline-flex items-center gap-2 text-zinc-500 text-sm">
                    <FaMapMarkerAlt size={14} /> {item.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300 leading-relaxed text-[15px]">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#5AB4C8] shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div id="education" className="scroll-mt-24">
          <motion.div
            className="text-center mb-16 mt-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Education <span className="text-[#5AB4C8]">&</span> Certifications
            </h2>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#5AB4C8] mb-2 flex items-center gap-2">
                    <FaGraduationCap size={22} /> {item.institution}
                  </h3>
                  <h4 className="text-xl font-semibold text-white">
                    {item.degree}
                  </h4>
                </div>

                <div className="text-right flex flex-col items-start md:items-end gap-1">
                  <div className="inline-flex items-center gap-2 text-zinc-400 text-sm font-mono">
                    <FaCalendarAlt size={14} /> {item.period}
                  </div>
                  <div className="inline-flex items-center gap-2 text-zinc-500 text-sm">
                    <FaMapMarkerAlt size={14} /> {item.location}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-zinc-300 font-medium">{item.description}</p>

                <div>
                  <h5 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FaBook size={12} /> Relevant Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map(course => (
                      <span key={course} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
