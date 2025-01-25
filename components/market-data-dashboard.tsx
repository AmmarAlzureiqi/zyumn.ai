"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Mock data - replace with real-time data in production
const data = [
  { time: "09:00", AAPL: 150, GOOGL: 2800, MSFT: 300 },
  { time: "10:00", AAPL: 152, GOOGL: 2820, MSFT: 305 },
  { time: "11:00", AAPL: 151, GOOGL: 2815, MSFT: 303 },
  { time: "12:00", AAPL: 153, GOOGL: 2830, MSFT: 307 },
  { time: "13:00", AAPL: 155, GOOGL: 2850, MSFT: 310 },
]

export function MarketDataDashboard() {
  return (
    <Card className="card">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">Real-Time Market Data</CardTitle>
        <CardDescription className="text-gray-600">Live price feeds and technical indicators</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            AAPL: {
              label: "Apple Inc.",
              color: "#3498db",
            },
            GOOGL: {
              label: "Alphabet Inc.",
              color: "#2ecc71",
            },
            MSFT: {
              label: "Microsoft Corporation",
              color: "#e74c3c",
            },
          }}
          className="h-[200px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="time" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line type="monotone" dataKey="AAPL" stroke="var(--color-AAPL)" strokeWidth={2} />
              <Line type="monotone" dataKey="GOOGL" stroke="var(--color-GOOGL)" strokeWidth={2} />
              <Line type="monotone" dataKey="MSFT" stroke="var(--color-MSFT)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

