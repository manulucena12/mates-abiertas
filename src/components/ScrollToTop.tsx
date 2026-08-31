import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

interface ScrollState {
  scrollTo?: string
}

export default function ScrollToTop() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const { pathname, hash, state } = location
  const scrollTo = (state as ScrollState | null)?.scrollTo

  useEffect(() => {
    if (scrollTo && navigationType === 'PUSH') {
      setTimeout(() => {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    } else if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash, scrollTo, navigationType])

  return null
}
