'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-red-600 mb-4">Critical Error</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              A critical error occurred. Please refresh the page or contact support.
            </p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-200 font-semibold"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
