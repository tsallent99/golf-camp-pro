import DataTag from './DataTag'

const scorecardDays = [
  { id: 'D1', label: 'ASSESS', highlight: false },
  { id: 'D2', label: 'DUNES', highlight: false },
  { id: 'D3', label: 'FOREST', highlight: true },
  { id: 'D4', label: 'STRATEGY', highlight: false },
  { id: 'D5', label: 'TOURNAMENT', highlight: false },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-pine overflow-hidden flex flex-col">
      {/* Giant "5" watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] pointer-events-none select-none" aria-hidden="true">
        <svg width="500" height="700" viewBox="0 0 500 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[320px] h-[450px] md:w-[500px] md:h-[700px]">
          <text
            x="250"
            y="550"
            textAnchor="middle"
            fontFamily="Archivo, system-ui, sans-serif"
            fontWeight="900"
            fontSize="700"
            fill="none"
            stroke="#2A5A4A"
            strokeWidth="2"
            style={{ fontStretch: '66%' }}
          >
            5
          </text>
        </svg>
      </div>

      {/* EMPORDÀ GOLF tag — top right */}
      <div className="absolute top-24 md:top-28 right-4 sm:right-8 lg:right-12">
        <DataTag variant="outline" className="text-chalk/50">EMPORDÀ GOLF</DataTag>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32">
        <h1 className="font-display font-extrabold font-condensed uppercase text-chalk text-[clamp(3rem,8vw,7rem)] leading-[0.92] mb-0 max-w-3xl">
          MASTER YOUR
          <br />
          GAME IN{' '}
          <span className="text-flag">5</span> DAYS.
        </h1>
      </div>

      {/* Scorecard strip */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-chalk/20" />
          <div className="grid grid-cols-5">
            {scorecardDays.map((day) => (
              <div
                key={day.id}
                className={`py-4 md:py-5 border-r border-chalk/10 last:border-r-0 ${
                  day.highlight ? 'bg-flag/15' : ''
                }`}
              >
                <p className={`font-display font-extrabold font-condensed text-2xl md:text-4xl ${
                  day.highlight ? 'text-flag' : 'text-chalk'
                }`}>
                  {day.id}
                </p>
                <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-chalk/40 mt-0.5">
                  {day.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-14 pt-6 md:pt-8">
        <p className="text-chalk/70 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
          A 5-day golf camp for adults. Daily lessons with PGA coaches
          and TrackMan. Girona, Spain.
        </p>

        <div className="h-px bg-chalk/15 mb-6 max-w-lg" />

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 max-w-lg">
          <div className="space-y-1">
            <p className="font-mono text-xs text-chalk/50 tracking-[0.15em]">22–26 JUN 2027</p>
            <p className="font-mono text-xs text-chalk/50 tracking-[0.15em]">MAX 20 PLAYERS</p>
          </div>
          <a
            href="#waitlist"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center px-8 py-4 bg-flag hover:bg-flag-ink text-chalk font-display font-bold uppercase tracking-wide transition-colors text-sm"
          >
            JOIN THE WAITLIST →
          </a>
        </div>
      </div>
    </section>
  )
}
