export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold mb-4 text-emerald-400">About</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold mb-4 text-emerald-400">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Elementary
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Middle School
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Upper School
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold mb-4 text-emerald-400">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Calendar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Parent Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Student Life
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-bold mb-4 text-emerald-400">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>123 Academy Lane</li>
              <li>Education City, ST 12345</li>
              <li className="pt-2">
                <a href="tel:+1234567890" className="hover:text-white transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:info@kmlacademy.edu" className="hover:text-white transition">
                  info@kmlacademy.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 KMLAcademy. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
