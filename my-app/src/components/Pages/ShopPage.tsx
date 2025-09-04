/* eslint-disable prettier/prettier */
import ShopComponent from 'components/Shop/ShopComponent'
import React from 'react'

export default function ShopPage() {
  return (
    <>
      <section
        className="relative flex min-h-[30vh] flex-col items-center justify-center bg-cover bg-center text-center text-white md:min-h-[60vh]"
        style={{
          backgroundImage:
            "url('https://kyliecosmetics.com/cdn/shop/collections/PLP-Imagery_Cosmetics_Tools-_-Accessories-_Desktop_MCP.jpg?crop=center&height=1077&v=1755702794&width=1920"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Content */}
        <div className="relative z-10 space-y-4 px-4">
          {/* <h1 className="text-3xl font-bold md:text-5xl">Morocon Glow Shop</h1> */}
        </div>
      </section>

      <ShopComponent />
    </>
  )
}
