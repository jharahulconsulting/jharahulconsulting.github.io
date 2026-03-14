import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JHA Services',
  description: 'Created with Love by JHA',
  generator: 'sudipnext',
  verification: {
    'impact-site-verification': 'a4857cb4-a80b-49c3-b136-b4bf7c3c4359',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">     
      <body>{children}</body>
    </html>
  )
}
