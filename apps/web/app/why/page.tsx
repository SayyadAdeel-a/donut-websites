import React from 'react';
import type { Metadata } from 'next';
import { getActiveBrand } from '../../config/brands/activeBrand';
import Why01Page from '../why-donutland/why-donutland-01/page';
import Why02Page from '../why-donutland/why-donutland-02/page';
import Why03Page from '../why-donutland/why-donutland-03/page';
import Why04Page from '../why-donutland/why-donutland-04/page';
import Why05Page from '../why-donutland/why-donutland-05/page';

export function generateMetadata(): Metadata {
  const brand = getActiveBrand();
  const brandName = brand ? brand.name : 'Donutland';
  return {
    title: `Why Us — ${brandName}`,
    description: brand
      ? `Discover what makes ${brand.name} special: natural ingredients, artisan baking, and unmatched passion.`
      : 'Why choose Donutland.',
  };
}

export default function WhyPage() {
  const brand = getActiveBrand();
  const variation = brand?.layoutMapping.whyVariation ?? 1;

  switch (variation) {
    case 1:
      return <Why01Page />;
    case 2:
      return <Why02Page />;
    case 3:
      return <Why03Page />;
    case 4:
      return <Why04Page />;
    case 5:
      return <Why05Page />;
    default:
      return <Why01Page />;
  }
}
