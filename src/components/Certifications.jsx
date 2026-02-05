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
        color: '#8B5CF6' // Outskill/AI color
    },
    {
        id: 2,
        title: 'Microsoft Azure Fundamentals (AZ-900)',
        issuer: 'Microsoft',
        year: '2024',
        category: 'Cloud',
        icon: FaMicrosoft,
        color: '#00A4EF' // Microsoft Blue
    },
    {
        id: 3,
        title: 'AWS and React',
        issuer: 'LinkedIn Learning',
        year: '2023',
        category: 'Cloud & Frontend',
        icon: FaAws,
        color: '#FF9900' // AWS Orange
    },
    {
        id: 4,
        title: 'Java Data Structures',
        issuer: 'LinkedIn Learning',
        year: '2023',
        category: 'Programming',
        icon: FaCode,
        color: '#5382a1' // Java Blue (Coffee cup color)
    }
]

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 relative">
            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="headline-2 mb-4">Professional <span className="text-white/40 italic">Accolades</span></h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg italic">
                        Validation of expertise across Cloud Architecture, AI/ML, and Modern Systems Engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.01, borderColor: `${cert.color}40` }}
                            className="liquid-glass rounded-[2rem] p-10 flex flex-col justify-between group transition-all duration-500"
                            style={{
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                            }}
                        >
                            <div className="flex justify-between items-start mb-10">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500"
                                    style={{
                                        backgroundColor: `${cert.color}10`,
                                        color: cert.color,
                                        boxShadow: `0 0 20px ${cert.color}20`
                                    }}
                                >
                                    <cert.icon size={28} />
                                </div>
                                <div
                                    className="text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border"
                                    style={{
                                        color: `${cert.color}dd`,
                                        borderColor: `${cert.color}30`,
                                        backgroundColor: `${cert.color}08`
                                    }}
                                >
                                    {cert.category}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-8 tracking-tight group-hover:text-white transition-colors">
                                    {cert.title}
                                </h3>

                                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                    <div>
                                        <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Issuer</div>
                                        <div className="text-white font-medium">{cert.issuer}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Conferred</div>
                                        <div className="text-white font-medium">{cert.year}</div>
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

