import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Book, Calendar } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DictAI - Smart AI Journalling',
  description: 'AI-powered journal with smart summaries',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pb-24`}>
        <nav className="bg-primary text-primary-foreground p-4 mb-8">
          <div className="container mx-auto max-w-3xl flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">DictAI</Link>
            <div className="flex space-x-4">
              <Link href="/diary" className="flex items-center hover:underline">
                <Book className="w-4 h-4 mr-2" />
                Diary
              </Link>
              <Link href="/summaries" className="flex items-center hover:underline">
                <Calendar className="w-4 h-4 mr-2" />
                Summaries
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

