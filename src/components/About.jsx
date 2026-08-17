import { motion } from 'framer-motion'
import { Award, Clock, MapPin } from 'lucide-react'

const stats = [
  { icon: Clock, value: '5', label: 'Intensive Days' },
  { icon: Award, value: '100%', label: 'PGA Certified' },
  { icon: MapPin, value: 'Barcelona', label: 'Based' },
]

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold-500 font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Our Story
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-forest-700 mb-6">
              Born from Passion & Experience
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                MIDAM Golf Retreat was founded by golf professionals who saw a gap
                in the market: serious amateur players who wanted intensive,
                structured training — not just a lesson here and there.
              </p>
              <p>
                Based in Barcelona, we train at the stunning Empordà Golf Resort —
                36 holes across the Links and Forest courses on the Costa Brava.
                Our PGA-certified instructors bring decades of combined teaching
                experience and a genuine passion for helping amateur golfers unlock
                their potential.
              </p>
              <p>
                Every camp is limited to 20 players because we believe real
                improvement requires personalized attention, not one-size-fits-all
                advice. We use data, technology, and proven methodology to ensure
                every player leaves measurably better than when they arrived.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="mx-auto mb-2 text-gold-400" size={24} />
                  <p className="text-2xl font-bold text-forest-700">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/links-course.webp"
                alt="Empordà Golf Resort — Links Course"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-400/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-forest-700/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
