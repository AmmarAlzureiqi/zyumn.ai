import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StrategyBuilder } from "@/components/strategy-builder"

export default function StrategyBuilderPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-6 ai-gradient">Strategy Builder</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Create New Strategy</CardTitle>
          <CardDescription>Design and test your trading strategies</CardDescription>
        </CardHeader>
        <CardContent>
          <StrategyBuilder />
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Saved Strategies</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add a list of saved strategies */}
            <p>List of saved strategies will be displayed here.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Strategy Templates</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add a list of strategy templates */}
            <p>List of strategy templates will be displayed here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

