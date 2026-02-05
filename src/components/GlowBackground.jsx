import React from 'react'
import { motion } from 'framer-motion'

export default function GlowBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-[#020202]">
            {/* Grain/Noise Overlay */}
            <div
                className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg' %3E%3Cfilter id='noiseFilter' %3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    filter: 'contrast(150%) brightness(100%)'
                }}
            />

            {/* Mesh Gradients - Top Left */}
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full blur-[150px]"
                style={{
                    top: '-10%',
                    left: '-10%',
                    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(56, 189, 248, 0) 70%)'
                }}
                animate={{
                    x: [-20, 20, -20],
                    y: [-30, 30, -30],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Mesh Gradients - Bottom Right */}
            <motion.div
                className="absolute w-[1000px] h-[1000px] rounded-full blur-[200px]"
                style={{
                    bottom: '-20%',
                    right: '-10%',
                    background: 'radial-gradient(circle, rgba(129, 140, 248, 0.1) 0%, rgba(129, 140, 248, 0) 70%)'
                }}
                animate={{
                    x: [30, -30, 30],
                    y: [20, -20, 20],
                    scale: [1.1, 1, 1.1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Central Ambient Glow */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)'
                }}
            />
        </div>
    )
}
