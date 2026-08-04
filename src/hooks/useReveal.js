import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref and adds
 * the "is-visible" class (paired with the .reveal CSS utility)
 * once the element scrolls into view. Keeps motion tasteful and
 * one-shot rather than re-triggering on every scroll pass.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
