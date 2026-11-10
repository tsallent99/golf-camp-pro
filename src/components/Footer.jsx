import Logo from './Logo'

const links = [
  { label: 'The camp', href: '#why-midam' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Venue', href: '#venue' },
  { label: 'Waitlist', href: '#waitlist' },
]

export default function Footer() {
  return (
    <footer className="bg-pine">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <Logo variant="horizontal" tone="light" className="h-8 w-auto mb-4" />
            <p className="font-mono text-xs text-chalk/40 max-w-xs">
              info@midamgolfretreat.com
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-chalk/50 hover:text-chalk transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-px bg-chalk/10 mt-12 mb-8" />

        <p className="font-mono text-[10px] text-chalk/30 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} MidAm Golf Retreat
        </p>
      </div>
    </footer>
  )
}
