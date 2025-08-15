'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-200 font-semibold"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
