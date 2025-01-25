import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChartIcon as ChartBar, LineChart, Zap, History, BarChart3 } from "lucide-react"
import Link from "next/link"

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Navigation</h2>
        <nav className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:text-primary hover:bg-gray-100"
            asChild
          >
            <Link href="/dashboard">
              <ChartBar className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:text-primary hover:bg-gray-100"
            asChild
          >
            <Link href="/dashboard/market-data">
              <LineChart className="mr-2 h-4 w-4" />
              Market Data
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:text-primary hover:bg-gray-100"
            asChild
          >
            <Link href="/dashboard/strategy-builder">
              <Zap className="mr-2 h-4 w-4" />
              Strategy Builder
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:text-primary hover:bg-gray-100"
            asChild
          >
            <Link href="/dashboard/backtesting">
              <History className="mr-2 h-4 w-4" />
              Backtesting
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-600 hover:text-primary hover:bg-gray-100"
            asChild
          >
            <Link href="/dashboard/performance">
              <BarChart3 className="mr-2 h-4 w-4" />
              Performance
            </Link>
          </Button>
        </nav>
      </div>
      <ScrollArea className="flex-1">{/* Additional sidebar content can go here */}</ScrollArea>
    </div>
  )
}

