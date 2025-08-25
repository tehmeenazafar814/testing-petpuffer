/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Heart, Search, ShoppingBag, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <header className="w-full shadow-sm">
      {/* Top Row */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        {/* Left - Locale & Currency */}
        <div className="hidden items-center space-x-2 text-sm md:flex">
          <span className="uppercase">us</span>
          <span className="rounded-full border border-black px-2 py-0.5 text-xs">
            $
          </span>
        </div>

        {/* ---- MOBILE LEFT (Menu + Search) ---- */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Menu Toggle */}
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
          {/* Search */}
          <Search className="size-6 cursor-pointer" />
        </div>

        {/* ---- CENTER LOGO ---- */}
        <div className="flex flex-col items-center text-center">
          <a
            href="/"
            className="text-lg font-bold tracking-wide text-primary md:text-2xl"
          >
            KYLIE COSMETICS
          </a>
          <span className="text-sm font-medium text-text md:text-sm">
            KYLIE JENNER
          </span>
        </div>

        {/* ---- MOBILE RIGHT (Wishlist + Cart) ---- */}
        <div className="flex items-center gap-4 md:hidden">
          <Heart className="size-6 cursor-pointer hover:text-secondary" />
          <ShoppingBag className="size-6 cursor-pointer hover:text-secondary" />
        </div>

        {/* ---- DESKTOP ICONS ---- */}
        <div className="hidden items-center gap-5 text-text md:flex">
          <Heart className="size-5 cursor-pointer hover:text-secondary" />
          <Search className="size-5 cursor-pointer hover:text-secondary" />
          <ShoppingBag className="size-5 cursor-pointer hover:text-secondary" />
        </div>
      </div>

      {/* ---- DESKTOP NAV LINKS ---- */}
      <nav className="hidden justify-center space-x-8 py-2 text-sm md:flex">
        <Link to="#" className="hover:text-secondary hover:underline">
          cosmetics
        </Link>
        <Link to="#" className="hover:text-secondary hover:underline">
          fragrance
        </Link>
        <Link to="#" className="hover:text-secondary hover:underline">
          skin
        </Link>
        <Link to="#" className="hover:text-secondary hover:underline">
          discover
        </Link>
        <Link to="#" className="hover:text-secondary hover:underline">
          rewards
        </Link>
      </nav>

      {/* ---- MOBILE NAV DROPDOWN ---- */}
      {mobileMenu && (
        <div className="flex flex-col items-start space-y-4 border-t bg-background p-4 text-sm shadow-lg md:hidden">
          <Link
            to="#"
            className="hover:underline"
            onClick={() => setMobileMenu(false)}
          >
            Cosmetics
          </Link>
          <Link
            to="#"
            className="hover:underline"
            onClick={() => setMobileMenu(false)}
          >
            Fragrance
          </Link>
          <Link
            to="#"
            className="hover:underline"
            onClick={() => setMobileMenu(false)}
          >
            Skin
          </Link>
          <Link
            to="#"
            className="hover:underline"
            onClick={() => setMobileMenu(false)}
          >
            Discover
          </Link>
          <Link
            to="#"
            className="hover:underline"
            onClick={() => setMobileMenu(false)}
          >
            Rewards
          </Link>
        </div>
      )}
    </header>
  )
}
