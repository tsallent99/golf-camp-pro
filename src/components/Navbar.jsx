import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'The camp', href: '/#why-midam' },
  { label: 'Schedule', href: '/#schedule' },
  { label: 'Coaches', href: '/#coaches' },
  { label: 'Venue', href: '/#venue' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  function handleNavClick(e, href) {
    setMobileOpen(false)
    if (isHome) {
      e.preventDefault()
      const id = href.replace('/#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-pine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <Logo variant="horizontal" tone="light" className="h-8 md:h-9 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-xs uppercase tracking-widest text-chalk/70 hover:text-chalk transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={isHome ? '#waitlist' : '/#waitlist'}
            onClick={(e) => {
              if (isHome) {
                e.preventDefault()
                document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-flag hover:bg-flag-ink text-chalk text-sm font-semibold transition-colors"
          >
            Join the waitlist →
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-chalk p-2"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-pine border-t border-chalk/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block font-mono text-xs uppercase tracking-widest text-chalk/70 hover:text-chalk transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={isHome ? '#waitlist' : '/#waitlist'}
              onClick={(e) => {
                setMobileOpen(false)
                if (isHome) {
                  e.preventDefault()
                  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="block text-center px-5 py-2.5 bg-flag hover:bg-flag-ink text-chalk text-sm font-semibold transition-colors mt-2"
            >
              Join the waitlist →
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
