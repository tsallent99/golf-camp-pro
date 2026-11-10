const coaches = [
  {
    name: 'Adrian Harris',
    title: 'Head Coach & Camp Director',
    image: '/images/adrian-harris.png',
    experience: '15+ years PGA teaching experience',
    specialties: ['Full Swing', 'TrackMan Analysis', 'Course Management'],
    bio: 'PGA Class A professional with experience coaching players from beginners to single-digit handicappers. Former touring professional on the European Challenge Tour.',
  },
  {
    name: 'Cameron Grant',
    title: 'Short Game & Performance Coach',
    image: '/images/cameron-grant.png',
    experience: '12+ years coaching experience',
    specialties: ['Short Game', 'Putting', 'Mental Game'],
    bio: 'Certified mental performance consultant and short game specialist. Known for his data-driven approach to scoring improvement and on-course strategy.',
  },
]

export default function Coaches() {
  return (
    <section id="coaches" className="py-24 md:py-32 bg-sand">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-flag mb-3">
          Your coaches
        </p>
        <h2 className="font-display font-extrabold font-condensed-85 uppercase text-pine text-3xl md:text-4xl mb-12">
          PGA-certified. Tournament-tested.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {coaches.map((coach) => (
            <div key={coach.name} className="bg-chalk overflow-hidden">
              <div className="h-72 overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold font-condensed-85 uppercase text-pine text-xl mb-1">
                  {coach.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-flag mb-4">
                  {coach.title}
                </p>
                <p className="text-pine/60 text-sm leading-relaxed mb-4">
                  {coach.bio}
                </p>
                <p className="font-mono text-xs text-pine/40 mb-4">{coach.experience}</p>
                <div className="flex flex-wrap gap-2">
                  {coach.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="font-mono text-[10px] uppercase tracking-widest text-pine/60 border border-pine/15 px-2.5 py-1"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
