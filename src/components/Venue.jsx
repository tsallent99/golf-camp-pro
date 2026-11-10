import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: '/images/resort-room.jpeg', caption: 'Hotel Room' },
  { src: '/images/resort-terrace.jpeg', caption: 'Terrace & Course Views' },
  { src: '/images/resort-pool.png', caption: 'Outdoor Pool' },
  { src: '/images/resort-breakfast.png', caption: 'Breakfast Buffet' },
  { src: '/images/resort-gym.png', caption: 'Fitness Centre' },
]

export default function Venue() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <section id="venue" className="py-24 md:py-32 bg-pine">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: text */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-flag mb-3">
              The venue
            </p>
            <h2 className="font-display font-extrabold font-condensed-85 uppercase text-chalk text-3xl md:text-4xl mb-6">
              Empordà Golf Resort
            </h2>
            <div className="space-y-4 text-chalk/60 leading-relaxed">
              <p>
                Nestled in the heart of the Costa Brava, Empordà Golf Resort is
                one of Spain's finest golf destinations. The resort features 36
                holes of championship golf across two distinct courses — the
                Forest Course, winding through Mediterranean stone pines, and
                the Dunes Course with its open, windswept character.
              </p>
              <p>
                Beyond the courses: modern hotel rooms overlooking the fairways,
                an outdoor pool, a fully-equipped fitness centre, and a
                restaurant serving fresh Mediterranean cuisine. Located 40
                minutes from Girona airport, 90 minutes from Barcelona.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-chalk/15">
              <div>
                <span className="font-mono text-3xl font-medium text-flag">36</span>
                <p className="font-mono text-xs text-chalk/40 mt-1">Holes</p>
              </div>
              <div>
                <span className="font-mono text-3xl font-medium text-flag">2</span>
                <p className="font-mono text-xs text-chalk/40 mt-1">Courses</p>
              </div>
              <div>
                <span className="font-mono text-3xl font-medium text-flag">4★</span>
                <p className="font-mono text-xs text-chalk/40 mt-1">Hotel</p>
              </div>
            </div>
          </div>

          {/* Right: image slider */}
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
        </div>
      </div>
    </section>
  )
}
