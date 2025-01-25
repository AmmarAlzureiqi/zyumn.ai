import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PerformanceAnalytics } from "@/components/performance-analytics"

export default function PerformancePage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6 ai-gradient">Performance Analytics</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Overall Performance</CardTitle>
          <CardDescription>Analyze your trading performance</CardDescription>
        </CardHeader>
        <CardContent>
          <PerformanceAnalytics />
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Strategy Performance</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add a breakdown of strategy performance */}
            <p>Breakdown of strategy performance will be displayed here.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Risk Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add risk analysis metrics */}
            <p>Risk analysis metrics will be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

