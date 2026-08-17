import { useEffect } from 'react'

function setMeta(name, content, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function SeoHead({ title, description, canonical, og }) {
  useEffect(() => {
    document.title = title

    if (description) {
      setMeta('description', description)
      setMeta('og:description', description, 'property')
      setMeta('twitter:description', description, 'name')
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
      setMeta('og:url', canonical, 'property')
      setMeta('twitter:url', canonical, 'name')
    }

    if (og?.title) {
      setMeta('og:title', og.title, 'property')
      setMeta('twitter:title', og.title, 'name')
    }

    if (og?.image) {
      setMeta('og:image', og.image, 'property')
      setMeta('twitter:image', og.image, 'name')
    }
  }, [title, description, canonical, og])

  return null
}
