import { motion } from 'framer-motion'
import { Target, Video, Brain, Users, TrendingUp, Dumbbell } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Precision Short Game',
    description:
      'Dedicated sessions on chipping, pitching, and putting with measurable improvement targets using launch monitor data.',
  },
  {
    icon: Video,
    title: 'Video Analysis',
    description:
      'Frame-by-frame swing analysis using TrackMan and high-speed cameras to identify and correct mechanical inefficiencies.',
  },
  {
    icon: Brain,
    title: 'Mental Game Coaching',
    description:
      'On-course strategy sessions and mental performance techniques to lower scores under pressure situations.',
  },
  {
    icon: Users,
    title: 'Small Group Format',
    description:
      'Maximum 20 players per camp ensuring personalized attention and customized improvement plans for each participant.',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Progress',
    description:
      'Track your improvement with before/after metrics. Every session is measured so you can see tangible results.',
  },
  {
    icon: Dumbbell,
    title: 'Golf Fitness Integration',
    description:
      'Physical screening and targeted exercises to improve mobility, stability, and power in your golf swing.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-forest-700 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-400 font-medium tracking-[0.15em] uppercase text-sm mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The Science of Golf Improvement
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Our methodology combines cutting-edge technology with proven coaching
            techniques to deliver real, measurable improvement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mb-5 group-hover:bg-gold-400/20 transition-colors">
                <feature.icon className="text-gold-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
