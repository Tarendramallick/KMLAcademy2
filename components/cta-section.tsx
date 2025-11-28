export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-emerald-700 leading-tight text-balance">
            Be you. Be Bright!
          </h2>
          <p className="text-center text-gray-600 text-lg">
            Learn more about KMLAcademy and begin your journey with us here!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Admissions */}
          <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="relative h-64 bg-gradient-to-br from-gray-300 to-gray-400">
              <img
                src="/images/admissions-students.jpg"
                alt="Admissions"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Admissions</h3>
              </div>
            </div>
          </div>

          {/* Card 2 - Request Info */}
          <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="relative h-64 bg-gradient-to-br from-gray-300 to-gray-400">
              <img
                src="/images/classroom-learning.jpg"
                alt="Request Info"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Request Info</h3>
              </div>
            </div>
          </div>

          {/* Card 3 - Financial Aid */}
          <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="relative h-64 bg-gradient-to-br from-gray-300 to-gray-400">
              <img
                src="/images/financial-aid-students.jpg"
                alt="Financial Aid"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Financial Aid</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
