/* eslint-disable prettier/prettier */
import React from 'react'

export default function TopBar() {
  return (
    <div className="relative flex w-full items-center justify-center bg-pink-100 px-4 py-1 text-center text-sm">
      <span className="text-text">
        free brush holder <span className="mx-1">💖</span> with accessory bundle
        purchase{' '}
        <a href="#" className="font-semibold underline hover:text-pink-600">
          shop now
        </a>{' '}
        <span className="ml-1">👜</span>
      </span>
    </div>
  )
}
