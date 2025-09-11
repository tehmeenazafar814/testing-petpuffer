/* eslint-disable prettier/prettier */
import FeatureSection from 'components/Sections/FeatureSection'
import RecommendedSection from 'components/Sections/RecommendationProductsSection'
import React from 'react'

export default function AboutPage() {
  return (
    <>
      <section
        className="relative flex min-h-[40vh] flex-col items-center justify-center bg-cover bg-center text-center text-white md:min-h-[70vh]"
        style={{ backgroundImage: "url('/assets/images/aboutBg.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 mt-10 space-y-4 px-4">
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
          src="/assets/images/about1.png"
          alt="Therese"
          className="h-[700px] w-full max-w-sm rounded-lg border border-primary object-cover shadow-lg md:max-w-xl"
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

      <div className="mx-auto my-8 flex max-w-5xl flex-col items-center justify-center gap-5 text-center">
        <p className="px-2 text-3xl font-thin text-primary md:text-5xl">
          “Moroccan Glow offers a range of luxurious skincare products that are
          inspired by traditional Moroccan beauty rituals which are formulated
          to deliver exceptional results, providing deep hydration and a radiant
          glow.”
        </p>
        <p className="text-sm font-semibold">
          Sarra K{' '}
          <span className="font-normal">- Founder & CEO of Moroccan Glow</span>
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
            Why Moroccan Glow?
          </h2>
          <p className="mx-auto max-w-lg text-left italic md:mx-0">
            "Moroccan Glow is committed to creating products that deliver real
            results. Our formulas are designed to do what they say and more. We
            believe the future of skincare is tied to your overall wellbeing,
            and that means celebrating every part of your body. Our mission is
            to shift the narrative around 'problem areas' and bring them into
            the forefront of your beauty routine. We hope that with Moroccan
            Glow, you feel confident and comfortable in your own skin.”
          </p>
          <p className="text-sm">Sarra - Founder & CEO</p>
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
            Moroccan Glow Essence
          </h2>
          <p className="mx-auto max-w-xl text-sm">
            Moroccan Glow offers an effective and premium alternative to
            everyday skincare. Our products are simple to use and fit easily
            into any routine, transporting you to a spa with every application.
            Moroccan Glow leaves even the most tired skin feeling wonderfully
            smooth and elastic, visibly improving its texture and leaving a
            divine scent. We've designed our products to be beautiful additions
            to your bathroom and to be used wherever you go, from your vanity to
            your gym bag to your desk.
            <br />
            <br />
            The core of our formulas is argan oil, our skin's best friend. This
            oil is a powerhouse of antioxidants, fatty acids, and vitamins,
            which work together to improve skin texture, boost collagen, and
            protect against signs of aging. We also believe skincare should be
            an experience for all the senses. That’s why we’ve worked with
            expert perfumers in Grasse, the perfume capital of the world, to
            take the natural, warm scent of the argan tree and create our
            signature fragrance, which is infused into all our products.
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
