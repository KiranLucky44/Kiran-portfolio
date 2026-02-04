import React from 'react'
import { motion } from 'framer-motion'
import { FaAward, FaCheckCircle, FaCloud, FaCode, FaBrain, FaMicrosoft, FaAws } from 'react-icons/fa'

const certifications = [
    {
        id: 1,
        title: 'Generative AI Mastermind',
        issuer: 'Outskill',
        year: '2024',
        category: 'AI/ML',
        icon: FaBrain,
        color: 'from-purple-500/20 to-indigo-500/5',
        border: 'border-purple-500/30',
        text: 'text-purple-400'
    },
    {
        id: 2,
        title: 'Microsoft Azure Fundamentals (AZ-900)',
        issuer: 'Microsoft',
        year: '2024',
        category: 'Cloud',
        icon: FaMicrosoft,
        color: 'from-blue-500/20 to-[#5AB4C8]/5',
        border: 'border-blue-500/30',
        text: 'text-blue-400'
    },
    {
        id: 3,
        title: 'AWS and React',
        issuer: 'LinkedIn Learning',
        year: '2023',
        category: 'Cloud & Frontend',
        icon: FaAws,
        color: 'from-orange-500/20 to-amber-500/5',
        border: 'border-orange-500/30',
        text: 'text-orange-400'
    },
    {
        id: 4,
        title: 'Java Data Structures',
        issuer: 'LinkedIn Learning',
        year: '2023',
        category: 'Programming',
        icon: FaCode,
        color: 'from-emerald-500/20 to-green-500/5',
        border: 'border-emerald-500/30',
        text: 'text-emerald-400'
    }
]

import { TRANSITIONS, VARIANTS } from '../lib/motion'

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 relative border-b border-zinc-800 bg-zinc-950">
            <div className="container px-6">
                <motion.div
                    className="text-center mb-20"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={VARIANTS.revealUp}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Certifications <span className="text-[#5AB4C8]">&</span> Achievements
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8 font-medium">
                        Professional milestones demonstrating deep expertise in <span className="text-zinc-200">Cloud Architecture</span>, <span className="text-zinc-200">AI/ML</span>, and <span className="text-zinc-200">Modern Engineering</span>.
                    </p>
                    <div className="h-1.5 w-24 bg-[#5AB4C8] mx-auto rounded-full shadow-[0_0_20px_rgba(90,180,200,0.4)]" />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={VARIANTS.staggerContainer(0.12)}
                >
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={VARIANTS.revealUp}
                            whileHover={{ y: -5 }}
                            transition={TRANSITIONS.spring}
                            className={`relative p-6 rounded-2xl border ${cert.border} bg-gradient-to-br ${cert.color} backdrop-blur-sm overflow-hidden group`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-2 rounded-lg bg-zinc-900/50 border border-zinc-700/50 ${cert.text} flex items-center gap-2`}>
                                    <cert.icon size={16} />
                                    <span className="text-xs font-semibold uppercase tracking-wider">{cert.category}</span>
                                </div>
                                <FaCheckCircle className={`text-zinc-600 group-hover:${cert.text} transition-colors`} size={20} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-8 group-hover:text-white transition-colors">
                                {cert.title}
                            </h3>

                            <div className="flex justify-between items-end border-t border-zinc-700/30 pt-4">
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase font-medium mb-1">Issued by</p>
                                    <p className="text-zinc-300 font-semibold">{cert.issuer}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-zinc-500 uppercase font-medium mb-1">Year</p>
                                    <p className="text-white font-bold">{cert.year}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

