import React from 'react'

export default function Footer() {
  return (
    <footer className="py-20 relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-2">Let's work together today!</h4>
            <p className="text-zinc-500">Start a project or say hi — I'll get back soon.</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-4">
              <a href="https://github.com/KiranLucky44/" target="_blank" rel="noopener noreferrer" className="liquid-glass px-6 py-2 rounded-full text-xs font-bold text-white/40 hover:text-white transition-all">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/kiran-kumar-977202182" target="_blank" rel="noopener noreferrer" className="liquid-glass px-6 py-2 rounded-full text-xs font-bold text-white/40 hover:text-white transition-all">
                LinkedIn
              </a>
            </div>
            <div className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Kiran Kumar Chinnakkagari
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </footer>
  )
}
