import config from './config'

const PIXEL_ID = config.metaPixelId

let initialized = false

/**
 * Returns true if the user has explicitly accepted cookies.
 */
export function hasConsent() {
  try {
    return localStorage.getItem('cookie_consent') === 'accepted'
  } catch {
    return false
  }
}

/**
 * Dynamically loads Meta's fbevents.js and initializes the pixel.
 * Only runs once, only if consent has been given and a pixel ID exists.
 */
export function initPixel() {
  if (initialized || !hasConsent() || !PIXEL_ID) return

  /* Standard Meta Pixel loader */
  const f = window
  const b = document
  const e = 'script'

  if (f.fbq) return
  const n = (f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  })
  if (!f._fbq) f._fbq = n
  n.push = n
  n.loaded = true
  n.version = '2.0'
  n.queue = []

  const t = b.createElement(e)
  t.async = true
  t.src = 'https://connect.facebook.net/en_US/fbevents.js'
  const s = b.getElementsByTagName(e)[0]
  s.parentNode.insertBefore(t, s)

  window.fbq('init', PIXEL_ID)
  initialized = true
}

/**
 * Fires a PageView event if the pixel is initialized.
 */
export function trackPageView() {
  if (!hasConsent() || !window.fbq) return
  window.fbq('track', 'PageView')
}

/**
 * Fires a Lead event for a successful waitlist sign-up.
 */
export function trackLead() {
  if (!hasConsent() || !window.fbq) return
  window.fbq('track', 'Lead', { content_name: 'waitlist' })
}
