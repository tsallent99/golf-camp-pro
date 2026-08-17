import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const instructors = [
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

export default function Instructors() {
  return (
    <section id="instructors" className="py-24 md:py-32 bg-forest-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-400 font-medium tracking-[0.15em] uppercase text-sm mb-3">
            Expert Team
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Meet Your Instructors
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Learn from PGA-certified professionals with real-world tournament and
            coaching experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {instructors.map((instructor, i) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              {/* Photo */}
              <div className="h-64 overflow-hidden">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {instructor.name}
                </h3>
                <p className="text-gold-400 text-sm font-medium mb-3">
                  {instructor.title}
                </p>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  {instructor.bio}
                </p>

                <div className="flex items-center gap-1 text-white/40 text-xs mb-4">
                  <Star size={12} className="text-gold-400" />
                  {instructor.experience}
                </div>

                <div className="flex flex-wrap gap-2">
                  {instructor.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
