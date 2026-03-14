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
    <!-- Put the verification meta tag first -->
    <meta name="verification" content="your-verification-code-here">
    
    <!-- Other meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Your Website Title</title>
    <!-- Any other head content like CSS links or scripts -->
</head>
      <body>{children}</body>
    </html>
  )
}
