/* eslint-disable prettier/prettier */
// Header.tsx
import React, { useState } from 'react'
import {
  Heart,
  Search,
  Phone,
  Globe,
  MapPin,
  Menu,
  ShoppingBagIcon
} from 'lucide-react'
import { isMobile } from 'react-device-detect'
import { useLocation, useNavigate } from 'react-router-dom'

export function HeaderSecond({ onMenuClick }: { onMenuClick: () => void }) {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (keyword.trim()) {
      // Always send user to current shop page if possible, default to women
      const basePath = location.pathname.startsWith('/shop/')
        ? location.pathname
        : '/shop/women'
      navigate(`${basePath}?search=${encodeURIComponent(keyword)}`)
      // onClose()
    }
  }

  return (
    <header className="relative z-50 w-full bg-background">
      {/* Main Header */}
      <div className="relative flex items-center justify-between p-4 text-text lg:px-10">
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu className="size-6 cursor-pointer" onClick={onMenuClick} />
        </div>

        {/* Desktop Left Icons + Nav */}
        <div className="hidden items-center gap-6 text-text md:flex">
          {/* Icons */}
          {/* <MapPin className="size-5 cursor-pointer hover:text-primary" />
          <Phone className="size-5 cursor-pointer hover:text-primary" /> */}

          {/* Navigation Links */}
          <nav className="ml-6 flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-primary">
              Face & Body Care
            </a>
            <a href="#" className="hover:text-primary">
              Hair Care
            </a>
            <a href="#" className="hover:text-primary">
              Culinary
            </a>
            <a href="#" className="hover:text-primary">
              Handmade Pottery
            </a>
          </nav>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center text-3xl font-light">
          <a
            href="/"
            className="whitespace-nowrap text-xl font-bold tracking-wide text-primary md:text-3xl"
          >
            Moroccan Glow
          </a>
          <span className={`-mt-1 text-xs font-semibold uppercase md:text-sm`}>
            By Sarra
          </span>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <form className="relative hidden md:block" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-36 border-b border-secondary bg-transparent px-2 py-1 text-sm text-text outline-none placeholder:text-gray-600 md:w-48"
            />
            <button type="submit">
              <Search className="absolute right-1 top-1 size-4 text-text hover:text-primary" />
            </button>
          </form>
          {/* <Heart className="cursor-pointer text-black hover:text-gray-700" /> */}
          <Heart className="cursor-pointer text-text hover:text-primary" />
          <ShoppingBagIcon className="cursor-pointer text-text hover:text-primary" />
        </div>
      </div>
    </header>
  )
}
