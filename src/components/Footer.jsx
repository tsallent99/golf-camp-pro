import { Mail, Phone, MapPin } from 'lucide-react'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Instructors', href: '#instructors' },
  { label: 'Pricing', href: '#camps' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              MIDAM Golf<span className="text-gold-400"> Retreat</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Premium 5-day golf training camps at Empordà Golf Resort, Barcelona.
              Expert PGA coaching across 36 holes of Links and Forest courses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-gold-400 flex-shrink-0" />
                info@midamgolfretreat.com
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-gold-400 flex-shrink-0" />
                +34 XXX XXX XXX
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-gold-400 flex-shrink-0" />
                Barcelona, Spain
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} MIDAM Golf Retreat. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
