/* eslint-disable prettier/prettier */
import React from 'react'
import leftImage from '/assets/images/essentials.jpg' // replace with your actual image
import rightImage from '/assets/images/essentials1.jpg' // replace with your actual image

export default function EssentialsSection() {
  return (
    <section className="w-full bg-background py-12">
      <div className="container mx-auto grid grid-cols-1 items-center gap-6 md:grid-cols-3 md:gap-10 md:px-8">
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
              Makeup Bag Essentials
            </h2>
            <p className="mt-4 text-lg leading-tight text-text">
              vegan, cruelty-free, and shaped to fit the eye – our four new{' '}
              <span className="font-semibold">eyeshadow brushes</span> are
              available in multiple shapes and densities.
            </p>
            <p className="mt-3 text-lg leading-tight text-text">
              use them together to create natural to bold eye looks.
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
