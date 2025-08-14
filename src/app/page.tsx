import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Avtran</h1>
          <div className="hidden md:flex space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="block">Welcome to</span>
          <span className="text-blue-600">Avtran</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Your platform for modern development. Build, deploy, and scale with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#signup" className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Get Started
          </Link>
          <Link href="#learn-more" className="px-8 py-3 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200">
            Learn More
          </Link>
        </div>
      </main>

      {/* Sign-up Section */}
      <section id="signup" className="bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of developers building amazing things.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full sm:w-80 px-5 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign up
            </button>
          </form>
          <p className="text-sm text-gray-500">
            We care about your privacy. Read our{' '}
            <Link href="#privacy" className="text-blue-600 hover:text-blue-500">Privacy Policy</Link>.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why choose Avtran?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-blue-500 text-white rounded-md flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Fast Development</h3>
              <p className="text-gray-600">Build quickly with modern tools and frameworks.</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-green-500 text-white rounded-md flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Reliable</h3>
              <p className="text-gray-600">Trusted by developers worldwide.</p>
            </div>

            <div>
              <div className="w-12 h-12 bg-purple-500 text-white rounded-md flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Loved by Developers</h3>
              <p className="text-gray-600">Built with developers in mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Avtran</h3>
              <p className="text-gray-300">Building the future of development, one project at a time.</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase mb-4">Platform</h4>
                <ul className="space-y-2">
                  <li><Link href="#features" className="text-gray-300 hover:text-white">Features</Link></li>
                  <li><Link href="#about" className="text-gray-300 hover:text-white">About</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><Link href="#contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                  <li><Link href="#help" className="text-gray-300 hover:text-white">Help</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 Avtran. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link href="#terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
