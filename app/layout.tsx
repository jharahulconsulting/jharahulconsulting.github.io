import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JHA Services',
  description: 'Created with Love by JHA',
  generator: 'sudipnext',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
          <meta name="verification" content="your-verification-code-here">
      </head>
      <body>{children}</body>
    </html>
  )
}
