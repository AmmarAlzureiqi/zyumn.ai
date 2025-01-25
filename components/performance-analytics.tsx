"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Mock data - replace with actual performance metrics in production
const data = [
  { name: "Strategy A", returns: 15, sharpeRatio: 1.2, maxDrawdown: -5 },
  { name: "Strategy B", returns: 12, sharpeRatio: 1.5, maxDrawdown: -3 },
  { name: "Strategy C", returns: 18, sharpeRatio: 1.1, maxDrawdown: -7 },
]

export function PerformanceAnalytics() {
  return (
    <Card className="card">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">Performance Analytics</CardTitle>
        <CardDescription className="text-gray-600">Strategy performance metrics and risk analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            returns: {
              label: "Returns (%)",
              color: "#3498db",
            },
            sharpeRatio: {
              label: "Sharpe Ratio",
              color: "#2ecc71",
            },
            maxDrawdown: {
              label: "Max Drawdown (%)",
              color: "#e74c3c",
            },
          }}
          className="h-[200px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#718096" />
              <YAxis stroke="#718096" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="returns" fill="var(--color-returns)" />
              <Bar dataKey="sharpeRatio" fill="var(--color-sharpeRatio)" />
              <Bar dataKey="maxDrawdown" fill="var(--color-maxDrawdown)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

