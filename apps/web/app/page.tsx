import React from 'react';
import type { Metadata } from 'next';
import { getActiveBrand } from '../config/brands/activeBrand';
import Home01Page from './homepages/home-01/page';
import Home02Page from './homepages/home-02/page';
import Home03Page from './homepages/home-03/page';
import Home04Page from './homepages/home-04/page';
import Home05Page from './homepages/home-05/page';
import MasterIndexPage from './MasterIndexPage';

export function generateMetadata(): Metadata {
  const brand = getActiveBrand();
  if (brand) {
    return {
      title: `${brand.name} — ${brand.tagline}`,
      description: brand.description,
      openGraph: {
        title: `${brand.name} — ${brand.tagline}`,
        description: brand.description,
      },
    };
  }
  return {
    title: 'Donutland — Confectionery Experience by Sayyad Studio',
    description:
      'Modern, accessible, and high-performance confectionery platform presented and engineered by Sayyad Studio using Next.js 15, Tailwind CSS, Motion, and Phosphor Icons.',
  };
}

export default function RootHomePage() {
  const brand = getActiveBrand();

  if (!brand) {
    return <MasterIndexPage />;
  }

  switch (brand.layoutMapping.homeVariation) {
    case 1:
      return <Home01Page />;
    case 2:
      return <Home02Page />;
    case 3:
      return <Home03Page />;
    case 4:
      return <Home04Page />;
    case 5:
      return <Home05Page />;
    default:
      return <Home01Page />;
  }
}
