/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    id: 1,
    text: 'I ordered from here last week and they threw in some samples of the Klaires skincare, and I just have to say, I am in LOVE.',
    author: 'Dannii Thomas',
    rating: 5
  },
  {
    id: 2,
    text: 'Amazing service! Super quick delivery and the products are exactly as described. Highly recommend!',
    author: 'Sarah Williams',
    rating: 5
  },
  {
    id: 3,
    text: 'Excellent customer support and quality products. I’m really happy with my purchase!',
    author: 'Michael Johnson',
    rating: 4
  }
]

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0)

  const prevReview = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const nextReview = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="px-6 py-12 md:px-20">
      <h2 className="mb-6 w-full px-2 text-center text-3xl font-bold text-primary md:text-4xl">
        What Our Customers Say
      </h2>

      <div className="mx-auto max-w-5xl text-center">
        {/* Review Card */}
        <div className="relative rounded-lg p-6">
          <p className="mb-4 text-sm leading-relaxed text-text md:text-base">
            {reviews[current].text}
          </p>

          <p className="mt-4 text-sm font-medium text-text">
            — {reviews[current].author}
          </p>

          {/* Rating */}
          <div className="mt-2 flex justify-center">
            {[...Array(reviews[current].rating)].map((_, i) => (
              <span key={i} className="text-lg text-primary">
                ★
              </span>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevReview}
            className="absolute -left-5 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-100"
          >
            <ChevronLeft className="size-5 text-secondary" />
          </button>
          <button
            onClick={nextReview}
            className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-100"
          >
            <ChevronRight className="size-5 text-secondary" />
          </button>
        </div>
      </div>
    </section>
  )
}
