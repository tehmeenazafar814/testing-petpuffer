/* eslint-disable prettier/prettier */
import React, { useState } from 'react'

export default function FilterPanel({
  onClose,
  categories,
  activeCategory,
  setActiveCategory,
  activePrice,
  setActivePrice,
  total
}) {
  const [openSection, setOpenSection] = useState('category')

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  // Predefined price ranges
  const priceRanges = [
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $200', min: 100, max: 200 },
    { label: 'Above $200', min: 200, max: Infinity }
  ]

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      <div className="absolute right-0 top-0 size-full bg-white shadow-lg transition-transform duration-300 ease-in-out sm:w-[28rem]">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold">Filter</h2>
          <button onClick={onClose} className="text-xl font-bold">
            ×
          </button>
        </div>

        {/* Filter Content */}
        <div className="space-y-4 overflow-y-auto p-4 text-sm">
          {/* Category */}
          <div className="border-b pb-3">
            <button
              onClick={() => toggleSection('category')}
              className="flex w-full items-center justify-between font-medium"
            >
              Category
              <span>{openSection === 'category' ? '−' : '+'}</span>
            </button>
            {openSection === 'category' && (
              <div className="mt-3 grid grid-cols-2 gap-2 text-gray-600">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() =>
                      setActiveCategory(cat === activeCategory ? null : cat)
                    }
                    className={`rounded border px-2 py-1 text-left transition hover:text-black ${
                      activeCategory === cat
                        ? 'border-gray-800 bg-gray-100 font-semibold'
                        : 'border-transparent'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Price Range */}
          <div className="border-b pb-3">
            <button
              onClick={() => toggleSection('price')}
              className="flex w-full items-center justify-between font-medium"
            >
              Price Range
              <span>{openSection === 'price' ? '−' : '+'}</span>
            </button>
            {openSection === 'price' && (
              <div className="mt-3 grid grid-cols-2 gap-2 text-gray-600">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() =>
                      setActivePrice(
                        activePrice?.label === range.label ? null : range
                      )
                    }
                    className={`rounded border px-2 py-1 text-left transition hover:text-black ${
                      activePrice?.label === range.label
                        ? 'border-gray-800 bg-gray-100 font-semibold'
                        : 'border-transparent'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Apply Button */}
          <button
            onClick={onClose}
            className="mt-6 w-full rounded border border-gray-400 px-4 py-2 text-sm font-medium hover:bg-gray-100"
          >
            Show {total} products
          </button>
        </div>
      </div>
    </div>
  )
}
