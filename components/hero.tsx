export default function Hero() {
  return (
    <div className="relative h-96 md:h-[500px] bg-gradient-to-b from-gray-200 to-gray-100 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/hero-students.jpg)",
          opacity: 0.9,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-16">
        <div className="text-center text-white max-w-2xl px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to KMLAcademy</h2>
          <p className="text-lg md:text-xl">Where Excellence Meets Opportunity</p>
        </div>
      </div>

      {/* Navy accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-900" />
    </div>
  )
}
