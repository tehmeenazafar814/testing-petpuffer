/* eslint-disable prettier/prettier */
export default function StickySideButton() {
  return (
    <div className="fixed left-3 top-1/2 z-50 mt-10 -translate-y-1/2">
      <button
        className="flex origin-left -rotate-90 items-center justify-center rounded-lg bg-white px-3 py-2 text-primary shadow-lg transition hover:bg-background"
        onClick={() => alert('Custom Action')}
      >
        <span className="font-bold tracking-wide">
          Skin Concerns?
        </span>
      </button>
    </div>
  )
}
