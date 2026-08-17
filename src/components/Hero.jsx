import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/forest-course.webp"
          alt="Empordà Golf Resort - Forest Course"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/80 via-forest-900/70 to-forest-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm mb-6">
            Premium Golf Training in Barcelona
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          Transform Your Game{' '}
          <span className="text-gold-400">in 5 Days</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Intensive, PGA-certified golf camps at Empordà Golf Resort, Barcelona.
          Expert coaching across 36 holes of Links and Forest courses, with
          a proven methodology for real improvement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#camps"
            className="px-8 py-4 bg-gold-400 hover:bg-gold-500 text-forest-900 font-semibold rounded-lg transition-all hover:shadow-xl hover:shadow-gold-400/20 hover:-translate-y-0.5"
          >
            View Upcoming Camps
          </a>
          <a
            href="#features"
            className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-medium rounded-lg transition-all hover:bg-white/5"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  )
}
