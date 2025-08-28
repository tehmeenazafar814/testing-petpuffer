/* eslint-disable prettier/prettier */
import React from 'react'

const AvailableSection = () => {
  return (
    <section className="bg-background px-4 py-10 md:px-20">
      <div className="flex flex-col overflow-hidden rounded-xl bg-white md:flex-row">
        {/* Image container */}
        <div className="w-full md:w-1/2">
          <video
            src="/assets/videos/video.mp4"
            className="size-full object-cover md:rounded-l-xl"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        </div>

        {/* Text content */}
        <div className="flex w-full flex-col items-center justify-center px-6 py-8 text-center md:w-1/2 md:items-center md:px-12 md:text-left">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-text">
            Selling Worldwide
          </p>
          <h2 className="mb-4 max-w-sm text-center text-3xl font-bold uppercase leading-tight text-primary md:text-4xl">
            Authentic Radiance From Morocco To You
          </h2>
          <p className="mb-6 max-w-sm text-center text-base font-normal text-text md:text-lg">
            Moroccan Glow delivers hand-sourced, organic treasures from Morocco
            plant-based, cruelty-free, and rooted in heritage. Every purchase
            supports local women artisans through fair trade.
          </p>
          <button className="rounded border border-text px-6 py-2 text-sm font-medium text-text transition-colors duration-300 hover:border-0 hover:bg-secondary hover:text-white">
            Read More
          </button>
        </div>
      </div>
    </section>
  )
}

export default AvailableSection
