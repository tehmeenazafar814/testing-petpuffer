/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'

export default function StickySideButton() {
  const [showButton, setShowButton] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide button if user scrolls past 100vh (end of hero section)
      if (window.scrollY > window.innerHeight * 0.4) {
        setShowButton(false)
      } else {
        setShowButton(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!showButton) return null

  return (
    <div className="fixed right-3 top-[40%] z-50 -translate-y-1/2">
      <a
        href="https://oncehub.com/shopikings"
        target="_blank"
        rel="noopener noreferrer"
        className="flex origin-right -rotate-90 items-center justify-center rounded-lg bg-white px-3 py-2 text-primary shadow-lg transition hover:bg-background"
      >
        <span className="font-bold tracking-wide">Skin Concerns?</span>
      </a>
    </div>
  )
}
