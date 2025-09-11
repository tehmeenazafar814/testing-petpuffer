/* eslint-disable prettier/prettier */
import { Play } from 'lucide-react'
import React, { useRef, useEffect, useState } from 'react'

export function VideoCard({
  src,
  title,
  price,
  image,
  onClick
}: {
  src: string
  title: string
  price: string
  image: string
  onClick?: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const playVideo = () => {
    videoRef.current
      ?.play()
      .then(() => setIsPlaying(true))
      .catch(() => {})
  }

  const pauseVideo = () => {
    videoRef.current?.pause()
    setIsPlaying(false)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.pause()

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [])

  return (
    <div
      className="relative mx-auto aspect-[3/4] h-[30vh] w-full max-w-[320px] overflow-hidden rounded border-2 border-primary shadow-lg md:h-auto"
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      onTouchStart={playVideo}
      onTouchEnd={pauseVideo}
      onClick={() => {
        playVideo()
        onClick?.()
      }}
    >
      <video
        ref={videoRef}
        src={src}
        className="size-full object-cover"
        muted
        loop
        playsInline
        autoPlay
      />

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="rounded-full bg-white/50 p-3">
            <Play className="fill-red text-red" />
          </button>
        </div>
      )}

      <div className="absolute inset-x-2 bottom-2 flex flex-col items-start justify-between gap-2 rounded-md border border-primary bg-white/70 p-2 text-sm text-black md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/shop1.webp"
            alt={title}
            className="size-12 rounded border border-primary object-cover"
          />
          <div className="space-y-2">
            <div className="mb-1 text-sm font-bold">{title}</div>
            <div className="text-sm font-semibold">{price}</div>
          </div>
        </div>
        <button className="w-full rounded-md bg-primary p-2 text-[12px] font-semibold text-white shadow-sm hover:animate-pulse hover:bg-white hover:text-black md:w-auto">
          <span className="inline text-xs md:block">ADD TO</span>
          <span className="inline text-xs md:block">BAG</span>
        </button>
      </div>
    </div>
  )
}
