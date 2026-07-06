import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Aditya Ganapati Hegde | Premium Portfolio',
  description: 'Enterprise-grade portfolio showcasing expertise in ERPNext, Frappe, and full-stack development.',
  keywords: ['ERPNext', 'Frappe', 'Developer', 'Portfolio', 'Consultant'],
  openGraph: {
    title: 'Aditya Ganapati Hegde | Premium Portfolio',
    description: 'Enterprise-grade portfolio showcasing expertise in ERPNext, Frappe, and full-stack development.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${jakarta.variable} ${outfit.variable} bg-dark-950 text-dark-50`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
