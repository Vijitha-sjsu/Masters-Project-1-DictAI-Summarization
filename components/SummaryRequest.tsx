'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { generateSummary } from '../actions/generate-summary'

type SummaryPeriod = 'daily' | 'weekly' | 'monthly'

export default function SummaryRequest() {
  const [period, setPeriod] = useState<SummaryPeriod>('daily')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleGenerateSummary = async () => {
    setIsLoading(true)
    try {
      const summary = await generateSummary(period)
      toast({
        title: `${period.charAt(0).toUpperCase() + period.slice(1)} Summary`,
        description: summary,
      })
      // Simulate email notification
      setTimeout(() => {
        toast({
          title: "Email Sent",
          description: `Your ${period} summary has been sent to your email.`,
        })
      }, 2000)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate summary. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Generate Summary</CardTitle>
        <CardDescription>Request a summary of your journal entries</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="period" className="text-sm font-medium">
            Summary Period
          </label>
          <Select value={period} onValueChange={(value: SummaryPeriod) => setPeriod(value)}>
            <SelectTrigger id="period">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleGenerateSummary} disabled={isLoading} className="w-full">
          {isLoading ? "Generating..." : "Generate Summary"}
        </Button>
      </CardContent>
    </Card>
  )
}

