import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaSun } from 'react-icons/fa'

import { TRANSITIONS } from '../lib/motion'
import { AnimatePresence } from 'framer-motion'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Basic focus trap for mobile menu
  useEffect(() => {
    if (!open) return
    const first = menuRef.current?.querySelector('a')
    first?.focus()
    function onTab(e) {
      if (e.key !== 'Tab') return
      const focusable = menuRef.current?.querySelectorAll('a,button')
      if (!focusable || focusable.length === 0) return
      const firstEl = focusable[0]
      const lastEl = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault(); lastEl.focus()
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault(); firstEl.focus()
      }
    }
    document.addEventListener('keydown', onTab)
    return () => document.removeEventListener('keydown', onTab)
  }, [open])

  // Scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setActive(e.target.id)
        }
      })
    }, { root: null, threshold: 0.5 })
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'certifications', label: 'Certifications', href: '#certifications' },
  ]

  const NavLink = ({ item }) => {
    const isActive = active === item.id
    return (
      <a
        href={item.href}
        onClick={() => setActive(item.id)}
        className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors z-20 ${isActive ? 'text-[#5AB4C8]' : 'text-zinc-400 hover:text-white'}`}
        aria-current={isActive ? 'page' : undefined}
      >
        {isActive && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 bg-zinc-800 rounded-full -z-10 border border-zinc-700/50"
            transition={TRANSITIONS.springGentle}
          />
        )}
        {item.label}
      </a>
    )
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800 ${scrolled ? 'h-14' : 'h-16'}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:block p-2">Skip to content</a>
      <div className="container px-6 h-full flex items-center justify-between">
        <motion.div
          className="flex items-center gap-4 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-2xl font-bold tracking-tight text-white hover:text-[#5AB4C8] transition-colors">KC</div>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Primary Navigation">
          {navItems.map(item => (
            <NavLink key={item.id} item={item} />
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#5AB4C8] text-zinc-950 rounded-lg font-semibold hover:bg-[#7ACDE1] transition-all text-sm shadow-[0_0_15px_rgba(90,180,200,0.3)]"
            href="#contact"
          >
            Contact Me
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button aria-controls="mobile-menu" aria-expanded={open} onClick={() => setOpen(!open)} className="p-2 text-zinc-400 hover:text-white transition-colors relative z-[60]">
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={TRANSITIONS.springGentle}
            id="mobile-menu"
            className="md:hidden fixed inset-x-4 top-20 bg-zinc-900/95 backdrop-blur-2xl border border-zinc-700/50 rounded-2xl shadow-2xl z-[55] overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4 text-center" ref={menuRef}>
              {navItems.map(item => (
                <a
                  key={item.id}
                  className={`text-lg font-medium py-2 rounded-lg hover:bg-zinc-800 transition-colors ${active === item.id ? 'text-[#5AB4C8]' : 'text-zinc-400'}`}
                  href={item.href}
                  onClick={() => { setActive(item.id); setOpen(false) }}
                >
                  {item.label}
                </a>
              ))}
              <a className="mt-4 px-6 py-3 bg-[#5AB4C8] text-zinc-950 rounded-xl font-bold mx-auto w-full max-w-xs block shadow-lg" href="#contact" onClick={() => setOpen(false)}>Contact Me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

