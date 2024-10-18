import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, BookOpen, FileText, PieChart, Code, TrendingUp, Atom, Brain, Wind } from "lucide-react"
import Link from "next/link"

export function LearnPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <Zap className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">zyumn.ai</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/simulations" className="text-sm font-medium hover:underline underline-offset-4">
            Simulations
          </Link>
          <Link href="/learn" className="text-sm font-medium hover:underline underline-offset-4">
            Learn
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
        </nav>
      </header> */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Learn</h1>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <BookOpen className="h-8 w-8 mb-2" />
                  <CardTitle>Tutorials</CardTitle>
                  <CardDescription>Step-by-step guides to understand key concepts.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <PieChart className="w-4 h-4 mr-2" />
                      <span>Monte Carlo Pi Estimation</span>
                    </li>
                    <li className="flex items-center">
                      <Code className="w-4 h-4 mr-2" />
                      <span>Implementing ChaCha20 PRNG</span>
                    </li>
                    <li className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span>Stock Market Random Walk Models</span>
                    </li>
                    <li className="flex items-center">
                      <Atom className="w-4 h-4 mr-2" />
                      <span>Quantum Random Number Generation</span>
                    </li>
                    <li className="flex items-center">
                      <Wind className="w-4 h-4 mr-2" />
                      <span>Butterfly Effect and Chaos Theory</span>
                    </li>
                  </ul>
                  <Link href="/tutorials">
                    <Button className="w-full mt-4">View All Tutorials</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 mb-2" />
                  <CardTitle>Resources</CardTitle>
                  <CardDescription>Additional materials to support your learning journey.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span>Glossary of Randomness and Simulation Terms</span>
                    </li>
                    <li className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      <span>NIST Statistical Test Suite Documentation</span>
                    </li>
                    <li className="flex items-center">
                      <Brain className="w-4 h-4 mr-2" />
                      <span>Research Papers on LLM Token Prediction</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>Community Forums and Discussion Boards</span>
                    </li>
                    <li className="flex items-center">
                      <Wind className="w-4 h-4 mr-2" />
                      <span>Chaos Theory in Complex Systems</span>
                    </li>
                  </ul>
                  <Link href="/resources">
                    <Button className="w-full mt-4">Access Resources</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 zyumn.ai. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/terms" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer> */}
    </div>
  )
}