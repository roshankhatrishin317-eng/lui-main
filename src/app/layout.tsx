import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://lumscharms.com'),
  title: 'The Lums Charms | Modern Nail Artistry & Luxury Nail Salon',
  description: 'Experience luminous nail artistry with custom designs, premium care, and a touch of sparkle. Book your charm session today!',
  keywords: 'nail salon, nail art, manicure, nail charms, luxury nails, nail design',
  openGraph: {
    title: 'The Lums Charms | Modern Nail Artistry',
    description: 'Where every nail tells a story of luminous artistry',
    images: ['/og-image.jpg'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
