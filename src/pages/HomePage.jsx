import SeoHead from '../components/SeoHead'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import NextCamps from '../components/NextCamps'
import About from '../components/About'
import Instructors from '../components/Instructors'
import Waitlist from '../components/Waitlist'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <SeoHead
        title="MIDAM Golf Retreat — Premium Golf Training in Barcelona | Empordà Golf Resort"
        description="Intensive 5-day PGA-certified golf camps at Empordà Golf Resort, Costa Brava. Expert coaching across 36 holes, full board, accommodation, and airport transfers included. Max 20 players."
        canonical="https://midamgolfretreat.com/"
      />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <NextCamps />
        <About />
        <Instructors />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}
