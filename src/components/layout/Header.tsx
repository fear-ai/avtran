import Link from 'next/link'

export default function Header() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
            Avtran
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/features" className="hover:text-blue-200 transition-colors font-medium">
              Features
            </Link>
            <Link href="/about" className="hover:text-blue-200 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-200 transition-colors font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
