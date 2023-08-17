import './globals.css'
import type { Metadata } from 'next'
import { Birthstone } from 'next/font/google'

const inter = Birthstone({weight: '400', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'ASKME',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
