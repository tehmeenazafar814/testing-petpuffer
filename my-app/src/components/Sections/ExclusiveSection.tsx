/* eslint-disable prettier/prettier */
import React from 'react'

const ExclusiveSection = () => {
  return (
    <section className="bg-background px-4 md:px-20 md:py-10">
      <div className="flex flex-col overflow-hidden rounded-xl bg-white md:flex-row">
        {/* Image container */}
        <div className="w-full md:w-1/2">
          <video
            src="https://cdn.shopify.com/videos/c/o/v/3809451510ff46b7bb13ba0ae6903112.mp4"
            className="size-full object-cover md:rounded-l-xl"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Text content */}
        <div className="flex w-full flex-col items-center justify-center px-6 py-8 text-center md:w-1/2 md:items-center md:px-12 md:text-left">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-text">
            Moroccan Glow Exclusive
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold leading-tight text-primary md:text-4xl">
            Moroccan <br /> Hammam Kit
          </h2>
          <p className="mb-6 max-w-sm text-center text-base font-normal text-text md:text-lg">
            Elevate your skincare with our{' '}
            <span className="font-semibold">100% organic</span> Moroccan Black
            Soap infused with Argan, paired with a Premium Silk Exfoliating
            Kesse Glove.
          </p>
          <p className="mb-8 max-w-sm text-center text-xs leading-tight text-text">
            You save upto <span className="font-semibold">£30</span> with this
            bundle purchase.
          </p>
          <button className="rounded border border-text px-6 py-2 text-sm font-medium text-text transition-colors duration-300 hover:border-0 hover:bg-secondary hover:text-white">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default ExclusiveSection
