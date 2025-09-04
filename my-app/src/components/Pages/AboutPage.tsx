/* eslint-disable prettier/prettier */
import FeatureSection from 'components/Sections/FeatureSection'
import RecommendedSection from 'components/Sections/RecommendationProductsSection'
import React from 'react'

export default function AboutPage() {
  return (
    <>
      <section
        className="relative flex min-h-[40vh] flex-col items-center justify-center bg-cover bg-center text-center text-white md:min-h-[60vh]"
        style={{ backgroundImage: "url('/assets/images/aboutBg.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 space-y-4 px-4">
          <h1 className="text-3xl font-bold md:text-5xl">About Morocon Glow</h1>
          <p className="mx-auto max-w-2xl text-lg">
            Koba (nkóbá), in Lingala means “turtle,” a nod to our founder’s
            Congolese heritage. Turtles for KOBA symbolise longevity and
            protection, shielding your skin against external aggressors.
          </p>
        </div>
      </section>

      <section className="mt-8 flex flex-col items-center justify-center gap-8 p-4 md:flex-row md:gap-32">
        {/* Image */}
        <img
          src="https://kobaskincare.com/cdn/shop/files/thumbnail_edit-therese-2230-_1_610x@2x.jpg?v=1747348474"
          alt="Therese"
          className="h-auto w-full max-w-sm rounded-lg border border-primary object-cover shadow-lg md:max-w-xl"
        />

        {/* Text */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-medium text-primary md:text-4xl">
            How it all began
          </h2>
          <p className="mx-auto max-w-lg text-left md:mx-0">
            With over a decade in the beauty industry, Therese has worked with
            some of the biggest names in the business, from Clarins to Sarah
            Chapman and L’Oréal. Her journey didn’t stop there. As a
            trailblazing entrepreneur, she built one of the first beauty
            subscription boxes of its kind, shaking up the way we discover
            skincare. Blending her behind-the-scenes insight from global
            powerhouses, her mum’s wisdom as a chemist, and her own struggles
            with dry skin, she couldn’t help but notice one thing: a gap in the
            market for an all-encompassing foot cream.
          </p>
        </div>
      </section>

      <div className="mx-auto my-8 flex max-w-2xl flex-col items-center justify-center gap-5 text-center">
        <p className="text-5xl font-thin text-primary">
          “KOBA skincare offers a range of products that actually work,
          providing visible results and long lasting hydration.”
        </p>
        <p className="text-sm font-semibold">
          Thérèse M’Boungoubaya{' '}
          <span className="font-normal">- Founder & CEO of KOBA skincare</span>
        </p>
      </div>

      <section className="flex flex-col items-center justify-center gap-8 p-4 md:flex-row md:gap-32">
        {/* Image */}
        <img
          src="https://kobaskincare.com/cdn/shop/files/Artboard385_610x@2x.jpg?v=1718617878"
          alt="Therese"
          className="h-auto w-full max-w-sm rounded-lg border border-primary object-cover shadow-lg md:max-w-xl"
        />

        {/* Text */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-medium text-primary md:text-4xl">
            Why KOBA skincare?
          </h2>
          <p className="mx-auto max-w-lg text-left italic md:mx-0">
            "I want to create products people can count on, formulas that do
            what they say, and then some. The future of skincare is rooted in
            wellbeing. It’s about helping people reclaim the parts of themselves
            they’ve felt compelled to hide and rarely get the spotlight. Feet
            included. KOBA exists to shift the narrative, break the taboo, and
            bring those so-called 'problem areas' front and center in the beauty
            conversation. My hope is that KOBA helps you feel good in your skin;
            confident, empowered, and unapologetically you.”
          </p>
          <p className="text-sm">Thérèse - Founder & CEO</p>
        </div>
      </section>

      <div className="relative my-8 h-[40vh] w-full overflow-hidden md:h-[70vh] lg:h-[90vh]">
        <div
          style={{
            backgroundImage: "url('/assets/images/aboutBg.webp')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
          className="absolute inset-0"
        />
      </div>

      <section className="mt-2 bg-gray-300 text-center">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-5 px-3 py-10">
          <h2 className="text-3xl text-primary md:text-5xl">
            The Essence of KOBA
          </h2>
          <p className="mx-auto max-w-xl text-sm">
            KOBA is an effective and efficient solution for those looking for a
            premium alternative to often non-aspirational pharmaceutical creams.
            Our products are simple to use and fit easily into any skincare
            routine, transporting you to a spa upon application. KOBA will leave
            your hard and thickened skin feeling durably elastic and smooth,
            visibly improving the texture of the skin and leaving behind a
            divine scent. We have designed our products to proudly sit in your
            bathroom and be shown off. KOBA will follow you around from your
            bathroom shelves to your gym bag, to your desk.
            <br />
            <br />
            At the heart of our formulas is safou oil, our not-so-secret skin
            saviour. This antioxidant-rich fruit pulp is packed with fatty acids
            and vitamins C and E, helping to improve skin texture, boost
            collagen production, and protect against premature ageing. It also
            carries gentle antiseptic properties, adding to its power. And
            because we believe skincare should smell as good as it feels, we’ve
            taken the woody, grounding aroma of the safou tree’s bark and
            reimagined it with expert perfumers in Grasse, the world’s perfume
            capital, to create KOBA’s signature scent used as the foundation of
            the natural fragrances in our products.
          </p>
        </div>
      </section>

      <section className="my-8 flex flex-col items-center justify-center gap-8 p-4 md:flex-row md:gap-32">
        {/* Image */}
        <img
          src="https://kobaskincare.com/cdn/shop/files/KAM_3034_1_650x@2x.jpg?v=1747160858"
          alt="Therese"
          className="h-auto w-full max-w-sm rounded-lg border border-primary object-cover shadow-lg md:max-w-xl"
        />

        {/* Text */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-medium text-primary md:text-4xl">
            KOBA cares
          </h2>
          <p className="mx-auto max-w-lg text-left md:mx-0">
            Sustainability isn’t a side note at KOBA, it’s baked into everything
            we do. We partnered with one of the top labs in France to develop a
            clean, clinically effective skincare line that delivers real results
            without compromising on safety, quality, or conscience. Each formula
            is packed with nutrient-rich, fast-absorbing ingredients that
            hydrate from the very first application, no parabens, sulphates,
            mineral oils, PEGs, or synthetic fragrances in sight. Just
            skin-loving essentials that work hard without the harsh extras.
            <br />
            <br />
            Made with at least 97% naturally derived ingredients, our products
            are vegan, cruelty-free, and respectful of both your skin and the
            planet. Every component, from formulation to finish, is crafted with
            intention, using recyclable packaging and thoughtful processes.
            We’re continuously evolving our approach, committed to raising the
            bar for sustainable beauty with each product we create.
          </p>
        </div>
      </section>

      <RecommendedSection />

      <FeatureSection />
    </>
  )
}
