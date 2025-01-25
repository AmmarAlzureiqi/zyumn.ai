import { Button } from "@/components/ui/button"
import { Bell, Settings, User } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold ai-gradient">
          zyumn.ai
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-primary">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-primary">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-primary">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

