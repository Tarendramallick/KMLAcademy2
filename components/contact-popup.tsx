"use client"
import { useState } from "react"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you ${formData.name}! We'll get back to you soon.`)
    setFormData({ name: "", email: "", message: "" })
    setIsOpen(false)
  }

  return (
    <>
      <div className="fixed bottom-24 right-6 flex flex-col gap-3 z-40">
        <a
          href="#"
          className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all hover:scale-110"
          title="Facebook"
        >
          <Facebook size={20} />
        </a>
        <a
          href="#"
          className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all hover:scale-110"
          title="Instagram"
        >
          <Instagram size={20} />
        </a>
        <a
          href="#"
          className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all hover:scale-110"
          title="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-2xl transition-all hover:scale-110 z-40"
        title="Contact Us"
      >
        💬
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-600"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-600 h-24 resize-none"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
