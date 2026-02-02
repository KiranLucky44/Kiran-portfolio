import React from 'react'
import { motion } from 'framer-motion'

export default function GlowBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Primary moving blob */}
            <motion.div
                className="absolute w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px]"
                animate={{
                    x: ['-20%', '20%', '-20%'],
                    y: ['-20%', '20%', '-20%'],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{ top: '10%', left: '20%' }}
            />

            {/* Secondary moving blob */}
            <motion.div
                className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]"
                animate={{
                    x: ['20%', '-20%', '20%'],
                    y: ['20%', '-20%', '20%'],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{ bottom: '10%', right: '10%' }}
            />
        </div>
    )
}
