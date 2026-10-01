import React from 'react';
import type { Metadata } from 'next';
import { getActiveBrand } from '../../config/brands/activeBrand';
import About01Page from '../about-us/about-us-01/page';
import About02Page from '../about-us/about-us-02/page';
import About03Page from '../about-us/about-us-03/page';
import About04Page from '../about-us/about-us-04/page';
import About05Page from '../about-us/about-us-05/page';

export function generateMetadata(): Metadata {
  const brand = getActiveBrand();
  const brandName = brand ? brand.name : 'Donutland';
  return {
    title: `About Us — ${brandName}`,
    description: brand
      ? `Learn about the story, craftsmanship, and team behind ${brand.name}.`
      : 'About Donutland confectionery.',
  };
}

export default function AboutPage() {
  const brand = getActiveBrand();
  const variation = brand?.layoutMapping.aboutVariation ?? 1;

  switch (variation) {
    case 1:
      return <About01Page />;
    case 2:
      return <About02Page />;
    case 3:
      return <About03Page />;
    case 4:
      return <About04Page />;
    case 5:
      return <About05Page />;
    default:
      return <About01Page />;
  }
}
