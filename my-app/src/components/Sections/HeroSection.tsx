/* eslint-disable prettier/prettier */
import React from 'react'
import { motion } from 'framer-motion'
// import heroImage from '/assets/images/heroBg.jpg'
import heroVideo from '/assets/videos/heroBg1.mp4'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden md:h-screen">
      {/* Full background image */}
      {/* <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      /> */}

      {/* Full background video */}
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

      {/* Overlay (optional for better text contrast) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col justify-center px-6 text-center text-white md:px-16 md:text-left"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.p
          className="font-bold uppercase tracking-wide text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Experience Your
        </motion.p>

        <motion.h1
          className="mt-1 text-3xl font-bold uppercase tracking-wide md:max-w-lg md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Natural Glow
        </motion.h1>

        <motion.p
          className="mt-4 max-w-md text-sm md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Through Moroccan Hammam Rituals Luxurious | Natural Skincare | Ancient
          Moroccan Rituals
        </motion.p>

        <motion.button
          className="mx-auto mt-4 w-fit rounded-md bg-white px-6 py-3 text-sm font-medium text-text transition hover:bg-secondary hover:text-white md:mx-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
      </motion.div>
    </section>
  )
}
