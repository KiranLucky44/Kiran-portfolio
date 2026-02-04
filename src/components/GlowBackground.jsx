import React from 'react'
import { motion } from 'framer-motion'

import { TRANSITIONS } from '../lib/motion'

export default function GlowBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
            {/* Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] contrast-150 brightness-150"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            {/* Primary moving blob */}
            <motion.div
                className="absolute w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px]"
                animate={{
                    x: [-40, 40, -40],
                    y: [-40, 40, -40],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ top: '5%', left: '10%' }}
            />

            {/* Secondary moving blob */}
            <motion.div
                className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"
                animate={{
                    x: [40, -40, 40],
                    y: [40, -40, 40],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ bottom: '10%', right: '5%' }}
            />

            {/* Third subtle blob */}
            <motion.div
                className="absolute w-[400px] h-[400px] bg-zinc-400/5 rounded-full blur-[100px]"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{ top: '40%', left: '40%' }}
            />
        </div>
    )
}



