import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function About() {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former senior engineer at major tech companies with 15+ years building scalable systems.",
      avatar: "👨‍💼"
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      bio: "Expert in cloud architecture and distributed systems, passionate about developer experience.",
      avatar: "👩‍💻"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Product",
      bio: "Product leader focused on creating intuitive developer tools that just work.",
      avatar: "👨‍💼"
    }
  ]

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description: "Started with a vision to simplify modern development"
    },
    {
      year: "2024",
      title: "Beta Launch",
      description: "Released first version to 1000+ developers"
    },
    {
      year: "2025",
      title: "Public Launch",
      description: "Opening our platform to developers worldwide"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            About Avtran
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            We're building the future of development, one project at a time. Our mission is to empower developers with tools that make building software faster, safer, and more enjoyable.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that great software comes from great developer experiences. Our platform combines cutting-edge technology with intuitive design to create tools that developers actually want to use.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From startups to enterprises, we're helping teams build better software faster. Whether you're deploying your first app or scaling to millions of users, Avtran has the tools you need.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-white text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-2">Developer First</h3>
              <p className="opacity-90">Everything we build is designed with developers in mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>We constantly push the boundaries of what's possible in development</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p>We believe in the power of developers helping developers</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p>We strive for excellence in everything we build</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
