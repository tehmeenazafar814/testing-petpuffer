/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react'
import {
  X,
  Volume2,
  VolumeX,
  Pause,
  Play,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

interface VideoInfo {
  src: string
  title: string
  price: string
  image: string
}

interface Props {
  video: VideoInfo
  onClose: () => void
  isMobile: boolean
  videos: VideoInfo[]
  currentIndex: number
  setCurrentIndex: (index: number) => void
  setOverlayVideo: (video: VideoInfo | null) => void
}

export default function VideoOverlay({
  video,
  onClose,
  isMobile,
  videos,
  currentIndex,
  setCurrentIndex,
  setOverlayVideo
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(false)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    const vid = videoRef.current
    if (vid) {
      vid.play().catch(() => {})
      vid.muted = muted
    }
  }, [video, muted])

  const toggleMute = () => {
    if (videoRef.current) {
      const newMute = !videoRef.current.muted
      videoRef.current.muted = newMute
      setMuted(newMute)
    }
  }

  const togglePlay = () => {
    const vid = videoRef.current
    if (!vid) return
    if (vid.paused) {
      vid.play().catch(() => {})
      setPlaying(true)
    } else {
      vid.pause()
      setPlaying(false)
    }
  }

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % videos.length
    setCurrentIndex(nextIndex)
    setOverlayVideo(videos[nextIndex])
  }

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length
    setCurrentIndex(prevIndex)
    setOverlayVideo(videos[prevIndex])
  }

  return (
    <div
      className={`fixed z-50 ${
        isMobile
          ? 'inset-0 flex flex-col items-center justify-center bg-black/90'
          : 'bottom-4 right-4'
      }`}
    >
      <div
        className={`relative w-full ${
          isMobile ? 'h-full' : 'h-[60vh] max-w-sm rounded-lg shadow-lg'
        }`}
      >
        <video
          ref={videoRef}
          src={video.src}
          className="size-full rounded-lg object-cover"
          muted={muted}
          loop
          playsInline
          autoPlay
          controls={false}
        />

        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between rounded-md bg-white/70 p-1 text-sm text-black">
          <div className="flex items-center gap-2">
            <img
              src="/assets/images/shop1.webp"
              alt={'test'}
              className="size-10 rounded object-cover"
            />
            <div className="space-y-2">
              <div className="mb-1 text-xs font-bold">Top</div>
              <div className="text-xs font-semibold">$55</div>
            </div>
          </div>
          <button className="w-auto rounded-md bg-primary p-2 text-[12px] font-medium text-white shadow-sm hover:animate-pulse hover:bg-white hover:text-black md:w-auto">
            <span className="inline text-xs md:block">ADD TO </span>
            {isMobile ? <br /> : null}
            <span className="inline text-xs md:block">BAG</span>
          </button>
        </div>

        {/* Close */}
        <div className="absolute left-2 top-2 z-10 flex items-center gap-2 text-white">
          <button onClick={onClose}>
            <X size={28} />
          </button>
        </div>

        {/* Controls */}
        <div className="absolute inset-x-2 bottom-20 z-10 flex items-center justify-between px-2 text-white">
          <div className="flex gap-4">
            <button onClick={togglePlay}>
              {playing ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button onClick={toggleMute}>
              {muted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
          </div>

          {isMobile && (
            <div
              className={`flex ${
                isMobile ? 'flex-col gap-2' : 'flex-row gap-4'
              }`}
            >
              <button onClick={handlePrev}>
                <ChevronUp />
              </button>
              <button onClick={handleNext}>
                <ChevronDown />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
