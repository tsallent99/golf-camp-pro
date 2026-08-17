import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

const days = [
  {
    day: 'Day 1',
    title: 'Welcome & Assessment',
    sessions: [
      { time: '10:30 AM', name: 'Individual Evaluation', type: 'tech' },
      { time: '12:00 PM', name: 'Putting Fundamentals', type: 'practice' },
      { time: '2:00 PM', name: 'Course Introduction', type: 'review' },
      { time: '4:00 PM', name: '18 holes in Forest Course', type: 'course' },
    ],
  },
  {
    day: 'Day 2',
    title: 'Dunes Course Day',
    sessions: [
      { time: '7:30 AM', name: 'Breakfast', type: 'info' },
      { time: '8:15 AM', name: 'Warm-up', type: 'practice' },
      { time: '9:00 AM', name: '18 holes in Dunes Course', type: 'course' },
      { time: '4:00 PM', name: 'Swing Analysis', type: 'tech' },
    ],
  },
  {
    day: 'Day 3',
    title: 'Forest Course Day',
    sessions: [
      { time: '7:30 AM', name: 'Breakfast', type: 'info' },
      { time: '8:15 AM', name: 'Warm-up', type: 'practice' },
      { time: '9:00 AM', name: '18 holes in Forest Course', type: 'course' },
      { time: '4:00 PM', name: 'Iron Play & Ball Striking', type: 'practice' },
      { time: '5:30 PM', name: 'Driver & Woods Workshop', type: 'practice' },
    ],
  },
  {
    day: 'Day 4',
    title: 'Course Management',
    sessions: [
      { time: '7:30 AM', name: 'Breakfast', type: 'info' },
      { time: '8:15 AM', name: 'Warm-up', type: 'practice' },
      { time: '9:00 AM', name: '18-Hole Playing Lesson (Dunes)', type: 'course' },
      { time: '1:00 PM', name: 'Lunch & Round Debrief', type: 'info' },
      { time: '2:30 PM', name: 'Targeted Practice Session', type: 'practice' },
      { time: '4:00 PM', name: 'Trouble Shots & Recovery', type: 'practice' },
      { time: '5:00 PM', name: 'Fitness & Mobility Work', type: 'fitness' },
    ],
  },
  {
    day: 'Day 5',
    title: 'Tournament & Farewell',
    sessions: [
      { time: '8:00 AM', name: 'Final Warm-Up & Prep', type: 'practice' },
      { time: '9:00 AM', name: 'Final Day Tournament (Dunes)', type: 'course' },
      { time: '2:00 PM', name: 'Tournament Awards Ceremony', type: 'info' },
      { time: '3:30 PM', name: 'Personalized Practice Plan', type: 'review' },
      { time: '4:30 PM', name: 'Certificates & Farewell', type: 'info' },
    ],
  },
]

const typeColors = {
  practice: 'bg-emerald-500/20 text-emerald-300',
  tech: 'bg-blue-500/20 text-blue-300',
  course: 'bg-gold-400/20 text-gold-300',
  review: 'bg-purple-500/20 text-purple-300',
  fitness: 'bg-orange-500/20 text-orange-300',
  info: 'bg-gray-500/20 text-gray-300',
}

const legend = [
  { label: 'Practice', type: 'practice' },
  { label: 'Technology', type: 'tech' },
  { label: 'On-Course', type: 'course' },
  { label: 'Review', type: 'review' },
  { label: 'Fitness', type: 'fitness' },
  { label: 'Info', type: 'info' },
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 md:py-32 bg-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-400 font-medium tracking-[0.15em] uppercase text-sm mb-3">
            What to Expect
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Weekly Schedule
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Five intensive days across the Forest and Dunes courses at Empordà Golf Resort.
          </p>
        </motion.div>

        {/* Horizontal scroll on mobile */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {days.map((day, i) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 min-w-[280px] snap-start lg:min-w-0"
            >
              <div className="mb-4">
                <p className="text-gold-400 text-sm font-semibold">{day.day}</p>
                <h3 className="text-white font-bold">{day.title}</h3>
              </div>
              <div className="space-y-3">
                {day.sessions.map((session) => (
                  <div key={session.name} className="flex items-start gap-3">
                    <div className="flex items-center gap-1 text-white/40 text-xs min-w-[60px] pt-0.5">
                      <Clock size={10} />
                      {session.time}
                    </div>
                    <div>
                      <p className="text-white text-sm leading-snug">
                        {session.name}
                      </p>
                      <span
                        className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full mt-1 ${typeColors[session.type]}`}
                      >
                        {legend.find((l) => l.type === session.type)?.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {legend.map((item) => (
            <div key={item.type} className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full ${typeColors[item.type].split(' ')[0]}`}
              />
              <span className="text-white/50 text-xs">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
