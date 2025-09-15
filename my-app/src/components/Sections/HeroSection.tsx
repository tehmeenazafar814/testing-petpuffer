/* eslint-disable prettier/prettier */
// HeroSection.jsx
import React from 'react'
import { motion } from 'framer-motion'
import heroVideo from '/assets/videos/heroBg1.mp4'
import { HeaderWrapper } from 'components/Header/HeaderWrapper'
import { Menu } from 'components/Header/Menu'

export default function HeroSection({ menuOpen, setMenuOpen }) {
  return (
    <section className="relative h-screen w-full overflow-hidden" id="hero">
      {/* Background Video */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 size-full object-cover"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Header on top of Video */}
      <div className="absolute left-0 top-0 z-20 w-full">
        <HeaderWrapper
          onMenuClick={() => setMenuOpen(true)}
          menuOpen={menuOpen}
        />
        <div className="mt-40">
          <Menu
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            showDesktopMenu={true}
          />
        </div>
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 mt-36 flex h-full flex-col items-center justify-center px-6 text-center text-white md:px-16 md:text-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.p className="font-bold uppercase tracking-wide text-white">
          Experience Your
        </motion.p>
        <motion.h1 className="mt-1 text-3xl font-bold uppercase tracking-wide md:max-w-lg md:text-5xl">
          Natural Glow
        </motion.h1>
        <motion.p className="mt-4 max-w-md text-sm md:text-lg">
          Through Moroccan Hammam Rituals Luxurious | Natural Skincare | Ancient
          Moroccan Rituals
        </motion.p>
        <motion.button className="mx-auto mt-4 w-fit rounded-md bg-white px-6 py-3 text-sm font-medium text-text transition hover:bg-secondary hover:text-white md:mx-0">
          Shop Now
        </motion.button>
      </motion.div>
    </section>
  )
}
