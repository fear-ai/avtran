import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Avtran
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Building the future of development, one project at a time. Empowering developers with cutting-edge tools and seamless experiences.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-4 uppercase tracking-wide">Platform</h4>
            <ul className="space-y-3">
              <li><Link href="/features" className="text-gray-300 hover:text-blue-300 transition-colors">Features</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-blue-300 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-blue-300 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-4 uppercase tracking-wide">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-gray-300 hover:text-blue-300 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-blue-300 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            &copy; 2025 Avtran. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">A</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
