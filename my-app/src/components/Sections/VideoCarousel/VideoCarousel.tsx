/* eslint-disable prettier/prettier */
import React from 'react'
import { VideoCard } from './VideoCard'

const videos = [
  {
    src: 'https://cdn3.fireworktv.com/medias/2025/7/15/1752618913-ijduoprb/watermarked/720/amandacurseaden.mp4',
    title: 'Top 1',
    price: '$35.00',
    image: '/assets/images/products/test.jpg'
  },
  {
    src: 'https://cdn3.fireworktv.com/medias/2025/7/15/1752618913-ijduoprb/watermarked/720/amandacurseaden.mp4',
    title: 'Top 2',
    price: '$29.00',
    image: '/assets/images/products/test.jpg'
  },
  {
    src: 'https://cdn3.fireworktv.com/medias/2025/7/15/1752618913-ijduoprb/watermarked/720/amandacurseaden.mp4',
    title: 'Top 3',
    price: '$55.00',
    image: '/assets/images/products/test.jpg'
  },
  {
    src: 'https://cdn3.fireworktv.com/medias/2025/7/15/1752618913-ijduoprb/watermarked/720/amandacurseaden.mp4',
    title: 'Top 3',
    price: '$55.00',
    image: '/assets/images/products/test.jpg'
  },
  {
    src: 'https://cdn3.fireworktv.com/medias/2025/7/15/1752618913-ijduoprb/watermarked/720/amandacurseaden.mp4',
    title: 'Top 3',
    price: '$55.00',
    image: '/assets/images/products/test.jpg'
  }
]

export function VideoCarousel() {
  return (
    <section className="px-10 md:py-12">
      <div className="scrollbar-hide w-full overflow-x-auto">
        <h2 className="w-full text-center text-4xl font-bold text-primary">
          Trending Now
        </h2>

        <div className="mt-8 flex gap-4 px-2">
          {videos.map((vid, idx) => (
            <VideoCard key={idx} {...vid} />
          ))}
        </div>
      </div>
    </section>
  )
}
