export default function Technology() {
  return (
    <section id="technology" className="py-24 md:py-32 bg-pine">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-flag mb-3 block">
            Practice & technology
          </span>
          <h2 className="font-display font-extrabold font-condensed uppercase text-chalk text-3xl md:text-5xl mb-4">
            DATA-DRIVEN COACHING
          </h2>
          <p className="text-chalk/60 leading-relaxed">
            Every session is measured. TrackMan launch monitors, video analysis,
            and a covered driving range with TopTracer — so your improvement
            isn't a feeling, it's a fact.
          </p>
        </div>

        {/* Image grid */}
        <div className="grid md:grid-cols-2 gap-px bg-chalk/10">
          {/* Driving range */}
          <div className="relative group">
            <img
              src="/images/driving-range.webp"
              alt="Covered driving range with TopTracer screens"
              className="w-full h-[280px] md:h-[360px] object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-pine/80 to-transparent p-6">
              <p className="font-display font-bold uppercase text-chalk text-lg">Driving Range</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-chalk/50 mt-1">
                TopTracer · covered bays · grass tees
              </p>
            </div>
          </div>

          {/* Teaching studio */}
          <div className="relative group">
            <img
              src="/images/teaching-studio.webp"
              alt="Teaching studio with TrackMan and video analysis"
              className="w-full h-[280px] md:h-[360px] object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-pine/80 to-transparent p-6">
              <p className="font-display font-bold uppercase text-chalk text-lg">Teaching Studio</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-chalk/50 mt-1">
                TrackMan · video analysis · club fitting
              </p>
            </div>
          </div>
        </div>

        {/* Stat tags */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-chalk/10 mt-px">
          {[
            { value: 'TrackMan 4', label: 'Launch monitor' },
            { value: 'Video', label: 'Swing analysis' },
            { value: 'TopTracer', label: 'Range technology' },
            { value: 'Custom', label: 'Practice plan' },
          ].map((stat) => (
            <div key={stat.label} className="bg-pine px-5 py-6">
              <p className="font-mono text-lg font-medium text-flag">{stat.value}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-chalk/40 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
