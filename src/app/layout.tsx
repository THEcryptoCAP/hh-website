import type { Metadata } from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Hanshills & Co. | Strategic Advisory & Venture Capital',
    template: '%s | Hanshills & Co.',
  },
  description:
    'Empowering businesses to reach new heights through strategic advisory, venture capital, and innovative studio ventures. Join our exclusive Mountain Cohort.',
  keywords: [
    'venture capital',
    'private equity',
    'business advisory',
    'startup funding',
    'strategic consulting',
    'studio venture',
    'cohort program',
  ],
  authors: [{ name: 'Hanshills & Co.' }],
  creator: 'Hanshills & Co.',
  publisher: 'Hanshills & Co.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Hanshills & Co. | Strategic Advisory & Venture Capital',
    description:
      'Empowering businesses through strategic advisory, venture capital, and innovative studio ventures.',
    siteName: 'Hanshills & Co.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanshills & Co. | Strategic Advisory & Venture Capital',
    description:
      'Empowering businesses through strategic advisory, venture capital, and innovative studio ventures.',
    creator: '@hanshillsco',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfairDisplay.variable} ${manrope.variable} antialiased bg-black text-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        {/* Footer - reduced gap since BottomSectionsWrapper has padding */}
        <Footer />
      </body>
    </html>
  );
}
