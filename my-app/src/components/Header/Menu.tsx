/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Globe, MapPin, Phone, Search, X } from 'lucide-react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15 // delay between each link animation
    }
  }
}

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

const links = [
  { label: 'Face & Body Care', path: '/' },
  { label: 'Hair Care', path: '/' },
  { label: 'Culinary', path: '/' },
  { label: 'Handmade Pottery', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Reviews', path: '/' },
  { label: 'FAQ', path: '/faqs' }
]

export function Menu({
  open,
  onClose,
  showDesktopMenu
}: {
  open: boolean
  onClose: () => void
  showDesktopMenu?: boolean
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
      onClose()
    }
  }

  return (
    <>
      {/* Mobile Sidebar Menu */}
      <nav
        className={`fixed left-0 top-0 z-50 size-full bg-background text-text transition-transform duration-300 ease-in-out lg:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="mt-14 flex flex-col space-y-6 px-6">
          <form
            onSubmit={handleSearch}
            className="flex w-full items-center justify-between"
          >
            <div className="flex w-full items-center border-b border-gray-400">
              <input
                type="text"
                placeholder="Search keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full bg-transparent p-1 text-sm text-text outline-none placeholder:text-gray-600 md:w-48"
              />
              <button type="submit">
                <Search className="size-4 text-secondary" />
              </button>
            </div>
            <button type="button" onClick={onClose} className="ml-10">
              <X />
            </button>
          </form>

          {links.map((link, i) => (
            <li
              key={i}
              className="cursor-pointer text-sm font-semibold hover:underline"
              onClick={onClose}
            >
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-10 left-0 flex items-center gap-10 px-6 text-secondary">
          <MapPin className="size-6 cursor-pointer hover:text-primary" />
          <Phone className="size-6 cursor-pointer hover:text-primary" />
        </div>
      </nav>

      {/* Desktop Vertical Menu */}
      {showDesktopMenu && (
        <nav className="hidden lg:absolute lg:left-10 lg:top-44 lg:z-30 lg:block">
          <motion.ul
            className="flex flex-col space-y-6 font-medium text-white"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {links.map((link, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                className="cursor-pointer hover:underline"
              >
                <Link to={link.path}>{link.label}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      )}
    </>
  )
}
