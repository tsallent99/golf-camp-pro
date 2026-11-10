import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SeoHead from '../components/SeoHead'
import DataTag from '../components/DataTag'
import config from '../lib/config'

/* ───── Image Slider ───── */
function ImageSlider({ images }) {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="relative group overflow-hidden">
      <img
        src={images[idx].src}
        alt={images[idx].caption}
        className="w-full h-[320px] sm:h-[420px] object-cover transition-all duration-500"
      />
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-pine/60 to-transparent p-6">
        <p className="font-mono text-xs text-chalk/80">{images[idx].caption}</p>
      </div>
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-pine/50 flex items-center justify-center text-chalk opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-pine/50 flex items-center justify-center text-chalk opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-4 right-6 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`View image ${i + 1}: ${images[i].caption}`}
            className={`w-2 h-2 transition-colors ${i === idx ? 'bg-chalk' : 'bg-chalk/40'}`}
          />
        ))}
      </div>
    </div>
  )
}

const courseSlides = [
  { src: '/images/forest-fairway.webp', caption: 'Forest Course' },
  { src: '/images/dunes-course.webp', caption: 'Dunes Course' },
  { src: '/images/driving-range.webp', caption: 'Driving Range' },
  { src: '/images/teaching-studio.webp', caption: 'Teaching Studio' },
]

const resortSlides = [
  { src: '/images/resort-room.jpeg', caption: 'Hotel Room' },
  { src: '/images/resort-terrace.jpeg', caption: 'Terrace & Course Views' },
  { src: '/images/resort-pool.png', caption: 'Outdoor Pool' },
  { src: '/images/resort-breakfast.png', caption: 'Breakfast Buffet' },
  { src: '/images/resort-gym.png', caption: 'Fitness Centre' },
]

/* ───── Schedule Data ───── */
const days = [
  {
    day: 'Day 1',
    title: 'Welcome & Assessment',
    sessions: [
      { time: '10:30', name: 'Individual Evaluation' },
      { time: '12:00', name: 'Putting Fundamentals' },
      { time: '14:00', name: 'Course Introduction' },
      { time: '16:00', name: '18 holes — Forest Course' },
    ],
  },
  {
    day: 'Day 2',
    title: 'Dunes Course Day',
    sessions: [
      { time: '07:30', name: 'Breakfast' },
      { time: '08:15', name: 'Warm-up' },
      { time: '09:00', name: '18 holes — Dunes Course' },
      { time: '16:00', name: 'Swing Analysis (TrackMan)' },
    ],
  },
  {
    day: 'Day 3',
    title: 'Forest Course Day',
    sessions: [
      { time: '07:30', name: 'Breakfast' },
      { time: '08:15', name: 'Warm-up' },
      { time: '09:00', name: '18 holes — Forest Course' },
      { time: '16:00', name: 'Iron Play & Ball Striking' },
      { time: '17:30', name: 'Driver & Woods Workshop' },
    ],
  },
  {
    day: 'Day 4',
    title: 'Course Management',
    sessions: [
      { time: '07:30', name: 'Breakfast' },
      { time: '08:15', name: 'Warm-up' },
      { time: '09:00', name: 'Playing Lesson — Dunes' },
      { time: '13:00', name: 'Lunch & Round Debrief' },
      { time: '14:30', name: 'Targeted Practice' },
      { time: '16:00', name: 'Trouble Shots & Recovery' },
      { time: '17:00', name: 'Fitness & Mobility' },
    ],
  },
  {
    day: 'Day 5',
    title: 'Tournament & Farewell',
    sessions: [
      { time: '08:00', name: 'Final Warm-Up' },
      { time: '09:00', name: 'Final Tournament — Dunes' },
      { time: '14:00', name: 'Awards Ceremony' },
      { time: '15:30', name: 'Personalised Practice Plan' },
      { time: '16:30', name: 'Certificates & Farewell' },
    ],
  },
]

/* ───── Included / Not Included ───── */
const included = [
  '5 full days of expert coaching',
  'Accommodation at Empordà Golf Resort',
  'Barcelona or Girona airport transfers',
  '5 green fees (Forest + Dunes)',
  'Full board (breakfast, lunch & dinner)',
  'TrackMan & video swing analysis',
  'On-course playing lessons',
  'Golf fitness screening & exercises',
  'Personalised practice plan',
  'All range balls & practice facilities',
  'Welcome pack with camp materials',
  'Certificate of completion',
  'Post-camp video review follow-up',
  'Final day tournament with awards',
]

const notIncluded = [
  'Golf club rental (available separately)',
  'Green fees for extra personal rounds',
]

/* ───── Register Form ───── */
function RegisterForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const data = new FormData(e.target)

    if (data.get('_honey')) {
      setLoading(false)
      return
    }

    try {
      // TODO: Create Web3Forms access key and add to config.js
      const apiKey = config.web3formsKey
      if (!apiKey) {
        console.warn('Web3Forms API key not set. Form submission simulated.')
        setSubmitted(true)
        setLoading(false)
        return
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: apiKey,
          subject: 'New camp registration · MidAm Golf Retreat',
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          handicap_level: data.get('handicap'),
          notes: data.get('notes'),
        }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    }

    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="bg-pine p-8 text-center">
        <h3 className="font-display font-bold text-chalk text-xl mb-2">
          Registration received!
        </h3>
        <p className="text-chalk/60 text-sm">
          We'll confirm your spot via email shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block font-mono text-xs uppercase tracking-widest text-pine/60 mb-1.5">Full Name</label>
        <input type="text" name="name" required placeholder="John Smith" className="w-full px-4 py-3 bg-white border border-pine/20 text-sm text-pine focus:outline-none focus:border-pine transition-colors" />
      </div>
      <div>
        <label className="block font-mono text-xs uppercase tracking-widest text-pine/60 mb-1.5">Email</label>
        <input type="email" name="email" required placeholder="john@example.com" className="w-full px-4 py-3 bg-white border border-pine/20 text-sm text-pine focus:outline-none focus:border-pine transition-colors" />
      </div>
      <div>
        <label className="block font-mono text-xs uppercase tracking-widest text-pine/60 mb-1.5">Phone</label>
        <input type="tel" name="phone" placeholder="+34 600 000 000" className="w-full px-4 py-3 bg-white border border-pine/20 text-sm text-pine focus:outline-none focus:border-pine transition-colors" />
      </div>
      <div>
        <label className="block font-mono text-xs uppercase tracking-widest text-pine/60 mb-1.5">Handicap level</label>
        <select name="handicap" className="w-full px-4 py-3 bg-white border border-pine/20 text-sm text-pine/60 focus:outline-none focus:border-pine transition-colors">
          <option value="">Select your level</option>
          <option value="beginner">Beginner (36+)</option>
          <option value="intermediate">Intermediate (15–36)</option>
          <option value="advanced">Advanced (5–15)</option>
          <option value="low">Low handicap (0–5)</option>
        </select>
      </div>
      <div>
        <label className="block font-mono text-xs uppercase tracking-widest text-pine/60 mb-1.5">Notes</label>
        <textarea name="notes" rows={3} placeholder="Anything we should know?" className="w-full px-4 py-3 bg-white border border-pine/20 text-sm text-pine focus:outline-none focus:border-pine transition-colors resize-none" />
      </div>

      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      {error && <p className="text-flag text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3.5 bg-flag hover:bg-flag-ink text-chalk font-semibold transition-colors disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Register for this camp →'}
      </button>
      <p className="font-mono text-[10px] text-pine/40 text-center uppercase tracking-widest">
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
    <div className="min-h-screen bg-chalk">
      <SeoHead
        title="Summer Performance Camp — 22–26 June 2027 | MidAm Golf Retreat"
        description="Five-day residential golf camp at Empordà Golf Resort, Costa Brava. Play both Forest and Dunes courses with PGA coaching, full board, and accommodation included. €2,700."
        canonical="https://midamgolfretreat.com/camp/summer-performance"
        og={{
          title: 'Summer Performance Camp — MidAm Golf Retreat',
          image: 'https://midamgolfretreat.com/images/forest-course.webp',
        }}
      />
      <Navbar />
      <main>

      {/* ── Hero Banner ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-pine">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-flag mb-3">
            22–26 June 2027
          </p>
          <h1 className="font-display font-extrabold font-condensed uppercase text-chalk text-3xl md:text-5xl mb-6">
            Summer Performance Camp
          </h1>
          <div className="flex flex-wrap gap-3">
            <DataTag variant="outline" className="text-chalk/70">Empordà Golf Resort</DataTag>
            <DataTag variant="outline" className="text-chalk/70">5 days / 4 nights</DataTag>
            <DataTag variant="outline" className="text-chalk/70">Max 20 players</DataTag>
          </div>
        </div>
      </section>

      {/* ── Camp Info + Slider ── */}
      <section className="py-20 bg-chalk">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-display font-bold uppercase text-pine text-2xl md:text-3xl mb-6">
                About this camp
              </h2>
              <div className="space-y-4 text-pine/60 leading-relaxed">
                <p>
                  Five intensive days at Empordà Golf Resort on Spain's Costa
                  Brava. You'll play both the Forest Course — winding through
                  Mediterranean stone pines — and the Dunes Course with its
                  open, windswept character.
                </p>
                <p>
                  With 36 holes of championship golf, world-class practice
                  facilities, and a maximum of 20 players, this camp delivers
                  personalised coaching and real on-course experience. The week
                  culminates in a final day tournament with an awards ceremony.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-pine/10">
                <div>
                  <span className="font-mono text-2xl font-medium text-flag">5</span>
                  <p className="font-mono text-xs text-pine/40 mt-1">Days</p>
                </div>
                <div>
                  <span className="font-mono text-2xl font-medium text-flag">36</span>
                  <p className="font-mono text-xs text-pine/40 mt-1">Holes</p>
                </div>
                <div>
                  <span className="font-mono text-2xl font-medium text-flag">20</span>
                  <p className="font-mono text-xs text-pine/40 mt-1">Max Players</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-mono text-xs uppercase tracking-widest text-pine/40">From</p>
                <p className="font-display font-extrabold text-pine text-4xl">
                  €2,700 <span className="text-sm font-normal text-pine/40">EUR</span>
                </p>
              </div>
            </div>

            <ImageSlider images={courseSlides} />
          </div>
        </div>
      </section>

      {/* ── Resort Section ── */}
      <section className="py-20 bg-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ImageSlider images={resortSlides} />
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-flag mb-3">
                The venue
              </p>
              <h2 className="font-display font-bold uppercase text-pine text-2xl md:text-3xl mb-6">
                Empordà Golf Resort
              </h2>
              <div className="space-y-4 text-pine/60 leading-relaxed">
                <p>
                  One of Spain's finest golf destinations, featuring 36 holes
                  across two distinct courses — the Forest Course through
                  Mediterranean stone pines, and the Dunes Course with its
                  open, windswept character.
                </p>
                <p>
                  Modern hotel rooms overlooking the fairways, an outdoor pool,
                  a fully-equipped fitness centre, and a restaurant serving
                  fresh Mediterranean cuisine. Located 40 minutes from Girona
                  airport, 90 minutes from Barcelona.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-pine/10">
                <div>
                  <span className="font-mono text-2xl font-medium text-flag">36</span>
                  <p className="font-mono text-xs text-pine/40 mt-1">Holes</p>
                </div>
                <div>
                  <span className="font-mono text-2xl font-medium text-flag">2</span>
                  <p className="font-mono text-xs text-pine/40 mt-1">Courses</p>
                </div>
                <div>
                  <span className="font-mono text-2xl font-medium text-flag">4★</span>
                  <p className="font-mono text-xs text-pine/40 mt-1">Hotel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Schedule ── */}
      <section id="schedule" className="py-20 bg-pine">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-flag mb-3">
            Day by day
          </p>
          <h2 className="font-display font-extrabold font-condensed uppercase text-chalk text-3xl md:text-4xl mb-10">
            Weekly Schedule
          </h2>

          <div className="flex gap-0 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible">
            {days.map((day) => (
              <div
                key={day.day}
                className="min-w-[240px] snap-start border-l border-chalk/15 px-5 py-6 lg:min-w-0 first:border-l-0 lg:first:border-l"
              >
                <p className="font-mono text-sm font-medium text-flag">{day.day}</p>
                <h3 className="font-display font-bold text-chalk text-sm uppercase mt-1 mb-4">
                  {day.title}
                </h3>
                <div className="space-y-3">
                  {day.sessions.map((session) => (
                    <div key={session.time + session.name} className="flex items-start gap-3">
                      <span className="font-mono text-[11px] text-chalk/30 min-w-[40px] font-tabular">
                        {session.time}
                      </span>
                      <span className="text-chalk/60 text-sm leading-snug">
                        {session.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-20 bg-chalk">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-extrabold font-condensed uppercase text-pine text-3xl md:text-4xl mb-10">
            What's Included
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-pine/50 mb-6">
                Included
              </h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-flag mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-pine/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-pine/50 mb-6">
                Not included
              </h3>
              <ul className="space-y-3">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-pine/30 mt-0.5 flex-shrink-0">—</span>
                    <span className="text-pine/50 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Register ── */}
      <section id="register" className="py-20 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-flag mb-3">
                Limited to 20 players
              </p>
              <h2 className="font-display font-extrabold font-condensed-85 uppercase text-pine text-3xl md:text-4xl mb-4">
                Register now
              </h2>
              <p className="text-pine/60 mb-8 leading-relaxed">
                Secure your spot for the Summer Performance Camp at Empordà Golf
                Resort. Spaces are limited — register early to guarantee your place.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-flag flex-shrink-0" />
                  <span className="text-pine/70 text-sm">Confirmation within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-flag flex-shrink-0" />
                  <span className="text-pine/70 text-sm">Early-bird pricing available</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-flag flex-shrink-0" />
                  <span className="text-pine/70 text-sm">Flexible cancellation policy</span>
                </div>
              </div>
              <a
                href="/#waitlist"
                className="inline-flex items-center font-mono text-xs uppercase tracking-widest text-flag hover:text-flag-ink transition-colors"
              >
                Or join the waitlist →
              </a>
            </div>

            <RegisterForm />
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  )
}
