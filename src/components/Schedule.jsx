const days = [
  {
    id: 'D1',
    name: 'Sunday',
    label: 'ARRIVAL',
    course: 'FOREST',
    activities: ['Individual evaluation', 'Putting fundamentals', '18 holes Forest Course'],
  },
  {
    id: 'D2',
    name: 'Monday',
    label: 'DUNES DAY',
    course: 'DUNES',
    activities: ['Warm-up & range session', '18 holes Dunes Course', 'Swing analysis (TrackMan)'],
  },
  {
    id: 'D3',
    name: 'Tuesday',
    label: 'FOREST DAY',
    course: 'FOREST',
    activities: ['Warm-up & range session', '18 holes Forest Course', 'Iron play & driver workshop'],
  },
  {
    id: 'D4',
    name: 'Wednesday',
    label: 'MANAGEMENT',
    course: 'DUNES',
    activities: ['Playing lesson (Dunes)', 'Targeted practice', 'Trouble shots & fitness'],
  },
  {
    id: 'D5',
    name: 'Thursday',
    label: 'TOURNAMENT',
    course: 'FINAL',
    activities: ['Final day tournament', 'Awards ceremony', 'Practice plan & farewell'],
  },
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 md:py-32 bg-pine">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-extrabold font-condensed uppercase text-chalk text-3xl md:text-5xl mb-4">
          5 DAYS. 2 COURSES. 1 PLAN.
        </h2>
        <div className="h-px bg-chalk/20 mb-10" />

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-0 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {days.map((day) => (
            <div
              key={day.id}
              className="min-w-[220px] snap-start border-l border-chalk/20 px-5 py-6 lg:min-w-0 first:border-l-0 lg:first:border-l lg:border-l"
            >
              <span className="font-mono text-2xl font-medium text-flag">{day.id}</span>
              <p className="font-mono text-xs uppercase tracking-widest text-chalk/50 mt-1">
                {day.name}
              </p>
              <p className="font-display font-bold text-chalk text-sm uppercase mt-3 mb-4">
                {day.label}
              </p>

              <ul className="space-y-2">
                {day.activities.map((activity) => (
                  <li key={activity} className="font-mono text-xs text-chalk/60 leading-relaxed">
                    {activity}
                  </li>
                ))}
              </ul>

              <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-flag border border-flag/40 px-2 py-1 mt-4">
                {day.course}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
