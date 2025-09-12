/* eslint-disable prettier/prettier */
import React, { useState } from 'react'

const igPosts = [
  {
    src: '/assets/images/shop1.webp',
    size: 'col-span-2 row-span-2',
    username: 'fashionista',
    caption: 'Loving the new summer collection! 🌸'
  }, // large
  {
    src: '/assets/images/shop1.webp',
    username: 'fashionista',
    caption: 'Loving the new summer collection! 🌸'
  },
  {
    src: '/assets/images/shop1.webp',
    username: 'fashionista',
    caption: 'Loving the new summer collection! 🌸'
  },
  {
    src: '/assets/images/shop1.webp',
    username: 'fashionista',
    caption: 'Loving the new summer collection! 🌸'
  },
  {
    src: '/assets/images/shop1.webp',
    username: 'fashionista',
    caption: 'Loving the new summer collection! 🌸'
  }
]

const ShopOurIGSection = () => {
  const [selectedPost, setSelectedPost] = useState(null)

  const openModal = (post) => setSelectedPost(post)
  const closeModal = () => setSelectedPost(null)

  return (
    <section className="px-4 py-8 md:py-12">
      {/* Heading */}
      <h2 className="mb-10 w-full px-2 text-center text-3xl font-semibold text-primary md:text-4xl">
        #moroccanglow.official
      </h2>

      {/* Grid */}
      <div className="mx-auto max-w-7xl">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-3 md:auto-rows-[250px] md:grid-cols-4">
          {igPosts.map((post, i) => (
            <div
              key={i}
              onClick={() => openModal(post)}
              className={`relative cursor-pointer overflow-hidden rounded-xl ${
                post.size || ''
              }`}
            >
              <img
                src={post.src}
                alt={`IG post ${i + 1}`}
                className="size-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeModal}
        >
          <div
            className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-lg sm:flex-row"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            {/* Left: Image */}
            <div className="bg-black sm:w-1/2">
              <img
                src={selectedPost.src}
                alt="Selected post"
                className="size-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-primary">
                @{selectedPost.username}
              </h3>
              <p className="mt-4 text-text">{selectedPost.caption}</p>
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1 text-white hover:bg-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default ShopOurIGSection
