/* eslint-disable prettier/prettier */
import React from 'react'

const ExclusiveSection = () => {
  return (
    <section className="bg-background px-4 py-10 md:px-20">
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
            ONLINE EXCLUSIVE
          </p>
          <h2 className="mb-4 text-center text-3xl font-bold leading-tight text-primary md:text-4xl">
            FREE <br /> BRUSH HOLDER
          </h2>
          <p className="mb-6 max-w-sm text-center text-base font-normal text-text md:text-lg">
            Get a free, limited-edition{' '}
            <span className="font-semibold">brush holder</span> with any
            accessory bundle purchase – perfect for keeping your new eyeshadow
            brushes organized and ready to go.
          </p>
          <p className="mb-8 max-w-sm text-center text-xs leading-tight text-text">
            Free with any accessory bundle purchase. While supplies last. Offer
            ends <span className="font-semibold">08/24/25 @ 11:59 PM PST</span>.
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
