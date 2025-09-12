/* eslint-disable prettier/prettier */
// import FadeInWhenVisible from 'components/Animate/FadeInWhenVisible'
import AboutSection from 'components/Sections/AboutSection'
// import AvailableSection from 'components/Sections/AvailableSection'
// import BestSellerSection from 'components/Sections/BestSellersSection'
import ConsultBanner from 'components/Sections/ConsultBanner'
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
import StickySideButton from 'components/StickySideButton'
// import VirtualTryOnSection from 'components/Sections/VirtualTryOnSection'
import React from 'react'

export default function HomePage() {
  return (
    <div className="bg-background">
      <HeroSection />
      <PartnerMarquee />
      <ShopSection />
      <section className="bg-background md:px-10 md:pb-12">
        <VideoGallery />
        {/* <VideoCarousel /> */}
      </section>
      <EssentialsSection />
      {/* <AvailableSection /> */}
      <AboutSection />
      <ExclusiveSection />
      <FeatureSection />
      <ReviewsSection />
      <ShopByCategory />
      <ConsultBanner />
      <ShopOurIGSection />
      {/* <BestSellerSection /> */}
      {/* <VirtualTryOnSection /> */}
      <StickySideButton />
    </div>
  )
}
