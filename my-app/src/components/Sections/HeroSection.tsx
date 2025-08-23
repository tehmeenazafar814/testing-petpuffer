/* eslint-disable prettier/prettier */
import React from 'react'
import heroImage from '/assets/images/heroBg.jpg'

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="flex flex-col md:h-[80vh] md:flex-row-reverse">
        {/* Image (70% width on desktop) */}
        <div
          className="h-64 w-full bg-cover bg-center py-5 md:h-auto md:basis-[70%]"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        {/* Content (30% width on desktop) */}
        <div className="container flex flex-col justify-center px-6 py-10 text-center md:basis-[30%] md:px-16 md:text-left">
          <p className="font-bold uppercase tracking-wide text-primary">
            Just Dropped
          </p>
          <h1 className="mt-1 text-3xl font-bold uppercase tracking-wide text-primary md:max-w-sm md:text-4xl">
            Eyeshadow Brushes
          </h1>
          <p className="mt-4 text-text md:max-w-xs md:text-lg">
            Blend, shade, and pack on color with our four new ultra-soft,
            precisely-shaped eyeshadow brushes.
          </p>
          <button className="mx-auto mt-6 w-fit rounded-md bg-white px-6 py-3 text-sm font-medium text-text transition hover:bg-text hover:text-white md:mx-0">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}
