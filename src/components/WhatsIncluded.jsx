import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const included = [
  '5 full days of expert coaching',
  'TrackMan & video swing analysis',
  'On-course playing lessons (36+ holes)',
  'Golf fitness screening & exercises',
  'Mental game coaching sessions',
  'Personalized practice plan to take home',
  'All range balls & practice facilities',
  'Welcome pack with camp materials',
  'Certificate of completion',
  'Post-camp video review follow-up',
]

const notIncluded = [
  'Flights & accommodation',
  'Golf club rental (available separately)',
  'Green fees for extra personal rounds',
  'Travel insurance',
  'Meals & beverages',
]

export default function WhatsIncluded() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 font-medium tracking-[0.15em] uppercase text-sm mb-3">
            Full Transparency
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-forest-700 mb-4">
            What's Included
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Included */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-forest-700 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <Check size={16} className="text-emerald-600" />
              </span>
              Included in Your Camp
            </h3>
            <ul className="space-y-4">
              {included.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <Check
                    size={18}
                    className="text-emerald-500 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-600 text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not included */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-forest-700 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                <X size={16} className="text-red-400" />
              </span>
              Not Included
            </h3>
            <ul className="space-y-4">
              {notIncluded.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <X
                    size={18}
                    className="text-red-300 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-500 text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
