import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavbarFooter from '@/components/ui/navigation-bar-footer/navbar-footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <NavbarFooter>{children}</NavbarFooter>
        </body>
      </html>
  )
}
