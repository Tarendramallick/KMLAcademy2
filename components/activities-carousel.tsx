"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function ActivitiesCarousel() {
  const [current, setCurrent] = useState(0)

  const activities = [
    {
      title: "Sports Day",
      desc: "Annual inter-house competitions",
      img: "🏃",
      image: "/images/sports-day.jpg",
    },
    {
      title: "Science Fair",
      desc: "Showcase student innovations",
      img: "🔭",
      image: "/images/science-fair.jpg",
    },
    {
      title: "Cultural Festival",
      desc: "Celebration of diverse cultures",
      img: "🎭",
      image: "/images/cultural-festival.jpg",
    },
    {
      title: "Debate Championship",
      desc: "Public speaking and argumentation",
      img: "🎤",
      image: "/images/debate-championship.jpg",
    },
    {
      title: "Field Trips",
      desc: "Experiential learning adventures",
      img: "✈️",
      image: "/images/field-trips.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % activities.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Student Activities</h2>

        <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
          <div className="relative w-full h-96">
            <Image
              src={activities[current].image || "/placeholder.svg"}
              alt={activities[current].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white w-full">
                <h3 className="text-3xl font-bold mb-2">{activities[current].title}</h3>
                <p className="text-lg">{activities[current].desc}</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {activities.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all ${idx === current ? "bg-white w-8" : "bg-gray-300"}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrent((prev) => (prev - 1 + activities.length) % activities.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors z-10"
          >
            ←
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % activities.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors z-10"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
