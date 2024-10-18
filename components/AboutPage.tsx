import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Lightbulb, Code, GraduationCap } from "lucide-react"
import Link from "next/link"

export function AboutPage() {
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">About zyumn.ai</h1>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Exploring the intersection of AI, randomness, and chaos theory
            </p>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <Lightbulb className="h-8 w-8 mb-2" />
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    At zyumn.ai, we're dedicated to unraveling the complexities of randomness and chaos in AI systems.
                    Our mission is to provide accessible, interactive simulations and educational resources that bridge
                    the gap between theoretical concepts and practical applications in the field of AI and complex systems.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 mb-2" />
                  <CardTitle>What We Offer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Interactive simulations of random processes and chaotic systems</li>
                    <li>In-depth tutorials on Monte Carlo methods, cryptography, and quantum computing</li>
                    <li>Exploration of the role of randomness in AI and machine learning</li>
                    <li>Resources for understanding complex systems and the butterfly effect</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2" />
                  <CardTitle>Our Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    zyumn.ai is brought to you by a diverse team of researchers, developers, and educators passionate
                    about AI and complex systems. Our backgrounds span computer science, mathematics, physics, and
                    data science, allowing us to approach these topics from multiple perspectives.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <GraduationCap className="h-8 w-8 mb-2" />
                  <CardTitle>Educational Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We believe in the power of education to drive innovation. Our platform is designed for students,
                    professionals, and enthusiasts alike. Whether you're just starting out or looking to deepen your
                    understanding, zyumn.ai provides the tools and knowledge to explore the fascinating world of AI
                    simulations and chaos theory.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Join Us on This Journey</h2>
              <p className="mb-6">
                Dive into the world of AI simulations, randomness, and chaos theory. Start exploring our simulations
                or check out our learning resources to begin your adventure in understanding complex systems.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/simulations">
                  <Button>Explore Simulations</Button>
                </Link>
                <Link href="/learn">
                  <Button variant="outline">Learning Resources</Button>
                </Link>
              </div>
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