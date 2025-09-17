/* eslint-disable prettier/prettier */
import { HeaderSecond } from 'components/Header/HeaderSecond'
import { Menu } from 'components/Header/Menu'
import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import faqData from 'utils/faqData.json'

const categories = Object.keys(faqData)

export default function FaqsPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('orders')
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
      <div className="sticky top-0 z-50 shadow-md">
        <HeaderSecond onMenuClick={() => setMenuOpen(true)} />
        {isMobile && (
          <Menu
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            showDesktopMenu={true}
          />
        )}
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold uppercase text-primary md:text-4xl">
          FAQ
        </h2>

        {/* Tabs */}
        <div className="mb-8 mt-16 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setOpenIndex(null)
              }}
              className={`rounded-md border px-4 py-2 text-sm capitalize transition ${
                activeCategory === category
                  ? 'bg-secondary font-medium text-white shadow-sm'
                  : 'bg-white text-text hover:bg-secondary hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-2">
          {faqData[activeCategory].map((question, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between py-4 text-left text-text hover:text-gray-900 focus:outline-none"
              >
                <span className="font-medium capitalize text-primary">
                  {question}
                </span>
                <span className="text-xl font-bold">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-sm text-gray-600">
                  This is where the answer for “{question}” goes. (You can add
                  real answers in the JSON too if needed.)
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
