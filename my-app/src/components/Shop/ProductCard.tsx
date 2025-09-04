/* eslint-disable prettier/prettier */
import React from 'react'

interface Product {
  id: number
  name: string
  desc: string
  price: number
  oldPrice?: number | null
  img: string
  tag?: string
  rating?: number
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative w-full shrink-0 snap-start overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md md:w-1/4">
      {/* Image + Tag */}
      <div className="relative">
        {product.tag && (
          <span className="absolute left-2 top-2 rounded bg-primary px-2 py-0.5 text-xs uppercase text-white">
            {product.tag}
          </span>
        )}
        <img
          src={product.img}
          alt={product.name}
          className="mb-20 h-80 w-full rounded-t-lg object-cover"
        />
      </div>

      {/* Info + Add to Cart (slides up) */}
      <div className="absolute bottom-0 w-full translate-y-14 bg-white/95 px-4 py-3 backdrop-blur-sm transition-transform duration-300 ease-in-out group-hover:translate-y-0">
        {/* Rating Stars */}
        <div className="mb-1 flex items-center space-x-0.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`size-4 ${
                i < (product.rating || 0) ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
            </svg>
          ))}
        </div>

        {/* Name + Price */}
        <div className="flex items-center justify-between">
          <h3 className="font-medium capitalize text-gray-800">
            {product.name}
          </h3>
          <div className="flex items-center gap-1">
            <p className="font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            {product.oldPrice && (
              <p className="text-sm text-gray-400 line-through">
                ${product.oldPrice}
              </p>
            )}
          </div>
        </div>

        <p className="text-xs text-gray-500">{product.desc}</p>

        {/* Add to Cart Button */}
        <button className="mt-3 w-full rounded-md bg-secondary px-3 py-2 text-xs font-medium text-white transition hover:bg-text">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
