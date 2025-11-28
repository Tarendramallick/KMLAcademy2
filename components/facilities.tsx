"use client"
import Image from "next/image"

export default function Facilities() {
  const facilities = [
    {
      icon: "🏛️",
      title: "Modern Classrooms",
      desc: "Smart boards and interactive learning spaces",
      image: "/images/classroom.jpg",
    },
    {
      icon: "🔬",
      title: "Science Labs",
      desc: "Equipped with latest scientific equipment",
      image: "/images/science-lab.jpg",
    },
    {
      icon: "💻",
      title: "Computer Labs",
      desc: "Latest technology and coding facilities",
      image: "/images/computer-lab.jpg",
    },
    {
      icon: "📚",
      title: "Library",
      desc: "Digital and physical collections",
      image: "/images/library.jpg",
    },
    {
      icon: "🏃",
      title: "Sports Complex",
      desc: "Multiple grounds and indoor facilities",
      image: "/images/sports-complex.jpg",
    },
    {
      icon: "🎨",
      title: "Art Studio",
      desc: "Complete art and music facilities",
      image: "/images/art-studio.jpg",
    },
    {
      icon: "🍽️",
      title: "Cafeteria",
      desc: "Nutritious meals prepared daily",
      image: "/images/cafeteria.jpg",
    },
    {
      icon: "🚌",
      title: "Transportation",
      desc: "Safe and reliable pick-up & drop",
      image: "/images/transport.jpg",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Facilities</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">World-class infrastructure for holistic development</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <Image
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 text-center border border-green-100">
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm">{facility.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
