/* eslint-disable prettier/prettier */
export default function ConsultBanner() {
  return (
    <section className="px-4 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 rounded bg-primary px-4 py-6 shadow-lg md:flex-row md:gap-16">
        {/* Left: Bold Heading */}
        <h2 className="text-center text-lg font-extrabold tracking-wide text-background md:text-left md:text-xl lg:text-2xl">
          DON’T KNOW WHAT’S <br /> RIGHT FOR YOUR SKIN?
        </h2>

        {/* Middle: Description */}
        <p className="max-w-md text-center text-sm font-medium text-background md:flex-1 md:text-left md:text-base">
          Schedule an online video consultation with our experts and get
          customised skincare plan and consultation.
        </p>

        {/* Right: Button */}
        <button className="rounded-none border-2 border-background px-6 py-1 text-sm font-bold uppercase tracking-wide text-background transition hover:bg-white hover:text-primary">
          Book a<br /> Consult Now
        </button>
      </div>
    </section>
  )
}
