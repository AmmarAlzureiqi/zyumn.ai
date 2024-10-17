// components/Header.tsx
import Link from "next/link"
import { Zap } from "lucide-react"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
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
    </header>
  )
}