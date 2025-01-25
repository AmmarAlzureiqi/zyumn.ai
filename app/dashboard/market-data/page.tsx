import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MarketDataDashboard } from "@/components/market-data-dashboard"

export default function MarketDataPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6 ai-gradient">Market Data</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Market Overview</CardTitle>
          <CardDescription>Real-time market data and trends</CardDescription>
        </CardHeader>
        <CardContent>
          <MarketDataDashboard />
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Gainers</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add a list or table of top gaining stocks */}
            <p>List of top gaining stocks will be displayed here.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Losers</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add a list or table of top losing stocks */}
            <p>List of top losing stocks will be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

