import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Features() {
  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast Development",
      description: "Build applications 10x faster with our optimized development environment and intelligent tooling.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🛡️",
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, role-based access control, and compliance certifications.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "📱",
      title: "Cross-Platform Support",
      description: "Deploy to web, mobile, and desktop with a single codebase using our universal framework.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🔧",
      title: "Advanced Tooling",
      description: "Integrated debugging, testing, and monitoring tools that streamline your development workflow.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "🌐",
      title: "Global CDN",
      description: "Lightning-fast content delivery across 200+ global locations with automatic failover and optimization.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Monitor performance, track user behavior, and optimize your applications with live insights.",
      color: "from-teal-500 to-green-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Discover the tools and capabilities that make Avtran the platform of choice for modern developers.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of developers building amazing things with Avtran.
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 font-semibold text-lg shadow-xl">
            Start Building Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
