"use client"

import { useState } from "react"
import { Menu, X, Search } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Main Header (White) */}
      <header className="bg-white text-blue-800 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border-2 border-blue-700 rounded-lg flex items-center justify-center font-bold text-xl text-blue-700">
              KML
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-blue-700">KMLAcademy</h1>
              <p className="text-xs text-blue-500">Excellence in Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-blue-700 hover:text-blue-500 transition">
              Quicklinks
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-500 transition">
              Parent Login
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-500 transition">
              Giving
            </a>
            <button className="border-2 border-blue-700 text-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition font-semibold">
              REQUEST INFO
            </button>
            <button className="p-2 hover:bg-blue-100 rounded transition">
              <Search size={20} className="text-blue-700" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-blue-100 rounded transition"
          >
            {isOpen ? <X size={24} className="text-blue-700" /> : <Menu size={24} className="text-blue-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-blue-200">
            <nav className="flex flex-col gap-4 p-4">
              <a href="#" className="text-blue-700 hover:text-blue-500 transition">
                Quicklinks
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-500 transition">
                Parent Login
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-500 transition">
                Giving
              </a>
              <button className="border-2 border-blue-700 text-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition font-semibold w-full">
                REQUEST INFO
              </button>
            </nav>
          </div>
        )}

        {/* Secondary Navigation (Soft Blue) */}
        <nav className="hidden lg:flex bg-gradient-to-r from-sky-600 to-blue-700 justify-center gap-12 py-3">
          <a href="#" className="text-white hover:text-blue-100 transition font-semibold">About</a>
          <a href="#" className="text-white hover:text-blue-100 transition font-semibold">Admissions</a>
          <a href="#" className="text-white hover:text-blue-100 transition font-semibold">Program</a>
          <a href="#" className="text-white hover:text-blue-100 transition font-semibold">Giving</a>
          <a href="#" className="text-white hover:text-blue-100 transition font-semibold">Parents</a>
          <a href="#" className="text-white hover:text-blue-100 transition font-semibold">Alumni</a>
        </nav>
      </header>
    </>
  )
}
