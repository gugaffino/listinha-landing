'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 3) * 70}ms`
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return null
}
