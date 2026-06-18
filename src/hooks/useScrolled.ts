import { useState, useEffect } from 'react'

export function useScrolled(px = 60): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > px)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [px])

  return scrolled
}
