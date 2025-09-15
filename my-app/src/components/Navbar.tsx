/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Heart, Search, ShoppingBag, Menu, X, SparkleIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import TopBar from './Sections/TopBar'

export default function Navbar({ transparent, scrolled }) {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-500 ${
        transparent && !scrolled
          ? 'bg-transparent text-white'
          : 'top-0 bg-background text-text shadow-sm'
      }`}
    >
      <TopBar />

      {/* Top Row */}
      <div className="flex w-full items-center justify-between px-4 py-1 md:px-6">
        {/* ---- DESKTOP LEFT NAV ---- */}
        <div
          className={`hidden w-1/3 items-center justify-start space-x-4 md:flex ${
            scrolled ? 'text-text' : 'text-white'
          }`}
        >
          <Link to="#" className="hover:text-secondary hover:underline">
            Face & Body Care
          </Link>
          <Link
            to="#"
            className="group relative hover:text-secondary hover:underline"
          >
            Hair Care
            {/* Sparkles */}
            <span className="absolute -bottom-2 -left-2 transition-colors group-hover:text-secondary">
              <SparkleIcon className={`size-3 ${!scrolled && 'text-white'}`} />
            </span>
            <span className="absolute -right-2 -top-1 transition-colors group-hover:text-secondary">
              <SparkleIcon className={`size-3 ${!scrolled && 'text-white'}`} />
            </span>
          </Link>
          <Link to="#" className="hover:text-secondary hover:underline">
            Culinary
          </Link>
          <Link to="#" className="hover:text-secondary hover:underline">
            Handmade Pottery
          </Link>
        </div>

        {/* ---- MOBILE LEFT (Menu + Search) ---- */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
          <Search className="size-6 cursor-pointer" />
        </div>

        {/* ---- CENTER LOGO ---- */}
        <div className="flex w-1/3 flex-col items-center text-center">
          <a
            href="/"
            className="whitespace-nowrap text-xl font-bold tracking-wide text-primary md:text-3xl"
          >
            Moroccan Glow
          </a>
          <span
            className={`text-xs font-medium uppercase ${
              scrolled ? 'text-text' : 'text-background'
            } md:text-sm`}
          >
            By Sarra
          </span>
        </div>

        {/* ---- MOBILE RIGHT (Wishlist + Cart) ---- */}
        <div className="flex items-center gap-4 md:hidden">
          <Heart className="size-6 cursor-pointer hover:text-secondary" />
          <ShoppingBag className="size-6 cursor-pointer hover:text-secondary" />
        </div>

        {/* ---- DESKTOP ICONS ---- */}
        <div
          className={`hidden w-1/3 items-center justify-end gap-5 md:flex ${
            scrolled ? 'text-primary' : 'text-secondary'
          }`}
        >
          <Heart className="size-6 cursor-pointer hover:text-secondary" />
          <Search className="size-6 cursor-pointer hover:text-secondary" />
          <ShoppingBag className="size-6 cursor-pointer hover:text-secondary" />
        </div>
      </div>

      {/* ---- MOBILE NAV DROPDOWN ---- */}
      {mobileMenu && (
        <div className="flex flex-col items-start space-y-4 border-t bg-primary p-4 text-sm text-background shadow-lg md:hidden">
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
