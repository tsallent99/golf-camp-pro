import { useState } from 'react'
import { trackLead } from '../lib/pixel'
import config from '../lib/config'

const benefits = [
  'First to know when registration opens',
  'Early-bird pricing',
  'Priority registration',
]

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const form = e.target
    const data = new FormData(form)

    // Honeypot check
    if (data.get('_honey')) {
      setLoading(false)
      return
    }

    try {
      // TODO: Create Web3Forms access key and add to config.js
      const apiKey = config.web3formsKey
      if (!apiKey) {
        console.warn('Web3Forms API key not set. Form submission simulated.')
        setSubmitted(true)
        trackLead()
        setLoading(false)
        return
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: apiKey,
          subject: 'New waitlist sign-up · MidAm Golf Retreat',
          name: data.get('name'),
          email: data.get('email'),
          city: data.get('city'),
          handicap_level: data.get('handicap'),
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        trackLead()
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    }

    setLoading(false)
  }

  return (
    <section id="waitlist" className="py-24 md:py-32 bg-chalk">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: info */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-flag mb-3">
              Limited spots
            </p>
            <h2 className="font-display font-extrabold font-condensed-85 uppercase text-pine text-3xl md:text-4xl mb-4">
              Join the waitlist
            </h2>
            <p className="text-pine/60 mb-8 leading-relaxed">
              Our camps fill up quickly. Join the waitlist to get early access
              to new dates, exclusive pricing, and priority registration.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-flag flex-shrink-0" />
                  <span className="text-pine/70 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="bg-pine p-8 text-center">
                <h3 className="font-display font-bold text-chalk text-xl mb-2">
                  You're on the list.
                </h3>
                <p className="text-chalk/60 text-sm">
                  We'll email you first when registration opens.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-pine/60 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-white border border-pine/20 text-sm text-pine focus:outline-none focus:border-pine transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-pine/60 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white border border-pine/20 text-sm text-pine focus:outline-none focus:border-pine transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-pine/60 mb-1.5">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Barcelona, Spain"
                    className="w-full px-4 py-3 bg-white border border-pine/20 text-sm text-pine focus:outline-none focus:border-pine transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-pine/60 mb-1.5">
                    Handicap level
                  </label>
                  <select
                    name="handicap"
                    className="w-full px-4 py-3 bg-white border border-pine/20 text-sm text-pine/60 focus:outline-none focus:border-pine transition-colors"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner (36+)</option>
                    <option value="intermediate">Intermediate (15–36)</option>
                    <option value="advanced">Advanced (5–15)</option>
                    <option value="low">Low handicap (0–5)</option>
                  </select>
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  name="_honey"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {error && (
                  <p className="text-flag text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3.5 bg-flag hover:bg-flag-ink text-chalk font-semibold transition-colors disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Join the waitlist →'}
                </button>
                <p className="font-mono text-[10px] text-pine/40 text-center uppercase tracking-widest">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
