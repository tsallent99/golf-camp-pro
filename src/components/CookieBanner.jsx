import { useState, useEffect, useCallback } from 'react'
import { initPixel, trackPageView } from '../lib/pixel'

const STORAGE_KEY = 'cookie_consent'

function getConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function setConsent(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // localStorage unavailable — consent is effectively rejected
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = getConsent()
    if (!consent) {
      setVisible(true)
    }
  }, [])

  // Listen for "reopen" requests from the footer link
  useEffect(() => {
    function handleReopen() {
      setVisible(true)
    }
    window.addEventListener('open-cookie-banner', handleReopen)
    return () => window.removeEventListener('open-cookie-banner', handleReopen)
  }, [])

  const accept = useCallback(() => {
    setConsent('accepted')
    setVisible(false)
    initPixel()
    trackPageView()
  }, [])

  const reject = useCallback(() => {
    setConsent('rejected')
    setVisible(false)
  }, [])

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[60] p-4"
    >
      <div className="max-w-2xl mx-auto bg-[#F7F6F1] border border-[#12302A]/10 p-5 sm:p-6 shadow-lg">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#12302A]/40 mb-3">
          Cookies
        </p>
        <p className="text-[#12302A] text-sm leading-relaxed mb-4">
          We use cookies to measure our ads and improve the site. You can accept
          or reject them.{' '}
          <a
            href="/privacy"
            className="text-[#D94F2B] hover:text-[#A13B20] transition-colors underline underline-offset-2"
          >
            Privacy Policy
          </a>
        </p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="flex-1 px-5 py-2.5 bg-[#12302A] text-[#F7F6F1] text-sm font-semibold transition-colors hover:bg-[#0A1F1A]"
          >
            Accept
          </button>
          <button
            onClick={reject}
            className="flex-1 px-5 py-2.5 border border-[#12302A]/20 text-[#12302A] text-sm font-semibold transition-colors hover:border-[#12302A]/40"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  )
}
