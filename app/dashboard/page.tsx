import { MarketDataDashboard } from "@/components/market-data-dashboard"
import { StrategyBuilder } from "@/components/strategy-builder"
import { BacktestingEngine } from "@/components/backtesting-engine"
import { PerformanceAnalytics } from "@/components/performance-analytics"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6 ai-gradient">zyumn.ai Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Market Data</CardTitle>
            <CardDescription>Real-time market insights</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-[300px] overflow-auto p-6">
              <MarketDataDashboard />
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Strategy Builder</CardTitle>
            <CardDescription>Create and manage trading strategies</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-[300px] overflow-auto p-6">
              <StrategyBuilder />
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Backtesting Engine</CardTitle>
            <CardDescription>Test strategies with historical data</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-[300px] overflow-auto p-6">
              <BacktestingEngine />
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Performance Analytics</CardTitle>
            <CardDescription>Analyze trading performance</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="max-h-[300px] overflow-auto p-6">
              <PerformanceAnalytics />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/dashboard/market-data" className="text-primary hover:underline">
            Market Data
          </Link>
          <Link href="/dashboard/strategy-builder" className="text-primary hover:underline">
            Strategy Builder
          </Link>
          <Link href="/dashboard/backtesting" className="text-primary hover:underline">
            Backtesting
          </Link>
          <Link href="/dashboard/performance" className="text-primary hover:underline">
            Performance
          </Link>
        </div>
      </div>
    </div>
  )
}

