const pillars = [
  {
    num: '01',
    title: 'Precision',
    text: 'TrackMan launch monitors, PGA-certified coaches, video analysis, and data-driven practice plans. Every session is measured so your improvement is real.',
  },
  {
    num: '02',
    title: 'Empordà',
    text: 'Two championship courses through stone pines and coastal dunes. June light on the Costa Brava, forty minutes from Girona. The place itself is part of the programme.',
  },
  {
    num: '03',
    title: 'Small group',
    text: 'Maximum twenty players per camp. Personalised attention from coaches who know your game by name. On-course strategy, mental game, and a practice plan to take home.',
  },
]

export default function WhyMidAm() {
  return (
    <section id="why-midam" className="py-24 md:py-32 bg-chalk">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-0">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.num}
              className={`grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 py-12 ${
                i !== pillars.length - 1 ? 'border-b border-pine/10' : ''
              }`}
            >
              <div>
                <span className="font-mono text-4xl md:text-5xl font-medium text-flag">
                  {pillar.num}
                </span>
              </div>
              <div>
                <h3 className="font-display font-bold font-condensed-85 uppercase text-pine text-2xl md:text-3xl mb-3">
                  {pillar.title}
                </h3>
                <p className="text-pine/70 leading-relaxed max-w-xl">
                  {pillar.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
