import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JAKOM - Your One-Stop Tech Solution',
  description: 'Empowering Your Business with Seamless Integration and Expert Support. Professional Graphics & Design, Data Analysis, Accounting & Bookkeeping, Virtual Assistance, and Kids Hub services.',
  keywords: 'JAKOM, graphics design, data analysis, accounting, bookkeeping, virtual assistance, kids hub, tech solutions, business services',
  authors: [{ name: 'Obare Emmanuel' }],
  openGraph: {
    title: 'JAKOM - Your One-Stop Tech Solution',
    description: 'Empowering Your Business with Seamless Integration and Expert Support',
    url: 'https://jakom.com',
    siteName: 'JAKOM',
    images: [
      {
        url: 'https://i.imgur.com/GnYpS80.png',
        width: 1200,
        height: 630,
        alt: 'JAKOM Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JAKOM - Your One-Stop Tech Solution',
    description: 'Empowering Your Business with Seamless Integration and Expert Support',
    images: ['https://i.imgur.com/GnYpS80.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}