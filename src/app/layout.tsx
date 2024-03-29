import type { Metadata } from 'next'

import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'

export const metadata: Metadata = {
  title: 'Tim Officer',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
