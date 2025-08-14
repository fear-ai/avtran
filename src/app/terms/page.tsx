import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Simple, fair, and straightforward terms for using our platform.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-orange-50 rounded-2xl border border-orange-200">
                <h2 className="text-2xl font-bold text-orange-800 mb-4">🤝 Our Simple Rule</h2>
                <p className="text-orange-700">
                  <strong>Be nice. Do not lie or steal.</strong> That's it. Treat others as you'd like to be treated.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-8">
                By accessing and using Avtran's platform, you agree to be bound by these terms. If you don't agree, please don't use our service.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">What You Can Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-3">✅ Allowed</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Use our platform for development</li>
                    <li>• Share your projects publicly</li>
                    <li>• Provide feedback and suggestions</li>
                    <li>• Report bugs or issues</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                  <h3 className="text-xl font-bold text-red-800 mb-3">❌ Not Allowed</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• Harm or harass others</li>
                    <li>• Violate laws or regulations</li>
                    <li>• Attempt to break our systems</li>
                    <li>• Use for illegal purposes</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Code of Conduct</h2>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Our Community Standards</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• <strong>Be respectful</strong> to all users and team members</li>
                  <li>• <strong>Be honest</strong> in your communications and actions</li>
                  <li>• <strong>Be helpful</strong> to others in the community</li>
                  <li>• <strong>Be constructive</strong> in your feedback and criticism</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                You retain ownership of your code and projects. We don't claim any rights to your intellectual property.
              </p>
              <p className="text-gray-600 mb-8">
                Our platform, tools, and documentation remain our property. You can use them according to these terms.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy and Data</h2>
              <p className="text-gray-600 mb-8">
                We don't collect personal data. Your privacy is protected by default. See our{' '}
                <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a> for details.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Availability</h2>
              <p className="text-gray-600 mb-8">
                We strive to provide reliable service but cannot guarantee 100% uptime. We'll do our best to maintain service quality and notify you of any significant issues.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
              <p className="text-gray-600 mb-8">
                We provide our service "as is" without warranties. We're not liable for any damages arising from your use of our platform.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              <p className="text-gray-600 mb-8">
                We can terminate access for violations of these terms. You can stop using our service at any time.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <p className="text-gray-600 mb-8">
                We may update these terms occasionally. We'll notify you of significant changes. Continued use means you accept the new terms.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact and Support</h2>
              <p className="text-gray-600 mb-8">
                Questions about these terms? Need help? Contact us through our{' '}
                <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">contact page</a>.
              </p>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <p className="text-gray-600 text-center">
                  <strong>Last updated:</strong> January 2025
                </p>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl border border-orange-200">
                <p className="text-center text-gray-700">
                  <strong>Remember:</strong> Be nice, be honest, be helpful. That's what makes our community great! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
