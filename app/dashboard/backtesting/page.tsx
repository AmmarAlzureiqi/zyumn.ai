import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BacktestingEngine } from "@/components/backtesting-engine"

export default function BacktestingPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6 ai-gradient">Backtesting</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Backtesting Engine</CardTitle>
          <CardDescription>Test your strategies against historical data</CardDescription>
        </CardHeader>
        <CardContent>
          <BacktestingEngine />
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Backtests</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add a list of recent backtests */}
            <p>List of recent backtests will be displayed here.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Backtest Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add a comparison tool for backtests */}
            <p>Backtest comparison tool will be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

