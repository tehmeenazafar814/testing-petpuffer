/* eslint-disable prettier/prettier */
import React from 'react'
import leftImage from '/assets/images/essentials.jpg' // replace with your actual image
import rightImage from '/assets/images/essentials1.jpg' // replace with your actual image

export default function EssentialsSection() {
  return (
    <section className="w-full bg-background py-6 md:py-10">
      <div className="container mx-auto grid grid-cols-1 items-center gap-6 md:grid-cols-3 md:gap-0 md:px-8">
        {/* Left Image */}
        <img
          src={leftImage}
          alt="Makeup Brushes"
          className="h-auto w-full rounded object-cover"
        />

        {/* Middle Content */}
        <div className="h-full bg-white text-center md:text-left">
          <div className="px-10 py-16 text-center md:px-20">
            <h2 className="text-3xl font-bold uppercase text-primary md:text-4xl">
              Moroccan Spa Experience Kit
            </h2>
            <p className="mt-4 text-lg leading-tight text-text">
              The secret to natural beauty through our Moroccan Hammam
              experience, designed to purify, relax and rejuvenate.
            </p>
            <p className="mt-3 text-lg leading-tight text-text">
              Black Soap | Argan Oil | Silk Exfoliation Glove | Argan Soap |
              Akker Fassi
            </p>
            <button className="mt-6 rounded-md border border-text px-6 py-2 text-sm font-medium text-text transition hover:border-0 hover:bg-secondary hover:text-white">
              shop now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <img
          src={rightImage}
          alt="Makeup Palette"
          className="h-auto w-full rounded object-cover"
        />
      </div>
    </section>
  )
}
