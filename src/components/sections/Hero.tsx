import Link from 'next/link'

export default function Hero() {
  return (
    <main className="text-center py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          <span className="block">Welcome to</span>
          <span className="block">AVTran</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          Your platform for modern development. Build, deploy, and scale with confidence using cutting-edge technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href="/features" 
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 font-semibold text-lg shadow-xl"
          >
            Explore Features
          </Link>
          <Link 
            href="/about" 
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 font-semibold text-lg shadow-xl"
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
  )
}
