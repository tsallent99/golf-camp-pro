import { Link } from 'react-router-dom'

const included = [
  '5 days of PGA coaching',
  'Accommodation at Empordà Golf Resort',
  'Full board (breakfast, lunch & dinner)',
  '5 green fees (Forest + Dunes)',
  'TrackMan & video analysis',
  'Airport transfers (Barcelona or Girona)',
  'Range balls & practice facilities',
  'Personalised practice plan',
  'Certificate & welcome pack',
  'Final day tournament',
]

const notIncluded = [
  'Club rental (available separately)',
  'Extra green fees for personal rounds',
]

export default function NextCamp() {
  return (
    <section id="next-camp" className="py-24 md:py-32 bg-chalk">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: dates, venue, price */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-flag mb-4">
              Next camp
            </p>
            <h2 className="font-display font-extrabold font-condensed-85 uppercase text-pine text-3xl md:text-4xl mb-6">
              Summer Performance Camp
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between border-b border-pine/10 pb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-pine/50">Dates</span>
                <span className="font-mono text-sm text-pine">22–26 June 2027</span>
              </div>
              <div className="flex justify-between border-b border-pine/10 pb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-pine/50">Venue</span>
                <span className="font-mono text-sm text-pine">Empordà Golf Resort</span>
              </div>
              <div className="flex justify-between border-b border-pine/10 pb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-pine/50">Players</span>
                <span className="font-mono text-sm text-pine">Max 20</span>
              </div>
            </div>

            <p className="font-mono text-xs uppercase tracking-widest text-pine/50 mb-1">From</p>
            <p className="font-display font-extrabold text-pine text-5xl md:text-6xl mb-1">
              €2,700
            </p>
            <p className="font-mono text-xs text-pine/50 mb-8">EUR · per person · all-inclusive</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#waitlist"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-flag hover:bg-flag-ink text-chalk font-semibold transition-colors"
              >
                Join the waitlist →
              </a>
              <Link
                to="/camp/summer-performance"
                className="inline-flex items-center justify-center px-6 py-3 border border-pine/20 hover:border-pine/40 text-pine font-medium transition-colors"
              >
                See camp details →
              </Link>
            </div>
          </div>

          {/* Right: what's included */}
          <div>
            <h3 className="font-display font-bold uppercase text-pine text-lg mb-6">
              What's included
            </h3>
            <ul className="space-y-3 mb-8">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-flag mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-pine/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-pine/10 pt-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-pine/50 mb-4">
                Not included
              </h4>
              <ul className="space-y-2">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-pine/30 mt-0.5 flex-shrink-0">—</span>
                    <span className="text-pine/50 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
