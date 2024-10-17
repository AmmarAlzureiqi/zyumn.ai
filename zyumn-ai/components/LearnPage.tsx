// components/LearnPage.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, FileText, PieChart, Code, TrendingUp, Atom, Brain, Dices } from "lucide-react"
import Link from "next/link"

export function LearnPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Learn</h1>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            {/* Learning section cards */}
            {/* ... (learning section cards code) ... */}
          </div>
        </div>
      </section>
    </main>
  )
}