import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Calendar } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8 text-primary">DictAI - Smart AI Journalling</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Book className="w-5 h-5 mr-2" />
              Diary
            </CardTitle>
            <CardDescription>Write and review your daily entries</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/diary">
              <Button className="w-full">Go to Diary</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Summaries
            </CardTitle>
            <CardDescription>View AI-generated summaries of your entries</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/summaries">
              <Button className="w-full" variant="outline">View Summaries</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

