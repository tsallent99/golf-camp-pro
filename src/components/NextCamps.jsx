import { motion } from 'framer-motion'
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const camp = {
  title: 'Summer Performance Camp',
  image: '/images/links-course.webp',
  badge: 'All Levels',
  badgeColor: 'bg-gold-400',
  location: 'Empordà Golf Resort — Links & Forest Courses',
  dates: 'June 22 – 26, 2026',
  price: '2,750',
  spotsLeft: 5,
  totalSpots: 20,
}

export default function NextCamps() {
  return (
    <section id="camps" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 font-medium tracking-[0.15em] uppercase text-sm mb-3">
            Upcoming Session
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-forest-700 mb-4">
            Next Camp
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Secure your spot. Small groups mean spaces fill fast.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
        >
          {/* Image */}
          <div className="relative h-64 sm:h-72 overflow-hidden">
            <img
              src={camp.image}
              alt={camp.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span
              className={`absolute top-4 left-4 ${camp.badgeColor} text-forest-900 text-xs font-semibold px-3 py-1 rounded-full`}
            >
              {camp.badge}
            </span>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-forest-700 text-xs font-semibold px-3 py-1 rounded-full">
              {camp.spotsLeft}/{camp.totalSpots} spots left
            </div>
          </div>

          {/* Details */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-forest-700 mb-5">
              {camp.title}
            </h3>

            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={16} className="text-gold-400" />
                {camp.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar size={16} className="text-gold-400" />
                {camp.dates}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Users size={16} className="text-gold-400" />
                Max {camp.totalSpots} participants
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide">From</p>
                <p className="text-3xl font-bold text-forest-700">
                  ${camp.price}
                  <span className="text-sm font-normal text-gray-400"> USD</span>
                </p>
              </div>

              <div className="flex gap-3 w-full sm:w-auto">
                <Link
                  to="/camp/summer-performance"
                  className="flex items-center justify-center px-6 py-3 border border-gray-200 hover:border-forest-700 text-forest-700 text-sm font-medium rounded-lg transition-colors group/btn"
                >
                  See Camp Details
                  <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/camp/summer-performance#register"
                  className="flex-1 sm:flex-initial text-center px-6 py-3 bg-forest-700 hover:bg-forest-600 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
