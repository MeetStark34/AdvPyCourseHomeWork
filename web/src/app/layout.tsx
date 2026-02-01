import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AdvPyCourse Workspace - MStrak',
  description: 'An interactive desktop-like experience for exploring the Advanced Python Course repository',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}