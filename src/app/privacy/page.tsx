import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Your privacy is important to us. This policy explains how we handle your information.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-green-50 rounded-2xl border border-green-200">
                <h2 className="text-2xl font-bold text-green-800 mb-4">🛡️ Our Privacy Commitment</h2>
                <p className="text-green-700">
                  <strong>We collect nothing. We track nothing.</strong> Your privacy is our priority.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Don't Collect</h2>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>Personal information (name, email, address)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>Usage data or analytics</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>Cookies or tracking technologies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>Device information</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>IP addresses or location data</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Actually Do</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">🌐 Website Hosting</h3>
                  <p className="text-blue-700">We host our website on Vercel, which may collect basic server logs for security purposes.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">📧 Contact Forms</h3>
                  <p className="text-purple-700">If you use our contact form, we only receive what you send us directly.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                We use minimal third-party services:
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li><strong>Vercel:</strong> Website hosting and deployment</li>
                <li><strong>GitHub:</strong> Source code hosting (public repository)</li>
                <li><strong>Cloudflare:</strong> Domain management and DNS</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200 mb-8">
                <p className="text-yellow-800">
                  Since we don't collect personal data, there's nothing to access, modify, or delete. 
                  Your privacy is protected by default.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
              <p className="text-gray-600 mb-8">
                Our service is not intended for children under 13. We do not knowingly collect any personal information from children under 13.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
              <p className="text-gray-600 mb-8">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                If you have any questions about this privacy policy, please contact us at{' '}
                <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">our contact page</a>.
              </p>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <p className="text-gray-600 text-center">
                  <strong>Last updated:</strong> January 2025
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
