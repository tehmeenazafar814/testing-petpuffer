/* eslint-disable prettier/prettier */
import FadeInWhenVisible from 'components/Animate/FadeInWhenVisible'
import AboutSection from 'components/Sections/AboutSection'
// import AvailableSection from 'components/Sections/AvailableSection'
import BestSellerSection from 'components/Sections/BestSellersSection'
import EssentialsSection from 'components/Sections/EssentialsSection'
import ExclusiveSection from 'components/Sections/ExclusiveSection'
import FeatureSection from 'components/Sections/FeatureSection'
import HeroSection from 'components/Sections/HeroSection'
import ShopOurIGSection from 'components/Sections/InstaSection'
import PartnerMarquee from 'components/Sections/PartnerMarquee'
import ReviewsSection from 'components/Sections/ReviewsSection'
import ShopByCategory from 'components/Sections/ShopByCategory'
import ShopSection from 'components/Sections/ShopSection'
// import { VideoCarousel } from 'components/Sections/VideoCarousel/VideoCarousel'
import VideoGallery from 'components/Sections/VideoCarousel/VideoGallery'
// import VirtualTryOnSection from 'components/Sections/VirtualTryOnSection'
import React from 'react'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnerMarquee />
      <FadeInWhenVisible>
        <ShopSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <section className="md:px-10 md:pb-12">
          <VideoGallery />
          {/* <VideoCarousel /> */}
        </section>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <EssentialsSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        {/* <AvailableSection /> */}
        <AboutSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ExclusiveSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FeatureSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ReviewsSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ShopByCategory />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ShopOurIGSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <BestSellerSection />
      </FadeInWhenVisible>
      {/* <VirtualTryOnSection /> */}\
    </>
  )
}
