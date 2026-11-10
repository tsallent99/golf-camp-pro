import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CampDetail from './pages/CampDetail'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookieBanner from './components/CookieBanner'
import { initPixel, trackPageView, hasConsent } from './lib/pixel'

function ScrollAndTrack() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Track page view on route change (pixel only fires if consent given)
    if (hasConsent()) {
      initPixel()
      trackPageView()
    }
  }, [pathname])

  // Handle #hash scroll (works even with ?utm_source=... query params)
  useEffect(() => {
    if (hash) {
      // Small delay to let the page render first
      const timer = setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [hash])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollAndTrack />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/camp/summer-performance" element={<CampDetail />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  )
}

export default App
