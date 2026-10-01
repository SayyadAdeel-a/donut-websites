import type { Metadata } from 'next';
import { Anton, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import './donutland.original.css';
import { CartDrawer, WebflowInteractions } from '@donutland/ui';
import { getActiveBrand } from '../config/brands/activeBrand';

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

export function generateMetadata(): Metadata {
  const brand = getActiveBrand();
  if (brand) {
    return {
      title: {
        default: `${brand.name} — ${brand.tagline}`,
        template: `%s | ${brand.name}`,
      },
      description: brand.description,
      openGraph: {
        title: `${brand.name} — ${brand.tagline}`,
        description: brand.description,
        siteName: brand.name,
        images: [
          'https://cdn.prod.website-files.com/6569d73055568668783bf587/65858918f0f368d32f26f656_thumbnail.webp',
        ],
      },
    };
  }
  return {
    title: {
      default: 'Donutland — Confectionery Experience by Sayyad Studio',
      template: '%s | Donutland',
    },
    description:
      'Modern, accessible, and high-performance confectionery platform presented and engineered by Sayyad Studio using Next.js 15, Tailwind CSS, Motion, and Phosphor Icons.',
    openGraph: {
      title: 'Donutland — Confectionery Experience by Sayyad Studio',
      description: 'High-performance confectionery platform engineered by Sayyad Studio.',
      images: [
        'https://cdn.prod.website-files.com/6569d73055568668783bf587/65858918f0f368d32f26f656_thumbnail.webp',
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const brand = getActiveBrand();

  return (
    <html lang="en" className={`${anton.variable} ${plusJakarta.variable}`}>
      <body
        className="antialiased min-h-screen flex flex-col font-sans"
        style={
          brand
            ? ({
                '--brand-primary': brand.theme.primaryColor,
                '--brand-secondary': brand.theme.secondaryColor,
                '--brand-accent': brand.theme.accentColor,
              } as React.CSSProperties)
            : undefined
        }
      >
        {children}
        <CartDrawer />
        <WebflowInteractions />
      </body>
    </html>
  );
}
