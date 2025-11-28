"use client"
import Image from "next/image"

export default function Programs() {
  const programs = [
    {
      name: "Primary (Grade 1-5)",
      description: "Foundation for lifelong learning",
      color: "bg-blue-50 border-blue-200",
      image: "/images/primary-program.jpg",
    },
    {
      name: "Middle School (Grade 6-8)",
      description: "Building critical thinking skills",
      color: "bg-purple-50 border-purple-200",
      image: "/images/middle-school.jpg",
    },
    {
      name: "Secondary (Grade 9-12)",
      description: "Preparing for higher education",
      color: "bg-indigo-50 border-indigo-200",
      image: "/images/secondary-school.jpg",
    },
    {
      name: "Advanced Placement",
      description: "Accelerated academic excellence",
      color: "bg-orange-50 border-orange-200",
      image: "/images/advanced-placement.jpg",
    },
    {
      name: "STEM Program",
      description: "Science, technology, and innovation",
      color: "bg-green-50 border-green-200",
      image: "/images/stem-program.jpg",
    },
    {
      name: "Arts & Culture",
      description: "Creative expression and development",
      color: "bg-pink-50 border-pink-200",
      image: "/images/arts-culture.jpg",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Programs</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Comprehensive education across all levels</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col h-full">
              <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div
                className={`${program.color} rounded-b-lg border-2 border-t-0 p-6 flex flex-col justify-start hover:shadow-lg transition-shadow`}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{program.name}</h3>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
