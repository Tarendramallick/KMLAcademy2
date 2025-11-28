"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState("events")

  const events = [
    {
      date: "May 1",
      title: "Open House",
      time: "5:30PM - 7:15PM",
      image: "/images/event-open-house.jpg",
    },
    {
      date: "May 2",
      title: "Grandparents' Day; 11:30 Dismissal",
      time: "all day",
      image: "/images/event-grandparents.jpg",
    },
    {
      date: "May 16",
      title: "KMLAcademy Picnic",
      time: "all day",
      image: "/images/event-picnic.jpg",
    },
  ]

  const news = [
    {
      date: "Mar 13, 2025",
      title: "Spring Music Festival Celebrates Student Talent",
      image: "/images/news-music-festival.jpg",
    },
    {
      date: "Jan 24, 2025",
      title: "Students Launch Community Service Initiative",
      image: "/images/news-community.jpg",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-700 mb-12">News & Events</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Events */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {events.map((event, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-emerald-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer group"
                >
                  <div className="relative h-32 w-full overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-emerald-700 font-bold text-sm mb-1">{event.date}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{event.title}</h4>
                    <p className="text-gray-600 text-sm">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 text-emerald-700 font-semibold flex items-center gap-2 hover:gap-3 transition">
              Load More Events <ChevronRight size={20} />
            </button>
          </div>

          {/* News */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h3>
            <div className="space-y-4">
              {news.map((item, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-blue-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer group"
                >
                  <div className="relative h-32 w-full overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-blue-900 font-bold text-sm mb-1">{item.date}</div>
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 text-emerald-700 font-semibold flex items-center gap-2 hover:gap-3 transition">
              View All News <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
