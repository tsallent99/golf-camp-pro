import SeoHead from '../components/SeoHead'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyMidAm from '../components/WhyMidAm'
import Courses from '../components/Courses'
import Technology from '../components/Technology'
import Schedule from '../components/Schedule'
import NextCamp from '../components/NextCamp'
import Coaches from '../components/Coaches'
import Venue from '../components/Venue'
import Waitlist from '../components/Waitlist'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-chalk">
      <SeoHead
        title="MidAm Golf Retreat — Intensive golf training at Empordà Golf Resort, Girona"
        description="Five-day residential golf camp at Empordà Golf Resort, Costa Brava. PGA coaching, TrackMan analysis, 36 holes across Forest and Dunes courses. Max 20 players. June 2027."
        canonical="https://midamgolfretreat.com/"
      />
      <Navbar />
      <main>
        <Hero />
        <WhyMidAm />
        <Courses />
        <Technology />
        <Schedule />
        <NextCamp />
        <Coaches />
        <Venue />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}
