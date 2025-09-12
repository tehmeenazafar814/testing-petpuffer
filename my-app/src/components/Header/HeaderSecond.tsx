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
    <header className="relative z-50 w-full bg-black">
      {/* Main Header */}
      <div className="relative flex items-center justify-between p-4 text-white lg:px-10">
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu className="size-6 cursor-pointer" onClick={onMenuClick} />
        </div>

        {/* Desktop Left Icons + Nav */}
        <div className="hidden items-center gap-6 text-white md:flex">
          {/* Icons */}
          <MapPin className="size-5 cursor-pointer hover:text-gray-700" />
          <Phone className="size-5 cursor-pointer hover:text-gray-700" />
          <Globe className="size-5 cursor-pointer hover:text-gray-700" />

          {/* Navigation Links */}
          <nav className="ml-6 flex gap-6 text-sm font-medium">
            <a href="/shop/women" className="hover:text-gray-700">
              Women
            </a>
            <a href="/shop/men" className="hover:text-gray-700">
              Men
            </a>
            <a href="#" className="hover:text-gray-700">
              New
            </a>
            <a href="#" className="hover:text-gray-700">
              Sale
            </a>
          </nav>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 text-3xl font-light uppercase tracking-widest">
          {/* <span className="font-thin">MARC</span>
          <span className="font-normal">CAIN</span> */}
          <a href="/">
            <img
              src={
                isMobile
                  ? '/assets/images/white-pic-dog.png'
                  : '/assets/images/logo.png'
              }
              className={isMobile ? 'size-14' : 'h-12 w-full'}
            />
          </a>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <form className="relative hidden md:block" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-36 border-b border-white bg-transparent px-2 py-1 text-sm text-white outline-none placeholder:text-gray-300 md:w-48"
            />
            <button type="submit">
              <Search className="hover:text-red absolute right-1 top-1 size-4 text-white" />
            </button>
          </form>
          {/* <Heart className="cursor-pointer text-black hover:text-gray-700" /> */}
          <Heart className="hover:text-red cursor-pointer text-white" />
          <ShoppingBagIcon className="hover:text-red cursor-pointer text-white" />
        </div>
      </div>
    </header>
  )
}
