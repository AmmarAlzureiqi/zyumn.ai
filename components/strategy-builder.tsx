// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// export function StrategyBuilder() {
//   const [strategy, setStrategy] = useState("")

//   const handleStrategyChange = (value: string) => {
//     setStrategy(value)
//     // In a real application, this would trigger AI analysis based on the selected strategy
//   }

//   return (
//     <Card className="card">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold text-gray-800">AI-Driven Strategy Builder</CardTitle>
//         <CardDescription className="text-gray-600">Develop and test trading strategies</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="strategy-type" className="text-gray-700">
//               Strategy Type
//             </Label>
//             <Select onValueChange={handleStrategyChange}>
//               <SelectTrigger id="strategy-type" className="w-full">
//                 <SelectValue placeholder="Select a strategy type" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="momentum">Momentum</SelectItem>
//                 <SelectItem value="mean-reversion">Mean Reversion</SelectItem>
//                 <SelectItem value="sentiment-analysis">Sentiment Analysis</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="parameters" className="text-gray-700">
//               Parameters
//             </Label>
//             <Input id="parameters" placeholder="Enter strategy parameters" className="w-full" />
//           </div>
//           <Button className="w-full bg-primary text-white hover:bg-primary-dark">Generate Strategy</Button>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function StrategyBuilder() {
  const handleStrategyChange = (value: string) => {
    // Handle the strategy change (maybe pass it to a parent component or API)
    console.log("Selected Strategy: ", value)
  }

  return (
    <Card className="card">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">AI-Driven Strategy Builder</CardTitle>
        <CardDescription className="text-gray-600">Develop and test trading strategies</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="strategy-type" className="text-gray-700">
              Strategy Type
            </Label>
            <Select onValueChange={handleStrategyChange}>
              <SelectTrigger id="strategy-type" className="w-full">
                <SelectValue placeholder="Select a strategy type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="momentum">Momentum</SelectItem>
                <SelectItem value="mean-reversion">Mean Reversion</SelectItem>
                <SelectItem value="sentiment-analysis">Sentiment Analysis</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="parameters" className="text-gray-700">
              Parameters
            </Label>
            <Input id="parameters" placeholder="Enter strategy parameters" className="w-full" />
          </div>
          <Button className="w-full bg-primary text-white hover:bg-primary-dark">Generate Strategy</Button>
        </div>
      </CardContent>
    </Card>
  )
}
