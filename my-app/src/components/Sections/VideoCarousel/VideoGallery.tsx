/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react'
import { VideoCard } from './VideoCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import VideoOverlay from './VideoOverlay'

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
    title: 'Top 4',
    price: '$42.00',
    image: '/assets/images/products/test.jpg'
  },
  {
    src: 'https://cdn3.fireworktv.com/medias/2025/7/15/1752618913-ijduoprb/watermarked/720/amandacurseaden.mp4',
    title: 'Top 5',
    price: '$38.00',
    image: '/assets/images/products/test.jpg'
  }
]

export default function VideoGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [overlayVideo, setOverlayVideo] = useState(videos[0] || null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  const openOverlay = (video, index: number) => {
    setOverlayVideo(video)
    setCurrentIndex(index)
    setIsOverlayOpen(true)
  }

  const closeOverlay = () => {
    setIsOverlayOpen(false)
    setOverlayVideo(null)
  }

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const width = scrollRef.current.offsetWidth
    scrollRef.current.scrollBy({
      left: direction === 'right' ? width : -width,
      behavior: 'smooth'
    })
  }

  return (
    <div className="relative py-10 text-primary">
      <h2 className="mb-10 w-full whitespace-nowrap px-2 text-center text-3xl font-semibold sm:w-auto md:text-4xl">
        Trending Now
      </h2>

      <div className="overflow-hidden px-2">
        <div
          ref={scrollRef}
          className="flex snap-x gap-4 overflow-x-auto scroll-smooth px-8 [&::-webkit-scrollbar]:hidden"
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="w-[calc(50vw-1rem)] shrink-0 snap-start md:w-1/4"
            >
              <VideoCard {...video} onClick={() => openOverlay(video, index)} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop buttons (side-floating) */}
      <div className="hidden md:block">
        <button
          onClick={() => scroll('left')}
          className="bg-red/80 absolute -left-10 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 shadow"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll('right')}
          className="bg-red/80 absolute -right-6 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 shadow"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Mobile buttons (below the videos) */}
      <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
        <button
          onClick={() => scroll('left')}
          className="bg-red/80 rounded-full p-2 shadow"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll('right')}
          className="bg-red/80 rounded-full p-2 shadow"
        >
          <ChevronRight />
        </button>
      </div>

      {isOverlayOpen && overlayVideo && (
        <VideoOverlay
          video={overlayVideo}
          onClose={closeOverlay}
          isMobile={isMobile}
          videos={videos}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          setOverlayVideo={setOverlayVideo}
        />
      )}
    </div>
  )
}
