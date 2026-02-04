/**
 * Premium Motion System Tokens & Variants
 * Inspired by Apple, Linear, and Vercel.
 */

// Accessibility: Support for users who prefer reduced motion
const isReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const TRANSITIONS = {
    // Soft, intentional easing
    ease: isReducedMotion ? 'linear' : [0.22, 1, 0.36, 1],
    // Spring for interactive elements
    spring: isReducedMotion ? { type: "tween", duration: 0.2 } : {
        type: "spring",
        stiffness: 260,
        damping: 20
    },
    // Gentler spring for large UI moves
    springGentle: isReducedMotion ? { type: "tween", duration: 0.4 } : {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1
    }
};


export const DURATIONS = {
    fast: 0.2,
    standard: 0.4,
    slow: 0.6
};

export const VARIANTS = {
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: DURATIONS.standard, ease: TRANSITIONS.ease }
    },

    revealUp: {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: DURATIONS.slow, ease: TRANSITIONS.ease }
    },

    staggerContainer: (staggerChildren = 0.1, delayChildren = 0) => ({
        animate: {
            transition: {
                staggerChildren,
                delayChildren
            }
        }
    }),

    // Hero specific
    heroText: {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: TRANSITIONS.ease }
    }
};
