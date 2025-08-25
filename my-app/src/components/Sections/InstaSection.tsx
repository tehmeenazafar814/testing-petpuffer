/* eslint-disable prettier/prettier */
import React from 'react'

const igPosts = [
  {
    src: 'https://scontent.cdninstagram.com/v/t51.82787-15/536927597_18482024074072786_5170118037341766934_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=1&ccb=1-7&_nc_sid=18de74&_nc_ohc=taCcWUVGEjQQ7kNvwERXosp&_nc_oc=Adl8gtOUXl7iMmyJAQhSsJGb_WLiB4ztyg_a5kmwBYwoksbnLKuEl_Qf-rSdXd81-Go&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=XbE5NlKkGPkmPpz0IVgEnw&oh=00_AfW08z8loV8aHAdLlv21uDPIdbCB2rT0c8VqES7g311ytA&oe=68B10E0A',
    size: 'col-span-2 row-span-2'
  }, // large
  {
    src: 'https://scontent.cdninstagram.com/v/t51.82787-15/536927597_18482024074072786_5170118037341766934_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=1&ccb=1-7&_nc_sid=18de74&_nc_ohc=taCcWUVGEjQQ7kNvwERXosp&_nc_oc=Adl8gtOUXl7iMmyJAQhSsJGb_WLiB4ztyg_a5kmwBYwoksbnLKuEl_Qf-rSdXd81-Go&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=XbE5NlKkGPkmPpz0IVgEnw&oh=00_AfW08z8loV8aHAdLlv21uDPIdbCB2rT0c8VqES7g311ytA&oe=68B10E0A'
  },
  {
    src: 'https://scontent.cdninstagram.com/v/t51.82787-15/536927597_18482024074072786_5170118037341766934_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=1&ccb=1-7&_nc_sid=18de74&_nc_ohc=taCcWUVGEjQQ7kNvwERXosp&_nc_oc=Adl8gtOUXl7iMmyJAQhSsJGb_WLiB4ztyg_a5kmwBYwoksbnLKuEl_Qf-rSdXd81-Go&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=XbE5NlKkGPkmPpz0IVgEnw&oh=00_AfW08z8loV8aHAdLlv21uDPIdbCB2rT0c8VqES7g311ytA&oe=68B10E0A'
  },
  {
    src: 'https://scontent.cdninstagram.com/v/t51.82787-15/536927597_18482024074072786_5170118037341766934_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=1&ccb=1-7&_nc_sid=18de74&_nc_ohc=taCcWUVGEjQQ7kNvwERXosp&_nc_oc=Adl8gtOUXl7iMmyJAQhSsJGb_WLiB4ztyg_a5kmwBYwoksbnLKuEl_Qf-rSdXd81-Go&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=XbE5NlKkGPkmPpz0IVgEnw&oh=00_AfW08z8loV8aHAdLlv21uDPIdbCB2rT0c8VqES7g311ytA&oe=68B10E0A'
  },
  {
    src: 'https://scontent.cdninstagram.com/v/t51.82787-15/536927597_18482024074072786_5170118037341766934_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=1&ccb=1-7&_nc_sid=18de74&_nc_ohc=taCcWUVGEjQQ7kNvwERXosp&_nc_oc=Adl8gtOUXl7iMmyJAQhSsJGb_WLiB4ztyg_a5kmwBYwoksbnLKuEl_Qf-rSdXd81-Go&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=XbE5NlKkGPkmPpz0IVgEnw&oh=00_AfW08z8loV8aHAdLlv21uDPIdbCB2rT0c8VqES7g311ytA&oe=68B10E0A'
  }
]

const ShopOurIGSection = () => {
  return (
    <section className="px-4 py-12">
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
              className={`relative overflow-hidden rounded-xl ${
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

        <div className="mt-4 grid auto-rows-[180px] grid-cols-2 gap-3 [direction:rtl] sm:auto-rows-[200px] sm:grid-cols-3 md:auto-rows-[250px] md:grid-cols-4">
          {igPosts.map((post, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl ${
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

      {/* Plus button */}
      <div className="mt-8 flex justify-center">
        <button className="text-2xl font-light text-gray-800">+</button>
      </div>
    </section>
  )
}

export default ShopOurIGSection
