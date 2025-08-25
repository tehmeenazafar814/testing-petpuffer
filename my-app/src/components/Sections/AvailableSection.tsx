/* eslint-disable prettier/prettier */
import React from 'react'

const AvailableSection = () => {
  return (
    <section className="bg-background px-4 py-10 md:px-20">
      <div className="flex flex-col overflow-hidden rounded-xl bg-white md:flex-row">
        {/* Image container */}
        <div className="w-full md:w-1/2">
          <video
            src="https://cdn.shopify.com/videos/c/o/v/5e5d37e6365c4f66a32e56f88cfb99cc.mp4"
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
            Now Available
          </p>
          <h2 className="mb-4 max-w-sm text-center text-3xl font-bold uppercase leading-tight text-[#9d7d85] md:text-4xl">
            True brown kylash volume mascara
          </h2>
          <p className="mb-6 max-w-sm text-center text-base font-normal text-text md:text-lg">
            your lashes, but fuller – our best-selling volumizing formula
            defines, lifts, and holds curl without clumping, smudging, or
            flaking.
          </p>
          <button className="rounded border border-text px-6 py-2 text-sm font-medium text-text transition-colors duration-300 hover:bg-text hover:text-white">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default AvailableSection
