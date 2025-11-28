export default function MissionSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/images/mission-students.jpg"
              alt="Students in classroom"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div>
              <div className="inline-block bg-gray-100 text-emerald-700 text-sm font-bold px-3 py-1 rounded">
                ABOUT US
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 leading-tight">Our Mission</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              KMLAcademy builds a foundation upon which students become wise and compassionate citizens of the world.
              Our commitment to educational excellence fosters the intellectual, artistic, physical, and moral growth of
              every young scholar.
            </p>
            <button className="border-2 border-emerald-700 text-emerald-700 px-8 py-3 rounded font-bold hover:bg-emerald-700 hover:text-white transition">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
