/* eslint-disable prettier/prettier */
export default function StickySideButton() {
  return (
    <div className="fixed right-3 top-[40%] z-50 -translate-y-1/2">
      <button
        className="flex origin-right -rotate-90 items-center justify-center rounded-lg bg-white px-3 py-2 text-primary shadow-lg transition hover:bg-background"
        onClick={() => alert('Custom Action')}
      >
        <span className="font-bold tracking-wide">Skin Concerns?</span>
      </button>
    </div>
  )
}
