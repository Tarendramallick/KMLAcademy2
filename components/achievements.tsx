"use client"

export default function Achievements() {
  const stats = [
    { number: "98%", label: "Pass Rate" },
    { number: "50+", label: "Awards Won" },
    { number: "15+", label: "Sports Championships" },
    { number: "500+", label: "Alumni Success Stories" },
  ]

  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center bg-gray-800 rounded-lg p-8 hover:bg-green-600 transition-colors">
              <div className="text-5xl font-bold text-green-400 mb-2">{stat.number}</div>
              <p className="text-lg text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["National Debate Champions 2024", "STEM Excellence Award", "Best Educational Institution Award"].map(
            (award, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg p-6 text-center border-l-4 border-green-400">
                <p className="text-white font-semibold">{award}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
