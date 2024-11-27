'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Book, Hash } from 'lucide-react'
import { getSummaries } from '../actions/get-summaries'

export default function SummariesPage() {
  const [summaries, setSummaries] = useState([])

  useEffect(() => {
    const fetchSummaries = async () => {
      const fetchedSummaries = await getSummaries()
      setSummaries(fetchedSummaries)
    }
    fetchSummaries()
  }, [])

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-primary">My Summaries</h1>
      {summaries.map((summary, index) => (
        <Card key={index} className="mb-6 overflow-hidden">
          <CardHeader className="bg-muted py-4">
            <CardTitle className="flex items-center text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              {summary.period}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2 flex items-center">
                <Book className="w-4 h-4 mr-2" /> Key Themes
              </h3>
              <div className="flex flex-wrap gap-2">
                {summary.themes.map((theme, i) => (
                  <Badge key={i} variant="secondary">{theme}</Badge>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2 flex items-center">
                <Hash className="w-4 h-4 mr-2" /> Frequent Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {summary.topics.map((topic, i) => (
                  <Badge key={i} variant="outline">{topic}</Badge>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground">{summary.content}</p>
          </CardContent>
        </Card>
      ))}
      <Link href="/diary" className="text-primary hover:underline flex items-center">
        <Book className="w-4 h-4 mr-2" />
        Back to Diary
      </Link>
    </div>
  )
}

