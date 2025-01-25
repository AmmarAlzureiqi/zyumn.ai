import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold ai-gradient">zyumn.ai</h1>
          <div className="space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-primary">
              Login
            </Link>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6 ai-gradient">AI-Powered Quantitative Trading</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Harness the power of artificial intelligence to revolutionize your trading strategies. zyumn.ai provides
          cutting-edge tools for market analysis, strategy development, and performance optimization.
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/demo">Watch Demo</Link>
          </Button>
        </div>
      </main>

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-white rounded-full p-6 inline-block mb-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-gray-600">Get instant insights with our advanced market analysis tools.</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full p-6 inline-block mb-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">AI-Driven Strategies</h3>
            <p className="text-gray-600">Develop sophisticated trading strategies powered by machine learning.</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full p-6 inline-block mb-4 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Performance Optimization</h3>
            <p className="text-gray-600">
              Continuously improve your strategies with our backtesting and optimization tools.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>&copy; 2023 zyumn.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

