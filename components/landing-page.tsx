"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const phrases = [
  "Analyzing market trends...",
  "Optimizing trading algorithms...",
  "Predicting future patterns...",
  "Enhancing AI models...",
  "Revolutionizing quantitative trading...",
]

export default function LandingPage() {
  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col">
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold ai-gradient">
            zyumn.ai
          </Link>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 ai-gradient"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building the Future of AI-Powered Trading
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            zyumn.ai is crafting a revolutionary quantitative trading platform.
          </motion.p>
          <motion.div
            className="text-lg md:text-xl text-primary font-semibold h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.span
              key={currentPhrase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {phrases[currentPhrase]}
            </motion.span>
          </motion.div>
        </div>
      </main>

      <footer className="container mx-auto px-6 py-8 text-center text-gray-600">
        <p>&copy; 2023 zyumn.ai. All rights reserved.</p>
      </footer>
    </div>
  )
}

