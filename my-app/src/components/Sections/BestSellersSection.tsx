/* eslint-disable prettier/prettier */
import React from 'react'
import heroImage from '/assets/images/TestBg.jpg'

export default function BestSellerSection() {
  return (
    <section className="relative w-full md:py-12">
      <div className="flex flex-col md:h-[70vh] md:flex-row-reverse">
        {/* Image (70% width on desktop) */}
        <div
          className="h-64 w-full bg-cover bg-center py-5 md:h-auto md:basis-[70%]"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        {/* Content (30% width on desktop) */}
        <div className="container flex flex-col justify-center px-6 py-10 text-center md:basis-[30%] md:px-16 md:text-left">
          <p className="font-bold uppercase tracking-wide text-primary">
            Best Seller
          </p>
          <h1 className="mt-1 text-3xl font-bold uppercase tracking-wide text-primary md:max-w-sm md:text-4xl">
            Hybrid Blush
          </h1>
          <p className="mt-4 text-text md:max-w-xs md:text-lg">
            our first-of-its-kind formula melts into the skin likea cream but
            has the smoothing, soft-focus effects of a powder.
          </p>
          <button className="mx-auto mt-6 w-fit rounded-md bg-white px-6 py-3 text-sm font-medium text-text transition hover:bg-text hover:text-white md:mx-0">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}
