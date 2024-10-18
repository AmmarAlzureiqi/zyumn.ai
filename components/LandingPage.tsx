import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Code, Dices, LineChart, Wind, Sparkles } from "lucide-react"
import Link from "next/link"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Explore the World of AI Simulations and Chaos
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  zyumn.ai is your gateway to understanding random number generators, chaos theory, complex systems,
                  and their applications in AI and Large Language Models.
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
              <Card>
                <CardHeader>
                  <Dices className="h-8 w-8 mb-2" />
                  <CardTitle>Random Number Generators</CardTitle>
                  <CardDescription>Dive deep into various RNG algorithms and their properties.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/simulations#monte-carlo">
                    <Button variant="ghost" className="w-full justify-start">
                      Explore RNGs
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Wind className="h-8 w-8 mb-2" />
                  <CardTitle>Chaos Theory & Complex Systems</CardTitle>
                  <CardDescription>Visualize and understand chaotic systems and their behaviors.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/simulations#chaos-theory">
                    <Button variant="ghost" className="w-full justify-start">
                      Discover Chaos
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 mb-2" />
                  <CardTitle>AI & LLM Simulations</CardTitle>
                  <CardDescription>Investigate the role of randomness and chaos in AI systems.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/simulations#quantum-llm">
                    <Button variant="ghost" className="w-full justify-start">
                      Explore AI Simulations
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
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
                  the fascinating world of AI-based simulations, randomness, and chaos theory.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/simulations">
                  <Button size="lg">Begin Exploring</Button>
                </Link>
                <Link href="/learn">
                  <Button size="lg" variant="outline">Access Learning Resources</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Featured Simulations</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <Sparkles className="h-8 w-8 mb-2" />
                  <CardTitle>Butterfly Effect Simulator</CardTitle>
                  <CardDescription>Visualize how small changes lead to drastically different outcomes.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Experience the essence of chaos theory by manipulating initial conditions and observing the long-term effects.</p>
                  <Link href="/simulations#chaos-theory">
                    <Button>Try Simulation</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <LineChart className="h-8 w-8 mb-2" />
                  <CardTitle>AI Decision Tree Randomness</CardTitle>
                  <CardDescription>Explore how randomness influences AI decision-making processes.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Dive into the intricate world of AI algorithms and see how random factors shape outcomes.</p>
                  <Link href="/simulations#quantum-llm">
                    <Button>Explore AI Randomness</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}