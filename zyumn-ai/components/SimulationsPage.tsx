import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Dices, LineChart, Code, PieChart, TrendingUp, Atom, Brain, Wind, Sparkles } from "lucide-react"
import Link from "next/link"

export function SimulationsPage() {
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Simulations</h1>
            <Tabs defaultValue="monte-carlo" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="monte-carlo">Monte Carlo</TabsTrigger>
                <TabsTrigger value="cryptography">Cryptography</TabsTrigger>
                <TabsTrigger value="finance">Finance</TabsTrigger>
                <TabsTrigger value="quantum-llm">Quantum & LLM</TabsTrigger>
                <TabsTrigger value="chaos-theory">Chaos Theory</TabsTrigger>
              </TabsList>
              <TabsContent value="monte-carlo">
                <Card>
                  <CardHeader>
                    <CardTitle>Monte Carlo Simulations</CardTitle>
                    <CardDescription>Explore stochastic methods for numerical integration and optimization.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button className="h-auto py-4 px-6">
                        <PieChart className="w-6 h-6 mr-2" />
                        <div className="text-left">
                          <div className="font-semibold">Monte Carlo Pi Estimation</div>
                          <div className="text-sm text-gray-500">Estimate Pi using random point generation</div>
                        </div>
                      </Button>
                      <Button className="h-auto py-4 px-6">
                        <LineChart className="w-6 h-6 mr-2" />
                        <div className="text-left">
                          <div className="font-semibold">PRNG Comparison</div>
                          <div className="text-sm text-gray-500">Compare different pseudo-random number generators</div>
                        </div>
                      </Button>
                    </div>
                    <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      [Monte Carlo Simulation Visualization]
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="cryptography">
                <Card>
                  <CardHeader>
                    <CardTitle>Cryptographic PRNG Analysis</CardTitle>
                    <CardDescription>Implement and analyze cryptographic pseudo-random number generators.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button className="h-auto py-4 px-6">
                        <Code className="w-6 h-6 mr-2" />
                        <div className="text-left">
                          <div className="font-semibold">ChaCha20 Implementation</div>
                          <div className="text-sm text-gray-500">Implement and analyze ChaCha20 PRNG</div>
                        </div>
                      </Button>
                      <Button className="h-auto py-4 px-6">
                        <Dices className="w-6 h-6 mr-2" />
                        <div className="text-left">
                          <div className="font-semibold">NIST Statistical Tests</div>
                          <div className="text-sm text-gray-500">Run NIST tests on various PRNGs</div>
                        </div>
                      </Button>
                    </div>
                    <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      [Cryptographic PRNG Analysis Visualization]
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="finance">
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Simulations</CardTitle>
                    <CardDescription>Explore randomness in financial markets and predictions.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button className="h-auto py-4 px-6">
                        <TrendingUp className="w-6 h-6 mr-2" />
                        <div className="text-left">
                          <div className="font-semibold">Stock Market Simulator</div>
                          <div className="text-sm text-gray-500">Simulate market behavior using random walk models</div>
                        </div>
                      </Button>
                      <Button className="h-auto py-4 px-6">
                        <LineChart className="w-6 h-6 mr-2" />
                        <div className="text-left">
                          <div className="font-semibold">Options Pricing</div>
                          <div className="text-sm text-gray-500">Monte Carlo simulation for options valuation</div>
                        </div>
                      </Button>
                    </div>
                    <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      [Financial Simulation Visualization]
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="quantum-llm">
                <Card>
                  <CardHeader>
                    <CardTitle>Quantum & LLM Simulations</CardTitle>
                    <CardDescription>Explore quantum randomness and language model entropy.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button className="h-auto py-4 px-6">
                        <Atom className="w-6 h-6 mr-2" />
                        <div className="text-left">
                          <div className="font-semibold">QRNG Emulator</div>
                          <div className="text-sm text-gray-500">Emulate quantum random number generation</div>
                        </div>
                      </Button>
                      <Button className="h-auto py-4 px-6">
                        <Brain className="w-6 h-6 mr-2" />
                        <div className="text-left">
                          <div className="font-semibold">LLM Token Prediction</div>
                          <div className="text-sm text-gray-500">Analyze entropy in LLM token predictions</div>
                        </div>
                      </Button>
                    </div>
                    <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      [Quantum & LLM Simulation Visualization]
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="chaos-theory">
                <Card>
                  <CardHeader>
                    <CardTitle>Chaos Theory Simulations</CardTitle>
                    <CardDescription>Explore the fascinating world of chaos theory and complex systems.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button className="h-auto py-4 px-6">
                        <Sparkles className="w-6 h-6 mr-2" />
                        <div className="text-left">
                          <div className="font-semibold">Butterfly Effect</div>
                          <div className="text-sm text-gray-500">Visualize sensitivity to initial conditions</div>
                        </div>
                      </Button>
                      <Button className="h-auto py-4 px-6">
                        <Wind className="w-6 h-6 mr-2" />
                        <div className="text-left">
                          <div className="font-semibold">Lorenz Attractor</div>
                          <div className="text-sm text-gray-500">Explore the famous chaotic system</div>
                        </div>
                      </Button>
                    </div>
                    <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      [Chaos Theory Simulation Visualization]
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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