/* eslint-disable prettier/prettier */
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './Pages/HomePage'

export default function App() {
  return (
    <div className="p-6">
      {/* Navigation */}
      <nav className="mb-6 flex gap-4">
        <Link to="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-blue-500 hover:underline">
          About
        </Link>
        <Link to="/contact" className="text-blue-500 hover:underline">
          Contact
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  )
}
