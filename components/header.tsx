"use client"

import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import Sponsors from "./sponsors"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex gap-4">
        <Sponsors />
        </div>
      </div>

      {/* Main Header (Dark Orange) */}
      <header className="bg-[#D97A00] text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center font-bold text-xl">
              KML
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold">KMLAcademy</h1>
              <p className="text-xs text-orange-100">Excellence in Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button className="border-2 border-white text-white px-4 py-2 rounded hover:bg-white hover:text-[#D97A00] transition font-semibold">
              REQUEST INFO
            </button>

            <button className="p-2 hover:bg-orange-800/40 rounded transition">
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-orange-800/40 rounded transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-[#D97A00] border-t border-orange-900">
            <nav className="flex flex-col gap-4 p-4">
              <a href="#" className="text-white hover:text-orange-200 transition">
                Quicklinks
              </a>
              <a href="#" className="text-white hover:text-orange-200 transition">
                Parent Login
              </a>
              <a href="#" className="text-white hover:text-orange-200 transition">
                Giving
              </a>

              <button className="border-2 border-white text-white px-4 py-2 rounded hover:bg-white hover:text-[#D97A00] transition font-semibold w-full">
                REQUEST INFO
              </button>
            </nav>
          </div>
        )}

        {/* Secondary Navigation (Soft Orange) */}
        <nav className="hidden lg:flex bg-[#FF9900] justify-center gap-12 py-3 border-t border-orange-300">
          <a href="#" className="text-white hover:text-orange-100 transition font-semibold">
            About
          </a>
          <a href="#" className="text-white hover:text-orange-100 transition font-semibold">
            Admissions
          </a>
          <a href="#" className="text-white hover:text-orange-100 transition font-semibold">
            Program
          </a>
          <a href="#" className="text-white hover:text-orange-100 transition font-semibold">
            Giving
          </a>
          <a href="#" className="text-white hover:text-orange-100 transition font-semibold">
            Parents
          </a>
          <a href="#" className="text-white hover:text-orange-100 transition font-semibold">
            Alumni
          </a>
        </nav>
      </header>
    </>
  )
}
