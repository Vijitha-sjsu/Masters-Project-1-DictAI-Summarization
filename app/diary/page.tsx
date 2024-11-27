'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, Send, Calendar } from 'lucide-react'
import { createSummary } from '../actions/create-summary'
import { format } from 'date-fns'

// Mock diary entries
const mockEntries = [
  { date: '2023-06-03', content: 'Attended an inspiring webinar on AI advancements. It gave me new ideas for my own projects.' },
  { date: '2023-06-02', content: 'I struggled with motivation today, but managed to complete my daily tasks. Need to focus on better time management.' },
  { date: '2023-06-01', content: 'Today was a productive day. I finished my project ahead of schedule and had time for a relaxing evening walk.' },
]

export default function DiaryPage() {
  const [entry, setEntry] = useState('')
  const [summaryPeriod, setSummaryPeriod] = useState('today')
  const [isRecording, setIsRecording] = useState(false)

  const handleCreateSummary = async () => {
    try {
      await createSummary(summaryPeriod)
      alert(`Summary for ${summaryPeriod} has been created. Check the Summaries tab.`)
    } catch (error) {
      alert('Failed to create summary. Please try again.')
    }
  }

  const handleVoiceEntry = () => {
    setIsRecording(!isRecording)
    // Here you would implement actual voice recording functionality
    if (isRecording) {
      alert('Voice recording stopped. Transcription would be added to the entry.')
    } else {
      alert('Voice recording started. Speak your diary entry.')
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-primary">My Diary</h1>
      
      <div className="space-y-6 mb-8">
        {mockEntries.map((entry, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-muted py-2">
              <CardTitle className="text-sm font-medium flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {format(new Date(entry.date), 'MMMM d, yyyy')}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-muted-foreground">{entry.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 shadow-lg">
        <div className="container mx-auto max-w-3xl flex items-end space-x-2">
          <Textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="Write your diary entry here..."
            className="w-full h-20 resize-none rounded-2xl"
          />
          <Button
            size="icon"
            variant={isRecording ? "destructive" : "outline"}
            onClick={handleVoiceEntry}
            className="rounded-full"
            aria-label={isRecording ? "Stop voice recording" : "Start voice recording"}
          >
            <Mic className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            onClick={() => alert('Entry submitted')}
            className="rounded-full"
            aria-label="Submit entry"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="mt-8 mb-24">
        <h2 className="text-xl font-semibold mb-4 text-primary">Create Summary</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <Select value={summaryPeriod} onValueChange={setSummaryPeriod}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleCreateSummary}>Create Summary</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 mb-24">
        <Link href="/summaries" className="text-primary hover:underline flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          View Summaries
        </Link>
      </div>
    </div>
  )
}

