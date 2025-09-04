/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import products from 'utils/products'
import FilterPanel from './FilterPanel'

export default function ShopComponent() {
  const [showFilter, setShowFilter] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)
  const [activePrice, setActivePrice] = useState(null) // ⬅ new
  const [sortBy, setSortBy] = useState('featured')

  // Unique categories
  const categories = [...new Set(products.map((p) => p.category))]

  // Filtering
  let filteredProducts = products

  if (activeCategory) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === activeCategory
    )
  }

  if (activePrice) {
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= activePrice.min && p.price <= activePrice.max
    )
  }

  // Sorting
  if (sortBy === 'low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sortBy === 'high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  }

  return (
    <section className="bg-background px-4 py-8 md:px-12 lg:px-20">
      {/* Top bar */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="text-sm text-gray-600">
          {filteredProducts.length} products
        </p>
        <div className="flex gap-3">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-600 focus:outline-none"
          >
            <option value="featured">sort by: featured</option>
            <option value="low">price: low to high</option>
            <option value="high">price: high to low</option>
          </select>
          <button
            onClick={() => setShowFilter(true)}
            className="rounded border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
          >
            filter
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="group relative flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md"
          >
            {p.tag && (
              <span className="absolute right-2 top-2 rounded bg-gray-900 px-2 py-0.5 text-xs font-medium uppercase text-white">
                {p.tag}
              </span>
            )}
            <img
              src={p.img}
              alt={p.name}
              className="h-80 w-full object-cover"
            />
            <div className="flex flex-1 flex-col justify-between p-3">
              <div className="mb-2 flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`size-4 ${
                      i < p.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <h3 className="line-clamp-1 text-sm font-medium capitalize text-gray-800">
                  {p.name}
                </h3>
                <div className="flex items-center gap-1">
                  <p className="text-sm font-semibold text-gray-900">
                    ${p.price.toFixed(2)}
                  </p>
                  {p.oldPrice && (
                    <p className="text-xs text-gray-400 line-through">
                      ${p.oldPrice}
                    </p>
                  )}
                </div>
              </div>
              <p className="mt-1 text-xs text-gray-500">{p.desc}</p>
              <button className="mt-3 w-full rounded-md bg-secondary px-3 py-2 text-xs font-medium text-white transition hover:bg-text">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Panel */}
      {showFilter && (
        <FilterPanel
          onClose={() => setShowFilter(false)}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activePrice={activePrice} // ⬅ new
          setActivePrice={setActivePrice} // ⬅ new
          total={filteredProducts.length}
        />
      )}
    </section>
  )
}
