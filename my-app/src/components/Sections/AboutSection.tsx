/* eslint-disable prettier/prettier */
import React from 'react'
import { Atom, FlaskConical, Globe, Heart } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="bg-background px-6 py-12 text-center md:px-16">
      {/* Heading */}
      <h2 className="mb-10 w-full px-2 text-center text-3xl font-bold text-primary md:text-4xl">
        Australian Made Skincare That Works
      </h2>

      {/* Description */}
      <p className="mx-auto mb-4 max-w-4xl text-lg leading-tight text-text">
        Since 2009, The Skincare Company has combined in-clinic experience with
        scientific expertise to create high-performance cosmeceuticals.
      </p>
      <p className="mx-auto mb-12 max-w-4xl text-lg leading-tight text-text">
        Developed alongside bio-physicists, dermatologists, plastic surgeons and
        leading clinicians, our formulations are trusted by over 200 stockist
        partners nationwide.
      </p>

      {/* Icons Section */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
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
          <h3 className="font-semibold text-primary">Australian Made</h3>
          <p className="mt-2 text-sm text-text">
            Proudly crafted in Australia with quality and integrity
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
  )
}
