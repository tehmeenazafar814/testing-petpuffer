/* eslint-disable prettier/prettier */
import React from 'react'

export default function VirtualTryOnSection() {
  return (
    <section
      className="flex h-[70vh] w-full items-center justify-center py-10"
      style={{
        backgroundImage: 'url(/assets/images/virtualBg.jpg)',
        backgroundSize: 'cover'
      }}
    >

      <div className="mx-auto max-w-sm rounded bg-black/40 p-4 text-center md:bg-transparent">
        <h1 className="mt-1 text-2xl font-bold uppercase tracking-tight text-white md:max-w-sm md:text-3xl md:text-primary">
          Virtual Try-On
        </h1>
        <p className="my-4 hidden text-lg md:block">
          try on lipsticks, blushes, & more to discover your new fave shade.
        </p>
        <button className="mx-auto mt-4 w-fit rounded-md bg-white px-6 py-3 text-sm font-medium text-text transition hover:bg-text hover:text-white md:mx-0">
          Discover Now
        </button>
      </div>
    </section>
  )
}
