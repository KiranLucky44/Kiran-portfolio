export const TRANSITIONS = {
    ease: [0.6, 0.01, -0.05, 0.95],
    spring: {
        type: "spring",
        damping: 25,
        stiffness: 150
    },
    springGentle: {
        type: "spring",
        damping: 30,
        stiffness: 100
    },
    float: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
    }
}

export const VARIANTS = {
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1.2, ease: TRANSITIONS.ease } }
    },
    revealUp: {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: TRANSITIONS.ease } }
    },
    staggerContainer: (staggerChildren = 0.1) => ({
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren,
                delayChildren: 0.2
            }
        }
    }),
    glassHover: {
        initial: { scale: 1, backgroundColor: 'rgba(255, 255, 255, 0.03)' },
        hover: { scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.06)' }
    }
}
