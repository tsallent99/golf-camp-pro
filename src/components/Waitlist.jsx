import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Shield, Bell, Gift } from 'lucide-react'

const benefits = [
  { icon: Bell, text: 'First to know about new camp dates' },
  { icon: Gift, text: 'Early-bird pricing (up to 15% off)' },
  { icon: Shield, text: 'Priority registration before public launch' },
]

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="waitlist" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold-500 font-medium tracking-[0.15em] uppercase text-sm mb-3">
                Limited Spots
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-4">
                Join the Waitlist
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Our camps fill up quickly. Join the waitlist to get early access
                to new dates, exclusive pricing, and priority registration.
              </p>

              <div className="space-y-5">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-forest-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon size={18} className="text-forest-700" />
                    </div>
                    <span className="text-gray-600 text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <div className="bg-forest-50 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-forest-700" />
                  </div>
                  <h3 className="text-xl font-bold text-forest-700 mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    We'll be in touch as soon as new camp dates are announced.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-gray-50 rounded-2xl p-8 space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest-700/20 focus:border-forest-700 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest-700/20 focus:border-forest-700 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-1.5">
                      Location
                    </label>
                    <input
                      type="text"
                      placeholder="Barcelona, Spain"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest-700/20 focus:border-forest-700 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-1.5">
                      Experience Level
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest-700/20 focus:border-forest-700 transition-all text-gray-600"
                    >
                      <option value="">Select your level</option>
                      <option value="beginner">Beginner (36+ handicap)</option>
                      <option value="intermediate">Intermediate (15-36 handicap)</option>
                      <option value="advanced">Advanced (5-15 handicap)</option>
                      <option value="scratch">Low Handicap (0-5 handicap)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-forest-700 hover:bg-forest-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Join the Waitlist
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
