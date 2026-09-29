import type { Metadata } from 'next';
import { Anton, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import './donutland.original.css';
import { CartDrawer, WebflowInteractions } from '@donutland/ui';

export const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Donutland — Confectionery Webflow Template Clone & Multi-Brand Platform',
  description:
    'Modern, accessible, and high-performance clone of Donutland Webflow eCommerce template built with Next.js 15, Tailwind CSS v4, Motion, and Phosphor Icons.',
  openGraph: {
    title: 'Donutland — Confectionery Webflow Template Clone',
    description: 'Next.js 15 App Router + Tailwind CSS v4 multi-brand platform.',
    images: [
      'https://cdn.prod.website-files.com/6569d73055568668783bf587/65858918f0f368d32f26f656_thumbnail.webp',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${plusJakarta.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        {children}
        <CartDrawer />
        <WebflowInteractions />
      </body>
    </html>
  );
}
