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
        <section id="certifications" className="pt-0 pb-10 relative scroll-mt-24">
            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-4">Professional <span className="text-white/40 italic">Accolades</span></h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg italic">
                        Validation of expertise across Cloud Architecture, AI/ML, and Modern Systems Engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {certifications.map((cert, idx) => {
                        // Define background gradients for each certification
                        const backgrounds = [
                            'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(99, 69, 186, 0.08) 100%)', // Purple for AI/ML
                            'linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(23, 37, 84, 0.1) 100%)', // Dark Blue for Cloud
                            'linear-gradient(135deg, rgba(180, 83, 9, 0.15) 0%, rgba(120, 53, 15, 0.08) 100%)', // Brown/Orange for Cloud & Frontend
                            'linear-gradient(135deg, rgba(6, 78, 59, 0.2) 0%, rgba(4, 47, 46, 0.1) 100%)' // Dark Green for Programming
                        ]

                        return (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="rounded-[2rem] p-8 flex flex-col justify-between group transition-all duration-500 border border-white/5 backdrop-blur-sm"
                                style={{
                                    background: backgrounds[idx],
                                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.4)'
                                }}
                            >
                                {/* Header Row: Category Badge and Checkmark */}
                                <div className="flex justify-between items-start mb-8">
                                    <div
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest"
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            color: 'rgba(255, 255, 255, 0.9)'
                                        }}
                                    >
                                        <cert.icon size={12} />
                                        {cert.category}
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                        <FaCheckCircle className="text-white/40" size={16} />
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="mb-12">
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight leading-tight">
                                        {cert.title}
                                    </h3>
                                </div>

                                {/* Footer: Issuer and Year */}
                                <div className="flex items-end justify-between">
                                    <div>
                                        <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Issued By</div>
                                        <div className="text-white font-semibold text-base">{cert.issuer}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Year</div>
                                        <div className="text-white font-semibold text-base">{cert.year}</div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

