/* eslint-disable prettier/prettier */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import TopBar from './Sections/TopBar'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutPage from './Pages/AboutPage'
import ShopPage from './Pages/ShopPage'

export default function App() {
  return (
    <div className="w-full bg-background">
      <TopBar />
      <Navbar />

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
