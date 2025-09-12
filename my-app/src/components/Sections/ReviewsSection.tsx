/* eslint-disable prettier/prettier */
import { Star } from 'lucide-react'
import testimonials from 'utils/testimonials'

export default function ReviewSection() {
  return (
    <section className="relative w-full py-14">
      <h2 className="mb-10 w-full px-2 text-center text-3xl font-semibold text-primary md:text-4xl">
        Proven Results
      </h2>

      <div className="mx-auto max-w-7xl px-4">
        {/* Grid layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-6 shadow-md transition hover:scale-105"
            >
              {/* Stars + Google logo */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <img
                  src="/assets/images/google.png"
                  alt="Google"
                  className="size-8"
                />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold">{t.title}</h3>

              {/* Review */}
              <p className="mb-4 text-sm text-gray-600">{t.review}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-xs text-gray-700">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-7 flex justify-center">
          <button className="rounded border bg-primary px-4 py-1 text-sm font-medium text-white transition hover:scale-105">
            View More
          </button>
        </div>
      </div>
    </section>
  )
}
