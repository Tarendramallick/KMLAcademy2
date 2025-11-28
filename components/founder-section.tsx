"use client"

export default function FounderSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white text-6xl shadow-lg">
              👨‍🏫
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Founder's Message</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                "At KMLAcademy, we believe that education is the foundation of a brighter future. Our mission is to
                nurture young minds and equip them with skills for the 21st century."
              </p>
              <p>
                "We foster an environment where curiosity thrives, creativity flourishes, and every student is empowered
                to reach their full potential. Our dedicated faculty and state-of-the-art facilities ensure that
                learning is not just academic, but transformative."
              </p>
              <p>"We are proud of our legacy and committed to continuous excellence."</p>
            </div>
            <div className="mt-6">
              <p className="font-bold text-gray-900 text-lg">Dr. K. M. Lokesh</p>
              <p className="text-green-600 font-semibold">Founder & Principal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
