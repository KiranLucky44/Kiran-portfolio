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

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 relative border-b border-zinc-800">
            <div className="container px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Certifications <span className="text-[#5AB4C8]">&</span> Achievements
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Professional certifications demonstrating expertise in cloud computing, AI/ML, and modern development practices.
                    </p>
                    <div className="h-1 w-20 bg-[#5AB4C8] mx-auto mt-6 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
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
                </div>
            </div>
        </section>
    )
}
