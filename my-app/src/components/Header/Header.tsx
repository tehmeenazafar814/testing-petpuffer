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
import { motion } from 'framer-motion'
// import CartPreview from './Shop/CartPreview'

const cartItems = [
  {
    id: '1',
    name: 'REGULAR FIT JERSEY TOP',
    price: 9.99,
    quantity: 1,
    image: '/assets/images/products/test.jpg',
    color: 'Navy blue',
    size: 'S'
  }
]

export function Header({
  onMenuClick,
  menuOpen
}: {
  onMenuClick: () => void
  menuOpen: boolean
}) {
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
    <motion.header
      className="relative z-50 w-full"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Main Header */}
      <div
        className={`relative flex items-center justify-between bg-transparent p-4 
  ${menuOpen ? 'text-black' : 'text-white'} lg:px-10`}
      >
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu className="size-6 cursor-pointer" onClick={onMenuClick} />
        </div>

        {/* Desktop Left Icons */}
        <div className="hidden items-center gap-4 text-white md:flex">
          <MapPin className="size-5 cursor-pointer hover:text-primary" />
          <Phone className="size-5 cursor-pointer hover:text-primary" />
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
        <div
          className={`flex items-center gap-4 rounded p-1 px-2 ${
            menuOpen ? 'text-text' : 'text-white'
          }`}
        >
          <form className="relative hidden md:block" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-36 border-b border-white bg-transparent px-2 py-1 text-sm text-white outline-none placeholder:text-gray-300 md:w-48"
            />
            <button type="submit">
              <Search className="absolute right-1 top-1 size-4 text-white hover:text-primary" />
            </button>
          </form>
          {/* <Heart className="cursor-pointer text-gray-200 hover:text-black" /> */}
          <Heart className={`cursor-pointer hover:text-primary`} />
          <ShoppingBagIcon className="cursor-pointer hover:text-primary" />
          {/* <CartPreview items={cartItems} deliveryFee={3.99} /> */}
        </div>
      </div>
    </motion.header>
  )
}
