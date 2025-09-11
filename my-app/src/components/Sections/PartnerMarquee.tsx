/* eslint-disable prettier/prettier */
import React from 'react'

const logos = [
  '/assets/images/partners/1.png',
  '/assets/images/partners/2.png',
  '/assets/images/partners/3.png',
  '/assets/images/partners/4.png',
  '/assets/images/partners/5.png',
  '/assets/images/partners/6.png',
  '/assets/images/partners/7.png',
  '/assets/images/partners/8.png',
  '/assets/images/partners/9.png',
  '/assets/images/partners/10.png'
]

export default function PartnerMarquee() {
  return (
    <div className="overflow-hidden py-5">
      <div className="flex w-max animate-marquee">
        {logos.concat(logos).map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Partner ${i + 1}`}
            className="mx-5 h-8 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  )
}
