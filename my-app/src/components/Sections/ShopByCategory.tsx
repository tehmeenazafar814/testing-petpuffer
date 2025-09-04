/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  { title: 'LIPS', image: '/assets/images/catBg.jpeg' },
  { title: 'FRAGRANCE', image: '/assets/images/catBg.jpeg' },
  { title: 'BLUSH', image: '/assets/images/catBg.jpeg' },
  { title: 'EYES', image: '/assets/images/catBg.jpeg' },
  { title: 'FACE', image: '/assets/images/catBg.jpeg' }
]

const ShopByCategory = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="px-4 md:py-10">
      <h2 className="mb-6 w-full px-2 text-center text-3xl font-bold text-primary md:text-4xl">
        Shop by Category
      </h2>

      <div className="relative py-6">
        {/* === DESKTOP CAROUSEL (3 visible) === */}
        <div className="hidden gap-6 overflow-hidden md:flex">
          {Array.from({ length: 3 }).map((_, i) => {
            const index = (currentIndex + i) % categories.length
            const cat = categories[index]
            return (
              <div
                key={index}
                className="relative flex-1 overflow-hidden rounded-xl shadow-md transition hover:scale-[1.02]"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-auto w-full object-cover"
                />
                {/* <video
                  src={categories[currentIndex].image}
                  autoPlay
                  loop
                  muted
                  className="h-auto w-full object-cover"
                /> */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <p className="text-2xl font-semibold uppercase text-white drop-shadow">
                    {cat.title}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Desktop Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-md md:block"
        >
          <ChevronLeft className="size-5 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-md md:block"
        >
          <ChevronRight className="size-5 text-gray-600" />
        </button>

        {/* === MOBILE SLIDER (1 at a time) === */}
        <div className="relative block md:hidden">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={categories[currentIndex].image}
              alt={categories[currentIndex].title}
              className="h-[400px] w-full object-cover"
            />
            {/* <video
              src={categories[currentIndex].image}
              autoPlay
              loop
              muted
              className="h-[400px] w-full object-cover"
            /> */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <p className="text-xl font-bold uppercase text-white drop-shadow">
                {categories[currentIndex].title}
              </p>
            </div>
          </div>

          {/* Mobile Nav Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
          >
            <ChevronLeft className="size-5 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
          >
            <ChevronRight className="size-5 text-primary" />
          </button>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {categories.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`size-2 rounded-full transition ${
                  i === currentIndex ? 'bg-gray-900' : 'bg-gray-400'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Shop Now Button */}
      <div className="mt-4 flex justify-center">
        <button className="rounded border border-text px-6 py-2 text-sm font-medium text-text transition-colors duration-300 hover:border-0 hover:bg-secondary hover:text-white">
          shop now
        </button>
      </div>
    </section>
  )
}

export default ShopByCategory
