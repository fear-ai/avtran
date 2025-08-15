import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Footer from '@/components/layout/Footer'
import { Container, Card, CardHeader, CardTitle, CardDescription, Button } from '@/components/ui'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Sign-up Section */}
      <section id="signup" className="bg-gradient-to-r from-gray-50 to-blue-50 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join thousands of developers building amazing things with AVTran. Start your journey today.
          </p>
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your company name"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 font-semibold text-lg shadow-lg"
              >
                Start Building Today
              </button>
            </form>
            
            <p className="mt-6 text-sm text-gray-500">
              By signing up, you agree to our{' '}
              <a href="/terms" className="text-blue-600 hover:text-blue-800 underline">Terms of Service</a>
              {' '}and{' '}
              <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 px-4 bg-white">
        <Container size="lg">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose AVTran?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build and deploy modern applications with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Card variant="elevated" interactive size="lg">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                    🚀
                  </div>
                  <CardTitle>Lightning Fast</CardTitle>
                  <CardDescription>
                    Build and deploy applications 10x faster with our optimized development environment.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <div>
              <Card variant="elevated" interactive size="lg">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                    🛡️
                  </div>
                  <CardTitle>Enterprise Security</CardTitle>
                  <CardDescription>
                    Bank-grade security with end-to-end encryption and compliance certifications.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <div>
              <Card variant="elevated" interactive size="lg">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                    🌐
                  </div>
                  <CardTitle>Global Scale</CardTitle>
                  <CardDescription>
                    Deploy to 200+ global locations with automatic failover and optimization.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" variant="accent">
              <a href="/features">Explore All Features</a>
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
