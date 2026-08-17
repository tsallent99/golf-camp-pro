import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MapPin, Calendar, Users, Clock, Check, X, Send,
  ChevronLeft, ChevronRight, Shield, Bell, Gift,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SeoHead from '../components/SeoHead'

/* ───── Image Slider (reusable) ───── */
const courseSlides = [
  { src: '/images/forest-course.webp', caption: 'Forest Course' },
  { src: '/images/links-course.webp', caption: 'Links (Dunes) Course' },
  { src: '/images/practice-facilities.webp', caption: 'Practice Facilities' },
]

const resortSlides = [
  { src: '/images/resort-room.jpeg', caption: 'Hotel Room' },
  { src: '/images/resort-terrace.jpeg', caption: 'Terrace & Course Views' },
  { src: '/images/resort-pool.png', caption: 'Outdoor Pool' },
  { src: '/images/resort-breakfast.png', caption: 'Breakfast Buffet' },
  { src: '/images/resort-gym.png', caption: 'Fitness Centre' },
]

function ImageSlider({ images }) {
  const slides = images
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => (i === 0 ? slides.length - 1 : i - 1))
  const next = () => setIdx((i) => (i === slides.length - 1 ? 0 : i + 1))

  return (
    <div className="relative rounded-2xl overflow-hidden group">
      <img
        src={slides[idx].src}
        alt={slides[idx].caption}
        className="w-full h-[320px] sm:h-[420px] object-cover transition-all duration-500"
      />
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
        <p className="text-white font-medium text-sm">{slides[idx].caption}</p>
      </div>
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30"
      >
        <ChevronRight size={20} />
      </button>
      {/* Dots */}
      <div className="absolute bottom-4 right-6 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`View image ${i + 1}: ${slides[i].caption}`}
            className={`w-2 h-2 rounded-full transition-colors ${i === idx ? 'bg-white' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  )
}

/* ───── Schedule Data ───── */
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

/* ───── Included / Not Included ───── */
const included = [
  '5 full days of expert coaching',
  'Accommodation at Empordà Golf Resort',
  'Barcelona or Girona airport transfers',
  '5 green fees',
  'Full board (breakfast, lunch & dinner)',
  'TrackMan & video swing analysis',
  'On-course playing lessons (72+ holes across both courses)',
  'Golf fitness screening & exercises',
  'Personalized practice plan to take home',
  'All range balls & practice facilities',
  'Welcome pack with camp materials',
  'Certificate of completion',
  'Post-camp video review follow-up',
  'Final day tournament with awards',
]

const notIncluded = [
  'Flights',
  'Golf club rental (available separately)',
  'Green fees for extra personal rounds',
  'Travel insurance',
]

/* ───── Register Form ───── */
function RegisterForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="bg-forest-50 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send size={24} className="text-forest-700" />
        </div>
        <h3 className="text-xl font-bold text-forest-700 mb-2">Registration received!</h3>
        <p className="text-gray-500 text-sm">We'll confirm your spot via email shortly.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
      className="bg-gray-50 rounded-2xl p-8 space-y-5"
    >
      <div>
        <label className="block text-sm font-medium text-forest-700 mb-1.5">Full Name</label>
        <input type="text" required placeholder="John Smith" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest-700/20 focus:border-forest-700 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-forest-700 mb-1.5">Email Address</label>
        <input type="email" required placeholder="john@example.com" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest-700/20 focus:border-forest-700 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-forest-700 mb-1.5">Phone Number</label>
        <input type="tel" placeholder="+34 600 000 000" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest-700/20 focus:border-forest-700 transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium text-forest-700 mb-1.5">Experience Level</label>
        <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest-700/20 focus:border-forest-700 transition-all text-gray-600">
          <option value="">Select your level</option>
          <option value="beginner">Beginner (36+ handicap)</option>
          <option value="intermediate">Intermediate (15-36 handicap)</option>
          <option value="advanced">Advanced (5-15 handicap)</option>
          <option value="scratch">Low Handicap (0-5 handicap)</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-forest-700 mb-1.5">Additional Notes</label>
        <textarea rows={3} placeholder="Anything we should know?" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest-700/20 focus:border-forest-700 transition-all resize-none" />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3.5 bg-forest-700 hover:bg-forest-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg flex items-center justify-center gap-2"
      >
        <Send size={16} />
        Register for This Camp
      </button>
      <p className="text-xs text-gray-400 text-center">
        We'll confirm availability and send payment details via email.
      </p>
    </form>
  )
}

/* ───── Page ───── */
export default function CampDetail() {
  const { hash } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [hash])

  return (
    <div className="min-h-screen bg-white">
      <SeoHead
        title="Summer Performance Camp — June 22–26, 2026 | MIDAM Golf Retreat"
        description="Register for the 5-day Summer Performance Camp at Empordà Golf Resort, Costa Brava. Play both Forest and Links courses with PGA coaching, full board, and accommodation included. From $2,750."
        canonical="https://midamgolfretreat.com/camp/summer-performance"
        og={{
          title: 'Summer Performance Camp — MIDAM Golf Retreat',
          image: 'https://midamgolfretreat.com/images/links-course.webp',
        }}
      />
      <Navbar />
      <main>

      {/* ── Hero Banner ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-forest-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold-400 font-medium tracking-[0.15em] uppercase text-sm mb-3">
              June 22 – 26, 2026
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Summer Performance Camp
            </h1>
            <div className="flex flex-wrap gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-gold-400" />
                Empordà Golf Resort, Costa Brava
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-gold-400" />
                5 days / 4 nights
              </span>
              <span className="flex items-center gap-2">
                <Users size={16} className="text-gold-400" />
                Max 20 participants
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Camp Info + Slider ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-forest-700 mb-6">
                About This Camp
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Five intensive days at the stunning Empordà Golf Resort on
                  Spain's Costa Brava. You'll play both the Forest Course — winding
                  through Mediterranean pine forests — and the Links (Dunes) Course
                  with its open, windswept character.
                </p>
                <p>
                  With 36 holes of championship golf, world-class practice
                  facilities, and a maximum of 20 players, this camp delivers
                  personalized coaching and real on-course experience. The week
                  culminates in a final day tournament with an awards ceremony.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-forest-700">5</p>
                  <p className="text-xs text-gray-500 mt-1">Days</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-forest-700">36</p>
                  <p className="text-xs text-gray-500 mt-1">Holes</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-forest-700">20</p>
                  <p className="text-xs text-gray-500 mt-1">Max Players</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs text-gray-400 uppercase tracking-wide">From</p>
                <p className="text-3xl font-bold text-forest-700">
                  $2,750 <span className="text-sm font-normal text-gray-400">USD</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageSlider images={courseSlides} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Resort Section ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageSlider images={resortSlides} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold-500 font-medium tracking-[0.15em] uppercase text-sm mb-3">
                The Venue
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-forest-700 mb-6">
                Empordà Golf Resort
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nestled in the heart of the Costa Brava, Empordà Golf Resort is
                  one of Spain's premier golf destinations. The resort features 36
                  holes of championship golf across two distinct courses — the
                  Forest Course, winding through Mediterranean pine forests, and
                  the Links Course with its open, windswept dunes character.
                </p>
                <p>
                  Beyond the courses, the resort offers modern hotel rooms with
                  views over the fairways, an outdoor pool surrounded by natural
                  landscape, a fully-equipped fitness centre, and a restaurant
                  serving fresh Mediterranean cuisine with a generous breakfast
                  buffet each morning.
                </p>
                <p>
                  Located just 40 minutes from Girona airport and 90 minutes from
                  Barcelona, the resort provides the perfect blend of world-class
                  golf and relaxed Mediterranean living.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-forest-700">36</p>
                  <p className="text-xs text-gray-500 mt-1">Holes</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-forest-700">2</p>
                  <p className="text-xs text-gray-500 mt-1">Courses</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-forest-700">4★</p>
                  <p className="text-xs text-gray-500 mt-1">Hotel</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Schedule ── */}
      <section id="schedule" className="py-20 bg-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-gold-400 font-medium tracking-[0.15em] uppercase text-sm mb-3">
              Day by Day
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Weekly Schedule
            </h2>
          </motion.div>

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
                    <div key={session.name + session.time} className="flex items-start gap-3">
                      <div className="flex items-center gap-1 text-white/40 text-xs min-w-[60px] pt-0.5">
                        <Clock size={10} />
                        {session.time}
                      </div>
                      <div>
                        <p className="text-white text-sm leading-snug">{session.name}</p>
                        <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full mt-1 ${typeColors[session.type]}`}>
                          {legend.find((l) => l.type === session.type)?.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {legend.map((item) => (
              <div key={item.type} className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${typeColors[item.type].split(' ')[0]}`} />
                <span className="text-white/50 text-xs">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-forest-700">
              What's Included
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-lg font-semibold text-forest-700 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Check size={16} className="text-emerald-600" />
                </span>
                Included
              </h3>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-forest-700 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                  <X size={16} className="text-red-400" />
                </span>
                Not Included
              </h3>
              <ul className="space-y-4">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X size={18} className="text-red-300 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Register ── */}
      <section id="register" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold-500 font-medium tracking-[0.15em] uppercase text-sm mb-3">
                Limited to 20 Players
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-forest-700 mb-4">
                Register Now
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Secure your spot for the Summer Performance Camp at Empordà Golf
                Resort. Spaces are limited — register early to guarantee your place.
              </p>
              <div className="space-y-5">
                {[
                  { icon: Bell, text: 'Confirmation within 24 hours' },
                  { icon: Gift, text: 'Early-bird pricing available' },
                  { icon: Shield, text: 'Flexible cancellation policy' },
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-forest-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <b.icon size={18} className="text-forest-700" />
                    </div>
                    <span className="text-gray-600 text-sm">{b.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <RegisterForm />
            </motion.div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  )
}
