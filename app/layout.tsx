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
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
