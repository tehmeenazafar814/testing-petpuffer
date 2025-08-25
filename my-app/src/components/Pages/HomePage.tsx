/* eslint-disable prettier/prettier */
import FadeInWhenVisible from 'components/Animate/FadeInWhenVisible'
import AvailableSection from 'components/Sections/AvailableSection'
import BestSellerSection from 'components/Sections/BestSellersSection'
import EssentialsSection from 'components/Sections/EssentialsSection'
import ExclusiveSection from 'components/Sections/ExclusiveSection'
import HeroSection from 'components/Sections/HeroSection'
import ShopOurIGSection from 'components/Sections/InstaSection'
import ShopByCategory from 'components/Sections/ShopByCategory'
import ShopSection from 'components/Sections/ShopSection'
import VideoGallery from 'components/Sections/VideoCarousel/VideoGallery'
import VirtualTryOnSection from 'components/Sections/VirtualTryOnSection'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <FadeInWhenVisible>
        <ShopSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <EssentialsSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <ExclusiveSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <AvailableSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <BestSellerSection />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <section className="py-6 md:px-10">
          <VideoGallery />
        </section>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <ShopByCategory />
      </FadeInWhenVisible>

      {/* <VirtualTryOnSection /> */}

      {/* <ShopOurIGSection /> */}
    </>
  )
}
