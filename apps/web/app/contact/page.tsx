import React from 'react';
import type { Metadata } from 'next';
import { getActiveBrand } from '../../config/brands/activeBrand';
import Contact01Page from '../contact-us/contact-us-01/page';
import Contact02Page from '../contact-us/contact-us-02/page';
import Contact03Page from '../contact-us/contact-us-03/page';
import Contact04Page from '../contact-us/contact-us-04/page';
import Contact05Page from '../contact-us/contact-us-05/page';

export function generateMetadata(): Metadata {
  const brand = getActiveBrand();
  const brandName = brand ? brand.name : 'Donutland';
  return {
    title: `Contact Us — ${brandName}`,
    description: brand
      ? `Get in touch with ${brand.name}. Catering inquiries, custom orders, and location info.`
      : 'Contact Donutland confectionery.',
  };
}

export default function ContactPage() {
  const brand = getActiveBrand();
  const variation = brand?.layoutMapping.contactVariation ?? 1;

  switch (variation) {
    case 1:
      return <Contact01Page />;
    case 2:
      return <Contact02Page />;
    case 3:
      return <Contact03Page />;
    case 4:
      return <Contact04Page />;
    case 5:
      return <Contact05Page />;
    default:
      return <Contact01Page />;
  }
}
