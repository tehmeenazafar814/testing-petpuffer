/* eslint-disable prettier/prettier */
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'
import React, { useRef } from 'react'

const products = [
  {
    id: 1,
    name: 'Argan Oil',
    desc: 'short bristles • shaded finish',
    price: 22,
    img: '/assets/images/product.jpg',
    tag: 'new'
  },
  {
    id: 2,
    name: 'Argan Oil',
    desc: 'fluffy bristles • diffused finish',
    price: 22,
    img: '/assets/images/product.jpg',
    tag: 'new'
  },
  {
    id: 3,
    name: 'Argan Oil',
    desc: 'tapered shape • diffused finish',
    price: 22,
    img: '/assets/images/product.jpg'
  },
  {
    id: 4,
    name: 'Argan Oil',
    desc: 'flat shape • clean finish',
    price: 22,
    img: '/assets/images/product.jpg',
    tag: 'new'
  },
  {
    id: 5,
    name: 'Argan Oil',
    desc: 'flat shape • clean finish',
    price: 22,
    img: '/assets/images/product.jpg',
    tag: 'new'
  }
]

export default function ShopSection() {
  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth // width of visible area
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="bg-background py-8 md:py-12">
      {/* Heading */}
      <h2 className="mb-10 w-full px-2 text-center text-3xl font-bold text-primary md:text-4xl">
        Best Sellers
      </h2>

      <div className="container mx-auto px-6 md:px-16">
        {/* Carousel Wrapper (with arrows) */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-1 shadow-md hover:bg-gray-100 md:-left-10"
          >
            <ChevronLeftCircle className="size-6 text-secondary" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="scrollbar-hide mx-auto flex snap-x snap-mandatory gap-6 overflow-hidden scroll-smooth md:px-10"
          >
            {products.map((p) => (
              <div
                key={p.id}
                className="group relative w-full shrink-0 snap-start overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md md:w-1/4"
              >
                {/* Image */}
                <div className="relative">
                  {p.tag && (
                    <span className="absolute left-2 top-2 rounded bg-primary px-2 py-0.5 text-sm uppercase text-white">
                      {p.tag}
                    </span>
                  )}
                  <img
                    src={p.img}
                    alt={p.name}
                    className="mb-20 h-96 w-full rounded-t-lg object-cover"
                  />
                </div>

                {/* Info + Add to Cart (slides up) */}
                <div className="absolute bottom-0 w-full translate-y-12 bg-white/90 px-4 py-3 backdrop-blur-sm transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                  {/* Review Stars */}
                  <div className="mb-1 flex items-center space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="size-4 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                      </svg>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="font-medium capitalize">{p.name}</h3>
                    <p className="font-semibold">${p.price}</p>
                  </div>
                  <p className="text-xs text-gray-500">{p.desc}</p>

                  {/* Add to Cart Button */}
                  <button className="mt-3 w-full rounded-md bg-secondary px-3 py-2 text-xs font-medium text-white transition hover:bg-text">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-1 shadow-md hover:bg-gray-100 md:-right-10"
          >
            <ChevronRightCircle className="size-6 text-secondary" />
          </button>
        </div>

        {/* Bottom Button */}
        <div className="mt-10 flex justify-center">
          <button className="rounded-md border border-text px-6 py-2 text-sm font-medium text-text transition hover:border-0 hover:bg-secondary hover:text-white">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}
