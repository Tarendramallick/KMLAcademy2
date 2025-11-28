"use client"

import { useEffect, useRef } from "react"

export default function Sponsors() {
  const scrollContainer = useRef<HTMLDivElement>(null)

  const sponsors = [
    "Forte Fitness",
    "Premier Real Estate",
    "Dental Care Studio",
    "Tech Solutions",
    "Community Kitchen",
    "Smile Designers",
    "Premium Fried Chicken",
    "Financial Advisors",
    "Investment Partners",
    "IT Consulting",
    "Education Plus",
    "Building Services",
    "Restaurant Group",
    "Construction Co",
    "Equipment Sales",
    "Smile Experts",
    "Energy Solutions",
    "Logistics Inc",
    "Auto Services",
    "Supply Chain",
  ]

  useEffect(() => {
    const container = scrollContainer.current
    if (!container) return

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-gray-600 font-semibold mb-8">Proud Partners & Sponsors</h3>

        <div
          ref={scrollContainer}
          className="flex gap-8 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-6 py-3 bg-white rounded-lg border border-gray-200 hover:border-emerald-700 transition whitespace-nowrap text-gray-700 font-medium"
            >
              {sponsor}
            </div>
          ))}
          {sponsors.map((sponsor, idx) => (
            <div
              key={`duplicate-${idx}`}
              className="flex-shrink-0 px-6 py-3 bg-white rounded-lg border border-gray-200 hover:border-emerald-700 transition whitespace-nowrap text-gray-700 font-medium"
            >
              {sponsor}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
