// components/LandingPage.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Code, Dices, LineChart, Zap } from "lucide-react"

export function LandingPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Explore the World of AI Simulations
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                zyumn.ai is your gateway to understanding random number generators, random walks, Monte Carlo
                simulations, and their applications in Large Language Models.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/simulations">
                <Button>Get Started</Button>
              </Link>
              <Link href="/learn">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Explore Our Features</h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            {/* Feature cards */}
            {/* ... (feature cards code) ... */}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Your Journey</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Whether you're a student, researcher, or enthusiast, zyumn.ai provides the tools and knowledge to explore
                the fascinating world of AI-based simulations.
              </p>
            </div>
            <Link href="/simulations">
              <Button size="lg">Begin Exploring</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}