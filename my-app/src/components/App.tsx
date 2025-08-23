/* eslint-disable prettier/prettier */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import TopBar from './Sections/TopBar'
import Navbar from './Navbar'

export default function App() {
  return (
    <div className="w-full bg-background">
      <TopBar />
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  )
}
