"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Mock data - replace with actual backtesting results in production
const data = [
  { date: "2023-01-01", value: 1000 },
  { date: "2023-02-01", value: 1200 },
  { date: "2023-03-01", value: 1100 },
  { date: "2023-04-01", value: 1300 },
  { date: "2023-05-01", value: 1500 },
]

export function BacktestingEngine() {
  return (
    <Card className="card">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">Backtesting Engine</CardTitle>
        <CardDescription className="text-gray-600">Validate strategies with historical data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start-date" className="text-gray-700">
                Start Date
              </Label>
              <Input id="start-date" type="date" className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-date" className="text-gray-700">
                End Date
              </Label>
              <Input id="end-date" type="date" className="w-full" />
            </div>
          </div>
          <Button className="w-full bg-primary text-white hover:bg-primary-dark">Run Backtest</Button>
          <ChartContainer
            config={{
              value: {
                label: "Portfolio Value",
                color: "#3498db",
              },
            }}
            className="h-[150px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="date" stroke="#718096" />
                <YAxis stroke="#718096" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="var(--color-value)"
                  fill="var(--color-value)"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

