/* eslint-disable prettier/prettier */
import React, { useState } from 'react'

const igPosts = [
  {
    src: 'https://scontent.cdninstagram.com/v/t51.82787-15/536927597_18482024074072786_5170118037341766934_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=1&ccb=1-7&_nc_sid=18de74&_nc_ohc=taCcWUVGEjQQ7kNvwERXosp&_nc_oc=Adl8gtOUXl7iMmyJAQhSsJGb_WLiB4ztyg_a5kmwBYwoksbnLKuEl_Qf-rSdXd81-Go&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=XbE5NlKkGPkmPpz0IVgEnw&oh=00_AfW08z8loV8aHAdLlv21uDPIdbCB2rT0c8VqES7g311ytA&oe=68B10E0A',
    size: 'col-span-2 row-span-2',
    username: 'fashionista',
    caption: 'Loving the new summer collection! 🌸'
  }, // large
  {
    src: 'https://scontent.cdninstagram.com/v/t51.82787-15/536927597_18482024074072786_5170118037341766934_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=1&ccb=1-7&_nc_sid=18de74&_nc_ohc=taCcWUVGEjQQ7kNvwERXosp&_nc_oc=Adl8gtOUXl7iMmyJAQhSsJGb_WLiB4ztyg_a5kmwBYwoksbnLKuEl_Qf-rSdXd81-Go&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=XbE5NlKkGPkmPpz0IVgEnw&oh=00_AfW08z8loV8aHAdLlv21uDPIdbCB2rT0c8VqES7g311ytA&oe=68B10E0A',
    username: 'fashionista',
    caption: 'Loving the new summer collection! 🌸'
  },
  {
    src: 'https://scontent.cdninstagram.com/v/t51.82787-15/536927597_18482024074072786_5170118037341766934_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=1&ccb=1-7&_nc_sid=18de74&_nc_ohc=taCcWUVGEjQQ7kNvwERXosp&_nc_oc=Adl8gtOUXl7iMmyJAQhSsJGb_WLiB4ztyg_a5kmwBYwoksbnLKuEl_Qf-rSdXd81-Go&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=XbE5NlKkGPkmPpz0IVgEnw&oh=00_AfW08z8loV8aHAdLlv21uDPIdbCB2rT0c8VqES7g311ytA&oe=68B10E0A',
    username: 'fashionista',
    caption: 'Loving the new summer collection! 🌸'
  },
  {
    src: 'https://scontent.cdninstagram.com/v/t51.82787-15/536927597_18482024074072786_5170118037341766934_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=1&ccb=1-7&_nc_sid=18de74&_nc_ohc=taCcWUVGEjQQ7kNvwERXosp&_nc_oc=Adl8gtOUXl7iMmyJAQhSsJGb_WLiB4ztyg_a5kmwBYwoksbnLKuEl_Qf-rSdXd81-Go&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=XbE5NlKkGPkmPpz0IVgEnw&oh=00_AfW08z8loV8aHAdLlv21uDPIdbCB2rT0c8VqES7g311ytA&oe=68B10E0A',
    username: 'fashionista',
    caption: 'Loving the new summer collection! 🌸'
  },
  {
    src: 'https://scontent.cdninstagram.com/v/t51.82787-15/536927597_18482024074072786_5170118037341766934_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=1&ccb=1-7&_nc_sid=18de74&_nc_ohc=taCcWUVGEjQQ7kNvwERXosp&_nc_oc=Adl8gtOUXl7iMmyJAQhSsJGb_WLiB4ztyg_a5kmwBYwoksbnLKuEl_Qf-rSdXd81-Go&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=XbE5NlKkGPkmPpz0IVgEnw&oh=00_AfW08z8loV8aHAdLlv21uDPIdbCB2rT0c8VqES7g311ytA&oe=68B10E0A',
    username: 'fashionista',
    caption: 'Loving the new summer collection! 🌸'
  }
]

const ShopOurIGSection = () => {
  const [selectedPost, setSelectedPost] = useState(null)

  const openModal = (post) => setSelectedPost(post)
  const closeModal = () => setSelectedPost(null)

  return (
    <section className="px-4 md:py-12">
      {/* Heading */}
      <h2 className="mb-10 w-full px-2 text-center text-3xl font-semibold text-primary md:text-4xl">
        Shop Our IG
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
