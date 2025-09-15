/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { HeaderSecond } from './HeaderSecond'
import { motion, AnimatePresence } from 'framer-motion'
import TopBar from 'components/Sections/TopBar'

export function HeaderWrapper({
  onMenuClick,
  menuOpen,
  forceSecondOnly = false
}: {
  onMenuClick: () => void
  menuOpen?: boolean
  forceSecondOnly?: boolean
}) {
  const [showSecond, setShowSecond] = useState(false)

  useEffect(() => {
    if (forceSecondOnly) {
      setShowSecond(true)
      return
    }

    const handleScroll = () => {
      const hero = document.getElementById('hero')
      if (!hero) return

      const triggerPoint = hero.offsetHeight - 100
      setShowSecond(window.scrollY > triggerPoint)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    // run once
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [forceSecondOnly])

  return (
    <>
      {!forceSecondOnly && (
        <>
          <TopBar />
          <Header onMenuClick={onMenuClick} menuOpen={menuOpen} />
        </>
      )}

      {/* Smooth animated transition */}
      <AnimatePresence>
        {showSecond && (
          <motion.div
            key="header-second"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-0 z-50"
          >
            <HeaderSecond onMenuClick={onMenuClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
