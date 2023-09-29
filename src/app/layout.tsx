import NavigationBar from '@/components/ui/navigation-bar-footer/navigation-bar/navigation-bar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/ui/navigation-bar-footer/footer/footer'
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
