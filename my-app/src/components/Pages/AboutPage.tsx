/* eslint-disable prettier/prettier */
import ConsultBanner from 'components/Sections/ConsultBanner'
import FeatureSection from 'components/Sections/FeatureSection'
import ShopOurIGSection from 'components/Sections/InstaSection'
import RecommendedSection from 'components/Sections/RecommendationProductsSection'
import { Atom, FlaskConical, Globe, Heart } from 'lucide-react'
import React from 'react'

export default function AboutPage() {
  return (
    <>
      <section
        className="relative flex min-h-[60vh] flex-col items-center justify-center bg-cover bg-center text-center text-white md:min-h-[70vh]"
        style={{ backgroundImage: "url('/assets/images/aboutBg.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 mt-10 space-y-4 px-4">
          <h1 className="text-3xl font-bold md:text-5xl">About Morocon Glow</h1>
          <p className="mx-auto max-w-2xl text-lg">
            With Moroccan Glow, you're experiencing a rich history of ancient
            beauty rituals that used natural, local ingredients like argan oil
            and ghassoul clay. These traditions are still central to the hammam,
            a traditional public bath where these products are used for
            purification and skin care.
          </p>
        </div>
      </section>

      <section className="mt-8 flex flex-col items-center justify-center gap-8 p-4 md:flex-row md:gap-32">
        {/* Image */}
        <img
          src="/assets/images/about1.png"
          alt="Therese"
          className="h-[450px] rounded-lg border border-primary object-cover shadow-lg"
        />

        {/* Text */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-medium text-primary md:text-4xl">
            How it all began
          </h2>
          <p className="mx-auto max-w-lg text-left md:mx-0">
            Drawing on over a decade in the beauty industry, Sarra worked with
            giants like Clarins and L’Oréal before creating one of the first
            beauty subscription boxes. Blending her insider knowledge with her
            chemist mother's expertise and her own battle with dry skin, she saw
            a clear need for a comprehensive foot cream, which inspired her to
            create Moroccan Glow.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-6 flex items-center justify-center overflow-hidden">
        <div className="w-full bg-primary py-3">
          <div className="flex w-max animate-marquee whitespace-nowrap text-3xl font-bold uppercase tracking-wide text-background md:text-7xl">
            <span className="px-4">
              beauty-lover, approved. bestsellers, boosted.
            </span>
            <span className="px-4">
              beauty-lover, approved. bestsellers, boosted.
            </span>
            <span className="px-4">
              beauty-lover, approved. bestsellers, boosted.
            </span>
            <span className="px-4">
              beauty-lover, approved. bestsellers, boosted.
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto my-8 flex max-w-5xl flex-col items-center justify-center gap-5 text-center">
        <p className="px-2 text-3xl font-thin text-primary md:text-5xl">
          “Moroccan Glow offers a range of luxurious skincare products that are
          inspired by traditional Moroccan beauty rituals which are formulated
          to deliver exceptional results, providing deep hydration and a radiant
          glow.”
        </p>
        <div className="my-2 flex items-center justify-center gap-5">
          <img src="/assets/images/Signature.webp" className="h-auto w-32" />
          <p className="text-left text-sm font-semibold">
            Sarra K<br />
            <span className="font-normal">Founder & CEO</span>
          </p>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center gap-8 p-4 md:flex-row md:gap-32">
        {/* Image */}
        <img
          src="/assets/images/why.png"
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

      <div className="relative h-[40vh] w-full overflow-hidden md:h-[70vh] lg:h-[90vh]">
        <div
          style={{
            backgroundImage: "url('/assets/images/banner.jpeg')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
          className="absolute inset-0"
        />
      </div>

      <section className="bg-gray-300 pb-6 text-center">
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

        <div className="grid grid-cols-1 gap-10 px-2 md:grid-cols-4 md:gap-6">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <Atom className="mb-3 size-10 text-primary" />
            <h3 className="font-semibold text-primary">
              Simple &amp; Sophisticated
            </h3>
            <p className="mt-2 text-sm text-text">
              Potent, no-nonsense formulas made with proven ingredients only
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <Globe className="mb-3 size-10 text-primary" />
            <h3 className="font-semibold text-primary">Moroccan Made</h3>
            <p className="mt-2 text-sm text-text">
              Proudly crafted in Morocco with quality and integrity.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <FlaskConical className="mb-3 size-10 text-primary" />
            <h3 className="font-semibold text-primary">Backed by Science</h3>
            <p className="mt-2 text-sm text-text">
              Developed by scientists and clinicians through evidence-led
              innovation
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center">
            <Heart className="mb-3 size-10 text-primary" />
            <h3 className="font-semibold text-primary">
              Kind to Skin and Animals
            </h3>
            <p className="mt-2 text-sm text-text">
              PETA-approved and never tested on animals
            </p>
          </div>
        </div>
      </section>

      <RecommendedSection />

      <FeatureSection />

      <ShopOurIGSection />
    </>
  )
}
