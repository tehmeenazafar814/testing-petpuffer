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
      className="relative mx-auto aspect-[3/4] h-[30vh] w-full max-w-[320px] overflow-hidden rounded shadow-lg md:h-auto"
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
            <Play className="fill-primary text-primary" />
          </button>
        </div>
      )}
    </div>
  )
}
