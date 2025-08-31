/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    id: 1,
    text: 'Good product and fast delivery—exactly as described.',
    author: 'Jesty Klein',
    rating: 5
  },
  {
    id: 2,
    text: 'Best products for skincare, keeps my skin glowing, I use argan oil first thing every morning.',
    author: 'Hannah Grace',
    rating: 5
  },
  {
    id: 3,
    text: 'The Amlou is a family favourite, I use it on toast and even in yoghurt with banana. Yum!',
    author: 'Lucy Cook',
    rating: 4
  },
  {
    id: 4,
    text: 'An amazing product for people with sensitive skin, this soap is now a must in my routine.',
    author: 'Sofia Deborah',
    rating: 4
  },
  {
    id: 5,
    text: 'A lovely gentle exfoliation that keeps my skin soft and supple and has really improved my skin texture.',
    author: 'Priya Singh',
    rating: 4
  }
]

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview()
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const prevReview = () => {
    triggerTransition(() =>
      setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
    )
  }

  const nextReview = () => {
    triggerTransition(() =>
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
    )
  }

  const triggerTransition = (updateFn) => {
    setFade(false)
    setTimeout(() => {
      updateFn()
      setFade(true)
    }, 300)
  }

  return (
    <section
      className="bg-cover bg-center bg-no-repeat px-6 py-12 md:px-20"
      style={{
        backgroundImage: "url('/assets/images/testimonials.jpg')",
        backgroundAttachment: 'fixed'
      }}
    >
      <h2 className="mb-6 w-full px-2 text-center text-3xl font-bold text-primary md:text-4xl">
        What Our Customers Say
      </h2>

      <div className="mx-auto max-w-5xl text-center">
        <div className="relative rounded-lg p-6 backdrop-blur-sm">
          <div
            className={`transition-all duration-700 ${
              fade ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
            }`}
          >
            <p className="mb-4 text-sm leading-relaxed text-text md:text-base">
              {reviews[current].text}
            </p>

            <p className="mt-4 text-sm font-medium text-text">
              — {reviews[current].author}
            </p>

            <div className="mt-2 flex justify-center">
              {[...Array(reviews[current].rating)].map((_, i) => (
                <span key={i} className="text-lg text-primary">
                  ★
                </span>
              ))}
            </div>
          </div>

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
