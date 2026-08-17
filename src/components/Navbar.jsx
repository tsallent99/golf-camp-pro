import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Schedule', href: '/#schedule' },
  { label: 'Instructors', href: '/#instructors' },
  { label: 'Pricing', href: '/#camps' },
  { label: 'Contact', href: '/#waitlist' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNavClick(e, href) {
    setMobileOpen(false)
    if (isHome) {
      e.preventDefault()
      const id = href.replace('/#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-forest-700/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
              MIDAM Golf<span className="text-gold-400"> Retreat</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-white/80 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={isHome ? '#waitlist' : '/#waitlist'}
            onClick={(e) => handleNavClick(e, '/#waitlist')}
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-gold-400 hover:bg-gold-500 text-forest-900 text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-gold-400/25"
          >
            Join Waitlist
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-forest-700/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-sm font-medium text-white/80 hover:text-gold-400 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={isHome ? '#waitlist' : '/#waitlist'}
              onClick={(e) => handleNavClick(e, '/#waitlist')}
              className="block text-center px-5 py-2.5 bg-gold-400 hover:bg-gold-500 text-forest-900 text-sm font-semibold rounded-lg transition-all mt-2"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
