import React from 'react'

export default function Footer() {
  return (
    <footer className="py-12 mt-12">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-lg font-bold">Let's work together today!</h4>
            <p className="muted mt-2">Start a project or say hi — I'll get back soon.</p>
          </div>

          <div className="md:col-span-2">
            <div className="flex justify-end md:justify-between items-center">
              <div className="muted">© {new Date().getFullYear()} Kiran Kumar Chinnakkagari</div>
              <div className="flex gap-3">
                <a className="pill hover:bg-zinc-800 transition-colors" href="https://github.com/KiranLucky44/" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="pill hover:bg-zinc-800 transition-colors" href="https://www.linkedin.com/in/kiran-kumar-977202182" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
