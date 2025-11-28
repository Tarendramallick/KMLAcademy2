"use client"

export default function Admissions() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Admissions Process</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Join KMLAcademy and become part of our thriving community
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Application", desc: "Submit your application online" },
            { step: "2", title: "Assessment", desc: "Take our entrance exam" },
            { step: "3", title: "Interview", desc: "Meet with admissions team" },
            { step: "4", title: "Acceptance", desc: "Receive your decision letter" },
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-green-600 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-green-600 mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
              {idx < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-green-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  )
}
