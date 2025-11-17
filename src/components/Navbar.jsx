import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-rose-500 to-rose-600"></div>
            <span className="font-semibold tracking-tight">Flames Web Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-rose-600 px-4 py-2 text-white shadow-sm hover:bg-rose-700 transition-colors">
              Start a project
            </a>
          </nav>

          <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-black/10" onClick={() => setOpen(!open)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="block rounded-md px-3 py-2 bg-rose-600 text-white text-center" onClick={() => setOpen(false)}>
                Start a project
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
