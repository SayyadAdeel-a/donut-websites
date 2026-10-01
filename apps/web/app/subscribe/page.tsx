import React from 'react';
import type { Metadata } from 'next';
import { getActiveBrand } from '../../config/brands/activeBrand';
import Subscribe01Page from '../subscribe-save/subscribe-save-01/page';
import Subscribe02Page from '../subscribe-save/subscribe-save-02/page';
import Subscribe03Page from '../subscribe-save/subscribe-save-03/page';
import Subscribe04Page from '../subscribe-save/subscribe-save-04/page';
import Subscribe05Page from '../subscribe-save/subscribe-save-05/page';

export function generateMetadata(): Metadata {
  const brand = getActiveBrand();
  const brandName = brand ? brand.name : 'Donutland';
  return {
    title: `Subscribe & Save — ${brandName}`,
    description: brand
      ? `Flexible donut subscriptions from ${brand.name}. Save up to ${(brand.commerce.subscriptionDiscount * 100).toFixed(0)}% on recurring deliveries.`
      : 'Subscribe & save on fresh donuts.',
  };
}

export default function SubscribePage() {
  const brand = getActiveBrand();
  const variation = brand?.layoutMapping.subscribeVariation ?? 1;

  switch (variation) {
    case 1:
      return <Subscribe01Page />;
    case 2:
      return <Subscribe02Page />;
    case 3:
      return <Subscribe03Page />;
    case 4:
      return <Subscribe04Page />;
    case 5:
      return <Subscribe05Page />;
    default:
      return <Subscribe01Page />;
  }
}
