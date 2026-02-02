import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-950 relative border-b border-zinc-800">
      <div className="container px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="h-1 w-16 bg-[#5AB4C8] mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-lg md:text-xl text-zinc-400 leading-relaxed space-y-6 mb-12">
            <p>
              Hello! I'm <span className="text-[#5AB4C8] font-semibold">Kiran Kumar</span>, a Software Engineer with 4 years of experience building scalable,
              high-performance web applications, microservices, REST APIs, and cloud-native architectures.
            </p>
            <p>
              Proficient in Java, Spring Boot, React.js, TypeScript, SQL/NoSQL, Docker, Kubernetes, Git, AWS, and CI/CD
              pipelines. Currently expanding skills in Generative AI to automate workflows and improve application performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Years of Experience', value: '4+' },
              { label: 'Projects Completed', value: '4+' },
              { label: 'Client Satisfaction', value: '100%' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-6 text-center hover:border-zinc-700 transition-colors">
                <div className="text-3xl md:text-4xl font-bold text-[#5AB4C8] mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-400 uppercase tracking-wide font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-zinc-800">
            <div className="text-center md:text-left">
              <span className="block text-sm text-zinc-500 mb-1">Location</span>
              <span className="text-xl font-semibold text-white">New Haven, CT</span>
            </div>
            <div className="text-center md:text-right">
              <span className="block text-sm text-zinc-500 mb-1">Email</span>
              <a href="mailto:kirankumarc477@gmail.com" className="text-xl font-semibold text-white hover:text-[#5AB4C8] transition-colors">
                kirankumarc477@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
