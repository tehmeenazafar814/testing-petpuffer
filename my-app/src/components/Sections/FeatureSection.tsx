/* eslint-disable prettier/prettier */
import React from 'react'

export default function FeatureSection() {
  return (
    <section className="bg-background px-4 py-10 md:px-20 md:py-0">
      <div className="flex flex-col items-center justify-center gap-8 text-text md:flex-row md:gap-14">
        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-4 md:text-left">
          <img src="/assets/icons/1.svg" className="size-14" alt="icon" />
          <p className="text-lg font-semibold">Unique Ingredient</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-4 md:text-left">
          <img src="/assets/icons/2.svg" className="size-14" alt="icon" />
          <p className="text-lg font-semibold">Results-driven</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-4 md:text-left">
          <img src="/assets/icons/3.svg" className="size-14" alt="icon" />
          <p className="text-lg font-semibold">Long-lasting Hydration</p>
        </div>
      </div>
    </section>
  )
}
