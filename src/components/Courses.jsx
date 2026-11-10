export default function Courses() {
  return (
    <section id="courses" className="bg-chalk">
      {/* Forest Course */}
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[320px] lg:h-auto">
          <img
            src="/images/forest-fairway.webp"
            alt="Forest Course — stone pines lining the fairway"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-flag mb-3">
            Course 01
          </span>
          <h2 className="font-display font-extrabold font-condensed uppercase text-pine text-3xl md:text-4xl mb-4">
            Forest Course
          </h2>
          <p className="text-pine/60 leading-relaxed max-w-md mb-6">
            Eighteen holes winding through Mediterranean stone pines. Tight
            fairways, dappled light, elevated greens. The Forest Course
            rewards precision and course management — exactly the skills
            you'll sharpen during the camp.
          </p>
          <div className="flex gap-8">
            <div>
              <span className="font-mono text-2xl font-medium text-flag">18</span>
              <p className="font-mono text-[10px] text-pine/40 uppercase tracking-widest mt-0.5">Holes</p>
            </div>
            <div>
              <span className="font-mono text-2xl font-medium text-flag">Par 72</span>
              <p className="font-mono text-[10px] text-pine/40 uppercase tracking-widest mt-0.5">Championship</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dunes Course */}
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-14 lg:py-20 order-2 lg:order-1">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-flag mb-3">
            Course 02
          </span>
          <h2 className="font-display font-extrabold font-condensed uppercase text-pine text-3xl md:text-4xl mb-4">
            Dunes Course
          </h2>
          <p className="text-pine/60 leading-relaxed max-w-md mb-6">
            Open, windswept links-style holes with rolling mounds, water
            hazards, and exposed greens. The Dunes Course tests your
            ability to shape shots and manage the wind — a different
            challenge every round.
          </p>
          <div className="flex gap-8">
            <div>
              <span className="font-mono text-2xl font-medium text-flag">18</span>
              <p className="font-mono text-[10px] text-pine/40 uppercase tracking-widest mt-0.5">Holes</p>
            </div>
            <div>
              <span className="font-mono text-2xl font-medium text-flag">Par 71</span>
              <p className="font-mono text-[10px] text-pine/40 uppercase tracking-widest mt-0.5">Links-style</p>
            </div>
          </div>
        </div>
        <div className="relative h-[320px] lg:h-auto order-1 lg:order-2">
          <img
            src="/images/dunes-course.webp"
            alt="Dunes Course — rolling fairways and water hazards at sunrise"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
