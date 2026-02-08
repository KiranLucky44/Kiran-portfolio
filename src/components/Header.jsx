import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setActive(e.target.id)
        }
      })
    }, {
      root: null,
      threshold: 0,
      rootMargin: '-20% 0px -40% 0px'
    })
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'education', label: 'Education', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'certifications', label: 'Certifications', href: '#certifications' },
  ]

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className={`liquid-glass rounded-full px-6 py-1.5 flex items-center justify-between transition-all duration-500 ${scrolled ? 'py-1.5 bg-black/40' : 'py-2'}`}
      >
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold tracking-tighter text-white">KC</div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-pill ${active === item.id ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              {(active === item.id || (active === 'experience' && item.id === 'education')) && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:block btn-primary !px-5 !py-1.5 !text-xs rounded-full"
        >
          Contact Me
        </a>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="md:hidden absolute top-20 left-6 right-6 liquid-glass rounded-3xl p-6 flex flex-col gap-4 text-center"
          >
            {navItems.map(item => (
              <a
                key={item.id}
                href={item.id === 'education' ? '#experience' : item.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-medium ${active === item.id ? 'text-white' : 'text-zinc-500'}`}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary py-3 rounded-2xl font-bold mt-2">
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

