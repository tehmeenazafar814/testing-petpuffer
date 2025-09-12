/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import TopBar from './Sections/TopBar'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutPage from './Pages/AboutPage'
import ShopPage from './Pages/ShopPage'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full bg-background">
      {/* TopBar */}
      {/* <TopBar /> */}

      {/* Navbar */}
      <Navbar transparent={true} scrolled={scrolled} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />

        <Route path="/*" element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  )
}
